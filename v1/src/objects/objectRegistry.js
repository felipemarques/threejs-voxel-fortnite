
export const objectRegistry = {
  characters: [
    { id: 'player', name: 'Player Character (Male)', module: './src/objects/playerElement.js', createFn: 'createPlayer', animated: true },
    { id: 'femalePlayer', name: 'Player Character (Female)', module: './src/objects/femalePlayerElement.js', createFn: 'createFemalePlayer', animated: true }
  ],
  vehicles: [
    { id: 'car', name: 'Car', module: './src/objects/vehicleElement.js', createFn: 'createVehicleElement', args: ['car'] },
    { id: 'truck', name: 'Truck', module: './src/objects/vehicleElement.js', createFn: 'createVehicleElement', args: ['truck'] },
    { id: 'bus', name: 'Bus', module: './src/objects/busElement.js', createFn: 'createBus' },
    { id: 'motorcycle', name: 'Motorcycle', module: './src/objects/motorcycleElement.js', createFn: 'createMotorcycle' }
  ],
  enemies: [
    { id: 'normal', name: 'Normal Zombie', module: './src/objects/normalZombieElement.js', createFn: 'createNormalZombie', animated: true },
    { id: 'fat', name: 'Fat Zombie', module: './src/objects/fatZombieElement.js', createFn: 'createFatZombie', animated: true },
    { id: 'big', name: 'Big Zombie', module: './src/objects/bigZombieElement.js', createFn: 'createBigZombie', animated: true },
    { id: 'slender', name: 'Slenderman', module: './src/objects/slendermanElement.js', createFn: 'createSlenderman', animated: true },
    { id: 'spider', name: 'Spider', module: './src/objects/spiderElement.js', createFn: 'createSpider', animated: true }
  ],
  buildings: [
    { id: 'house', name: 'House', module: './src/objects/houseElement.js', createFn: 'createHouseElement', args: [1] },
    { id: 'mansion', name: 'Mansion', module: './src/objects/houseElement.js', createFn: 'createHouseElement', args: [1.6] },
    { id: 'cabin', name: 'Cabin', module: './src/objects/houseElement.js', createFn: 'createHouseElement', args: [0.85] },
    { id: 'smallBuilding', name: 'Small Building', module: './src/objects/smallBuildingElement.js', createFn: 'createSmallBuildingElement' },
    { id: 'plateau', name: 'Plateau', module: './src/objects/plateauElement.js', createFn: 'createPlateauElement' }
  ],
  rocks: [
    { id: 'rock', name: 'Rock', module: './src/objects/rockElement.js', createFn: 'createRockElement' },
    { id: 'rockPillar', name: 'Rock Pillar', module: './src/objects/rockElement.js', createFn: 'createRockPillarElement' },
    { id: 'flatBoulder', name: 'Flat Boulder', module: './src/objects/rockElement.js', createFn: 'createFlatBoulderElement' },
    { id: 'crystalShard', name: 'Crystal Shard', module: './src/objects/rockElement.js', createFn: 'createCrystalShardElement' }
  ],
  trees: [
    { id: 'oak', name: 'Oak Tree', module: './src/objects/treeOakElement.js', createFn: 'createOakTree' },
    { id: 'alpine', name: 'Alpine/Pine Tree', module: './src/objects/treeAlpineElement.js', createFn: 'createAlpineTree' }
  ],
  vegetation: [
    { id: 'bush', name: 'Bush', module: './src/objects/bushElement.js', createFn: 'createBush' }
  ]
};
