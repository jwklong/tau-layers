import Decimal from './modules/break_eternity.js' // to use later
import { Achievement } from './classes/achievements'

//achievements

const achievements: (Achievement | undefined)[][] = [
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined]
]

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
    achievements[0][2] = new Achievement({
        name: "Time Waster",
        tooltip: "Do nothing for a certain amount of time.",
        visibility: () => true,
        unlock: () => false,
        color: "purple"
    })
    achievements[0][3] = new Achievement({
        name: "Getting Started",
        tooltip: "Start the game.",
        visibility: () => true,
        unlock: () => true,
        color: "green"
    })

const achievementContent = document.querySelector('.content7')

for (var achRow of achievements) {
    var achRowElement = document.createElement('div')
    achRowElement.classList.add('achrow')
    for (var achievement of achRow) {
        achievement?.attachElement(achRowElement)
    }
    achievementContent?.appendChild(achRowElement)
}

setInterval(() => {
    for (var achRow of achievements) {
        for (var achievement of achRow) {
            achievement?.tick()
        }
    }
}, 1000/60)