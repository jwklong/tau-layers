export class Achievement {
    name: string
    tooltip: string
    visibility: () => boolean
    unlock: () => boolean
    color: string

    unlocked: boolean = false
    visible: boolean = false

    element: HTMLDivElement

    constructor(args: {
        name: string
        tooltip: string
        visibility: () => boolean
        unlock: () => boolean
        color: string
    }) {
        this.name = args.name
        this.tooltip = args.tooltip
        this.visibility = args.visibility
        this.unlock = args.unlock
        this.color = args.color


        this.element = document.createElement('div')
        this.element.classList.add('achievement')
        // TODO : add ach icon

        this.element.style.setProperty('--primary-color',`var(--color-${this.color}-0)`)
        this.element.style.setProperty('--secondary-color',`var(--color-${this.color}-3)`)

        const tooltipElement = document.createElement('div')
        tooltipElement.classList.add('tooltip')
        tooltipElement.innerHTML = this.name.bold() + '<br>' + this.tooltip
        this.element.appendChild(tooltipElement)
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