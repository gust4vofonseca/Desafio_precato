import { ICreatePaymentsDTO } from "../dtos/ICreatePaymentsDTO";
//import { Payment } from "../entities/Payment";

interface IPaymentsRepository {
    create(data: ICreatePaymentsDTO): Promise<void>;
}

export { IPaymentsRepository };