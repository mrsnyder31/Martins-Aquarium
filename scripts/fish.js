import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}
 


export const FishList = () => {
    
    const fishes = getFish()

let htmlString = '<article class="fish-list">'


for (const fish of fishes) {

    htmlString += `<section class="fish-card">
        <div><img  class="fish__image image--card" src="${fish.fishImage}" /></div>
        <div class="fish__name">${fish.fishName}</div>
        <div class="fish__species">${fish.fishSpecies}</div>
        <div class="fish__length">${fish.fishLength}</div>
        <div class="fish__location">${fish.harvestLocation}</div>
        <div class="fish__diet">${fish.fishDiet}</div>
    </section>`

}
htmlString += `</article>`

return htmlString
}