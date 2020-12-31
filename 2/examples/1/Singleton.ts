/**
 * Class Singleton
 * Description: singleton pattern example
 * route: ./examples/Singleton.ts
 */
class Singleton {
    private static instance: Singleton;
    private constructor() {
        // init
    }
    static getInstance() {
        if (!Singleton.instance) {
            this.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

export default Singleton;