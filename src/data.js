export function filterItems(items, query) {
    query = query.toLowerCase();
    return items.filter(item =>
      item.title.split(' ').some(word =>
        word.toLowerCase().startsWith(query)
      )
    );
  }

export const data = [
    {
        "id": 27751869,
        "instance_id": 1670825197,
        "date_added": "2024-04-30T18:17:19-07:00",
        "rating": 0,
        "basic_information": {
            "id": 27751869,
            "master_id": 2645447,
            "master_url": "https://api.discogs.com/masters/2645447",
            "resource_url": "https://api.discogs.com/releases/27751869",
            "thumb": "https://i.discogs.com/6y402HQvTrqxN2AqwGi-cI2oyQhKN-cHFPp92j_mzHI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NzUx/ODY5LTE2OTAwNDgw/MzEtNzYxMS5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/O96JN1i_eAhHo-6ngEPrISZlB5RDdJ1t040vrGRvwCM/rs:fit/g:sm/q:90/h:603/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NzUx/ODY5LTE2OTAwNDgw/MzEtNzYxMS5qcGVn.jpeg",
            "title": "Radio Active",
            "year": 2022,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "Translucent Neon Pink",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Limited Edition"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Bodysync",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 9783394,
                    "resource_url": "https://api.discogs.com/artists/9783394"
                }
            ],
            "labels": [
                {
                    "name": "Not On Label (Bodysync Self-released)",
                    "catno": "SHH66",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 2343145,
                    "resource_url": "https://api.discogs.com/labels/2343145"
                }
            ],
            "genres": [
                "Electronic",
                "Pop"
            ],
            "styles": [
                "Dance-pop",
                "House"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 25412044,
        "instance_id": 1670824948,
        "date_added": "2024-04-30T18:16:49-07:00",
        "rating": 0,
        "basic_information": {
            "id": 25412044,
            "master_id": 3081914,
            "master_url": "https://api.discogs.com/masters/3081914",
            "resource_url": "https://api.discogs.com/releases/25412044",
            "thumb": "https://i.discogs.com/-o80VVJn3xPYBdzCZyNE6Bf2lyzPsLneSJbhgO69eJE/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NDEy/MDQ0LTE2ODU2Mzkx/NzYtNjU1Ny5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/ajU8X_O4Q6yulnZQTao99daQlhEM_7cSQYyVtKegIDo/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NDEy/MDQ0LTE2ODU2Mzkx/NzYtNjU1Ny5qcGVn.jpeg",
            "title": "Schvitz",
            "year": 2023,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "LP",
                        "Album"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Vulfpeck",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 3852273,
                    "resource_url": "https://api.discogs.com/artists/3852273"
                }
            ],
            "labels": [
                {
                    "name": "Vulf Records",
                    "catno": "VULF2022PECKUS",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 696987,
                    "resource_url": "https://api.discogs.com/labels/696987"
                }
            ],
            "genres": [
                "Funk / Soul"
            ],
            "styles": [
                "Funk"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 8753882,
        "instance_id": 1670824699,
        "date_added": "2024-04-30T18:16:18-07:00",
        "rating": 0,
        "basic_information": {
            "id": 8753882,
            "master_id": 1025292,
            "master_url": "https://api.discogs.com/masters/1025292",
            "resource_url": "https://api.discogs.com/releases/8753882",
            "thumb": "https://i.discogs.com/-bvKLEjj8Im5cOuKwySunydgPPgr7f9MpVzsF9PusTA/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3NTM4/ODItMTQ2ODQzNTc3/NS02NTIzLmpwZWc.jpeg",
            "cover_image": "https://i.discogs.com/2sWTE_OgsELwtJbd5NsCqi6hzDy5DMV42FxelxY_d8w/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3NTM4/ODItMTQ2ODQzNTc3/NS02NTIzLmpwZWc.jpeg",
            "title": "IV",
            "year": 2016,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "2",
                    "text": "Magenta Transparent",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Club Edition"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "BadBadNotGood",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 2468526,
                    "resource_url": "https://api.discogs.com/artists/2468526"
                }
            ],
            "labels": [
                {
                    "name": "Innovative Leisure Records",
                    "catno": "IL 2034",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 168625,
                    "resource_url": "https://api.discogs.com/labels/168625"
                }
            ],
            "genres": [
                "Electronic",
                "Jazz"
            ],
            "styles": [
                "Downtempo"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 9488876,
        "instance_id": 1670824042,
        "date_added": "2024-04-30T18:14:54-07:00",
        "rating": 0,
        "basic_information": {
            "id": 9488876,
            "master_id": 2514022,
            "master_url": "https://api.discogs.com/masters/2514022",
            "resource_url": "https://api.discogs.com/releases/9488876",
            "thumb": "https://i.discogs.com/VtFHtE1xIvu95FNC4blc51QrSJ9hp-Bzc-XyHvdEaUk/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk0ODg4/NzYtMTQ4MTQ1OTQ0/NS00OTAwLmpwZWc.jpeg",
            "cover_image": "https://i.discogs.com/bNWdYzoWvlQX4y-BnCRs-ndfdio3T_mk_of94pAHx7o/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk0ODg4/NzYtMTQ4MTQ1OTQ0/NS00OTAwLmpwZWc.jpeg",
            "title": "Casa De Trova - Cuba 50's ",
            "year": 2014,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "2",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Alejandro Enis Almenares",
                    "anv": "Alejandro Almenares",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 4057344,
                    "resource_url": "https://api.discogs.com/artists/4057344"
                }
            ],
            "labels": [
                {
                    "name": "Tumi Music",
                    "catno": "PPAN TUMI 228",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 14686,
                    "resource_url": "https://api.discogs.com/labels/14686"
                }
            ],
            "genres": [
                "Latin"
            ],
            "styles": [
                "Cubano",
                "Son"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 23335238,
        "instance_id": 1670823589,
        "date_added": "2024-04-30T18:13:54-07:00",
        "rating": 0,
        "basic_information": {
            "id": 23335238,
            "master_id": 146083,
            "master_url": "https://api.discogs.com/masters/146083",
            "resource_url": "https://api.discogs.com/releases/23335238",
            "thumb": "https://i.discogs.com/EXYHnj-c-FY7mPGtuQnz4LRUpkKTZ0ItSooZdpp4ksY/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMzM1/MjM4LTE2NTMzNzEw/NTUtOTA2MS5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/Ek0IrEQk4Ebs6YiIDjdZ6VaYvWUwuY0YgfD1clE9Oi0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMzM1/MjM4LTE2NTMzNzEw/NTUtOTA2MS5qcGVn.jpeg",
            "title": "Live By Yo Rep (B.O.N.E. Dis)",
            "year": 2022,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "Yellow Translucent Lemonade",
                    "descriptions": [
                        "12\"",
                        "EP",
                        "Limited Edition",
                        "Reissue",
                        "Special Edition"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Three 6 Mafia",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 178698,
                    "resource_url": "https://api.discogs.com/artists/178698"
                }
            ],
            "labels": [
                {
                    "name": "Prophet Entertainment",
                    "catno": "PEC-4402",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 27943,
                    "resource_url": "https://api.discogs.com/labels/27943"
                }
            ],
            "genres": [
                "Hip Hop"
            ],
            "styles": [
                "Gangsta",
                "Screw",
                "Thug Rap"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 2386283,
        "instance_id": 1670823409,
        "date_added": "2024-04-30T18:13:34-07:00",
        "rating": 0,
        "basic_information": {
            "id": 2386283,
            "master_id": 269330,
            "master_url": "https://api.discogs.com/masters/269330",
            "resource_url": "https://api.discogs.com/releases/2386283",
            "thumb": "https://i.discogs.com/4axzBG3TQaL6f0Cq3i5-61_o8JSmFJH5YOJNsNsLWn8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzODYy/ODMtMTI4MTAwODk3/My5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/UpRmdsYoRxA-OyXKBCC85aUKScH2DA4b2UCdhANLRw4/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzODYy/ODMtMTI4MTAwODk3/My5qcGVn.jpeg",
            "title": "King Of The Beach",
            "year": 2010,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "LP",
                        "Album"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Wavves",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 1242652,
                    "resource_url": "https://api.discogs.com/artists/1242652"
                }
            ],
            "labels": [
                {
                    "name": "Fat Possum Records",
                    "catno": "FP1224-1",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 33995,
                    "resource_url": "https://api.discogs.com/labels/33995"
                }
            ],
            "genres": [
                "Rock",
                "Pop"
            ],
            "styles": [
                "Surf",
                "Psychedelic Rock",
                "Lo-Fi",
                "Punk"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 18803545,
        "instance_id": 1670823175,
        "date_added": "2024-04-30T18:13:00-07:00",
        "rating": 0,
        "basic_information": {
            "id": 18803545,
            "master_id": 518127,
            "master_url": "https://api.discogs.com/masters/518127",
            "resource_url": "https://api.discogs.com/releases/18803545",
            "thumb": "https://i.discogs.com/jLAYTH5uamc8o32zh1hS2qJikACbC-gdk0p2yGDlYDA/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODAz/NTQ1LTE2MjE5MDIy/OTAtMzgzMC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/C1JSzdwJGwz1xbFnE_e1HA5w1lUylTjswmEDt1-l9i0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODAz/NTQ1LTE2MjE5MDIy/OTAtMzgzMC5qcGVn.jpeg",
            "title": "m b v",
            "year": 2021,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Reissue",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "My Bloody Valentine",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 6516,
                    "resource_url": "https://api.discogs.com/artists/6516"
                }
            ],
            "labels": [
                {
                    "name": "Domino",
                    "catno": "REWIGLP160",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 26465,
                    "resource_url": "https://api.discogs.com/labels/26465"
                },
                {
                    "name": "MBV Records",
                    "catno": "REWIGLP160",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 511887,
                    "resource_url": "https://api.discogs.com/labels/511887"
                }
            ],
            "genres": [
                "Rock"
            ],
            "styles": [
                "Shoegaze",
                "Indie Rock"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 20663182,
        "instance_id": 1670822434,
        "date_added": "2024-04-30T18:11:15-07:00",
        "rating": 0,
        "basic_information": {
            "id": 20663182,
            "master_id": 1406567,
            "master_url": "https://api.discogs.com/masters/1406567",
            "resource_url": "https://api.discogs.com/releases/20663182",
            "thumb": "https://i.discogs.com/OYO44bx8NEtbVaulF06Jt8_OKS9-tcv_LfmzGGgKABQ/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNjYz/MTgyLTE2NTYwOTM3/OTctMzcxMi5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/SSgWsB_BorY4rir5b8O-E_BpSXU819Hmx5V-0q60QI4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNjYz/MTgyLTE2NTYwOTM3/OTctMzcxMi5qcGVn.jpeg",
            "title": "Be The Cowboy",
            "year": 2021,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Repress"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Mitski",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 4110740,
                    "resource_url": "https://api.discogs.com/artists/4110740"
                }
            ],
            "labels": [
                {
                    "name": "Dead Oceans",
                    "catno": "DOC150",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 94740,
                    "resource_url": "https://api.discogs.com/labels/94740"
                }
            ],
            "genres": [
                "Rock"
            ],
            "styles": [
                "Indie Rock"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 21268210,
        "instance_id": 1670822203,
        "date_added": "2024-04-30T18:10:41-07:00",
        "rating": 0,
        "basic_information": {
            "id": 21268210,
            "master_id": 484590,
            "master_url": "https://api.discogs.com/masters/484590",
            "resource_url": "https://api.discogs.com/releases/21268210",
            "thumb": "https://i.discogs.com/pZEk1hP0n0wnh2RvQeQ96x9zi_j0Vt5EgWzEcNR2bDI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMjY4/MjEwLTE2NjA2MTI4/ODUtMjE0Mi5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/y0JPb33QLWvdsvl-TxlohiOKCyOSTxh18kpEkZ-uVSk/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMjY4/MjEwLTE2NjA2MTI4/ODUtMjE0Mi5qcGVn.jpeg",
            "title": "Good Kid, M.A.A.d City",
            "year": 2020,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "2",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Deluxe Edition",
                        "Reissue"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Kendrick Lamar",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 1778977,
                    "resource_url": "https://api.discogs.com/artists/1778977"
                }
            ],
            "labels": [
                {
                    "name": "Interscope Records",
                    "catno": "B0017695-01",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 2311,
                    "resource_url": "https://api.discogs.com/labels/2311"
                },
                {
                    "name": "Aftermath Entertainment",
                    "catno": "B0017695-01",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 2310,
                    "resource_url": "https://api.discogs.com/labels/2310"
                },
                {
                    "name": "Top Dawg Entertainment",
                    "catno": "B0017695-01",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 255292,
                    "resource_url": "https://api.discogs.com/labels/255292"
                }
            ],
            "genres": [
                "Hip Hop"
            ],
            "styles": [
                "Conscious"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 20924029,
        "instance_id": 1670821258,
        "date_added": "2024-04-30T18:08:39-07:00",
        "rating": 5,
        "basic_information": {
            "id": 20924029,
            "master_id": 69774,
            "master_url": "https://api.discogs.com/masters/69774",
            "resource_url": "https://api.discogs.com/releases/20924029",
            "thumb": "https://i.discogs.com/KzJstMnymPGlBq_TeS4rR-xPRShOIOGPRFQ2UawN7Ik/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwOTI0/MDI5LTE2MzY1NTYy/OTUtNzExMC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/Worm0-xhb6kMYj49OhJ6uMqtHIFbEWY2SuDO-O3yVak/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwOTI0/MDI5LTE2MzY1NTYy/OTUtNzExMC5qcGVn.jpeg",
            "title": "Favourite Worst Nightmare",
            "year": 0,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Reissue"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Arctic Monkeys",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 391170,
                    "resource_url": "https://api.discogs.com/artists/391170"
                }
            ],
            "labels": [
                {
                    "name": "Domino",
                    "catno": "093624945796",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 26465,
                    "resource_url": "https://api.discogs.com/labels/26465"
                }
            ],
            "genres": [
                "Rock"
            ],
            "styles": [
                "Alternative Rock",
                "Indie Rock"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 1608374,
        "instance_id": 1479640129,
        "date_added": "2023-10-10T08:20:33-07:00",
        "rating": 0,
        "basic_information": {
            "id": 1608374,
            "master_id": 76085,
            "master_url": "https://api.discogs.com/masters/76085",
            "resource_url": "https://api.discogs.com/releases/1608374",
            "thumb": "https://i.discogs.com/xb0xT597wjD6bIDZAEpXvNgpqcduRRFsupv9y4gctSE/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MDgz/NzQtMTYxNzU0MzYw/Ni0xMzc2LmpwZWc.jpeg",
            "cover_image": "https://i.discogs.com/CunJG3-EoDJazeOKVhoL_UN42xk0H8_QE1-YkgK90RA/rs:fit/g:sm/q:90/h:591/w:591/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MDgz/NzQtMTYxNzU0MzYw/Ni0xMzc2LmpwZWc.jpeg",
            "title": "Mambo No. 5 (A Little Bit Of...)",
            "year": 1999,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "Black labels",
                    "descriptions": [
                        "12\"",
                        "33 ⅓ RPM",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Lou Bega",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 105403,
                    "resource_url": "https://api.discogs.com/artists/105403"
                }
            ],
            "labels": [
                {
                    "name": "RCA",
                    "catno": "RDAB-65842-1",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 895,
                    "resource_url": "https://api.discogs.com/labels/895"
                }
            ],
            "genres": [
                "Electronic",
                "Jazz"
            ],
            "styles": [
                "Afro-Cuban Jazz",
                "Latin",
                "House"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 14658259,
        "instance_id": 1479308095,
        "date_added": "2023-10-09T18:57:31-07:00",
        "rating": 0,
        "basic_information": {
            "id": 14658259,
            "master_id": 34205,
            "master_url": "https://api.discogs.com/masters/34205",
            "resource_url": "https://api.discogs.com/releases/14658259",
            "thumb": "https://i.discogs.com/vvmx-Bfo5Lq3lveGGTRM-ifGizfQDx1_qfaYuLBWr34/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NjU4/MjU5LTE1ODY0NjI3/NTUtNzE1MS5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/tMMpY8BuAu26Jo86U4-dOfQnfNYYZcR6T4HYaI7cD8E/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NjU4/MjU5LTE1ODY0NjI3/NTUtNzE1MS5qcGVn.jpeg",
            "title": "Confessions On A Dance Floor",
            "year": 2019,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "2",
                    "text": "Pink, Gatefold",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Limited Edition",
                        "Reissue"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Madonna",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 8760,
                    "resource_url": "https://api.discogs.com/artists/8760"
                }
            ],
            "labels": [
                {
                    "name": "Warner Records",
                    "catno": "9362-49460-1",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 134882,
                    "resource_url": "https://api.discogs.com/labels/134882"
                }
            ],
            "genres": [
                "Electronic",
                "Pop"
            ],
            "styles": [
                "Euro House",
                "Dance-pop",
                "Disco"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 1952447,
        "instance_id": 1479307951,
        "date_added": "2023-10-09T18:57:07-07:00",
        "rating": 0,
        "basic_information": {
            "id": 1952447,
            "master_id": 1178788,
            "master_url": "https://api.discogs.com/masters/1178788",
            "resource_url": "https://api.discogs.com/releases/1952447",
            "thumb": "https://i.discogs.com/HP4ZYJZdeUFRRBh1KC7YssbjDPufoLkJuFZwAN7icxg/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NTI0/NDctMTUyMjY3MTA3/Ny02MDUxLmpwZWc.jpeg",
            "cover_image": "https://i.discogs.com/AXNSijT-3IygwLOZk6XlxiL1pS-AyHqRwq29Misbx1w/rs:fit/g:sm/q:90/h:603/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NTI0/NDctMTUyMjY3MTA3/Ny02MDUxLmpwZWc.jpeg",
            "title": "Recorded Live In Club Ochentas - Album 1",
            "year": 1981,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "LP",
                        "Album"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "SAR All Stars",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 1588475,
                    "resource_url": "https://api.discogs.com/artists/1588475"
                }
            ],
            "labels": [
                {
                    "name": "SAR Records (2)",
                    "catno": "SAR 1021",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 181788,
                    "resource_url": "https://api.discogs.com/labels/181788"
                },
                {
                    "name": "SAR Records (2)",
                    "catno": "SLP 1021",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 181788,
                    "resource_url": "https://api.discogs.com/labels/181788"
                }
            ],
            "genres": [
                "Latin"
            ],
            "styles": [
                "Monolog",
                "Cha-Cha",
                "Guaguancó",
                "Descarga",
                "Salsa"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 3077012,
        "instance_id": 1479307480,
        "date_added": "2023-10-09T18:55:57-07:00",
        "rating": 0,
        "basic_information": {
            "id": 3077012,
            "master_id": 451522,
            "master_url": "https://api.discogs.com/masters/451522",
            "resource_url": "https://api.discogs.com/releases/3077012",
            "thumb": "https://i.discogs.com/U3Y0PgLZOZMnzPxvEHDCYcUQz7UkqEQ7nYQwS1vB04k/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNzcw/MTItMTM0Njk0NDM1/MS0zNDMzLmpwZWc.jpeg",
            "cover_image": "https://i.discogs.com/J65iQNGs-Nl6CmYK9tm9gWg617aGAZwSOwkubZBhKfM/rs:fit/g:sm/q:90/h:154/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNzcw/MTItMTM0Njk0NDM1/MS0zNDMzLmpwZWc.jpeg",
            "title": "The Roots Of Chicha - Psychedelic Cumbias From Peru",
            "year": 2011,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "2",
                    "text": "+ Booklet",
                    "descriptions": [
                        "LP",
                        "Compilation"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Various",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 194,
                    "resource_url": ""
                }
            ],
            "labels": [
                {
                    "name": "Barbès Records",
                    "catno": "BR0032",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 80243,
                    "resource_url": "https://api.discogs.com/labels/80243"
                }
            ],
            "genres": [
                "Rock",
                "Latin"
            ],
            "styles": [
                "Cumbia",
                "Surf",
                "Guaracha",
                "Beat"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 543484,
        "instance_id": 1479306856,
        "date_added": "2023-10-09T18:54:15-07:00",
        "rating": 0,
        "basic_information": {
            "id": 543484,
            "master_id": 73243,
            "master_url": "https://api.discogs.com/masters/73243",
            "resource_url": "https://api.discogs.com/releases/543484",
            "thumb": "https://i.discogs.com/-CJFvky7QKcLbyKwY84ZuVexFcY9_86EjQ09TWjSNtQ/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU0MzQ4/NC0xMzQxODc4NTUy/LTExMDEuanBlZw.jpeg",
            "cover_image": "https://i.discogs.com/TU4LyMEdObbDK3a7yu66OYxM0GWJ1ysjfDWJrpmKSXY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU0MzQ4/NC0xMzQxODc4NTUy/LTExMDEuanBlZw.jpeg",
            "title": "Play It Straight",
            "year": 1985,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "LP",
                        "Album"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Laid Back",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 8729,
                    "resource_url": "https://api.discogs.com/artists/8729"
                }
            ],
            "labels": [
                {
                    "name": "Sire",
                    "catno": "1-25288",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 27031,
                    "resource_url": "https://api.discogs.com/labels/27031"
                },
                {
                    "name": "Sire",
                    "catno": "9 25288-1",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 27031,
                    "resource_url": "https://api.discogs.com/labels/27031"
                }
            ],
            "genres": [
                "Electronic"
            ],
            "styles": [
                "Synth-pop"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 27646548,
        "instance_id": 1479306289,
        "date_added": "2023-10-09T18:52:50-07:00",
        "rating": 0,
        "basic_information": {
            "id": 27646548,
            "master_id": 2585165,
            "master_url": "https://api.discogs.com/masters/2585165",
            "resource_url": "https://api.discogs.com/releases/27646548",
            "thumb": "https://i.discogs.com/6E-RsfloNR-L2d17WK4vQbtmFfZw3HiVb4H_xm4jOU4/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjQ2/NTQ4LTE2ODk4NDQ4/MjMtMTgzMC5wbmc.jpeg",
            "cover_image": "https://i.discogs.com/bbj39Jtug8fnkL7DBtO2fG0qO4u9c72KrShlV4PysWo/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjQ2/NTQ4LTE2ODk4NDQ4/MjMtMTgzMC5wbmc.jpeg",
            "title": "Naruto Best Collection",
            "year": 2023,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "Black Edition",
                    "descriptions": [
                        "LP",
                        "Compilation",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Various",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 194,
                    "resource_url": ""
                }
            ],
            "labels": [
                {
                    "name": "Microids Records",
                    "catno": "DV12782",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 3272040,
                    "resource_url": "https://api.discogs.com/labels/3272040"
                }
            ],
            "genres": [
                "Rock",
                "Stage & Screen"
            ],
            "styles": [
                "J-Rock",
                "Anison"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 13213414,
        "instance_id": 1479305863,
        "date_added": "2023-10-09T18:51:48-07:00",
        "rating": 0,
        "basic_information": {
            "id": 13213414,
            "master_id": 1502359,
            "master_url": "https://api.discogs.com/masters/1502359",
            "resource_url": "https://api.discogs.com/releases/13213414",
            "thumb": "https://i.discogs.com/ZIrcM6D9f2z6WNhj_oc_0YhB_jh2R_-kitPUXM0ARqk/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjEz/NDE0LTE1NTAwNjE0/MTEtNTIwMS5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/7LzK6VdUzpV7t7deUoeR22zJJE5pjExJ1vzodkyzsec/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjEz/NDE0LTE1NTAwNjE0/MTEtNTIwMS5qcGVn.jpeg",
            "title": "Helium",
            "year": 2019,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "Yellow vinyl",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Limited Edition"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Homeshake",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 3136632,
                    "resource_url": "https://api.discogs.com/artists/3136632"
                }
            ],
            "labels": [
                {
                    "name": "Sinderlyn",
                    "catno": "LYN-045",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 749067,
                    "resource_url": "https://api.discogs.com/labels/749067"
                }
            ],
            "genres": [
                "Rock",
                "Funk / Soul",
                "Pop"
            ],
            "styles": [
                "Soul",
                "Indie Pop",
                "Lo-Fi"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 20108173,
        "instance_id": 1479305386,
        "date_added": "2023-10-09T18:50:36-07:00",
        "rating": 0,
        "basic_information": {
            "id": 20108173,
            "master_id": 2283634,
            "master_url": "https://api.discogs.com/masters/2283634",
            "resource_url": "https://api.discogs.com/releases/20108173",
            "thumb": "https://i.discogs.com/U5LPHA_BwWA6qgKGKZ2Iw1jRrMMSkcMHEMUYnQtaxiU/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMTA4/MTczLTE2MzE1NjIw/MzctNDIyNS5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/PFol1uLyi53gxISazi4NBCXpnuLpew1wD_oU8P8A86s/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMTA4/MTczLTE2MzE1NjIw/MzctNDIyNS5qcGVn.jpeg",
            "title": "Mirrors",
            "year": 2021,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "2",
                    "descriptions": [
                        "12\"",
                        "33 ⅓ RPM",
                        "Album"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "DJ Seinfeld",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 5377444,
                    "resource_url": "https://api.discogs.com/artists/5377444"
                }
            ],
            "labels": [
                {
                    "name": "Ninja Tune",
                    "catno": "ZEN274",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 109,
                    "resource_url": "https://api.discogs.com/labels/109"
                }
            ],
            "genres": [
                "Electronic"
            ],
            "styles": [
                "House",
                "Electro",
                "Garage House",
                "Italo-Disco"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 15818101,
        "instance_id": 1478427238,
        "date_added": "2023-10-08T15:57:30-07:00",
        "rating": 0,
        "basic_information": {
            "id": 15818101,
            "master_id": 1928556,
            "master_url": "https://api.discogs.com/masters/1928556",
            "resource_url": "https://api.discogs.com/releases/15818101",
            "thumb": "https://i.discogs.com/OHtx_YOV_frMkToBHKNhxK3mg7BDU5nSNP7NXMhRBkQ/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1ODE4/MTAxLTE2MDE1NDE1/MDQtNjU5NS5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/MgBC5E-T0Ub32q3npIdkJteyvfjd7F9CWSzYfkaBTJo/rs:fit/g:sm/q:90/h:585/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1ODE4/MTAxLTE2MDE1NDE1/MDQtNjU5NS5qcGVn.jpeg",
            "title": "Together We Stand",
            "year": 2020,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "Pink",
                    "descriptions": [
                        "12\"",
                        "EP"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Myd",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 1597485,
                    "resource_url": "https://api.discogs.com/artists/1597485"
                }
            ],
            "labels": [
                {
                    "name": "Ed Banger Records",
                    "catno": "ED120",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 19066,
                    "resource_url": "https://api.discogs.com/labels/19066"
                },
                {
                    "name": "Because Music",
                    "catno": "BEC5676213",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 54379,
                    "resource_url": "https://api.discogs.com/labels/54379"
                }
            ],
            "genres": [
                "Electronic"
            ],
            "styles": [
                "House"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 26424914,
        "instance_id": 1478427067,
        "date_added": "2023-10-08T15:57:10-07:00",
        "rating": 0,
        "basic_information": {
            "id": 26424914,
            "master_id": 35065,
            "master_url": "https://api.discogs.com/masters/35065",
            "resource_url": "https://api.discogs.com/releases/26424914",
            "thumb": "https://i.discogs.com/As80v3hxXCpaNIrfCp_1P_tTUS3YHEdqFzJTbWT8EjY/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NDI0/OTE0LTE2Nzg4NTEz/MzktODY2Mi5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/kl9WYv6Q5I4QhVwx3QArR8ZM8aOxiqaHTg3hI0tdCBY/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NDI0/OTE0LTE2Nzg4NTEz/MzktODY2Mi5qcGVn.jpeg",
            "title": "†",
            "year": 2022,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "2",
                    "text": "Gatefold",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Reissue"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Justice (3)",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 52758,
                    "resource_url": "https://api.discogs.com/artists/52758"
                }
            ],
            "labels": [
                {
                    "name": "Ed Banger Records",
                    "catno": "BEC5772110",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 19066,
                    "resource_url": "https://api.discogs.com/labels/19066"
                },
                {
                    "name": "Because Music",
                    "catno": "BEC5772110",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 54379,
                    "resource_url": "https://api.discogs.com/labels/54379"
                }
            ],
            "genres": [
                "Electronic"
            ],
            "styles": [
                "Electro House",
                "French House"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 1594368,
        "instance_id": 1478426302,
        "date_added": "2023-10-08T15:55:46-07:00",
        "rating": 0,
        "basic_information": {
            "id": 1594368,
            "master_id": 26755,
            "master_url": "https://api.discogs.com/masters/26755",
            "resource_url": "https://api.discogs.com/releases/1594368",
            "thumb": "https://i.discogs.com/kcZD6lYsBwU2ZZv5SrCUps6D9TZU2zdi8SIjdk8KmqU/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTQz/NjgtMTI4MzExMTUx/NS5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/dENrhb44ewa5n_Rjp_qptcd6TR-Igb8TxoFRD9BdEUg/rs:fit/g:sm/q:90/h:350/w:350/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTQz/NjgtMTI4MzExMTUx/NS5qcGVn.jpeg",
            "title": "Revolution 909",
            "year": 1998,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "12\"",
                        "45 RPM"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Daft Punk",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 1289,
                    "resource_url": "https://api.discogs.com/artists/1289"
                }
            ],
            "labels": [
                {
                    "name": "Virgin France",
                    "catno": "7243 8 94821 6 4",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 25873,
                    "resource_url": "https://api.discogs.com/labels/25873"
                },
                {
                    "name": "Virgin France",
                    "catno": "VST1682",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 25873,
                    "resource_url": "https://api.discogs.com/labels/25873"
                },
                {
                    "name": "Virgin France",
                    "catno": "8 94821 6",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 25873,
                    "resource_url": "https://api.discogs.com/labels/25873"
                }
            ],
            "genres": [
                "Electronic"
            ],
            "styles": [
                "House",
                "Tech House"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 22356007,
        "instance_id": 1478425642,
        "date_added": "2023-10-08T15:54:30-07:00",
        "rating": 0,
        "basic_information": {
            "id": 22356007,
            "master_id": 97871,
            "master_url": "https://api.discogs.com/masters/97871",
            "resource_url": "https://api.discogs.com/releases/22356007",
            "thumb": "https://i.discogs.com/U-7RirzHrtMi5nMTIVAdKO7cDP8Rgdngj-6ZpbTTv38/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMzU2/MDA3LTE2NDYyMTQ0/NDYtODk5NC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/z_09XjrUwKcHpner_81tz1bMSafQNlrbr00z_cvWIxw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMzU2/MDA3LTE2NDYyMTQ0/NDYtODk5NC5qcGVn.jpeg",
            "title": "Faxing Berlin",
            "year": 2022,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "12\"",
                        "33 ⅓ RPM",
                        "45 RPM"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Deadmau5",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 257938,
                    "resource_url": "https://api.discogs.com/artists/257938"
                }
            ],
            "labels": [
                {
                    "name": "Play Records (8)",
                    "catno": "PLAY12027",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 179807,
                    "resource_url": "https://api.discogs.com/labels/179807"
                }
            ],
            "genres": [
                "Electronic"
            ],
            "styles": [
                "Progressive House"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 16913535,
        "instance_id": 1478424442,
        "date_added": "2023-10-08T15:52:20-07:00",
        "rating": 0,
        "basic_information": {
            "id": 16913535,
            "master_id": 510,
            "master_url": "https://api.discogs.com/masters/510",
            "resource_url": "https://api.discogs.com/releases/16913535",
            "thumb": "https://i.discogs.com/vHnaDuQpt3DzYh3IiZ6ll3vY7cPGjHDxIyh8MXkBn8g/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2OTEz/NTM1LTE2MTA1NjYy/NDctNTIwNi5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/e8R8CGya4u5hri_pOwkdrjIrKzq_-cCgh-tqEqIV-bc/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2OTEz/NTM1LTE2MTA1NjYy/NDctNTIwNi5qcGVn.jpeg",
            "title": "Richard D. James Album",
            "year": 2020,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "180g",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Reissue"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Aphex Twin",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 45,
                    "resource_url": "https://api.discogs.com/artists/45"
                }
            ],
            "labels": [
                {
                    "name": "Warp Records",
                    "catno": "WARP LP 43",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 23528,
                    "resource_url": "https://api.discogs.com/labels/23528"
                },
                {
                    "name": "Warp Records",
                    "catno": "Warp LP43",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 23528,
                    "resource_url": "https://api.discogs.com/labels/23528"
                },
                {
                    "name": "Warp Records",
                    "catno": "WARP LP43",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 23528,
                    "resource_url": "https://api.discogs.com/labels/23528"
                }
            ],
            "genres": [
                "Electronic"
            ],
            "styles": [
                "Abstract",
                "IDM",
                "Acid",
                "Drum n Bass",
                "Jungle",
                "Experimental"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 21301255,
        "instance_id": 1478424037,
        "date_added": "2023-10-08T15:51:31-07:00",
        "rating": 0,
        "basic_information": {
            "id": 21301255,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/21301255",
            "thumb": "https://i.discogs.com/4IRUMcrZXKdZ0xMXFuxxAkLmoQR3NiQdr9_dVaCffJw/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMzAx/MjU1LTE2Mzk0MTk5/MTAtNDE1NC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/kka5c8Be5MV_P41f9UkfIpUCO6p1Udgv6ZFoHHViMac/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMzAx/MjU1LTE2Mzk0MTk5/MTAtNDE1NC5qcGVn.jpeg",
            "title": "Alive 2021",
            "year": 2021,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "Coke Green",
                    "descriptions": [
                        "LP",
                        "Mixtape",
                        "Promo",
                        "Remastered",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Skylar Spence",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 4283650,
                    "resource_url": "https://api.discogs.com/artists/4283650"
                }
            ],
            "labels": [
                {
                    "name": "Carpark Records",
                    "catno": "SP02",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 842,
                    "resource_url": "https://api.discogs.com/labels/842"
                }
            ],
            "genres": [
                "Electronic",
                "Pop"
            ],
            "styles": [
                "Vaporwave",
                "Disco",
                "House"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 22386295,
        "instance_id": 1478423479,
        "date_added": "2023-10-08T15:50:26-07:00",
        "rating": 0,
        "basic_information": {
            "id": 22386295,
            "master_id": 671036,
            "master_url": "https://api.discogs.com/masters/671036",
            "resource_url": "https://api.discogs.com/releases/22386295",
            "thumb": "https://i.discogs.com/c6wCY3_okGZTkMR3hcig-qTHLM2H1xWdNGvxzeFMh-o/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMzg2/Mjk1LTE2NTc3NzI3/NjMtNDMyOC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/qqnbQ7MT1Is4vfRzfUhM7pMNaESQMQ6gJysmtVc7OEM/rs:fit/g:sm/q:90/h:601/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMzg2/Mjk1LTE2NTc3NzI3/NjMtNDMyOC5qcGVn.jpeg",
            "title": "Late Night Delight",
            "year": 2022,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "Blue [Translucent] w/ Black \"Colour In Colour\" Effect",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Deluxe Edition",
                        "Limited Edition",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Luxury Elite",
                    "anv": "",
                    "join": ",",
                    "role": "",
                    "tracks": "",
                    "id": 3130842,
                    "resource_url": "https://api.discogs.com/artists/3130842"
                },
                {
                    "name": "SAINT PEPSI",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 3207925,
                    "resource_url": "https://api.discogs.com/artists/3207925"
                }
            ],
            "labels": [
                {
                    "name": "My Pet Flamingo",
                    "catno": "MPF005",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 1443575,
                    "resource_url": "https://api.discogs.com/labels/1443575"
                }
            ],
            "genres": [
                "Electronic"
            ],
            "styles": [
                "Vaporwave"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 13922270,
        "instance_id": 1478422759,
        "date_added": "2023-10-08T15:49:02-07:00",
        "rating": 0,
        "basic_information": {
            "id": 13922270,
            "master_id": 24047,
            "master_url": "https://api.discogs.com/masters/24047",
            "resource_url": "https://api.discogs.com/releases/13922270",
            "thumb": "https://i.discogs.com/GNYXszsF1jvnfJ6nBUIVJC9OzwWUINwjJSctGFKHerk/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzOTIy/MjcwLTE1NjQxNDM2/NDItMTM0MC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/p3HUHPkxNrRkOu3fpAagxp8VejYMt5lL1WJ32iGzrZI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzOTIy/MjcwLTE1NjQxNDM2/NDItMTM0MC5qcGVn.jpeg",
            "title": "Abbey Road",
            "year": 0,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "The Beatles",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 82730,
                    "resource_url": "https://api.discogs.com/artists/82730"
                }
            ],
            "labels": [
                {
                    "name": "Capitol Records",
                    "catno": "SO-383",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 654,
                    "resource_url": "https://api.discogs.com/labels/654"
                },
                {
                    "name": "Apple Records",
                    "catno": "APPLE SO-383",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 25693,
                    "resource_url": "https://api.discogs.com/labels/25693"
                }
            ],
            "genres": [
                "Rock",
                "Pop",
                "Folk, World, & Country"
            ],
            "styles": [
                "Pop Rock",
                "Pub Rock"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 13468557,
        "instance_id": 1478421694,
        "date_added": "2023-10-08T15:46:54-07:00",
        "rating": 0,
        "basic_information": {
            "id": 13468557,
            "master_id": 8522,
            "master_url": "https://api.discogs.com/masters/8522",
            "resource_url": "https://api.discogs.com/releases/13468557",
            "thumb": "https://i.discogs.com/0iDIWiY9L8R8dv7p4TNxS7rPR_7emtqJY_FNhWFj9fo/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNDY4/NTU3LTE1NTQ3ODE0/MTEtMjAxOS5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/AlMNq_QJaEPOtjzWT82S9aK96wMF7K6-ZH0czcIdNk0/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNDY4/NTU3LTE1NTQ3ODE0/MTEtMjAxOS5qcGVn.jpeg",
            "title": "Highway To Hell",
            "year": 2003,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "Misspacked",
                    "descriptions": [
                        "LP",
                        "Album",
                        "Reissue",
                        "Remastered",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "AC/DC",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 84752,
                    "resource_url": "https://api.discogs.com/artists/84752"
                }
            ],
            "labels": [
                {
                    "name": "Epic",
                    "catno": "E 80206",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 1005,
                    "resource_url": "https://api.discogs.com/labels/1005"
                },
                {
                    "name": "Columbia",
                    "catno": "E 80206",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 1866,
                    "resource_url": "https://api.discogs.com/labels/1866"
                },
                {
                    "name": "Albert Productions",
                    "catno": "E 80206",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 33440,
                    "resource_url": "https://api.discogs.com/labels/33440"
                }
            ],
            "genres": [
                "Rock"
            ],
            "styles": [
                "Hard Rock",
                "Classic Rock"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 11708673,
        "instance_id": 1478420506,
        "date_added": "2023-10-08T15:44:35-07:00",
        "rating": 0,
        "basic_information": {
            "id": 11708673,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/11708673",
            "thumb": "https://i.discogs.com/A5zeVWcou5SPGajzzJldp4mBdqu3qKNbCCyxhX9O6Po/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNzA4/NjczLTE1MjIwNzI5/NjUtODAyNS5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/gojKG9T_paVEHWkl9mAlSx2-Ajlw2IldqBkW70uu1lQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNzA4/NjczLTE1MjIwNzI5/NjUtODAyNS5qcGVn.jpeg",
            "title": "Riddims du Lieu-dit",
            "year": 2018,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "Clear",
                    "descriptions": [
                        "12\"",
                        "33 ⅓ RPM",
                        "Album"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Low Jack",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 2491596,
                    "resource_url": "https://api.discogs.com/artists/2491596"
                }
            ],
            "labels": [
                {
                    "name": "Les Disques De La Bretagne",
                    "catno": "BZH001",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 1433640,
                    "resource_url": "https://api.discogs.com/labels/1433640"
                }
            ],
            "genres": [
                "Electronic",
                "Reggae"
            ],
            "styles": [
                "Dancehall",
                "Industrial",
                "Breakbeat"
            ]
        },
        "folder_id": 1,
        "notes": [
            {
                "field_id": 2,
                "value": "Mint (M)"
            }
        ]
    },
    {
        "id": 23994167,
        "instance_id": 1478418949,
        "date_added": "2023-10-08T15:41:30-07:00",
        "rating": 0,
        "basic_information": {
            "id": 23994167,
            "master_id": 90350,
            "master_url": "https://api.discogs.com/masters/90350",
            "resource_url": "https://api.discogs.com/releases/23994167",
            "thumb": "https://i.discogs.com/lCN1SoexezYTkJ4CYKPicsj2aFxmGgJ82DSjjRB_V6g/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzOTk0/MTY3LTE2NTkyMzE2/NDctMzM4Ni5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/B-IdMQaYEsItVXekIyZXnBhkuxjrKuFCfFM9IqJ13Nk/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzOTk0/MTY3LTE2NTkyMzE2/NDctMzM4Ni5qcGVn.jpeg",
            "title": "Forrest Gump (The Soundtrack)",
            "year": 2022,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "2",
                    "descriptions": [
                        "LP",
                        "Compilation",
                        "Reissue",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Various",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 194,
                    "resource_url": ""
                }
            ],
            "labels": [
                {
                    "name": "Epic",
                    "catno": "19439942481",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 1005,
                    "resource_url": "https://api.discogs.com/labels/1005"
                },
                {
                    "name": "Legacy",
                    "catno": "19439942481",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 15491,
                    "resource_url": "https://api.discogs.com/labels/15491"
                }
            ],
            "genres": [
                "Rock",
                "Pop",
                "Stage & Screen"
            ],
            "styles": [
                "Folk Rock",
                "Country Rock",
                "Pop Rock",
                "Rock & Roll",
                "Soft Rock",
                "Soundtrack",
                "Classic Rock"
            ]
        },
        "folder_id": 4573382
    },
    {
        "id": 10237842,
        "instance_id": 1471783279,
        "date_added": "2023-09-30T18:48:54-07:00",
        "rating": 0,
        "basic_information": {
            "id": 10237842,
            "master_id": 1364154,
            "master_url": "https://api.discogs.com/masters/1364154",
            "resource_url": "https://api.discogs.com/releases/10237842",
            "thumb": "https://i.discogs.com/XFikPpuWdZ8mfq7UsxUrbxSoxju3HXksrVs34KQvxP0/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjM3/ODQyLTE0OTQ4ODc2/MTEtNDAzMy5wbmc.jpeg",
            "cover_image": "https://i.discogs.com/J0xhWtgSBKJE9WXp7AuG9ltpOL5gWxA-khKkFfRnA-c/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjM3/ODQyLTE0OTQ4ODc2/MTEtNDAzMy5wbmc.jpeg",
            "title": "Say It Again ",
            "year": 2017,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM",
                        "Single",
                        "Reissue"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "The Demands (2)",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 5958589,
                    "resource_url": "https://api.discogs.com/artists/5958589"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC032-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Funk / Soul"
            ],
            "styles": [
                "Soul"
            ]
        },
        "folder_id": 4573373
    },
    {
        "id": 12020224,
        "instance_id": 1469117335,
        "date_added": "2023-09-27T16:55:01-07:00",
        "rating": 0,
        "basic_information": {
            "id": 12020224,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/12020224",
            "thumb": "https://i.discogs.com/5saQC8-jgZGJGijNUaIycIE1N6vGW6LwLFFhSYDwBT0/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMDIw/MjI0LTE1MjY3NDM1/NDYtOTU4Mi5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/O0Edg78c8FoI3uHujnbjraf2Tw5508A-mpZw35aV150/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMDIw/MjI0LTE1MjY3NDM1/NDYtOTU4Mi5qcGVn.jpeg",
            "title": "The One Who's Hurting Is You / Should I Take You Home",
            "year": 2018,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "Single"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Sunny & The Sunliners",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 365264,
                    "resource_url": "https://api.discogs.com/artists/365264"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC043-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Funk / Soul"
            ],
            "styles": []
        },
        "folder_id": 4573373
    },
    {
        "id": 11053699,
        "instance_id": 1468830355,
        "date_added": "2023-09-27T09:50:10-07:00",
        "rating": 0,
        "basic_information": {
            "id": 11053699,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/11053699",
            "thumb": "https://i.discogs.com/XugAQoYLPP1S3Q0AwgEk0BmIVMpHMmkEAFCihmjrMic/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMDUz/Njk5LTE1MDg5Nzgz/MzAtNTkyNy5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/vSwiFgVa4jPeNXXn8FcVTNeWSnzpK0L-pYc4yiTHcZM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMDUz/Njk5LTE1MDg5Nzgz/MzAtNTkyNy5qcGVn.jpeg",
            "title": "Put Me In Jail / Open Up Your Love Door",
            "year": 2017,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM",
                        "Single",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Sunny & The Sunliners",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 365264,
                    "resource_url": "https://api.discogs.com/artists/365264"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC048-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Latin",
                "Funk / Soul",
                "Folk, World, & Country"
            ],
            "styles": []
        },
        "folder_id": 4573373
    },
    {
        "id": 9757064,
        "instance_id": 1468822561,
        "date_added": "2023-09-27T09:39:58-07:00",
        "rating": 0,
        "basic_information": {
            "id": 9757064,
            "master_id": 1127624,
            "master_url": "https://api.discogs.com/masters/1127624",
            "resource_url": "https://api.discogs.com/releases/9757064",
            "thumb": "https://i.discogs.com/-oW0HDTeZSMAiIdHXe0tkbak3Oa44T6F8EA9JNTHJRE/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk3NTcw/NjQtMTQ4NTk3MDQx/MS02ODQyLmpwZWc.jpeg",
            "cover_image": "https://i.discogs.com/ewQ9TAAlbkxGH_NEsnMnlOuzY1BF9fYCdXvQ4SYRDF8/rs:fit/g:sm/q:90/h:569/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk3NTcw/NjQtMTQ4NTk3MDQx/MS02ODQyLmpwZWc.jpeg",
            "title": "Do It Again / In Love (Don't Mess Things Up)",
            "year": 2016,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "Purple Label",
                    "descriptions": [
                        "7\"",
                        "45 RPM"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Lady Wray",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 4363516,
                    "resource_url": "https://api.discogs.com/artists/4363516"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC009-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Funk / Soul"
            ],
            "styles": [
                "Neo Soul",
                "Contemporary R&B"
            ]
        },
        "folder_id": 4573373
    },
    {
        "id": 12476796,
        "instance_id": 1467502654,
        "date_added": "2023-09-25T14:56:50-07:00",
        "rating": 0,
        "basic_information": {
            "id": 12476796,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/12476796",
            "thumb": "https://i.discogs.com/XKFrYaDioLqlg9oBuisOrOI7WXSUqIky62WXE9EpXnM/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNDc2/Nzk2LTE1MzcwNzkw/MDUtODI0OS5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/5bzSnQY4E-uTqGcjOv6M2G3oLEiUs82uMOEW5wLMGZQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNDc2/Nzk2LTE1MzcwNzkw/MDUtODI0OS5qcGVn.jpeg",
            "title": "Blues Get Off My Shoulder / I'm Begging You",
            "year": 2018,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "The Lively Set (5)",
                    "anv": "",
                    "join": "/",
                    "role": "",
                    "tracks": "",
                    "id": 6467296,
                    "resource_url": "https://api.discogs.com/artists/6467296"
                },
                {
                    "name": "The Three Dudes",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 3763633,
                    "resource_url": "https://api.discogs.com/artists/3763633"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC014-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Funk / Soul"
            ],
            "styles": [
                "Soul"
            ]
        },
        "folder_id": 4573373
    },
    {
        "id": 11671693,
        "instance_id": 1466725363,
        "date_added": "2023-09-24T15:18:57-07:00",
        "rating": 0,
        "basic_information": {
            "id": 11671693,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/11671693",
            "thumb": "https://i.discogs.com/ooZDaclSiGUIEyWOPbUaKpoi82qB_o05DmeUKFRTGpM/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjcx/NjkzLTE1MjE1MjM5/ODEtNzMzOC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/80Lo9JEjAzWyG-MuTELHPMwUSQ03w8lcxJwoU1gEqho/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjcx/NjkzLTE1MjE1MjM5/ODEtNzMzOC5qcGVn.jpeg",
            "title": "Sittin' On A Red Hot Stove",
            "year": 2018,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Kool And Together",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 630452,
                    "resource_url": "https://api.discogs.com/artists/630452"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC023-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Funk / Soul"
            ],
            "styles": [
                "Funk"
            ]
        },
        "folder_id": 4573373
    },
    {
        "id": 12455808,
        "instance_id": 1465831819,
        "date_added": "2023-09-23T18:37:37-07:00",
        "rating": 0,
        "basic_information": {
            "id": 12455808,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/12455808",
            "thumb": "https://i.discogs.com/gewECouWDYSCr8XUJcAPHI9-GHlOt-eS86RLeBa9ZLE/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNDU1/ODA4LTE1MzU2MzQy/OTctNDQwNi5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/aFYN0XGF4rDoUmeQ3tOeej2Hd6aeboM4cjYSALEsloE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNDU1/ODA4LTE1MzU2MzQy/OTctNDQwNi5qcGVn.jpeg",
            "title": "This Love / Should I Take You Home",
            "year": 2018,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM",
                        "Single"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Bobby Oroza",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 5297989,
                    "resource_url": "https://api.discogs.com/artists/5297989"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC064-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Latin",
                "Funk / Soul"
            ],
            "styles": [
                "Soul"
            ]
        },
        "folder_id": 4573373
    },
    {
        "id": 9742664,
        "instance_id": 1465828876,
        "date_added": "2023-09-23T18:31:13-07:00",
        "rating": 0,
        "basic_information": {
            "id": 9742664,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/9742664",
            "thumb": "https://i.discogs.com/rZnrBIqrAtXFSPqRBmicuCEjTwpCEmUA9Mb4qQe4TP8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk3NDI2/NjQtMTQ4NTY2MTU1/Ny0zNjI2LmpwZWc.jpeg",
            "cover_image": "https://i.discogs.com/brdJIC7YjpZTtcbPEktntKG4ouVXZC6FPF5jvtaPYSQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk3NDI2/NjQtMTQ4NTY2MTU1/Ny0zNjI2LmpwZWc.jpeg",
            "title": "Hello Jesus",
            "year": 2017,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM",
                        "Single"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Miles Bonny",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 318975,
                    "resource_url": "https://api.discogs.com/artists/318975"
                }
            ],
            "labels": [
                {
                    "name": "Plane Jane",
                    "catno": "PJ007-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 606566,
                    "resource_url": "https://api.discogs.com/labels/606566"
                }
            ],
            "genres": [
                "Hip Hop"
            ],
            "styles": []
        },
        "folder_id": 4573373
    },
    {
        "id": 9912006,
        "instance_id": 1465382527,
        "date_added": "2023-09-23T09:29:16-07:00",
        "rating": 0,
        "basic_information": {
            "id": 9912006,
            "master_id": 850915,
            "master_url": "https://api.discogs.com/masters/850915",
            "resource_url": "https://api.discogs.com/releases/9912006",
            "thumb": "https://i.discogs.com/fNiRZpb2P1OA1nxod8OvsMU2rnx8bbedaTp3B6DHPZA/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk5MTIw/MDYtMTQ4ODQwNTg2/My05MTgxLmpwZWc.jpeg",
            "cover_image": "https://i.discogs.com/LyNgEqmHR64VEm6darzr4nR5ftDtLZD3ucfZ3epRcZg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk5MTIw/MDYtMTQ4ODQwNTg2/My05MTgxLmpwZWc.jpeg",
            "title": "Should I Take You Home",
            "year": 2017,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM",
                        "Single",
                        "Reissue",
                        "Remastered"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Sunny & The Sunliners",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 365264,
                    "resource_url": "https://api.discogs.com/artists/365264"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC034-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Latin",
                "Funk / Soul"
            ],
            "styles": [
                "Funk"
            ]
        },
        "folder_id": 4573373
    },
    {
        "id": 11132694,
        "instance_id": 1464694360,
        "date_added": "2023-09-22T14:12:05-07:00",
        "rating": 0,
        "basic_information": {
            "id": 11132694,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/11132694",
            "thumb": "https://i.discogs.com/S0merka5hr4YZINoR3q_F6-9cAkYOiagtGQvcc-VG8Q/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMTMy/Njk0LTE1OTU2MTg0/MjAtNjgxNC5wbmc.jpeg",
            "cover_image": "https://i.discogs.com/96TAuwM9eD8Jb4vzOp7q_uA_3qQVQrUZWD9coDIdahE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMTMy/Njk0LTE1OTU2MTg0/MjAtNjgxNC5wbmc.jpeg",
            "title": "This Strange Effect",
            "year": 2017,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM",
                        "Single"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "The Shacks",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 5119462,
                    "resource_url": "https://api.discogs.com/artists/5119462"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC056-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Rock",
                "Pop"
            ],
            "styles": [
                "Pop Rock"
            ]
        },
        "folder_id": 4573373
    },
    {
        "id": 10481658,
        "instance_id": 1463948266,
        "date_added": "2023-09-21T14:25:46-07:00",
        "rating": 0,
        "basic_information": {
            "id": 10481658,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/10481658",
            "thumb": "https://i.discogs.com/4kyFzBSRYcNkAzWaaFIf2fMfwft70nTuNv85txTBKPA/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNDgx/NjU4LTE0OTgzOTc1/MTEtNjU5MC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/kCRpbK6R63v-8IH9VaR4aXrfbDqj0h1ZZjCySc8yr-8/rs:fit/g:sm/q:90/h:590/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNDgx/NjU4LTE0OTgzOTc1/MTEtNjU5MC5qcGVn.jpeg",
            "title": "Never Be Another You / Lover Man",
            "year": 2017,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM",
                        "Single"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Lee Fields",
                    "anv": "",
                    "join": "&",
                    "role": "",
                    "tracks": "",
                    "id": 61350,
                    "resource_url": "https://api.discogs.com/artists/61350"
                },
                {
                    "name": "The Expressions",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 445072,
                    "resource_url": "https://api.discogs.com/artists/445072"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC045-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Funk / Soul"
            ],
            "styles": [
                "Soul"
            ]
        },
        "folder_id": 4573373
    },
    {
        "id": 11636082,
        "instance_id": 1463789584,
        "date_added": "2023-09-21T10:52:48-07:00",
        "rating": 0,
        "basic_information": {
            "id": 11636082,
            "master_id": 2475466,
            "master_url": "https://api.discogs.com/masters/2475466",
            "resource_url": "https://api.discogs.com/releases/11636082",
            "thumb": "https://i.discogs.com/z0Sfy49FsycMaaDCR64XhxNE-wj4eWzqFD5dW2z6H6o/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjM2/MDgyLTE1MzQyNjE3/NjEtNzg2NC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/8JPwcaBINVIedi76jiRb92TpGfnC3nKTnl_VtgHdpVM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjM2/MDgyLTE1MzQyNjE3/NjEtNzg2NC5qcGVn.jpeg",
            "title": "I Explained It All / Watch Out",
            "year": 2018,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM",
                        "Single",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Paul & The Tall Trees",
                    "anv": "",
                    "join": "/",
                    "role": "",
                    "tracks": "",
                    "id": 4363518,
                    "resource_url": "https://api.discogs.com/artists/4363518"
                },
                {
                    "name": "Mattison",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 2282989,
                    "resource_url": "https://api.discogs.com/artists/2282989"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC049-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Rock",
                "Funk / Soul",
                "Folk, World, & Country"
            ],
            "styles": [
                "Alternative Rock",
                "Country Rock",
                "Soul",
                "Indie Rock",
                "Folk"
            ]
        },
        "folder_id": 4573373
    },
    {
        "id": 11272330,
        "instance_id": 1463251075,
        "date_added": "2023-09-20T16:35:11-07:00",
        "rating": 0,
        "basic_information": {
            "id": 11272330,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/11272330",
            "thumb": "https://i.discogs.com/fS8NZ-QT4JPuYkhKgZnmqhnFadXGe55flOX3H9tKW8o/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMjcy/MzMwLTE1MTMxNjkw/MzEtMjA3MC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/vdSYYmdSjl7UhNg-Bswu40stLyOidJnJMUZdslop6DQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMjcy/MzMwLTE1MTMxNjkw/MzEtMjA3MC5qcGVn.jpeg",
            "title": "Audrey",
            "year": 2017,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM",
                        "Single"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "The Shacks",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 5119462,
                    "resource_url": "https://api.discogs.com/artists/5119462"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC059-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Rock",
                "Pop"
            ],
            "styles": []
        },
        "folder_id": 4573373
    },
    {
        "id": 5034199,
        "instance_id": 1463168206,
        "date_added": "2023-09-20T14:39:10-07:00",
        "rating": 0,
        "basic_information": {
            "id": 5034199,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/5034199",
            "thumb": "https://i.discogs.com/oLAXWtpeq8S72uyxUqQWY_LbXexAT3c1PPhqmGT7Ezc/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMzQx/OTktMTYyOTg1MDQw/OC01NDQwLmpwZWc.jpeg",
            "cover_image": "https://i.discogs.com/VN6LNTIoWzZQhB7cYOLIVsln02DSosyNmeUf6rgXzvY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMzQx/OTktMTYyOTg1MDQw/OC01NDQwLmpwZWc.jpeg",
            "title": "Conflict Of A Man",
            "year": 2013,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "Single"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Erimaj",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 2716980,
                    "resource_url": "https://api.discogs.com/artists/2716980"
                }
            ],
            "labels": [
                {
                    "name": "Plane Jane",
                    "catno": "PJ001-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 606566,
                    "resource_url": "https://api.discogs.com/labels/606566"
                }
            ],
            "genres": [
                "Jazz",
                "Funk / Soul"
            ],
            "styles": []
        },
        "folder_id": 4573373
    },
    {
        "id": 11462849,
        "instance_id": 1463071942,
        "date_added": "2023-09-20T12:42:33-07:00",
        "rating": 0,
        "basic_information": {
            "id": 11462849,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/11462849",
            "thumb": "https://i.discogs.com/uNq2wU50su7rnIwsv_XtdhQcWpMI3676txlulmdX66U/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDYy/ODQ5LTE1MzQyNjE1/OTAtNTAzMC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/lgxaiEcksVqXaP72qU3eM_JhUyAFBKgM2YgKdSNuTok/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDYy/ODQ5LTE1MzQyNjE1/OTAtNTAzMC5qcGVn.jpeg",
            "title": "Follow Me",
            "year": 2018,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM",
                        "Single"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "The Shacks",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 5119462,
                    "resource_url": "https://api.discogs.com/artists/5119462"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC012-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Rock",
                "Pop"
            ],
            "styles": []
        },
        "folder_id": 4573373
    },
    {
        "id": 11636011,
        "instance_id": 1462363042,
        "date_added": "2023-09-19T14:09:01-07:00",
        "rating": 0,
        "basic_information": {
            "id": 11636011,
            "master_id": 0,
            "master_url": null,
            "resource_url": "https://api.discogs.com/releases/11636011",
            "thumb": "https://i.discogs.com/96HV6DXwUWWGbXm8ndJMdETNEGD45o0N_mCWJ8Q4q5E/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjM2/MDExLTE1MjAwODIy/MjctNjI0MC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/DRlttKPVbQM9tDC3bKYQgqKxbjrgDFnm15piq-C1VXs/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjM2/MDExLTE1MjAwODIy/MjctNjI0MC5qcGVn.jpeg",
            "title": "Fence Walk / Funky Resurgence",
            "year": 2018,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM",
                        "Single",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Paul Ramos",
                    "anv": "",
                    "join": "/",
                    "role": "",
                    "tracks": "",
                    "id": 250019,
                    "resource_url": "https://api.discogs.com/artists/250019"
                },
                {
                    "name": "Ulysses Crockett",
                    "anv": "Ulysses Crocket",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 4300233,
                    "resource_url": "https://api.discogs.com/artists/4300233"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC011-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Funk / Soul"
            ],
            "styles": []
        },
        "folder_id": 4573373
    },
    {
        "id": 15918780,
        "instance_id": 1461625474,
        "date_added": "2023-09-18T16:19:50-07:00",
        "rating": 0,
        "basic_information": {
            "id": 15918780,
            "master_id": 754094,
            "master_url": "https://api.discogs.com/masters/754094",
            "resource_url": "https://api.discogs.com/releases/15918780",
            "thumb": "https://i.discogs.com/mnx0CvV8MpRd0E_NCLyGjXkf4EGFUZHx4wEr1IV55lI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTE4/NzgwLTE2MDAxODYx/ODEtMjM2NC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/CUuPiLSzJcKkr_7mBNKYwqM3bzZwGRsuDEdCmwaDLz8/rs:fit/g:sm/q:90/h:584/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTE4/NzgwLTE2MDAxODYx/ODEtMjM2NC5qcGVn.jpeg",
            "title": "Pimp / Police In Helicopter",
            "year": 0,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "45 RPM",
                        "Single",
                        "Reissue"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "The Bacao Rhythm & Steel Band",
                    "anv": "Bacao Rhythm & Steel Band",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 918364,
                    "resource_url": "https://api.discogs.com/artists/918364"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC027-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Funk / Soul"
            ],
            "styles": []
        },
        "folder_id": 4573373
    },
    {
        "id": 14077326,
        "instance_id": 1461563644,
        "date_added": "2023-09-18T14:34:52-07:00",
        "rating": 0,
        "basic_information": {
            "id": 14077326,
            "master_id": 88633,
            "master_url": "https://api.discogs.com/masters/88633",
            "resource_url": "https://api.discogs.com/releases/14077326",
            "thumb": "https://i.discogs.com/dPUr3_IQX3rdQQuIBehjpYMjUsVqacu5DPfcANyu2ik/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDc3/MzI2LTE1Njc0MTg4/ODEtMTE0Mi5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/j5VedJEyEnUAcen_hND6cNwV3Z6LHZLSTYBaMFaseik/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDc3/MzI2LTE1Njc0MTg4/ODEtMTE0Mi5qcGVn.jpeg",
            "title": "On The Track",
            "year": 1975,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "text": "Pitman Pressing",
                    "descriptions": [
                        "LP",
                        "Album"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Leon Redbone",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 253471,
                    "resource_url": "https://api.discogs.com/artists/253471"
                }
            ],
            "labels": [
                {
                    "name": "Warner Bros. Records",
                    "catno": "BS 2888",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 1000,
                    "resource_url": "https://api.discogs.com/labels/1000"
                }
            ],
            "genres": [
                "Jazz",
                "Blues"
            ],
            "styles": [
                "Delta Blues",
                "Ragtime"
            ]
        },
        "folder_id": 1
    },
    {
        "id": 2939820,
        "instance_id": 1461558679,
        "date_added": "2023-09-18T14:27:18-07:00",
        "rating": 0,
        "basic_information": {
            "id": 2939820,
            "master_id": 1406382,
            "master_url": "https://api.discogs.com/masters/1406382",
            "resource_url": "https://api.discogs.com/releases/2939820",
            "thumb": "https://i.discogs.com/h6P1xnJhXO9nqsUjyaYPnXhbBDhyma0mgssSzSeppOs/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5Mzk4/MjAtMTQyMjY3MDA1/MS0xMTY5LmpwZWc.jpeg",
            "cover_image": "https://i.discogs.com/wNDBtK_VMg4Bh2Jfc1AA4XJNTBmGFIExKx8nZUOD8Iw/rs:fit/g:sm/q:90/h:612/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5Mzk4/MjAtMTQyMjY3MDA1/MS0xMTY5LmpwZWc.jpeg",
            "title": "Christmas Disco Party",
            "year": 1979,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "LP",
                        "Album"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Unknown Artist",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 355,
                    "resource_url": ""
                }
            ],
            "labels": [
                {
                    "name": "Classic Christmas",
                    "catno": "CCR 1941",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 137369,
                    "resource_url": "https://api.discogs.com/labels/137369"
                }
            ],
            "genres": [
                "Electronic",
                "Funk / Soul",
                "Pop"
            ],
            "styles": [
                "Disco",
                "Holiday"
            ]
        },
        "folder_id": 1,
        "notes": [
            {
                "field_id": 2,
                "value": "Good Plus (G+)"
            }
        ]
    },
    {
        "id": 4032147,
        "instance_id": 1461557371,
        "date_added": "2023-09-18T14:25:26-07:00",
        "rating": 0,
        "basic_information": {
            "id": 4032147,
            "master_id": 1363364,
            "master_url": "https://api.discogs.com/masters/1363364",
            "resource_url": "https://api.discogs.com/releases/4032147",
            "thumb": "https://i.discogs.com/sxggE3JzYW1gI_JavLUGJEF1uMAjLfw000V7k4Zn7Ho/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwMzIx/NDctMTQ5NDk1NTU0/Ny0yMjUyLnBuZw.jpeg",
            "cover_image": "https://i.discogs.com/JcASPN8Q_hREPtBBYFqdJZPk2KwrenoeIilQbsinjmA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwMzIx/NDctMTQ5NDk1NTU0/Ny0yMjUyLnBuZw.jpeg",
            "title": "Goofy Gold",
            "year": 1980,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "LP",
                        "Compilation"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Various",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 194,
                    "resource_url": ""
                }
            ],
            "labels": [
                {
                    "name": "Exact Productions",
                    "catno": "EX 204",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 154703,
                    "resource_url": "https://api.discogs.com/labels/154703"
                }
            ],
            "genres": [
                "Rock",
                "Funk / Soul",
                "Pop",
                "Folk, World, & Country"
            ],
            "styles": []
        },
        "folder_id": 1,
        "notes": [
            {
                "field_id": 1,
                "value": "Very Good (VG)"
            },
            {
                "field_id": 2,
                "value": "Good (G)"
            }
        ]
    },
    {
        "id": 17289094,
        "instance_id": 1460806870,
        "date_added": "2023-09-17T15:57:11-07:00",
        "rating": 0,
        "basic_information": {
            "id": 17289094,
            "master_id": 1963993,
            "master_url": "https://api.discogs.com/masters/1963993",
            "resource_url": "https://api.discogs.com/releases/17289094",
            "thumb": "https://i.discogs.com/V2A8PVa445KUakPQbUJBJMtyD4-8_Exnyn25ZQVzmf8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3Mjg5/MDk0LTE2MTI2MzUx/NzItNzY2NC5qcGVn.jpeg",
            "cover_image": "https://i.discogs.com/TbUw3CqnDelGA_GiufCobPnf9j_fdGlRj7cufKiNfqU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3Mjg5/MDk0LTE2MTI2MzUx/NzItNzY2NC5qcGVn.jpeg",
            "title": "I Got Love / Loving Body",
            "year": 2021,
            "formats": [
                {
                    "name": "Vinyl",
                    "qty": "1",
                    "descriptions": [
                        "7\"",
                        "Single",
                        "Stereo"
                    ]
                }
            ],
            "artists": [
                {
                    "name": "Bobby Oroza",
                    "anv": "",
                    "join": "",
                    "role": "",
                    "tracks": "",
                    "id": 5297989,
                    "resource_url": "https://api.discogs.com/artists/5297989"
                }
            ],
            "labels": [
                {
                    "name": "Big Crown Records",
                    "catno": "BC098-45",
                    "entity_type": "1",
                    "entity_type_name": "Label",
                    "id": 979925,
                    "resource_url": "https://api.discogs.com/labels/979925"
                }
            ],
            "genres": [
                "Funk / Soul"
            ],
            "styles": [
                "Soul"
            ]
        },
        "folder_id": 4573373,
        "notes": [
            {
                "field_id": 1,
                "value": "Mint (M)"
            },
            {
                "field_id": 2,
                "value": "Near Mint (NM or M-)"
            }
        ]
    }
]