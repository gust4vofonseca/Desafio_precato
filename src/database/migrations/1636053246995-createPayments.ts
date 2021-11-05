import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPayments1636053246995 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"payments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "creditor_id",
                        type: "varchar"
                    },
                    {
                        name: "debtor_id",
                        type: "varchar"
                    },
                    {
                        name: "value_initial",
                        type: "float"
                    },
                    {
                        name: "value_final",
                        type: "float"
                    },
                    {
                        name: "date",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "status",
                        type: "varchar"
                    },
                    {
                        name: "reason",
                        type: "varchar",
                        isNullable: true
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("payments");
    }

}
