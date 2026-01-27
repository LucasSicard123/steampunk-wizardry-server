StartupEvents.registry("block", (event) => {
  const createBlock = (id, name, topTexture) => {
    event.create(id, "cardinal")
    .displayName(name)
    .material("wood") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .tagBlock("mineable/axe") //can be mined faster with an axe
    .modelJson = {
      "parent": "minecraft:block/cube",
      "textures": {
        "north": "kubejs:block/side",
        "south": "kubejs:block/side",
        "east": `kubejs:block/customer_side`,
        "west": `kubejs:block/customer_side`,
        "up": `kubejs:block/${topTexture}`,
        "down": "kubejs:block/bottom",
        "particle": "kubejs:block/side"
      }
    }
  }
  createBlock("bar_customer_table", "Bar Customer Table", "bar_customer")
  createBlock("cafe_customer_table", "Cafe Customer Table", "cafe_customer")
  createBlock("dessert_customer_table", "Dessert Customer Table", "dessert_customer")
  createBlock("dinner_customer_table", "Dinner Customer Table", "dinner_customer")
  createBlock("exotic_customer_table", "Exotic Customer Table", "exotic_customer")
  createBlock("seafood_customer_table", "Seafood Customer Table", "seafood_customer")
})