import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1728891916039 implements MigrationInterface {
    name = 'Mig1728891916039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todolist" ("id" uuid NOT NULL, "title" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "categoryId" uuid, CONSTRAINT "PK_ad126e5bdbcae6306ea2266a1f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "todolist" ADD CONSTRAINT "FK_b927e96b3f463746f6fbf3893c3" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todolist" DROP CONSTRAINT "FK_b927e96b3f463746f6fbf3893c3"`);
        await queryRunner.query(`DROP TABLE "todolist"`);
    }

}
