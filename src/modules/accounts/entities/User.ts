import { randomUUID as uuidV4 } from "crypto"
import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
@Entity("users")
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    driver_license: string;

    @Column({ default: false })
    isAdmin: boolean;

    @Column({ nullable: true })
    avatar?: string

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }

}

export { User }