interface ICreatePaymentsDTO {
    creditor_id: string;
    debtor_id: string;
    value_initial: number;
    value_final: number;
    date?: Date;
    status: string;
    reason?: string;
}

export { ICreatePaymentsDTO };