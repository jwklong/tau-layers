import Decimal from './modules/break_eternity.js' // to use later
import { Achievement } from './classes/achievements'

//achievements

const achievements: Achievement[][] = Array(7).fill(Array(5).fill(new Achievement({
    name: "",
    tooltip: "",
    visibility: () => false,
    unlock: () => false,
    color: "blue"
})))

//row 1
    achievements[0][3] = new Achievement({
        name: "Getting Started",
        tooltip: "Start the game.",
        visibility: () => true,
        unlock: () => true,
    })

const achievementContent = document.getElementById('content7')

for (let achRow of achievements) {
    let achRowElement = document.createElement('div')
    achRowElement.classList.add('achrow')
    for (let achievement of achRow) {
        achievement.attachElement(achRowElement)
    }
    achievementContent?.appendChild(achRowElement)
}