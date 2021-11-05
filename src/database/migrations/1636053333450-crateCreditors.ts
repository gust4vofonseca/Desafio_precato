import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class crateCreditors1636053333450 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"creditors",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "CPF",
                        type: "varchar"
                    },
                    {
                        name: "status",
                        type: "varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("creditors");
    }

}
