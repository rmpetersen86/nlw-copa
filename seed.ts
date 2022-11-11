import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const gamesScheudle = [
    {
      date: "2022-11-20T16:00:00.201Z",
      firstTeamCountryCode: "QA",
      secondTeamCountryCode: "EQ",
    },
    {
      date: "2022-11-21T13:00:00.201Z",
      firstTeamCountryCode: "GB-ENG",
      secondTeamCountryCode: "IR",
    },
    {
      date: "2022-11-21T13:00:00.201Z",
      firstTeamCountryCode: "SN",
      secondTeamCountryCode: "NL",
    },
    {
      date: "2022-11-21T13:00:00.201Z",
      firstTeamCountryCode: "US",
      secondTeamCountryCode: "GB-WLS",
    },
    {
      date: "2022-11-22T10:00:00.201Z",
      firstTeamCountryCode: "AR",
      secondTeamCountryCode: "SA",
    },
    {
      date: "2022-11-22T13:00:00.201Z",
      firstTeamCountryCode: "DK",
      secondTeamCountryCode: "TN",
    },
    {
      date: "2022-11-22T16:00:00.201Z",
      firstTeamCountryCode: "MX",
      secondTeamCountryCode: "PL",
    },
    {
      date: "2022-11-22T19:00:00.201Z",
      firstTeamCountryCode: "FR",
      secondTeamCountryCode: "AU",
    },
    {
      date: "2022-11-23T10:00:00.201Z",
      firstTeamCountryCode: "MA",
      secondTeamCountryCode: "HR",
    },
    {
      date: "2022-11-23T13:00:00.201Z",
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "JP",
    },
    {
      date: "2022-11-23T16:00:00.201Z",
      firstTeamCountryCode: "ES",
      secondTeamCountryCode: "CR",
    },
    {
      date: "2022-11-23T19:00:00.201Z",
      firstTeamCountryCode: "BE",
      secondTeamCountryCode: "CA",
    },
    {
      date: "2022-11-24T10:00:00.201Z",
      firstTeamCountryCode: "CH",
      secondTeamCountryCode: "CM",
    },
    {
      date: "2022-11-24T13:00:00.201Z",
      firstTeamCountryCode: "UY",
      secondTeamCountryCode: "KR",
    },
    {
      date: "2022-11-24T16:00:00.201Z",
      firstTeamCountryCode: "PT",
      secondTeamCountryCode: "GH",
    },
    {
      date: "2022-11-24T19:00:00.201Z",
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "RS",
    },
    {
      date: "2022-11-25T10:00:00.201Z",
      firstTeamCountryCode: "GB-WLS",
      secondTeamCountryCode: "IR",
    },
    {
      date: "2022-11-25T13:00:00.201Z",
      firstTeamCountryCode: "QA",
      secondTeamCountryCode: "SN",
    },
    {
      date: "2022-11-25T16:00:00.201Z",
      firstTeamCountryCode: "NL",
      secondTeamCountryCode: "EC",
    },
    {
      date: "2022-11-25T19:00:00.201Z",
      firstTeamCountryCode: "GB-ENG",
      secondTeamCountryCode: "US",
    },
    {
      date: "2022-11-26T10:00:00.201Z",
      firstTeamCountryCode: "TN",
      secondTeamCountryCode: "AU",
    },
    {
      date: "2022-11-26T13:00:00.201Z",
      firstTeamCountryCode: "PL",
      secondTeamCountryCode: "SA",
    },
    {
      date: "2022-11-26T16:00:00.201Z",
      firstTeamCountryCode: "FR",
      secondTeamCountryCode: "DK",
    },
    {
      date: "2022-11-26T19:00:00.201Z",
      firstTeamCountryCode: "AR",
      secondTeamCountryCode: "MX",
    },
    {
      date: "2022-11-27T10:00:00.201Z",
      firstTeamCountryCode: "JP",
      secondTeamCountryCode: "CR",
    },
    {
      date: "2022-11-27T13:00:00.201Z",
      firstTeamCountryCode: "BE",
      secondTeamCountryCode: "MA",
    },
    {
      date: "2022-11-27T16:00:00.201Z",
      firstTeamCountryCode: "HR",
      secondTeamCountryCode: "CA",
    },
    {
      date: "2022-11-27T19:00:00.201Z",
      firstTeamCountryCode: "ES",
      secondTeamCountryCode: "DE",
    },
    {
      date: "2022-11-28T10:00:00.201Z",
      firstTeamCountryCode: "CM",
      secondTeamCountryCode: "RS",
    },
    {
      date: "2022-11-28T13:00:00.201Z",
      firstTeamCountryCode: "KR",
      secondTeamCountryCode: "GH",
    },
    {
      date: "2022-11-28T16:00:00.201Z",
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "CH",
    },
    {
      date: "2022-11-28T19:00:00.201Z",
      firstTeamCountryCode: "PT",
      secondTeamCountryCode: "UY",
    },
    {
      date: "2022-11-29T15:00:00.201Z",
      firstTeamCountryCode: "EC",
      secondTeamCountryCode: "SN",
    },
    {
      date: "2022-11-29T15:00:00.201Z",
      firstTeamCountryCode: "NL",
      secondTeamCountryCode: "QA",
    },
    {
      date: "2022-11-29T19:00:00.201Z",
      firstTeamCountryCode: "IR",
      secondTeamCountryCode: "US",
    },
    {
      date: "2022-11-29T19:00:00.201Z",
      firstTeamCountryCode: "GB-WLS",
      secondTeamCountryCode: "GB-ENG",
    },
    {
      date: "2022-11-30T15:00:00.201Z",
      firstTeamCountryCode: "TN",
      secondTeamCountryCode: "FR",
    },
    {
      date: "2022-11-30T15:00:00.201Z",
      firstTeamCountryCode: "AU",
      secondTeamCountryCode: "DK",
    },
    {
      date: "2022-11-30T19:00:00.201Z",
      firstTeamCountryCode: "PL",
      secondTeamCountryCode: "AR",
    },
    {
      date: "2022-11-30T19:00:00.201Z",
      firstTeamCountryCode: "SA",
      secondTeamCountryCode: "MX",
    },
    {
      date: "2022-12-01T15:00:00.201Z",
      firstTeamCountryCode: "HR",
      secondTeamCountryCode: "BE",
    },
    {
      date: "2022-12-01T15:00:00.201Z",
      firstTeamCountryCode: "CA",
      secondTeamCountryCode: "MA",
    },
    {
      date: "2022-12-01T19:00:00.201Z",
      firstTeamCountryCode: "JP",
      secondTeamCountryCode: "ES",
    },
    {
      date: "2022-12-01T19:00:00.201Z",
      firstTeamCountryCode: "CR",
      secondTeamCountryCode: "DE",
    },
    {
      date: "2022-12-01T15:00:00.201Z",
      firstTeamCountryCode: "KR",
      secondTeamCountryCode: "PT",
    },
    {
      date: "2022-12-01T15:00:00.201Z",
      firstTeamCountryCode: "GH",
      secondTeamCountryCode: "UY",
    },
    {
      date: "2022-12-01T19:00:00.201Z",
      firstTeamCountryCode: "RS",
      secondTeamCountryCode: "CH",
    },
    {
      date: "2022-12-01T19:00:00.201Z",
      firstTeamCountryCode: "CM",
      secondTeamCountryCode: "BR",
    },
  ]

  for (let data of gamesScheudle) {
    await prisma.game.create({
      data,
    })
  }
}
main()
