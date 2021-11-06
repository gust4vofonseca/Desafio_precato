import { ICreatePaymentsDTO } from "../dtos/ICreatePaymentsDTO";
import { Payment } from "../entities/Payment";

interface IPaymentsRepository {
    create(data: ICreatePaymentsDTO): Promise<void>;
    list(): Promise<Payment[]>;
    delete(payment: Payment): Promise<void>;
    findById(id: string): Promise<Payment>;
}

export { IPaymentsRepository };