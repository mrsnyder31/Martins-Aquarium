 import { FishList } from './fish.js'

// const allFish = getFish()

// for (const fish of allFish) {
//     console.log(fish)
// }
 
// Import the function that returns a copy of the fish array
//import { getFish } from './database.js'

// export const FishList = () => {
//     // Invoke the function that you imported from the database module
//     const fishes = getFish()

//     // Start building a string filled with HTML syntax
//     let htmlString = '<article class="fish-list">'

//     // Create HTNL representations of each fish here
//     for (const fish of fishes) {

//         // Why is there a backtick used for this string?
//         htmlString += `<section class="fish-card">
//             <div><img  class="fish__image image--card" src="${fish.fishImage}" /></div>
//             <div class="fish__name">${fish.fishName}</div>
//             <div class="fish__species">${fish.fishSpecies}</div>
//             <div class="fish__length">${fish.fishLength}</div>
//             <div class="fish__location">${fish.harvestLocation}</div>
//             <div class="fish__diet">${fish.fishDiet}</div>
//         </section>
// `
//     }
//     htmlString += `</article>`

//     return htmlString
// }

// Import the FishList function from the correct module
//import { getFish } from './database.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */



let parentHTMLElement = document.querySelector(".fish-list")

parentHTMLElement.innerHTML = FishList();

//console.log(FishList())

