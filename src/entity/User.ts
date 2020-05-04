import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
    privateid: number;

  @Column()
    firstName: string;

  @Column()
    lastName: string;

  @Column()
    age: number;

}
