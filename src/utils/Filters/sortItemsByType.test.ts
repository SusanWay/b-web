import {expect, test} from "vitest"
import {sortItemsByType} from "./sortItemsByType.ts"

const testData = [
    {
        "idSteam": 1,
        "type": "case",
        "name": "2020 RMR Contenders",
        "count": 12,
        "cost": 34.82,
        "img": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OHFY28SvoyJl4-Fg_L6N77DhSUFsccgie-W9Nqj3gblqhA_NWyiLIfDclA_YFjU_1a7yOfmhcO9vpvA1zI97X4HoaIB"
    },
    {
        "idSteam": 2,
        "type": "weapon",
        "name": "Drift Wood",
        "cost": 2.92,
        "float": 0.49539887,
        "img": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwOP3dS9b08u5m4S0n_L1JaKfw20BuMR1jrjAodSk21Dg80JpMDr1dtWQdldrN1jW_wPtl-fq1pO7uoOJlyW7W3BBXg"
    },
    {
        "idSteam": 5,
        "type": "case",
        "name": "Antwerp 2022 Challengers Autograph Capsule",
        "count": 30,
        "cost": 59.54,
        "img": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7PLGZSpH_szkxNLZqPDmPK7BqWhZ6cl9j-fG8J7mxlK1-ks_Zz32I4GdJlJrY1HX-wDrlO3v05e87pmfyXVrvCAj43bemhapwUYbHWM7HMY"
    },
    {
        "idSteam": 6,
        "type": "case",
        "name": "StatTrak™ Swap Tool",
        "count": 7,
        "cost": 45.59,
        "img": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUhvRpJWF7RTNu-wM7DbEl7KggZs--nLV4ygaDNJztE7ozgzNGIwqTyZ-6AlGpV7Jx10uiQotym2g3k_l0sPT6xjsLSww"
    }]

const testParams = [
    {
    inputType: 'ALL', output: testData
    },
    {inputType: 'case', output: [
            {
                "idSteam": 1,
                "type": "case",
                "name": "2020 RMR Contenders",
                "count": 12,
                "cost": 34.82,
                "img": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OHFY28SvoyJl4-Fg_L6N77DhSUFsccgie-W9Nqj3gblqhA_NWyiLIfDclA_YFjU_1a7yOfmhcO9vpvA1zI97X4HoaIB"
            },
            {
                "idSteam": 5,
                "type": "case",
                "name": "Antwerp 2022 Challengers Autograph Capsule",
                "count": 30,
                "cost": 59.54,
                "img": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7PLGZSpH_szkxNLZqPDmPK7BqWhZ6cl9j-fG8J7mxlK1-ks_Zz32I4GdJlJrY1HX-wDrlO3v05e87pmfyXVrvCAj43bemhapwUYbHWM7HMY"
            },
            {
                "idSteam": 6,
                "type": "case",
                "name": "StatTrak™ Swap Tool",
                "count": 7,
                "cost": 45.59,
                "img": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUhvRpJWF7RTNu-wM7DbEl7KggZs--nLV4ygaDNJztE7ozgzNGIwqTyZ-6AlGpV7Jx10uiQotym2g3k_l0sPT6xjsLSww"
            }
            ]
    },
    {inputType: 'weapon', output: [
            {
                "idSteam": 2,
                "type": "weapon",
                "name": "Drift Wood",
                "cost": 2.92,
                "float": 0.49539887,
                "img": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwOP3dS9b08u5m4S0n_L1JaKfw20BuMR1jrjAodSk21Dg80JpMDr1dtWQdldrN1jW_wPtl-fq1pO7uoOJlyW7W3BBXg"
            }
        ]}
    ]

test.each(testParams)(
    'sortItemsByType test with data as $inputType',
    ({inputType, output}) => {
        expect(sortItemsByType(testData, inputType)).toStrictEqual(output)
    })
