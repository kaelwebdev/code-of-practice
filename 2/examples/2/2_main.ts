interface Observer {
    update: (data: any) => void
}

interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject {
    observers: Observer[] = []

    constructor() {
        const ref: HTMLInputElement = document.querySelector("#value")
        ref.addEventListener("input", () => {
            this.notify(ref.value)
        })
    }

    subscribe(observer: Observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer) {
        const index = this.observers.findIndex((obs) => {
            return obs === observer
        })
        this.observers.splice(index, 1)
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}

class PriceDisplay implements Observer {
    private ref: HTMLElement

    constructor() {
        this.ref = document.querySelector("#price")
    }

    update(data: any) {
        this.ref.innerText = data
    }
}

const value = new BitcoinPrice()
const display = new PriceDisplay()

value.subscribe(display)
setTimeout(
    () => value.unsubscribe(display),
    5000
)