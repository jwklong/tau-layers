import Decimal from './modules/break_eternity.js' // to use later
import { Achievement } from './classes/achievements'

//achievements

const achievements: (Achievement | undefined)[][] = Array(7).fill(Array(5).fill(undefined))

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

const achievementContent = document.querySelector('.content7')

for (let achRow of achievements) {
    let achRowElement = document.createElement('div')
    achRowElement.classList.add('achrow')
    for (let achievement of achRow) {
        achievement.attachElement(achRowElement)
    }
    achievementContent?.appendChild(achRowElement)
}

