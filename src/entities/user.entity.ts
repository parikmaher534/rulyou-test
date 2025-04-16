import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 255, nullable: false })
  full_name: string;

  @Column({ length: 255, nullable: false })
  role: string;

  @Column({ nullable: false })
  efficiency: number;
}
