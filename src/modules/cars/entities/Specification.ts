import { randomUUID as uuidV4 } from "crypto"
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity("specifications")
class Specification {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;


    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }


}

export {
    Specification
}