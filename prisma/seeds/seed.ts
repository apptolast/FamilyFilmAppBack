import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
  const user1 = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      email: "admin@apptolast.com",
      firebase_uuid: "zOJ2LnE9qhdya5qOtqYAhe9fJch1",
    },
  });
  const user2 = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      email: "user2@test.com",
      firebase_uuid: "Pass1234",
    },
  });
  const user3 = await prisma.user.upsert({
    where: { id: 3 },
    update: {},
    create: {
      email: "user3@test.com",
      firebase_uuid: "Pass1234",
    },
  });
  const user4 = await prisma.user.upsert({
    where: { id: 4 },
    update: {},
    create: {
      email: "user4@test.com",
      firebase_uuid: "pNMuAahjtSSNKq3p1mefrT3hUpC2",
    },
  });
  const user5 = await prisma.user.upsert({
    where: { id: 5 },
    update: {},
    create: {
      email: "user5@test.com",
      firebase_uuid: "Pass1234",
    },
  });

  const genre1 = await prisma.genre.upsert({
    where: { id: 35 },
    update: {},
    create: { id: 35, name: "Comedy" },
  });
  const genre2 = await prisma.genre.upsert({
    where: { id: 80 },
    update: {},
    create: { id: 80, name: "Crime" },
  });
  const genre3 = await prisma.genre.upsert({
    where: { id: 27 },
    update: {},
    create: { id: 27, name: "Horror" },
  });
  const genre4 = await prisma.genre.upsert({
    where: { id: 10751 },
    update: {},
    create: { id: 10751, name: "Family" },
  });
  const genre5 = await prisma.genre.upsert({
    where: { id: 99 },
    update: {},
    create: { id: 99, name: "Documentary" },
  });
  const genre6 = await prisma.genre.upsert({
    where: { id: 10770 },
    update: {},
    create: { id: 10770, name: "TV Movie" },
  });
  const genre7 = await prisma.genre.upsert({
    where: { id: 878 },
    update: {},
    create: { id: 878, name: "Science Fiction" },
  });
  const genre8 = await prisma.genre.upsert({
    where: { id: 10752 },
    update: {},
    create: { id: 10752, name: "War" },
  });
  const genre9 = await prisma.genre.upsert({
    where: { id: 18 },
    update: {},
    create: { id: 18, name: "Drama" },
  });
  const genre10 = await prisma.genre.upsert({
    where: { id: 9648 },
    update: {},
    create: { id: 9648, name: "Mystery" },
  });
  const genre12 = await prisma.genre.upsert({
    where: { id: 53 },
    update: {},
    create: { id: 53, name: "Thriller" },
  });
  const genre13 = await prisma.genre.upsert({
    where: { id: 12 },
    update: {},
    create: { id: 12, name: "Adventure" },
  });
  const genre14 = await prisma.genre.upsert({
    where: { id: 28 },
    update: {},
    create: { id: 28, name: "Action" },
  });
  const genre15 = await prisma.genre.upsert({
    where: { id: 16 },
    update: {},
    create: { id: 16, name: "Animation" },
  });

  const movie1 = await prisma.movie.upsert({
    where: { id: 337404 },
    update: {},
    create: {
      adult: false,
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
        ],
      },
      id: 337404,
      language: "en",
      synopsis:
        "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella\u2019s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
      image: "https://image.tmdb.org/t/p/original/hjS9mH8KvRiGHgjk6VUZH7OT0Ng.jpg",
      release_date: "2021-05-26",
      title: "Cruella",
      vote_average: 8.8,
      vote_count: 1474,
    },
  });
  const movie2 = await prisma.movie.upsert({
    where: { id: 632357 },
    update: {},
    create: {
      adult: false,
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 27,
              },
            },
          },
        ],
      },
      id: 632357,
      language: "en",
      synopsis:
        "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.",

      image: "https://image.tmdb.org/t/p/original/6wxfWZxQcuv2QgxIQKj0eYTdKTv.jpg",
      release_date: "2021-03-31",
      title: "The Unholy",
      vote_average: 7.1,
      vote_count: 745,
    },
  });
  const movie3 = await prisma.movie.upsert({
    where: { id: 503736 },
    update: {},
    create: {
      adult: false,
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 27,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 53,
              },
            },
          },
        ],
      },
      id: 503736,
      language: "en",
      synopsis:
        "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.",
      image: "https://image.tmdb.org/t/p/original/z8CExJekGrEThbpMXAmCFvvgoJR.jpg",
      release_date: "2021-05-14",
      title: "Army of the Dead",
      vote_average: 6.6,
      vote_count: 1270,
    },
  });
  const movie4 = await prisma.movie.upsert({
    where: { id: 637649 },
    update: {},
    create: {
      id: 637649,
      adult: false,
      title: "Wrath of Man",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 80,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
      image: "https://image.tmdb.org/t/p/original/YxopfHpsCV1oF8CZaL4M3Eodqa.jpg",
      release_date: "2021-04-22",
      vote_average: 8.0,
      vote_count: 587,
    },
  });
  const movie5 = await prisma.movie.upsert({
    where: { id: 460465 },
    update: {},
    create: {
      id: 460465 ,
      adult: false,
      title: "Mortal Kombat",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 12,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
      image: "https://image.tmdb.org/t/p/original/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
      release_date: "2021-04-07",
      vote_average: 7.6,
      vote_count: 2827,
    },
  });
  const movie6 = await prisma.movie.upsert({
    where: { id: 823855 },
    update: {},
    create: {
      id: 823855,
      adult: false,
      title: "I Am All Girls",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 18,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 80,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 9648,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        "A special crimes investigator forms an unlikely bond with a serial killer to bring down a global child sex trafficking syndicate.",
      image: "https://image.tmdb.org/t/p/original/m6bUeV4mczG3z2YXXr5XDKPsQzv.jpg",
      release_date: "2021-05-14",
      vote_average: 7.0,
      vote_count: 89,
    },
  });
  const movie7 = await prisma.movie.upsert({
    where: { id: 567189 },
    update: {},
    create: {
      id: 567189,
      adult: false,
      title: "Tom Clancy's Without Remorse",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 80,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 10752,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        "An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.",
      image: "https://image.tmdb.org/t/p/original/rEm96ib0sPiZBADNKBHKBv5bve9.jpg",
      release_date: "2021-04-29",
      vote_average: 7.2,
      vote_count: 1083,
    },
  });
  const movie8 = await prisma.movie.upsert({
    where: { id: 399566 },
    update: {},
    create: {
      id: 399566,
      adult: false,
      title: "Godzilla vs. Kong",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 878,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 53,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        "In a time when monsters walk the Earth, humanity's fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      image: "https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
      release_date: "2021-03-24",
      vote_average: 8.1,
      vote_count: 5794,
    },
  });
  const movie9 = await prisma.movie.upsert({
    where: { id: 578701 },
    update: {},
    create: {
      id: 578701,
      adult: false,
      title: "Those Who Wish Me Dead",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 18,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 53,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        "A young boy finds himself pursued by two assassins in the Montana wilderness with a survival expert determined to protect him - and a forest fire threatening to consume them all.",
      image: "https://image.tmdb.org/t/p/original/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg",
      release_date: "2021-05-05",
      vote_average: 7.0,
      vote_count: 364,
    },
  });
  const movie10 = await prisma.movie.upsert({
    where: { id: 808023 },
    update: {},
    create: {
      id: 808023,
      adult: false,
      title: "The Virtuoso",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 80,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 12,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        "A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he's been given is a time and location where to find his quarry. No name. No description. Nothing.",
      image: "https://image.tmdb.org/t/p/original/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg",
      release_date: "2021-04-30",
      vote_average: 6.2,
      vote_count: 101,
    },
  });
  const movie11 = await prisma.movie.upsert({
    where: { id: 615457 },
    update: {},
    create: {
      id: 615457,
      adult: false,
      title: "Nobody",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 80,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 53,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 35,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',
      image: "https://image.tmdb.org/t/p/original/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
      release_date: "2021-03-26",
      vote_average: 8.5,
      vote_count: 1796,
    },
  });
  const movie12 = await prisma.movie.upsert({
    where: { id: 691179 },
    update: {},
    create: {
      id: 691179,
      adult: false,
      title: "Friends: The Reunion",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 35,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 99,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 10770,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        "The cast of Friends reunites for a once-in-a-lifetime celebration of the hit series, an unforgettable evening filled with iconic memories, uncontrollable laughter, happy tears, and special guests.",
      image: "https://image.tmdb.org/t/p/original/bT3c4TSOP8vBmMoXZRDPTII6eDa.jpg",
      release_date: "2021-05-27",
      vote_average: 8.5,
      vote_count: 289,
    },
  });
  const movie13 = await prisma.movie.upsert({
    where: { id: 804435 },
    update: {},
    create: {
      id: 804435,
      adult: false,
      title: "Vanquish",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 80,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 53,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        "Victoria is a young mother trying to put her dark past as a Russian drug courier behind her, but retired cop Damon forces Victoria to do his bidding by holding her daughter hostage. Now, Victoria must use guns, guts, and a motorcycle to take out a series of violent gangsters—or she may never see her child again.",
      image: "https://image.tmdb.org/t/p/original/AoWY1gkcNzabh229Icboa1Ff0BM.jpg",
      release_date: "2021-04-16",
      vote_average: 6.0,
      vote_count: 112,
    },
  });
  const movie14 = await prisma.movie.upsert({
    where: { id: 717192 },
    update: {},
    create: {
      id: 717192,
      adult: false,
      title: "Ferry",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 18,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 80,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
        ],
      },
      language: "nl",
      synopsis:
        "Before he built a drug empire, Ferry Bouman returns to his hometown on a revenge mission that finds his loyalty tested — and a love that alters his life.",
      image: "https://image.tmdb.org/t/p/original/w6n1pu9thpCVHILejsuhKf3tNCV.jpg",
      release_date: "2021-05-14",
      vote_average: 7.1,
      vote_count: 74,
    },
  });
  const movie15 = await prisma.movie.upsert({
    where: { id: 635302 },
    update: {},
    create: {
      id: 635302,
      adult: false,
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 16,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 12,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 18,
              },
            },
          },
        ],
      },
      language: "ja",
      synopsis:
        "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
      image: "https://image.tmdb.org/t/p/original/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
      release_date: "2020-10-16",
      vote_average: 8.4,
      vote_count: 1109,
    },
  });
  const movie16 = await prisma.movie.upsert({
    where: { id: 520763 },
    update: {},
    create: {
      id: 520763,
      adult: false,
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 18,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 878,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 53,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
      image: "https://image.tmdb.org/t/p/original/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
      release_date: "2021-05-21",
      title: "A Quiet Place Part II",
      vote_average: 7.4,
      vote_count: 113,
    },
  });
  const movie17 = await prisma.movie.upsert({
    where: { id: 813258 },
    update: {},
    create: {
      id: 813258,
      adult: false,
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 16,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 35,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        "Drac tries out some new monster pets to help occupy Tinkles for playtime.",
      image: "https://image.tmdb.org/t/p/original/dkokENeY5Ka30BFgWAqk14mbnGs.jpg",
      release_date: "2021-04-02",
      title: "Monster Pets: A Hotel Transylvania Short",
      vote_average: 7.6,
      vote_count: 148,
    },
  });
  const movie18 = await prisma.movie.upsert({
    where: { id: 726684 },
    update: {},
    create: {
      id: 726684,
      adult: false,
      title: "Miraculous World: Shanghai – The Legend of Ladydragon",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 16,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 35,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 12,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 10751,
              },
            },
          },
        ],
      },
      language: "fr",
      synopsis:
        "On school break, Marinette heads to Shanghai to meet Adrien. But after arriving, Marinette loses all her stuff, including the Miraculous that allows her to turn into Ladybug!",
      image: "https://image.tmdb.org/t/p/original/msI5a9TPnepx47JUb2vl88hb80R.jpg",
      release_date: "2021-04-04",
      vote_average: 7.8,
      vote_count: 371,
    },
  });
  const movie19 = await prisma.movie.upsert({
    where: { id: 527774 },
    update: {},
    create: {
      id: 527774,
      adult: false,
      title: "Raya and the Last Dragon",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 16,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 12,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 10751,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
        ],
      },
      language: "en",
      synopsis:
        "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
      image: "https://image.tmdb.org/t/p/original/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
      release_date: "2021-03-03",
      vote_average: 8.2,
      vote_count: 2992,
    },
  });
  const movie20 = await prisma.movie.upsert({
    where: { id: 586047 },
    update: {},
    create: {
      id: 586047,
      adult: false,
      title: "Seobok",
      genres: {
        create: [
          {
            genre: {
              connect: {
                id: 878,
              },
            },
          },
          {
            genre: {
              connect: {
                id: 28,
              },
            },
          },
        ],
      },
      language: "ko",
      synopsis:
        "A former intelligence agent gets involved with the first human clone, Seo Bok, who others seek, causing trouble.",
      image: "https://image.tmdb.org/t/p/original/nxxuWC32Y6TULj4VnVwMPUFLIpK.jpg",
      release_date: "2021-04-12",
      vote_average: 7.7,
      vote_count: 53,
    },
  });

  const group1 = await prisma.group.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      name: "Familia",
      user_id: 1,
      users: {
        create: [
          {
            user: {
              connect: {
                id: 1,
              },
            },
          },
          {
            user: {
              connect: {
                id: 2,
              },
            },
          },
          {
            user: {
              connect: {
                id: 3,
              },
            },
          },
        ],
      },
      watchList: {
        create: [
          {
            movie: {
              connect: {
                id: 586047,
              },
            },
          },
        ],
      },
      viewList: {
        create: [
          {
            movie: {
              connect: {
                id: 726684,
              },
            },
          },
          {
            movie: {
              connect: {
                id: 527774,
              },
            },
          },
          {
            movie: {
              connect: {
                id: 813258,
              },
            },
          },
        ],
      },
    },
  });
  const group2 = await prisma.group.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      name: "Amigos",
      user_id: 3,
      users: {
        create: [
          {
            user: {
              connect: {
                id: 3,
              },
            },
          },
          {
            user: {
              connect: {
                id: 4,
              },
            },
          },
          {
            user: {
              connect: {
                id: 5,
              },
            },
          },
        ],
      },
      watchList: {
        create: [
          {
            movie: {
              connect: {
                id: 637649,
              },
            },
          },
          {
            movie: {
              connect: {
                id: 460465,
              },
            },
          },
        ],
      },
      viewList: {
        create: [
          {
            movie: {
              connect: {
                id: 823855,
              },
            },
          },
          {
            movie: {
              connect: {
                id: 567189,
              },
            },
          },
        ],
      },
    },
  });
  const group3 = await prisma.group.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      name: "Novia",
      user_id: 2,
      users: {
        create: [
          {
            user: {
              connect: {
                id: 2,
              },
            },
          },
          {
            user: {
              connect: {
                id: 3,
              },
            },
          },
        ],
      },
    },
  });
  const group4 = await prisma.group.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      name: "Solitario",
      user_id: 2,
      users: {
        create: [
          {
            user: {
              connect: {
                id: 2,
              },
            },
          },
        ],
      },
      watchList: {
        create: [
          {
            movie: {
              connect: {
                id: 399566,
              },
            },
          },
          {
            movie: {
              connect: {
                id: 578701,
              },
            },
          },
          {
            movie: {
              connect: {
                id: 808023,
              },
            },
          },
          {
            movie: {
              connect: {
                id: 615457,
              },
            },
          },
        ],
      },
      viewList: {
        create: [
          {
            movie: {
              connect: {
                id: 691179,
              },
            },
          },
        ],
      },
    },
  });
  const group5 = await prisma.group.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      name: "Worker Dudes",
      user_id: 1,
      users: {
        create: [
          {
            user: {
              connect: {
                id: 1,
              },
            },
          },
          {
            user: {
              connect: {
                id: 2,
              },
            },
          },
          {
            user: {
              connect: {
                id: 3,
              },
            },
          },
          {
            user: {
              connect: {
                id: 4,
              },
            },
          },
          {
            user: {
              connect: {
                id: 5,
              },
            },
          },
        ],
      },
      watchList: {
        create: [
          {
            movie: {
              connect: {
                id: 804435,
              },
            },
          },
        ],
      },
      viewList: {
        create: [
          {
            movie: {
              connect: {
                id: 717192,
              },
            },
          },
          {
            movie: {
              connect: {
                id: 635302,
              },
            },
          },
          {
            movie: {
              connect: {
                id: 520763,
              },
            },
          },
        ],
      },
    },
  });
}

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
