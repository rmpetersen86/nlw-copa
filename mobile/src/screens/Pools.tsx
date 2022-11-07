import { VStack, Icon, useToast, FlatList } from "native-base"
import { Octicons } from "@expo/vector-icons"
import { useNavigation, useFocusEffect } from "@react-navigation/native"

import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { PoolCard, PoolCardProps } from "../components/PoolCard"

import { api } from "../services/api"
import { useState, useCallback } from "react"
import { Loading } from "../components/Loading"
import { EmptyPoolList } from "../components/EmptyPoolList"

export function Pools() {
  const { navigate } = useNavigation()
  const toast = useToast()

  const [isLoading, setIsLoading] = useState(true)
  const [pools, setPools] = useState<PoolCardProps[]>([])

  async function fetchPools() {
    try {
      setIsLoading(true)
      const response = await api.get("/pools")
      setPools(response.data.pools)
    } catch (error) {
      console.log(error)
      toast.show({
        title: "Não foi possível carregar a liste de bolões",
        placement: "top",
        bgColor: "red.500",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchPools()
    }, [])
  )

  return (
    <VStack flex={1} bg="gray.900">
      <Header title="Mues Bolões" />
      <VStack
        mt={6}
        mx={5}
        borderBottomWidth={1}
        borderBottomColor="gray.600"
        pb={4}
        mb={4}
      >
        <Button
          title="BUSCAR BOLÃO POR CÓDIGO"
          leftIcon={
            <Icon as={Octicons} name="search" color="black" size="md" />
          }
          onPress={() => navigate("find")}
        />
      </VStack>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={pools}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PoolCard
              data={item}
              onPress={() => navigate("details", { id: item.id })}
            />
          )}
          px={5}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ pb: 20 }}
          ListEmptyComponent={() => <EmptyPoolList />}
        />
      )}
    </VStack>
  )
}
