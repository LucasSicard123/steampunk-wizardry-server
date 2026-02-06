// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:emerald', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:emerald_nugget'
        }
    )

    event.shapeless(
        Item.of('kubejs:emerald_nugget', 9),
        [
            'minecraft:emerald'
        ]
    )

    event.shapeless(
        Item.of('kubejs:cafe_customer_table', 1),
        [
            "farm_and_charm:strawberry_tea",
            "#minecraft:logs"
        ]
    )
    
    event.shapeless(
        Item.of('kubejs:dessert_customer_table', 1),
        [
            'rusticdelight:fruit_beignet',
            "#minecraft:logs"
        ]
    )

    event.shapeless(
        Item.of('kubejs:exotic_customer_table', 1),
        [
            "alexsdelight:bison_burger",
            "#minecraft:logs"
        ]
    )

    event.shapeless(
        Item.of('kubejs:dinner_customer_table', 1),
        [
            "candlelight:tomato_soup",
            "#minecraft:logs"
        ]
    )

    event.shapeless(
        Item.of('kubejs:seafood_customer_table', 1),
        [
            "crabbersdelight:cooked_crab",
            "#minecraft:logs"
        ]
    )

    event.shapeless(
        Item.of('kubejs:bar_customer_table', 1),
        [
            "vinery:mead",
            "#minecraft:logs"
        ]
    )

    event.shapeless(
        Item.of('mysticalagriculture:prosperity_shard', 8),
        [
            "mysticalagriculture:soulstone"
        ]
    )

    event.remove({output: 'mysticalagriculture:emerald_seeds'})
    event.remove({input: 'mysticalagriculture:emerald_essence'})
})
