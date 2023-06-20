import Decimal from './modules/break_eternity.js' // to use later
import { Achievement } from './classes/achievements'

//achievements

const achievements: (Achievement | undefined)[][] = Array(5).fill(Array(7).fill(undefined))

for (let achRow in achievements) {
    for (let achievement in achievements[achRow]) {
        achievements[achRow][achievement] = new Achievement({
            name: "",
            tooltip: "",
            visibility: () => false,
            unlock: () => false,
            color: "blue"
        })
    }
}

//row 1
    achievements[0][3] = new Achievement({
        name: "Getting Started",
        tooltip: "Start the game.",
        visibility: () => true,
        unlock: () => true,
        color: "green"
    })

console.log(achievements)

const achievementContent = document.querySelector('.content7')

for (var achRow of achievements) {
    console.log(achRow)
    var achRowElement = document.createElement('div')
    achRowElement.classList.add('achrow')
    for (var achievement of achRow) {
        achievement?.attachElement(achRowElement)
    }
    console.log(achRowElement)
    achievementContent?.appendChild(achRowElement)
}

