interface IRequestPaymentsDTO {
    creditor_cpf: string;
    debtor_cnpj: string;
    value_initial: number;
    value_final: number;
    date?: Date;
}

export { IRequestPaymentsDTO };