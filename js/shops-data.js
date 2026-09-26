// add or edit shops here, the page picks them up automatically.
//
// type:     'specialized' or 'general'. specialized shops show first in search.
// tags:     filter chips. lowercase, use hyphens for spaces (e.g. "mob-drops").
// items:    list of items the shop sells. searched on text match.
//
// the two examples below show the format. delete or replace them.

window.SHOPS = [
  {
    "name": "A-Mart",
    "owner": "Dr_Ady",
    "type": "specialized",
    "location": "-116, 116",
    "tags": ["wood", "nature", "decoration"],
    "items": [
      "Mangrove Logs: 2D for 1 Stack",
      "Mangrove Propagule: 2D for 1 Stack",
      "Mangrove Roots: 1D for 1 Stack",
      "Shroomlight: 1D for 16",
      "Oak Logs: 2D for 1 Stack",
      "Pale Oak Logs: 2D for 1 Stack",
      "Drak Oak Logs: 2D for 1 Stack",
      "Spruce Logs: 2D for 1 Stack",
      "Cherry Logs: 2D for 1 Stack",
      "Birch Logs: 2D for 1 Stack",
      "Acacia Logs: 2D for 1 Stack",
      "Jungle Logs: 2D for 1 Stack",
      "Block of Bamboo: 2D for 1 Stack",
      "Warped Stem: 2D for 1 Stack",
      "Crimson Stem: 2D for 1 Stack"
    ]
  },
  {
    "name": "Bekthul's Rockets",
    "owner": "Bekthul",
    "type": "general",
    "location": "-50, -40",
    "tags": ["travel", "enchanting"],
    "items": [
      "T3 Rockets: 1D for 2 Stacks",
      "T1 Rockets: 1D for 6 Stacks",
      "Elytras: 18D for 1",
      "Bottle Of Enchanting: 2D for 1 Stack",
      "Ender Chest: 1D for 4"
    ]
  },
  {
    "name": "Bulk Shulker",
    "owner": "Bekthul",
    "type": "specialized",
    "location": "-66, 121",
    "tags": ["travel"],
    "items": [
      "Shulker Shells: 0 (Max 64)D for 1 Stack",
      "Shulker Shells: 27D for 1 Shulker"
    ]
  },
  {
    "name": "Creaking Head",
    "owner": "LinkSaga",
    "type": "specialized",
    "location": "-102, -6",
    "tags": ["building-blocks", "decoration"],
    "items": [
      "Resin Block: 3D for 1 Stack",
      "Resin Brick: 1D for 2 Stacks",
      "Resin Bricks: 2D for 1 Stack",
      "Resin Clump: 1D for 3 Stacks"
    ]
  },
  {
    "name": "Addi's Sniffer Shop",
    "owner": "Addi_Stapolous",
    "type": "specialized",
    "location": "-100, 85",
    "tags": ["nature"],
    "items": [
      "Pitcher Plant: 4D for 1 Stack",
      "Pitcher Pod: 4D for 1 Stack",
      "Sniffer Egg: 15D for 1",
      "Torch Flower: 4D for 1 Stack",
      "Torchflower Seed: 4D for 1 Stack"
    ]
  },
  {
    "name": "Dragonna's Trim Shop",
    "owner": "TurtleAddict96 ",
    "type": "specialized",
    "location": "-46, 66",
    "tags": ["decoration", "valuables"],
    "items": [
      "Bolt Armor Trim: 7+7D for 1",
      "Coast Armor Trim: 7+1D for 1",
      "Dune Armor Trim: 7+2D for 1",
      "Eye Armor Trim: 7+5D for 1",
      "Flow Armor Trim: 7+7D for 1",
      "Host Armor Trim: 7+4D for 1",
      "Music Disc - 11: 2D for 1",
      "Music Disc - 13: 1D for 1",
      "Music Disc - Cat: 1D for 1",
      "Netherite Upgrade: 7+4D for 1",
      "Raiser Armor Trim: 7+4D for 1",
      "Rib Armor Trim: 7+7D for 1",
      "Sentry Armor Trim: 7+2D for 1",
      "Shaper Armor Trim: 7+4D for 1",
      "Silence Armor Trim: 7+17D for 1",
      "Snout Armor Trim: 7+7D for 1",
      "Spire Armor Trim: 7+5D for 1",
      "Tide Armor Trim: 7+6D for 1",
      "Vex Armor Trim: 7+3D for 1",
      "Ward Armor Trim: 7+8D for 1",
      "Wayfinder Armor Trim: 7+4D for 1",
      "Wild Armor Trim: 7+3D for 1"
    ]
  },
  {
    "name": "Food Truck's by TurtleInc",
    "owner": "TurtleAddict",
    "type": "general",
    "location": "-82, -90",
    "tags": ["food", "mob-drops"],
    "items": [
      "Cake: 0D for 1",
      "Cooked Porkchop: 1D for 2 Stacks",
      "Golden Carrot: 1D for 2 Stacks",
      "Leather: 1D for 3 Stacks",
      "Nametags: 1D for 4",
      "Pufferfish: 1D for 2",
      "Steak: 2D for 1 Stack",
      "Golden Apple: 1D for 16",
      "Honeycomb Block: 3D for 1 Stack",
      "Honey Block: 4D for 1 Stack",
      "Honeycomb: 1D for 1 Stack",
      "Pumpkins: 1D for 3 Stacks",
      "Melons: 1D for 3 Stacks"
    ]
  },
  {
    "name": "Frog Shop",
    "owner": "DUzzL_LP",
    "type": "specialized",
    "location": "21, -26",
    "tags": ["decoration"],
    "items": [
      "Ochre Froglight: 1D for 1 Stack",
      "Pearlescent Froglight: 1D for 1 Stack",
      "Verdant Froglight: 1D for 1 Stack"
    ]
  },
  {
    "name": "Giant Slime",
    "owner": "ReddieOni",
    "type": "specialized",
    "location": "19, -64",
    "tags": ["mob-drops", "redstone"],
    "items": [
      "Slime Blocks: 3D for 1 Stack"
    ]
  },
  {
    "name": "Giant Slime Basement",
    "owner": "ReddieOni",
    "type": "specialized",
    "location": "19, -64",
    "tags": ["building-blocks"],
    "items": [
      "Coarse Dirt: 1D for 4 Stacks",
      "Dirt: 1D for 6 Stacks",
      "Mud: 1D for 2 Stacks"
    ]
  },
  {
    "name": "Horn Store",
    "owner": "LinkSaga ",
    "type": "specialized",
    "location": "-120, 72",
    "tags": ["decoration"],
    "items": [
      "Admire : 9D for 1",
      "Call: 9D for 1",
      "Dream: 9D for 1",
      "Feel: 5D for 1",
      "Ponder: 5D for 1",
      "Seek : 5D for 1",
      "Sing: 5D for 1",
      "Yearn: 9D for 1"
    ]
  },
  {
    "name": "Iron Anvil",
    "owner": "ArSyb",
    "type": "general",
    "location": "-8, -59",
    "tags": ["building-blocks", "redstone", "decoration"],
    "items": [
      "Anvils: 1D for 4",
      "Hoppers: 1D for 8",
      "Iron Blocks: 6D for 1 Stack",
      "Iron Blocks: 3D for 32",
      "Iron Chains: 1D for 32",
      "Iron Bars: 1D for 1 Stack",
      "Piston: 1D for 16",
      "Sticky Piston: 1D for 8",
      "Lanterns: 2D for 1 Stack",
      "Soul Lanterns: 2D for 1 Stack"
    ]
  },
  {
    "name": "LinkSaga's Redstone Shop",
    "owner": "LinkSaga",
    "type": "specialized",
    "location": "-115, -25",
    "tags": ["redstone"],
    "items": [
      "Crafter: 1D for 8",
      "Dispenser: 1D for 8",
      "Dropper: 1D for 32",
      "Noteblock: 1D for 16",
      "Observer: 1D for 8",
      "Piston: 1D for 16",
      "Redstone Block: 1D for 16",
      "Redstone Comparator: 1D for 8",
      "Redstone Lamp: 1D for 8",
      "Redstone Repeater: 1D for 16",
      "Redstone Torch: 1D for 1 Stack",
      "Sticky Piston: 1D for 8",
      "Target: 1D for 8"
    ]
  },
  {
    "name": "LinkSaga's Market Stall",
    "owner": "LinkSaga",
    "type": "general",
    "location": "44, 5",
    "tags": ["travel", "brewing", "nature"],
    "items": [
      "Conduit Set: 27 (3 Blocks)D for 1",
      "Ominius Bottle I: 1D for 1 Stack",
      "Ominius Bottle II: 2D for 1 Stack",
      "Ominius Bottle V: 3D for 1 Stack",
      "Powdered Snow: 2D for 1"
    ]
  },
  {
    "name": "Lush Axolotl",
    "owner": "ArSyb",
    "type": "general",
    "location": "95, -2",
    "tags": ["nature"],
    "items": [
      "Azalea: 1D for 1 Stack",
      "Azalea Leaves: 1D for 1 Stack",
      "Big Dripleaf: 1D for 32",
      "Blue Axolotl: 180 (20 Blocks)D for 1",
      "Common Colour Axolotl: 1D for 1",
      "Flowering Azalea: 1D for 1 Stack",
      "Flowering Azalea Leaves: 1D for 1 Stack",
      "Glow Berries: 1D for 2 Stacks",
      "Glow Lichen: 2D for 1 Stack",
      "Moss Block: 1D for 2 Stacks",
      "Moss Carpet: 1D for 3 Stacks",
      "Pale Moss Block: 1D for 2 Stacks",
      "Pale Moss Carpet: 1D for 3 Stacks"
    ]
  },
  {
    "name": "Pie_mont's Amethyst Shop",
    "owner": "Pie_mont",
    "type": "specialized",
    "location": "-90, -115",
    "tags": ["building-blocks", "decoration"],
    "items": [
      "Amethyst Block: 2D for 1 Stack",
      "Amethyst Cluster: 4D for 1 Stack",
      "Amethyst Shard: 1D for 2 Stacks",
      "Large Amethyst Bud: 1D for 16",
      "Medium Amethyst Bud: 1D for 16",
      "Small Amethyst Bud: 1D for 16"
    ]
  },
  {
    "name": "Potions & Whatnot",
    "owner": "DKAverage & Amadalia",
    "type": "specialized",
    "location": "-110, 195",
    "tags": ["brewing"],
    "items": [
      "Potion of Healing: 1D for 2",
      "Potion of Healing: 13D for 1 Sb",
      "Potion of Healing II: 1D for 1",
      "Potion of Healing II: 20D for 1 Sb",
      "Potion of Strength: 1D for 2",
      "Potion of Strength: 13D for 1 Sb",
      "Potion of Strength II: 1D for 1",
      "Potion of Strength II: 20D for 1 Sb",
      "Potion of Fire Resistance (3:00): 1D for 1",
      "Potion of Fire Resistance (3:00): 20D for 1 Sb",
      "Potion of Fire Resistance (8:00): 2D for 1",
      "Potion of Fire Resistance (8:00): 45D for 1 Sb",
      "Potion of Swiftness: 1D for 3",
      "Potion of Swiftness: 9D for 1 Sb",
      "Potion of Swiftness (Speed II): 1D for 2",
      "Potion of Swiftness (Speed II): 13D for 1 Sb",
      "Potion of Invisibility (3:00): 1D for 1",
      "Potion of Invisibility (3:00): 20D for 1 Sb",
      "Potion of Invisibility (8:00): 2D for 1",
      "Potion of Invisibility (8:00): 45D for 1 Sb",
      "Potion of Water Breathing (3:00): 2D for 1",
      "Potion of Water Breathing (3:00): 45D for 1 Sb",
      "Potion of Slow Falling (1:30): 1D for 1",
      "Potion of Slow Falling (1:30): 20D for 1 Sb",
      "Potion of Slow Falling (4:00): 2D for 1",
      "Potion of Slow Falling (4:00): 45D for 1 Sb",
      "Potion of Night Vision (3:00): 1D for 2",
      "Potion of Night Vision (3:00): 13D for 1 Sb",
      "Potion of Night Vision (8:00): 1D for 1",
      "Potion of Night Vision (8:00): 20D for 1 Sb",
      "Potion of Wind Charging: 2D for 1",
      "Splash Potion of Weakness: 1D for 1",
      "Splash Potion of Weakness: 20D for 1 Sb",
      "Potion of Regeneration: 3D for 1",
      "Potion of the Turtle Master: 2D for 1",
      "Ominous Bottle V: 1D for 16",
      "Potions on request"
    ]
  },
  {
    "name": "PPG Shop",
    "owner": "PPG",
    "type": "general",
    "location": "-10, 120",
    "tags": ["food", "wood", "valuables", "travel", "enchanting"],
    "items": [
      "Turtle Scute: 15D for 5",
      "Beacon: 9D for 1",
      "Mending: 2D for 1",
      "Unbreaking III: 2D for 1"
    ]
  },
  {
    "name": "7/11",
    "owner": "PPG",
    "type": "specialized",
    "location": "63, -39",
    "tags": ["decoration"],
    "items": [
      "Dye - All Colours: 1D for 1 Stack",
      "Glass: 1D for 3 Stacks",
      "Glass: 7D for 1 Shulker",
      "Coloured Glass - All Colours: 1D for 2 Stacks",
	  "Shulker of Coloured Glass - All Colours: 12D for 1 Shulker",
	  "Shulker of Dye - Any Colour: 20D for 1 Shulker",
      "Glow Squid Ink: 2D for 1 Stack",
      "Tinted Glass: 2D for 1 Stack"
    ]
  },
  {
    "name": "Redrum's Shop",
    "owner": "Redrum",
    "type": "general",
    "location": "-125,  -53",
    "tags": ["food", "mob-drops", "building-blocks", "decoration"],
    "items": [
      "Feathers: 1D for 64",
      "Eggs: 1D for 16",
      "Brown Eggs: 1D for 16",
      "Blue Eggs: 1D for 16",
      "Bread: 1D for 64",
      "Beehive with 3 Bees: 1D for 1",
      "Honeycombs: 1D for 64",
      "Honey Bottles: 1D for 32",
      "Poppies: 2D for 64",
      "Blocks of Iron: 2D for 64",
      "Sugar Cane: 1D for 64",
      "Bamboo: 1D for 128",
      "Jobsite Blocks: 1D for 4",
      "Blocks of Quartz: 2D for 64",
      "Lanterns: 2D for 64",
      "Bookshelves: 1D for 16",
      "Terracotta (Any Color): 2D for 64",
      "Dripstone Blocks: 2D for 64",
      "Bricks: 1D for 64"
    ]
  },
  {
  "name": "Sensei's General Store",
  "owner": "SenseiWoo",
  "type": "general",
  "location": "-1, -24",
  "tags": ["enchanting", "food", "mob-drops", "equipment", "building-blocks"],
  "items": [
    "Aqua Affinity: 2D for 1",
    "Baked Potato: 1D for 1 Stack",
    "Bamboo: 1D for 1 Stack",
    "Bane of Anthropods V: 2D for 1",
    "Beacon: 9D for 1",
    "Black Wool: 2D for 1 Stack",
    "Blast Protection IV: 2D for 1",
    "Blue Wool: 2D for 1 Stack",
    "Bone: 1D for 1 Stack",
    "Breach IV: 2D for 1",
    "Bread: 1D for 2 Stacks",
    "Brick: 1D for 2 Stacks",
    "Brown Wool: 2D for 1 Stack",
    "Cactus: 1D for 1 Stack",
    "Channeling: 2D for 1",
    "Cooked Cod: 1D for 2 Stacks",
    "Cookies: 1D for 1 Stack",
    "Curse of Binding: 2D for 1",
    "Curse of Vanishing: 2D for 1",
    "Cyan Wool: 2D for 1 Stack",
    "Density V: 2D for 1",
    "Depth Strider III: 2D for 1",
    "Diamond Axe: 2D for 1",
    "Diamond Boots: 2D for 1",
    "Diamond Chestplate: 2D for 1",
    "Diamond Helmet: 2D for 1",
    "Diamond Hoe: 2D for 1",
    "Diamond Leggings: 2D for 1",
    "Diamond Pickaxe: 2D for 1",
    "Diamond Shovel: 2D for 1",
    "Diamond Sword: 2D for 1",
    "Efficiency V: 2D for 1",
    "Feather Falling IV: 2D for 1",
    "Fire Aspect II: 2D for 1",
    "Fire Protection IV: 2D for 1",
    "Flame: 2D for 1",
    "Fortune III: 2D for 1",
    "Frost Walker II: 2D for 1",
    "Glow Ink: 3D for 1 Stack",
    "Gray Wool: 2D for 1 Stack",
    "Green Wool: 2D for 1 Stack",
    "Honeycomb: 36D for 1 Shulker",
    "Impaling V: 2D for 1",
    "Infinity: 2D for 1",
    "Knockback II: 2D for 1",
    "Light Blue Wool: 2D for 1 Stack",
    "Light Gray Wool: 2D for 1 Stack",
    "Lime Wool: 2D for 1 Stack",
    "Looting III: 2D for 1",
    "Loyalty III: 2D for 1",
    "Luck of the Sea III: 2D for 1",
    "Lure III: 2D for 1",
    "Magenta Wool: 2D for 1 Stack",
    "Mending: 2D for 1",
    "Mending and Unbreaking III: 2D for 1",
    "Multishot: 2D for 1",
    "Orange Wool: 2D for 1 Stack",
    "Piercing IV: 2D for 1",
    "Pink Wool: 2D for 1 Stack",
    "Power V: 2D for 1",
    "Projectile Protection IV: 2D for 1",
    "Protection IV: 2D for 1",
    "Pumpkin Pie: 1D for 1 Stack",
    "Punch II: 2D for 1",
    "Purple Wool: 2D for 1 Stack",
    "Quick Charge III: 2D for 1",
    "Red Wool: 2D for 1 Stack",
    "Respiration III: 2D for 1",
    "Riptide III: 2D for 1",
    "Saddles: 1D for 3",
    "Sharpness V: 2D for 1",
    "Silk Touch: 2D for 1",
    "Smite V: 2D for 1",
    "Smooth Stone: 1D for 1 Stack",
    "Stone: 1D for 2 Stacks",
    "Sweeping Edge III: 2D for 1",
    "Thorns III: 2D for 1",
    "Totem of Undying: 2D for 1",
    "Unbreaking III: 2D for 1",
    "White Wool: 2D for 1 Stack",
    "Wither Skeleton Skulls: 9D for 3",
    "Yellow Wool: 2D for 1 Stack"
  ]
},
  {
    "name": "The Druid's Grove",
    "owner": "LadyMariska",
    "type": "specialized",
    "location": "-140, 52",
    "tags": ["nature", "wood"],
    "items": [
      "Allium: 2D for 1 Stack",
      "Azure Bluet: 2D for 1 Stack",
      "Bamboo: 1D for 1 Stack",
      "Blue Orchid: TBAD for 1 Stack",
      "Cornflower: 2D for 1 Stack",
      "Dandilion: 2D for 1 Stack",
      "Lilac: 3D for 1 Stack",
      "Lily of the Valley: 2D for 1 Stack",
      "Orange Tulip: 2D for 1 Stack",
      "Oxeye Daisy: 2D for 1 Stack",
      "Peony: 3D for 1 Stack",
      "Pink Petals: 2D for 1 Stack",
      "Pink Tulip: 2D for 1 Stack",
      "Poppy: 2D for 1 Stack",
      "Red Tulip: 2D for 1 Stack",
      "Rose: 3D for 1 Stack",
      "Sunflower: 2D for 1 Stack",
      "Vines: 1D for 1 Stack",
      "White Tulip: 2D for 1 Stack",
      "Wildflowers: 2D for 1 Stack"
    ]
  },
  {
    "name": "The Pirates",
    "owner": "Kush_XD",
    "type": "general",
    "location": "-25, 131",
    "tags": ["building-blocks", "brewing", "decoration", "nature"],
    "items": [
      "Waxed Copper: 3D for 1 Stack",
      "Random Copper: 1D for 8",
      "Random Potions: 2D for 1",
      "Sponge: 4D for 1",
      "Misc Items: 3D for 1",
      "Heads: 1D for 1",
      "Misc Armour Trims: 10D for 1",
      "Special Heads: 12D for 1",
      "Decorated Pot: 1D for 3"
    ]
  },
  {
    "name": "The Skulk Emporium",
    "owner": "Kush_XD",
    "type": "specialized",
    "location": "47,21",
    "tags": ["decoration", "redstone"],
    "items": [
      "Skulk: 1D for 1 Stack",
      "Skulk Sensor: 1D for 32",
      "Skulk Shrieker: 1D for 16",
      "Skulk Vein: 1D for 1 Stack"
    ]
  },
  {
  "name": "Train Shop",
  "owner": "DarkCows",
  "type": "general",
  "location": "-80, 20",
  "tags": ["mob-drops", "building-blocks", "enchanting", "valuables"],
  "items": [
    "Coal Blocks: 1D for 1 Stack",
    "Diamonds: 1 Ancient Debris for 16",
    "Obsidian: 4D for 1 Shulker",
    "Slime: 56D for 1 Shulker",
    "String: 4D for 1 Shulker",
    "Swift Sneak III: 16D for 1",
    "Music Disc - Otherside: 16D for 1"
   ]
  },
  {
    "name": "Wither Skull",
    "owner": "LinkSaga",
    "type": "specialized",
    "location": "-73, -25",
    "tags": ["valuables", "nature", "decoration"],
    "items": [
      "Beacon: 9D for 1",
      "Wither Rose: 1D for 3 Stacks",
      "Wither Skull: 6D for 3"
    ]
  },
  {
    "name": "Izzy's Redstone Raccoon",
    "owner": "Just_Izzy",
    "type": "specialized",
    "location": "-201, 280",
    "tags": ["redstone", "mob-drops", "building-blocks"],
    "items": [
      "Redstone Dust: 1D for 1 Stack",
      "Redstone Block: 4D for 1 Stack",
      "Redstone Torch: 1D for 1 Stack",
      "Barrel: 6D for 1 Stack",
      "Chest: 4D for 1 Stack",
      "Observer: 8D for 1 Stack",
      "Honey Block: 4D for 1 Stack",
      "Slime Blocks: 3D for 1 Stack",
      "Crafter: 8D for 1 Stack",
      "Dispenser: 8D for 1 Stack",
      "Dropper: 4D for 1 Stack",
      "Redstone Repeater: 4D for 1 Stack",
      "Hopper: 4D for 1 Stack",
      "Redstone Comparator: 8D for 1 Stack",
      "Redstone Lamp: 8D for 1 Stack",
      "Piston: 4D for 1 Stack",
      "Sticky Piston: 8D for 1 Stack",
      "Composter: 4D for 1 Stack",
      "Target Block: 4D for 1 Stack",
      "Trapdoor: 2D for 1 Stack",
      "Noteblock: 4D for 1 Stack",
      "Copper Bulb: 6D for 1 Stack",
      "My First Redstone Kit: 99D for 1 Shulker"
    ]
  },
  {
    "name": "LifelessRomantic’s Ethically Acquired Bones",
    "owner": "LifelessRomantic, Ender Shepherd",
    "type": "specialized",
    "location": "-172, -17",
    "tags": ["mob-drops", "building-blocks"],
    "items": [
      "Bones: 1D for 1 Stack",
      "Bone Blocks: 2D for 1 Stack",
      "Bone Meal: 1D for 3 Stacks"
    ]
  },
  {
    "name": "Pinkie's Pink Cherry Tree",
    "owner": "PinkietheNinja",
    "type": "general",
    "location": "-114, -87",
    "tags": ["nature", "enchanting", "travel"],
    "items": [
      "Cherry Blossom Petals: 2D for 1 Stack",
      "Silk Touch Book: 2D for 1",
      "Ender Chests: 1D for 4",
      "Cherry Leaves: 1D for 1 Stack",
      "Grow Pack (16 Saplings, 32 Bonemeal, Bundle): 3D for 1"
    ]
  },
  {
    "name": "The RV",
    "owner": "1Betty1",
    "type": "general",
    "location": "-66, 172",
    "tags": ["valuables", "food", "equipment"],
    "items": [
      "Emerald Blocks: 4D for 1 Stack",
      "Silk Touch Pickaxe: 9D for 1",
      "Fortune III Pickaxe: 10D for 1",
      "Axe: 10D for 1",
      "Silk Touch Shovel: 10D for 1",
      "Hoe: 6D for 1"
    ]
  },
  {
    "name": "Apple's Garden Supplies",
    "owner": "TinyApplePie",
    "type": "specialized",
    "location": "-41, -57",
    "tags": ["nature"],
    "items": [
      "Firefly Bush: 1D for 32",
      "Bush: 1D for 32",
      "Fern: 1D for 32",
      "Hanging Roots: 1D for 32",
      "Pale Hanging Moss: 1D for 32",
      "Glow Lichen: 1D for 32",
      "Glowberries: 1D for 1 Stack",
      "Big Dripleaf: 1D for 32",
      "Flowering Azalea: 1D for 1 Stack",
      "Azalea: 1D for 1 Stack",
      "Mangrove Roots: 1D for 32",
      "Mushroom Stem: 2D for 1 Stack",
      "Red Mushroom Block: 1D for 1 Stack",
      "Brown Mushroom Block: 1D for 1 Stack",
      "Oak Leaves: 1D for 2 Stacks",
      "Dark Oak Leaves: 1D for 2 Stacks",
      "Spruce Leaves: 1D for 2 Stacks",
      "Acacia Leaves: 1D for 2 Stacks",
      "Jungle Leaves: 1D for 2 Stacks",
      "Birch Leaves: 1D for 2 Stacks",
      "Mangrove Leaves: 1D for 2 Stacks",
      "Pale Oak Leaves: 1D for 2 Stacks",
      "Cherry Leaves: 1D for 2 Stacks",
      "Azalea Leaves: 1D for 2 Stacks",
      "Flowering Azalea Leaves: 1D for 1 Stack"
    ]
  },
  {
    "name": "Tree Babies",
    "owner": "Tina1230",
    "type": "specialized",
    "location": "-28, -84",
    "tags": ["wood", "nature", "building-blocks"],
    "items": [
      "Oak Saplings: 2D for 16",
      "Dark Oak Saplings: 2D for 16",
      "Pale Oak Saplings: 2D for 16",
      "Cherry Saplings: 2D for 16",
      "Birch Saplings: 2D for 16",
      "Spruce Saplings: 2D for 16",
      "Mangrove Propagules: 2D for 16",
      "Jungle Saplings: 6D for 8",
      "Dirt: 1D for 4 Stacks",
      "Dirt: 7D for 1 Shulker",
      "Dirt: 6D each for 10+ Shulkers",
      "Crimson Nylium: 2D for 8",
      "Warped Nylium: 2D for 8",
      "Warped Fungus: 2D for 16",
      "Crimson Fungus: 2D for 16",
      "Twisted Vines",
      "Weeping Vines",
      "Chorus Flower Combo: 3D for 8 Chorus Flowers & 8 Endstone"
    ]
  },
  {
    "name": "Stone Skeleton",
    "owner": "BlueMikko",
    "type": "specialized",
    "location": "-15, 57",
    "tags": ["building-blocks"],
    "items": [
      "Granite: 3D for 1 Stack",
      "Stone: 1D for 3 Stacks",
      "Stone: 7D for 1 Shulker",
      "Smooth Stone: 1D for 1 Stack",
      "Smooth Stone: 20D for 1 Shulker",
      "Scaffolding: 1D for 1 Stack",
      "Scaffolding: 20D for 1 Shulker",
      "Andesite: 3D for 1 Stack",
	    "Diorite: 3D for 1 Stack",
	    "Deepslate: 1D for 1 Stack",
	    "Cobbled Deepslate: 1D for 1 Stack",
      "Cobbled Deepslate: 20D for 1 Shulker",
      "Deepslate: 20D for 1 Shulker",
      "Tuff: 4D for 1 Stack"
    ]
  },
  {
    "name": "Silver, Sora & Bek's Raw Iron Stall",
    "owner": "Silver, Sora, Bek",
    "type": "specialized",
    "location": "34, -9",
    "tags": ["building-blocks"],
    "items": [
      "Raw Iron: Give 16 for 1D",
      "Raw Iron: Give 32 for 2D",
      "Raw Iron: Give 48 for 3D",
      "Raw Iron: Give 64 for 4D"
    ]
  },
  {
    "name": "Brolympus",
    "owner": "TunaBeef",
    "type": "specialized",
    "location": "73, -34",
    "tags": ["decoration"],
    "items": [
      "Map Arts"
    ]
  },
  {
    "name": "Star Corp",
    "owner": "Star Crop",
    "type": "general",
    "location": "40, 33",
    "tags": ["general"],
    "items": [
      "Armor: 2D for 1",
      "Golden Carrots: 1D for 2 Stacks",
      "Gunpowder: 2D for 1 Stack",
      "Paper: 1D for 1 Stack",
      "Potions: 3D for 1",
      "T1 Rockets: 1D for 6 Stacks",
      "T2 Rockets: 1D for 4 Stacks",
      "T3 Rockets: 1D for 3 Stacks",
      "TNT: 10D for 1 Stack",
      "Tools: 2D for 1",
      "Totems: 1D for 2",
      "Wood types: 2D for 1 Stack"
    ]
  },
  {
    "name": "Dobby Rent",
    "owner": "Poidragon",
    "type": "general",
    "location": "-132, 230",
    "tags": ["mob-drops", "enchanting", "redstone"],
    "items": [
      "Trident (Non-Enchanted): 5D for 1",
      "Loyalty III Book: 2D for 1",
      "Riptide III Book: 2D for 1",
      "Impaling V Book: 2D for 1",
      "Mending Book: 2D for 1",
      "Unbreaking III Book: 2D for 1",
      "Nautilus Shells: 4D for 8",
      "Turtle Eggs: 5D for 2",
      "Redstone Block: 1D for 16",
      "Rent a working bee to do stuff for you",
	    "Enchanted Trident: 8D for 1",
	    "Bottle o' Enchanting: 1D for 32",
      "Golden Carrots: 1D for 2 Stack"
    ]
  },
  {
    "name": "piemont´s NETHER WART stall",
    "owner": "Pie_mont",
    "type": "specialized",
    "location": "47, -28",
    "tags": ["nature", "building-blocks"],
    "items": [
      "Nether Wart: 2D for 1 Stack",
      "Red Nether Bricks: 3D for 1 Stack"
    ]
  },
  {
    "name": "Pimkets Shop",
    "owner": "pimkets",
    "type": "general",
    "location": "99, 23",
    "tags": ["travel", "valuables", "enchanting", "equipment", "building-blocks", "nature", "mob-drops", "redstone"],
    "items": [
      "Bone Block: 2D for 1 Stack",
      "Cactus: 1D for 1 Stack",
      "Diamond \"Bulk Box\" (Full Set Armor & Tools in Light Blue Shulker): 8D for 1",
      "Emerald Block: 4D for 1 Stack",
      "Glow Ink Sac: 2D for 1 Stack",
      "Honey Block: 4D for 1 Stack",
      "Honeycomb: 1D for 1 Stack",
      "Iron Block: 2D for 1 Stack",
      "Paper: 1D for 4 Stacks",
      "Rockets (T1): 1D for 6 Stacks",
      "Several Enchanted Books: 2D for 1",
      "Slime Block: 3D for 1 Stack",
      "Totem of Undying: 2D for 1",
      "Villager Traded Diamond Armor: 2D for 1",
      "Villager Traded Diamond Tools: 2D for 1",
      "Wool (All Colors): 2D for 1 Stack"
    ]
  },
  {
    "name": "Funny__chicken's Stall",
    "owner": "Funny__chicken",
    "type": "general",
    "location": "-167, 247",
    "tags": ["travel", "building-blocks"],
    "items": [
      "Andesite: 3D for 1 Stack",
      "Basalt: 2D for 1 Stack",
      "Brown Mushroom Blocks: 2D for 1 Stack",
      "Cobbled Deepslate: 1D for 3 Stacks",
      "Cobblestone: 1D for 2 Stacks",
      "Deepslate: 1D for 3 Stacks",
      "Diorite: 3D for 1 Stack",
      "Enchanted Elytra: 32D for 1",
      "Granite: 3D for 1 Stack",
      "Mud: 1D for 2 Stacks",
      "Red Mushroom Blocks: 2D for 1 Stack",
      "Stone: 1D for 3 Stacks"
    ]
  },
  {
  "name": "The Ore Store",
  "owner": "Tina1230",
  "type": "specialized",
  "location": "-62, -54",
  "tags": ["building-blocks", "valuables"],
  "items": [
    "Ancient Debris: 20D for 1",
    "Coal Ore: 2D for 1 Stack",
    "Copper Ore: 4D for 32",
    "Deepslate Copper Ore: 2D for 16",
    "Deepslate Emerald Ore: 450D for 1",
    "Deepslate Gold Ore: 2D for 16",
    "Deepslate Iron Ore: 2D for 16",
    "Deepslate Lapis Ore: 2D for 32",
    "Deepslate Redstone Ore: 1D for 32",
    "Diamond Ore: 8D for 1",
    "Emerald Ore: 8D for 1",
    "Gold Ore: 4D for 32",
    "Iron Ore: 6D for 1 Stack",
    "Lapis Ore: 4D for 32",
    "Nether Gold Ore: 2D for 16",
    "Nether Quartz Ore: 3D for 32",
      "Redstone Ore: 6D for 32"
    ]
  },
  {
    "name": "Interesting’s Netherite",
    "owner": "Interesting",
    "type": "specialized",
    "location": "51, 0",
    "tags": ["valuables"],
    "items": [
      "Netherite Ingot: 48D for 1"
    ]
  },
  {
    "name": "Conduit Coleoid's Corals",
    "owner": "samom37",
    "type": "specialized",
    "location": "-139, 89",
    "tags": ["nature"],
    "items": [
      "All Coral Blocks: 1D for 8",
      "All Coral Fans: 1D for 16",
      "All Corals: 1D for 16"
    ]
  },
  {
    "name": "The Copper Golem",
    "owner": "DKAverage",
    "type": "specialized",
    "location": "-69, 7",
    "tags": ["building-blocks"],
    "items": [
      "Chisled Copper Block (Non-Waxed): 1D for 32",
      "Chisled Copper Block (Oxidized): 2D for 32",
      "Copper Bars (Non-Waxed): 1D for 16",
      "Copper Bars (Oxidized): 3D for 16",
      "Copper Block (Non-Waxed): 1D for 32",
      "Copper Block (Waxed): 2D for 32",
      "Copper Block (Oxidized): 2D for 32",
      "Copper Block (Wax Oxidized): 3D for 32",
      "Copper Bulb (Non-Waxed): 1D for 16",
      "Copper Bulb (Oxidized): 3D for 16",
      "Copper Chain (Non-Waxed): 1D for 16",
      "Copper Chain (Oxidized): 3D for 16",
      "Copper Chest (Non-Waxed): 1D for 16",
      "Copper Chest (Oxidized): 3D for 16",
      "Copper Doors (Non-Waxed): 1D for 16",
      "Copper Doors (Oxidized): 3D for 16",
      "Copper Golem: 1D for 8",
      "Copper Grate (Non-Waxed): 1D for 32",
      "Copper Grate (Oxidized): 2D for 32",
      "Copper Lantern (Non-Waxed): 1D for 16",
      "Copper Lantern (Oxidized): 3D for 16",
      "Copper Lightning Rod (Non-Waxed): 1D for 16",
      "Copper Lightning Rod (Oxidized): 3D for 16",
      "Copper Stairs (Non-Waxed): 1D for 32",
      "Copper Stairs (Oxidized): 2D for 32",
      "Copper Torches: 1D for 2 Stacks",
      "Copper Trapdoor (Non-Waxed): 1D for 16",
      "Copper Trapdoor (Oxidized): 3D for 16",
      "Cut Copper Block (Non-Waxed): 1D for 32",
      "Cut Copper Block (Oxidized): 2D for 32",
      "Cut Copper Slab (Non-Waxed): 1D for 1 Stack",
      "Cut Copper Slab (Oxidized): 2D for 1 Stack"
    ]
  },
  {
    "name": "the FROGGY DROP SHOP",
    "owner": "Arker85",
    "type": "specialized",
    "location": "-194, 220",
    "tags": ["decoration"],
    "items": [
      "Froglights: 1D for 1 Stack",
      "Froglights: 36D for 1 Shulker"
    ]
  },
  {
    "name": "Heads & Tales",
    "owner": "Flight_of_Stars",
    "type": "specialized",
    "location": "-242, 251",
    "tags": ["decoration"],
    "items": [
      "Armor Stand Scene: 9D per figure (includes head, clothing, props, and placement)",
      "Custom Head: 9D for your design in the game + 5 copies",
      "Heads: 3D for 1"
    ]
  },
  {
    "name": "Rad Rat Bulk Barter",
    "owner": "Awoomenatee",
    "type": "specialized",
    "location": "-120, 160",
    "tags": ["valuables", "building-blocks", "mob-drops"],
    "items": [
      "Blackstone: 3D for 1 Shulker",
      "Crying Obsidian: 3D for 1 Shulker",
      "Enderpearls: 5D for 1 Shulker",
      "Fire Charge: 3D for 1 Shulker",
      "Gold Blocks: 45D for 1 Shulker",
      "Gold Ingots: 6D for 1 Shulker",
      "Gravel: 2D for 1 Shulker",
      "Leather: 7D for 1 Shulker",
      "Obsidian: 4D for 1 Shulker",
      "Quartz: 12D for 1 Shulker",
      "Soul Sand: 3D for 1 Shulker",
      "Spectral Arrow: 2D for 1 Shulker",
      "String: 4D for 1 Shulker"
    ]
  },
  {
    "name": "The Proud Freaks",
    "owner": "SandraBaroness",
    "type": "specialized",
    "location": "32, -83",
    "tags": ["decoration"],
    "items": [
      "Pride Banners: 4D for 1"
    ]
  },
  {
    "name": "Sniffie's Garden",
    "owner": "SandraBaroness",
    "type": "specialized",
    "location": "-101, 88",
    "tags": ["nature", "decoration"],
    "items": [
      "Pitcher Plants: 4D for 1 Stack",
      "Pitcher Pods: 4D for 1 Stack",
      "Small Drip Leaf: 2D for 1",
      "Sniffer Eggs: 15D for 1",
      "Spore Blossoms: 3D for 1",
      "Torchflower Seeds: 4D for 1 Stack",
      "Torchflowers: 4D for 1 Stack"
    ]
  },
  {
    "name": "Rex’s Ranch",
    "owner": "MambasaurusRex",
    "type": "general",
    "location": "-52, -120",
    "tags": ["nature", "building-blocks", "enchanting"],
    "items": [
      "Allay (Special Order): 20D for 1",
      "Armadillos (Special Order): 20D for 1",
      "Beehive: 2D for 1 Hive",
      "Block of Quartz: 2D for 1 Stack",
      "Blue Axolotl: 180D for 1",
      "Calcite: 3D for 1 Stack",
      "Camel (Special Order): 32D for 1",
      "Cod Fish Bucket: 2D for 1 Bucket",
      "Frogs (Special Order): 5D for 1",
      "Goats (Special Order): 20D for 1",
      "Happy Ghast: 4D for 1",
      "Heavy Core: 50D for 1",
      "Mooshrooms (Special Order): 20D for 1",
      "Panda (Special Request): 32D for 1",
      "Parrot (Specific Color Request, Untamed) (Special Request): 25D for 1",
      "Pufferfish Bucket: 2D for 1 Bucket",
      "Salmon Bucket: 2D for 1 Bucket",
      "Tadpoles Bucket: 2D for 1 Bucket",
      "Tropical Fish Bucket: 2D for 1 Bucket",
      "Turtle Egg: 4D for 1",
      "Villagers (Special Order): 16D for 1",
      "Wind Charge I Book: 35D for 1",
      "Zombie Camel (Special Request): 64D for 1",
      "Zombie Pigmen (Special Order): 20D for 1"
    ]
  },
  {
    "name": "Tochik's Gazebo",
    "owner": "tochik",
    "type": "general",
    "location": "-28, 147",
    "tags": ["building-blocks"],
    "items": [
      "Sponges: 4D for 1"
    ]
  },
  {
    "name": "Vanne's Wandering Cart",
    "owner": "vinkuva_vanne",
    "type": "general",
    "location": "88, 63",
    "tags": ["building-blocks", "nature", "valuables"],
    "items": [
      "Iron Blocks: 2D for 1 Stack",
      "Moss: 1D for 2 Stacks",
      "Pale Moss: 1D for 2 Stacks",
      "Tuff: 4D for 1 Stack"
    ]
  },
  {
    "name": "Fishing Stall",
    "owner": "Pie_mont",
    "type": "specialized",
    "location": "59, -14",
    "tags": ["tools", "nature"],
    "items": [
      "BUYING: Bucket with Pufferfish: 2D for 1 Bucket",
      "BUYING: Bucket with Tropical Fish: 2D for 1 Bucket",
      "BUYING: Stack of Fish (Cod/Salmon): 1D for 1 Stack",
      "SELLING: Bucket with Pufferfish: 2D for 1 Bucket",
      "SELLING: Bucket with Tropical Fish: 2D for 1 Bucket",
      "SELLING: Fishing Rods (Fully Enchanted): 8D for 1",
      "SELLING: Stack of Fish (Cod/Salmon): 1D for 1 Stack"
    ]
  },
  {
    "name": "Nimbus Express",
    "owner": "ender_shepherd",
    "type": "general",
    "location": "-24, 107",
    "tags": ["building-blocks", "tools"],
    "items": [
      "Cinabar: 6D for 1 Stack",
      "Deepslate Bricks: 2D for 1 Stack",
      "Scaffolding: 1D for 1 Stack",
      "Stone Bricks: 2D for 1 Stack",
      "Tuff Bricks: 4D for 1 Stack"
    ]
  },
  {
  "name": "Sulfur Shop",
  "owner": "Manky__",
  "type": "specialized",
  "location": "-68, 99",
  "tags": ["building-blocks", "nature"],
  "items": [
    "Cinnabar: 6D for 1 Stack",
    "Cinnabar: 122D for 1 Shulker",
    "Potent Sulfur: 2D for 6",
    "Sulfur Block: 2D for 1 Stack",
    "Sulfur Block: 81D for 1 Shulker",
    "Sulfur Spike: 2D for 1 Stack"
	]
   },
   {
  "name": "The Pine Needle",
  "owner": "beedisciple & ker0nr0n",
  "type": "specialized",
  "location": "-115, 50",
  "tags": ["decoration", "food", "nature", "wood"],
  "items": [
    "Azalea Tree: 1D for 1 Stack",
    "Beets: 1D for 1 Stack",
    "Berries: 1D for 1 Stack",
    "Bread: 1D for 1 Stack",
    "Brown Eggs: 1D for 16",
    "Brown Mushrooms: 1D for 32",
    "Cactus Flower: 1D for 32",
    "Carrots: 1D for 1 Stack",
    "Cocoa Beans: 1D for 1 Stack",
    "Cookies: 1D for 1 Stack",
    "Eggs: 1D for 16",
    "Farmer's Starter Pack: 8D for 1 Shulker",
    "Firefly Bush: 1D for 32",
    "Flowering Azalea: 1D for 1 Stack",
    "Glowberries: 1D for 1 Stack",
    "Golden Apple: 1D for 16",
    "Golden Carrot: 1D for 2 Stacks",
    "Moss: 1D for 2 Stacks",
    "Potatoes: 1D for 1 Stack",
    "Pumpkin Pie: 1D for 1 Stack",
    "Pumpkins: 1D for 3 Stacks",
    "Red Mushrooms: 1D for 32",
    "Spruce Decor Pack: 20D for 1 Shulker",
    "Spruce Logs: 2D for 1 Stack",
    "Spruce Saplings: 2D for 16",
    "Vines: 1D for 1 Stack",
    "Wheat: 1D for 1 Stack"
  ]
},
{
  "name": "DangerZone Merch Store",
  "owner": "Just__Izzy",
  "type": "general",
  "location": "1263, -458",
  "tags": ["building-blocks", "mob-drops", "valuables"],
  "items": [
    "Bone Blocks: 63D for 1 Shulker",
    "Coal Blocks: 180D for 1 Shulker",
    "DangerZone Beacon Box: 81D for 1"
  ]
},
{
  "name": "Cave Shop",
  "owner": "Halar4",
  "type": "",
  "location": "",
  "tags": ["building-blocks", "nature"],
  "items": [
    "Clay: 1D for 4 Stacks",
    "Clay Blocks: 1D for 1 Stack",
    "Dirt: 1D for 6 Stacks",
    "Grass Blocks: 1D for 6 Stacks",
    "Mossy Cobblestone: 1D for 1 Stack",
    "Mud: 1D for 2 Stacks",
    "Terracotta: 2D for 1 Stack"
  ]
},
{
  "name": "Scorched Oasis",
  "owner": "LilaAmanita",
  "type": "specialized",
  "location": "-134, 16",
  "tags": ["nature", "wood", "decoration"],
  "items": [
    "Bamboo: 1D for 1 Stack",
    "Cactus: 1D for 1 Stack",
    "Cocoa Beans: 1D for 1 Stack",
    "Dead Bushes: 2D for 1 Stack",
    "Short Dry Grass: 1D for 1 Stack",
    "Sugar Cane: 1D for 1 Stack",
    "Tall Dry Grass: 1D for 1 Stack"
  ]
},
{
  "name": "Mr. Bucket's Buckets of Fun",
  "owner": "Vallayne",
  "type": "general",
  "location": "47, -69",
  "tags": ["mob-drops", "nature", "tools", "valuables"],
  "items": [
    "Blue Axolotl: 180D for 1",
    "Lava Bucket: 2D for 1",
    "Lava Buckets: 36D for 1 Shulker",
    "Milk Buckets: 1D for 3",
    "Milk Buckets: 6D for 1 Shulker",
    "Normal Axolotl: 1D for 1",
    "Powder Snow Bucket: 2D for 1",
    "Powder Snow Buckets: 36D for 1 Shulker",
    "Sulfur Cubes: 3D for 1",
    "Tropical Fish Bucket: 1D for 1",
    "Water Bucket: 2D for 1",
    "Water Buckets: 15D for 1 Shulker"
  ]
},
{
  "name": "Penguin's Snow Hut & More",
  "owner": "penguingreen",
  "type": "general",
  "location": "-15, 75",
  "tags": ["building-blocks", "mob-drops", "nature"],
  "items": [
    "Common Axolotl: 1D for 1",
    "Snow Blocks: 1D for 2 Stacks",
    "Snow Layers: 3D for 1 Shulker",
    "Snowballs: 1D for 1 Shulker"
  ]
},
{
  "name": "Angel's Anvil",
  "owner": "Angelshard",
  "type": "general",
  "location": "33, 20",
  "tags": ["valuables", "equipment", "enchanting", "travel"],
  "items": [
    "BUYING: Ancient Debris: 8D for 1",
    "Diamond Armour Piece: 2D for 1",
    "Diamond Bulk Box: 8D for 1",
    "Diamond Shovel: 1D for 1",
    "Diamond Tool: 2D for 1",
    "Enchantment Books: 2D for 1",
    "Ender Chest: 1D for 4",
    "Fortune: 2D for 1",
    "Fully Enchanted Boots (No Thorns/SE): 12D for 1",
    "Fully Enchanted Boots (Thorns, No SE): 14D for 1",
    "Fully Enchanted Bow: 10D for 1",
    "Fully Enchanted Chestplate (No Thorns): 8D for 1",
    "Fully Enchanted Chestplate (Thorns): 10D for 1",
    "Fully Enchanted Crossbow: 8D for 1",
    "Fully Enchanted Diamond Axe: 12D for 1",
    "Fully Enchanted Diamond Hoe: 10D for 1",
    "Fully Enchanted Diamond Pickaxe: 10D for 1",
    "Fully Enchanted Diamond Shovel: 9D for 1",
    "Fully Enchanted Diamond Sword (No Fire/KB): 12D for 1",
    "Fully Enchanted Fishing Rod: 8D for 1",
    "Fully Enchanted Helmet (No Thorns): 12D for 1",
    "Fully Enchanted Helmet (Thorns): 14D for 1",
    "Fully Enchanted Leggings (No Thorns/SE): 8D for 1",
    "Fully Enchanted Leggings (Thorns, No SE): 10D for 1",
    "Mending: 2D for 1",
    "Netherite Upgrade Copy: 4D for 1",
    "Obsidian: 1D for 2 Stacks",
    "Silk Touch: 2D for 1",
    "Unbreaking III: 2D for 1"
  ]
},
{
  "name": "Mochi's Vending Machine",
  "owner": "mildmochi",
  "type": "specialized",
  "location": "35, -11",
  "tags": ["food"],
  "items": [
    "Golden Apples: 1D for 16",
    "Golden Carrots: 1D for 2 Stacks"
  ]
},
{
  "name": "Tree's Gallery & Giftshop",
  "owner": "Treeweaver",
  "type": "specialized",
  "location": "128, -12",
  "tags": ["decoration"],
  "items": [
    "Map Art: 4D for 1"
  ]
},
{
  "name": "The Tree House",
  "owner": "Burgerman600",
  "type": "specialized",
  "location": "0, 52",
  "tags": ["wood", "building-blocks"],
  "items": [
    "Acacia Logs: 2D for 1 Stack",
    "Acacia Logs: 20D for 1 Shulker",
    "Cherry Logs: 2D for 1 Stack",
    "Cherry Logs: 20D for 1 Shulker",
    "Jungle Logs: 2D for 1 Stack",
    "Jungle Logs: 20D for 1 Shulker",
    "Oak Logs: 2D for 1 Stack",
    "Oak Logs: 20D for 1 Shulker",
    "Spruce Logs: 2D for 1 Stack",
    "Spruce Logs: 20D for 1 Shulker"
  ]
},
{
  "name": "meowders",
  "owner": "Grazu",
  "type": "specialized",
  "location": "-85, -36",
  "tags": ["valuables", "mob-drops"],
  "items": [
    "Emerald Blocks: 5D for 1 Stack",
    "Emerald Blocks: 100D for 1 Shulker",
    "Ominous Bottle III: 1D for 1 Stack",
    "Ominous Bottle IV: 1D for 32",
    "Ominous Bottle V: 1D for 16",
    "Totem of Undying: 2D for 1",
    "Totem of Undying: 34D for 1 Shulker"
  ]
},
{
  "name": "Wilderness Treasures",
  "owner": "Justus",
  "type": "general",
  "location": "33, 65",
  "tags": ["valuables", "enchanting", "mob-drops"],
  "items": [
    "Creator (Music Box) Music Disc: 20D for 1",
    "Creator Music Disc: 20D for 1",
    "Enchanted Book Wind Burst III: 216D for 1",
    "Enchanted Golden Apple: 32D for 1",
    "Heavy Core: 72D for 1",
    "Netherite Ingot: 40D for 1",
    "Ominous Key: 5D for 1",
    "Pigstep Music Disc: 10D for 1"
  ]
},
{
  "name": "Flight of Stars's Pet Shop & Rescue",
  "owner": "Flight of Stars",
  "type": "specialized",
  "location": "-245, 193",
  "tags": ["mob-drops", "nature", "tools"],
  "items": [
    "Aquarium Kit: 4D for 1",
    "Axolotl Food (Shulker of Tropical Fish): 9D for 1",
    "Baby Cow, Pig, or Sheep: 1D for 1",
    "Bucket of Sulfur Cube: 9D for 1",
    "Bucket of Tadpole: 2D for 1",
    "Creaking Heart: 1D for 3",
    "Dried Ghast (+ Harness): 1D for 1",
    "Full Bee Hive: 2D for 1",
    "Golden Dandelions: 2D for 32",
    "Leads: 1D for 32",
    "Nametags: 1D for 4",
    "Nautilus Armor: 3-5D for 1",
    "Puffer Fish: 2D for 1",
    "Saddles: 1D for 3",
    "Shiny Tropical Fish (1/2670): 5D for 1",
    "Shulker of All 22 Standard Fish: 27D for 1 Shulker",
    "Splash Potion of Healing: 1D for 1",
    "Splash Potion of Oozing: 1D for 1",
    "Tropical Fish School (1/2670): 27D for 1",
    "Turtle Eggs: 5D for 2",
    "Untamed Cats: 2-4D for 1",
    "Untamed Wolves: 1-2D for 1",
    "Wolf Armor: 1D for 1"
  ]
},
{
  "name": "Herbal Dialect",
  "owner": "Herbal Dialect",
  "type": "general",
  "location": "-125, -125",
  "tags": ["building-blocks", "nature", "mob-drops", "decoration", "valuables"],
  "items": [
    "Bee Head: 1D for 1",
    "Block of Copper: 2D for 1 Stack",
    "Bogged Head: 1D for 1",
    "Calcite: 3D for 1 Stack",
    "Coal Ore: 2D for 1 Stack",
    "Copper Ore: 6D for 1 Stack",
    "Cow Head: 1D for 1",
    "Deepslate Coal Ore: 10D for 1",
    "Deepslate Copper Ore: 2D for 8",
    "Deepslate Diamond Ore: 3D for 1",
    "Deepslate Gold Ore: 2D for 16",
    "Deepslate Iron Ore: 2D for 16",
    "Deepslate Lapis Ore: 2D for 8",
    "Deepslate Redstone Ore: 2D for 16",
    "Diorite: 1D for 1 Stack",
    "Full Beehive (3 Bees): 1D for 1",
    "Gold Ore: 2D for 8",
    "Granite: 3D for 1 Stack",
    "Honey Bottle: 1D for 32",
    "Honeycomb: 1D for 1 Stack",
    "Honeycomb Block: 3D for 1 Stack",
    "Iron Ore: 3D for 32",
    "Lapis Ore: 2D for 8",
    "Phantom Head: 1D for 1",
    "Phantom Membrane: 1D for 32",
    "Salmon Head: 1D for 1",
    "Small Dripleaf: 2D for 1",
    "Spore Blossom: 3D for 1",
    "Squid Head: 1D for 1",
    "Stone/Dirt/Deepslate: 7D for 1 Shulker",
    "Tropical Fish Head: 1D for 1",
    "Tuff: 4D for 1 Stack"
  ]
},
{
  "name": "Neki's Trail",
  "owner": "nekisamplayer",
  "type": "general",
  "location": "-185, 45",
  "tags": ["decoration", "valuables", "building-blocks"],
  "items": [
    "Flint: 1D for 2 Stacks",
    "Music Disc Relic: 10D for 1",
    "Pottery Sherd: 1D for 1",
    "Trims: 10D for 1",
    "Bone Block: 2D for 1 Stack",
    "Emerald: 4D for 1 Stack"
  ]
},
{
  "name": "Aequorea's Sweet Stall",
  "owner": "Aequoreavic",
  "type": "specialized",
  "location": "10, -58",
  "tags": ["food", "nature"],
  "items": [
    "Comb Blocks: 2D for 32",
    "Cookies: 1D for 1 Stack",
    "Honey Blocks: 2D for 32",
    "Pumpkin Pie: 1D for 1 Stack",
    "Sugar: 1D for 1 Stack",
    "Sweet Berries: 1D for 1 Stack",
    "Wax: 1D for 1 Stack"
  ]
},
{
  "name": "Plazia1's Netherite Shop",
  "owner": "Plazia1",
  "type": "specialized",
  "location": "-28, 119",
  "tags": ["valuables", "tools"],
  "items": [
    "Ancient Debris: 8D for 1",
    "Netherite Ingot: 32D for 1",
    "Netherite Upgrade Copy: 3D for 1"
  ]
},
{
  "name": "Crumbs Deluxe",
  "owner": "Dooks_15",
  "type": "specialized",
  "location": "-168, -75",
  "tags": ["food"],
  "items": [
    "Bread: 0D for 1 Stack",
    "Cake: 0D for 1",
    "Cookies: 0D for 1 Stack",
    "Pumpkin Pie: 0D for 1 Stack"
  ]
},
{
  "name": "Angel's Inferno",
  "owner": "Angelshard",
  "type": "general",
  "location": "15, 80",
  "tags": ["valuables", "building-blocks", "mob-drops"],
  "items": [
    "Blackstone: 1D for 1 Stack",
    "Blackstone: 20D for 1 Shulker",
    "Crying Obsidian: 1D for 5 Stacks",
    "Crying Obsidian: 3D for 1 Shulker",
    "Ender Pearl: 1D for 4 Stacks",
    "Ender Pearl: 5D for 1 Shulker",
    "Gold Blocks: 3D for 1 Stack",
    "Gold Blocks: 45D for 1 Shulker",
    "Iron Blocks: 4D for 1 Stack",
    "Iron Blocks: 81D for 1 Shulker",
    "Leather: 1D for 3 Stacks",
    "Leather: 7D for 1 Shulker",
    "Nether Brick: 1D for 5 Stacks",
    "Nether Brick: 3D for 1 Shulker",
    "Nether Quartz: 1D for 1 Stack",
    "Nether Quartz: 12D for 1 Shulker",
    "Obsidian: 1D for 2 Stacks",
    "Obsidian: 4D for 1 Shulker",
    "Soul Sand: 1D for 5 Stacks",
    "Soul Sand: 3D for 1 Shulker"
  ]
},
{
  "name": "The Moscow Mule",
  "owner": "RenewedSalt",
  "type": "specialized",
  "location": "99, -72",
  "tags": ["animals", "travel"],
  "items": [
    "High level donkey, horse, mule: 72D, 40D under 200 Minutes"
  ]
},
{
  "name": "UFO",
  "owner": "Bekthul",
  "type": "general",
  "location": "54, 72",
  "tags": ["building-blocks", "mob-drops", "valuables", "decoration"],
  "items": [
    "Basalt: 1D for 1 Stack",
    "Blackstone: 1D for 1 Stack",
    "Blackstone: 20D for 1 Shulker",
    "Blaze Rods: 3D for 1 Stack",
    "Dark Prismarine: 2D for 1 Stack",
    "End Rods: 5D for 1 Stack",
    "End Stone: 2D for 1 Stack",
    "Honey Blocks: 1D for 16",
    "Iron Blocks: 2D for 1 Stack",
    "Magma Blocks: 3D for 1 Stack",
    "Packed Ice: 1D for 1 Stack",
    "Prismarine: 1D for 1 Stack",
    "Prismarine Bricks: 1D for 1 Stack",
    "Purpur Blocks: 2D for 1 Stack",
    "Quartz Blocks: 2D for 1 Stack",
    "Redstone Blocks: 4D for 1 Stack",
    "Shroomlights: 2D for 1 Stack"
  ]
},
{
  "name": "Cherry Hideout",
  "owner": "RoaringLugia",
  "type": "general",
  "location": "-35, 93",
  "tags": ["decoration", "mob-drops", "nature", "travel"],
  "items": [
    "Coloured Shulkers: 1D for 3",
    "Decoration Pack: 1D for 1",
    "Enchanted Elytra: 20D for 1",
    "Pink Petals: 1D for 32",
    "Slime (1 in Boat + Lead): 2D for 1",
    "Slimes (2 in Boat + Lead): 4D for 1",
    "Tree Bundle: 1D for 1",
    "Wither Skeleton Skulls: 6D for 3"
  ]
},
{
  "name": "Treasures from the North",
  "owner": "Keysnail",
  "type": "general",
  "location": "35, -63",
  "tags": ["building-blocks", "food"],
  "items": [
    "Blue Ice: 7D for 1 Stack",
    "Golden Carrots: 0D for 1",
    "Packed Ice: 1D for 3 Stacks",
    "Packed Ice: 10D for 1 Shulker"
  ]
},
{
  "name": "kat food",
  "owner": "katburger",
  "type": "specialized",
  "location": "-55, 25",
  "tags": ["food"],
  "items": [
    "Bread: 1D for 3 Stacks",
    "Cake: 1D for 1",
    "Cooked Beef: 1D for 3 Stacks",
    "Cooked Salmon: 1D for 4 Stacks",
    "Cookies: 1D for 1 Stack",
    "Pumpkin Pie: 1D for 1 Stack"
  ]
},
{
  "name": "Sai's Terracotta",
  "owner": "Sai",
  "type": "specialized",
  "location": "-178, 88",
  "tags": ["building-blocks", "decoration"],
  "items": [
    "Clay Blocks: 1D for 1 Stack",
    "Dyed Terracotta: 3D for 1 Stack",
    "Glazed Terracotta: 3D for 1 Stack",
    "Terracotta: 2D for 1 Stack"
  ]
},
{
  "name": "Obtuseninjas Outpost",
  "owner": "obtuseninja",
  "type": "general",
  "location": "464, -185",
  "tags": ["building-blocks", "nature", "wood", "decoration"],
  "items": [
    "All Color Dyes: 1D for 1 Stack",
    "Bamboo: 1D for 1 Stack",
    "Cobblestone: 1D for 2 Stacks",
    "Deepslate: 1D for 1 Stack",
    "Dirt: 1D for 6 Stacks",
    "Jungle Leaves: 1D for 2 Stacks",
    "Jungle Logs: 2D for 1 Stack",
    "Oak Leaves: 1D for 2 Stacks",
    "Oak Logs: 2D for 1 Stack",
    "Scaffolding: 1D for 1 Stack",
    "Spruce Leaves: 1D for 2 Stacks",
    "Spruce Logs: 2D for 1 Stack",
    "Sugar Cane: 1D for 1 Stack",
    "Tuff: 4D for 1 Stack",
    "Wheat: 1D for 1 Stack",
    "Wheat Seeds: 1D for 5 Stacks"
  ]
},
{
  "name": "Banana Hut",
  "owner": "chillybanana",
  "type": "general",
  "location": "-163, 25",
  "tags": ["decoration", "building-blocks"],
  "items": [
    "Block of Quartz: 2D for 1 Stack",
    "Block of Quartz: 54D for 1 Shulker",
    "Map Art: 36D for 1",
    "Quartz Pillar: 2D for 1 Stack",
    "Quartz Pillar: 54D for 1 Shulker"
  ]
},
{
  "name": "Mossy & Messy",
  "owner": "Baaxton",
  "type": "specialized",
  "location": "-68, 154",
  "tags": ["building-blocks", "nature", "decoration"],
  "items": [
    "Azalea: 1D for 1 Stack",
    "Crimson Root: 1D for 1 Stack",
    "Flowering Azalea: 1D for 1 Stack",
    "Hanging Root: 2D for 1 Stack",
    "Hay Bale: 6D for 1 Stack",
    "Moss: 1D for 1 Stack",
    "Moss Carpet: 1D for 1 Stack",
    "Mossy Cobblestone: 1D for 1 Stack",
    "Mossy Stone Brick: 1D for 1 Stack",
    "Pale Moss: 1D for 1 Stack",
    "Pale Moss Carpet: 1D for 1 Stack",
    "Warped Root: 1D for 1 Stack"
  ]
},
{
  "name": "Bamboo Barn",
  "owner": "JMDnix",
  "type": "specialized",
  "location": "-43, 6",
  "tags": ["wood", "building-blocks", "nature"],
  "items": [
    "Bamboo Blocks: 36D for 1 Shulker",
    "Bamboo Mosaic: 18D for 1 Shulker",
    "Bamboo Planks: 18D for 1 Shulker",
    "Bamboo Shoots: 4D for 1 Shulker",
    "Scaffolding: 1D for 1 Stack"
  ]
},




   
  
  
  
  
  
  
  
]
