import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1660357944486 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'orders',
            columns:[
                {
                    name:'id',
                    type:'int',
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy: 'increment'
                },
                {
                    name:'created_at',
                    type:'timestamp with time zone',
                    default:'now()',

                },
                {
                    name:'updated_at',
                    type:'timestamp with time zone',
                    default:'now()',

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders')
    }

}
