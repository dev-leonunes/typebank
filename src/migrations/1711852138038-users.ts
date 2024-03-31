import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1711852138038 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar(255)'
                },
                {
                    name: 'email',
                    type: 'varchar(255)',
                    length: undefined,
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar(255)'
                }
            ]
        });
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
