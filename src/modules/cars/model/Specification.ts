import { randomUUID as v4UUID } from "crypto"


class Specification {
    id?: string
    name: string
    description: string
    created_at: Date


    constructor() {
        if (!this.id) {
            this.id === v4UUID()
        }
    }


}

export {
    Specification
}