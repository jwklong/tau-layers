import Decimal from './modules/break_eternity.js' // to use later
import { Achievement } from './classes/achievements'
import { game } from './data/game'

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
            symbol: "",
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
        symbol: "τ",
        visibility: () => true,
        unlock: () => true,
        color: "green"
    })
    achievements[0][4] = new Achievement({
        name: "Minute of Tau",
        tooltip: "Play the game for 60 seconds",
        symbol: "M",
        visibility: () => true,
        unlock: () => game.timeSpent > 60,
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
    game.timeSpent += 1/60
    for (var achRow of achievements) {
        for (var achievement of achRow) {
            achievement?.tick()
        }
    }
}, 1000/60)

document.getElementById('content')?.style.setProperty('--current-content','1')
addEventListener("keydown", (event) => {
    if (event.code === 'ArrowLeft') {
        document.getElementById('content')?.style.setProperty('--current-content',String(Number(document.getElementById('content')?.style.getPropertyValue('--current-content'))-1))
    } else if (event.code === 'ArrowRight') {
        document.getElementById('content')?.style.setProperty('--current-content',String(Number(document.getElementById('content')?.style.getPropertyValue('--current-content'))+1))
    }
});