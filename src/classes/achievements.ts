export class Achievement {
    name: string
    tooltip: string
    symbol: string
    visibility: () => boolean
    unlock: () => boolean
    color: string

    unlocked: boolean = false
    visible: boolean = false

    element: HTMLDivElement

    constructor(args: {
        name: string
        tooltip: string
        symbol: string
        visibility: () => boolean
        unlock: () => boolean
        color: string
    }) {
        this.name = args.name
        this.tooltip = args.tooltip
        this.symbol = args.symbol
        this.visibility = args.visibility
        this.unlock = args.unlock
        this.color = args.color


        this.element = document.createElement('div')
        this.element.classList.add('achievement')

        this.element.style.setProperty('--primary-color',`var(--color-${this.color}-0)`)
        this.element.style.setProperty('--secondary-color',`var(--color-${this.color}-3)`)
        this.element.style.setProperty('--tertiary-color',`var(--color-${this.color}-5)`)

        const tooltipElement = document.createElement('div')
        tooltipElement.classList.add('tooltip')
        tooltipElement.innerHTML = this.name.bold() + '<br>' + this.tooltip
        this.element.appendChild(tooltipElement)

        const symbolElement = document.createElement('div')
        symbolElement.classList.add('symbol')
        symbolElement.innerHTML = this.symbol
        this.element.appendChild(symbolElement)
    }

    tick() {
        if (!this.visible && (this.visibility() || this.unlock())) { //shows when unlocked as well, just in case
            this.visible = true
            this.element.classList.add('show')
        }
        if (!this.unlocked && this.unlock()) {
            this.unlocked = true
            this.element.classList.add('unlocked')
        }
    }

    attachElement(parent: HTMLElement) { parent.appendChild(this.element) }
}