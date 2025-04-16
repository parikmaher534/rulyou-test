import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1744798444979 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE TABLE user (
        id         INT NOT NULL AUTO_INCREMENT,
        full_name  VARCHAR(255),
        role       VARCHAR(255),
        efficiency INT,

        PRIMARY KEY (id)
      );
    `);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE IF EXISTS user;');
  }
}
