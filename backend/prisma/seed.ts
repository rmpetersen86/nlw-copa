import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

/* {
    date: "2022-11-20T16:00:00.201Z",
    firstTeamCountryCode: "QA",
    secondTeamCountryCode: "EQ",
  },
  {
    date: "2022-11-21T13:00:00.201Z",
    firstTeamCountryCode: "GB-ENG",
    secondTeamCountryCode: "IR",
  }, */

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
  ]

  for (let data of gamesScheudle) {
    await prisma.game.create({
      data,
    })
  }
}
main()
