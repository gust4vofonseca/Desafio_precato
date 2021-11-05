import { ICreateCreditorDTO } from "../dtos/ICreateCreditorDTO";
import { Creditor } from "../entities/Creditor";

interface ICreditorsRepository {
    create(data: ICreateCreditorDTO): Promise<void>;
    findByCPF(CPF:string): Promise<Creditor>;
    list():Promise<Creditor[]>;
}

export { ICreditorsRepository };
