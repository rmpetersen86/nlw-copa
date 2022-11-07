import { Heading, useToast, VStack } from "native-base"
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useState } from "react"
import { api } from "../services/api"
import { useNavigation } from "@react-navigation/native"

export function Find() {
  const [isLoading, setIsLoading] = useState(false)
  const [code, setCode] = useState("")

  const { navigate } = useNavigation()

  const toast = useToast()
  async function handleJoinPool() {
    try {
      setIsLoading(true)

      if (!code.trim()) {
        return toast.show({
          title: "Informe o código",
          placement: "top",
          bgColor: "red.500",
        })
      }

      await api.post("/pools/join", { code })

      toast.show({
        title: "Você entrou no Bolão com sucesso",
        placement: "top",
        bgColor: "green.500",
      })
      navigate("pools")
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      if (error.response?.data?.message === "Bolão não encontrado!") {
        return toast.show({
          title: "Não foi possível encontrar o Bolão",
          placement: "top",
          bgColor: "red.500",
        })
      }

      if (
        error.response?.data?.message ===
        "Você já está participando deste Bolão!"
      ) {
        return toast.show({
          title: error.response.data.message,
          placement: "top",
          bgColor: "red.500",
        })
      }

      toast.show({
        title: "Não foi possível encontrar o Bolão",
        placement: "top",
        bgColor: "red.500",
      })
    }
  }
  return (
    <VStack flex={1} bg="gray.900">
      <Header title="Buscar por código" showBackButton />
      <VStack mt={8} mx={5} alignItems="center">
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          textAlign="center"
          mb={8}
        >
          Encontre um bolão através de{"\n"} seu código único
        </Heading>
        <Input
          mb={2}
          placeholder="Qual o código do seu bolão"
          onChangeText={setCode}
          autoCapitalize="characters"
        />
        <Button
          title="BUSCAR BOLÃO"
          isLoading={isLoading}
          onPress={handleJoinPool}
        />
      </VStack>
    </VStack>
  )
}
