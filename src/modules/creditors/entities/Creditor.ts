import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("creditors")
class Creditor {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    CPF: string;

    @Column()
    status: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Creditor };