const database = {
    fish: [
        {
    id: 1,
    fishImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Cyprinodon_diabolis%2C_males.jpg/220px-Cyprinodon_diabolis%2C_males.jpg',
    fishSpecies: 'Devil’s Hole Pupfish',
    fishLength: '1.2 in',
    fishName: 'Chungus',
    harvestLocation: 'Devil’s Hole, Death Valley National Park',
    fishDiet: [ 'beetles', 'snails', 'algae']
        },
        {
    id: 2,
    fishImage: 'https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-sakhalin-sturgeon.jpg?itok=Yz7x9GwQ',
    fishSpecies: 'Sakhalin Sturgeon',
    fishLength: '59 in',
    fishName: 'Long Boi',
    harvestLocation: 'Tumnin River',
    fishDiet: ['shrimp', 'crabs', 'worms']
        },
    {
    id: 3,
    fishImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Leptobotia_curta_by_OpenCage.jpg/220px-Leptobotia_curta_by_OpenCage.jpg',
    fishSpecies: 'The Kissing Loach',
    fishLength: '6 in',
    fishName: 'Smoochers',
    harvestLocation: 'near Kameoka City and Okayama City, Japan.',
    fishDiet: ['detritus', 'mud worms', 'macrofauna']
        },
        {
    id: 4,
    fishImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Northern_Stargazer.JPG/220px-Northern_Stargazer.JPG',
    fishSpecies: 'Northern Stargazer',
    fishLength: '22 in',
    fishName: 'Blorfgg',
    harvestLocation: ' eastern seaboard of the United States',
    fishDiet: 'smaller fish'
        }    
    ]
    
   }

   //console.log(database)
   
   export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}