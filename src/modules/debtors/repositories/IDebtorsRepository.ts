import { ICreateDebtorDTO } from "../dtos/ICreateDebtorDTO";
import { Debtor } from "../entities/Debtor";

interface IDebtorsRepository {
    create(data:ICreateDebtorDTO): Promise<void>;
    findByCNPJ(CNPJ: string): Promise<Debtor>;
    list(): Promise<Debtor[]>
}

export { IDebtorsRepository }