import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("payments")
class Payment {
    @PrimaryColumn()
    id: string;

    @Column()
    creditor_id: string;

    @Column()
    debtor_id: string;

    @Column()
    value_initial: number;

    @Column()
    value_final: number;

    @CreateDateColumn()
    date: Date;

    @Column()
    status: string;

    @Column()
    reason: string;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Payment };
