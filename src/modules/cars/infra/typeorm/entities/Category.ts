import { randomUUID as uuidV4 } from "crypto"
import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";

@Entity("categories")
class Category {

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
    Category
}