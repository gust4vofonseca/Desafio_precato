import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("debtors")
class Debtor {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    CNPJ: string;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Debtor }