import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'string', length: 124, nullable: false })
  name: string;

  @Column({
    name: 'email',
    type: 'string',
    length: 124,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    name: 'password',
    type: 'string',
    length: 124,
    nullable: false,
  })
  password: string;

  @Column({
    name: 'document',
    type: 'string',
    length: 18,
    nullable: false,
  })
  document: string;

  @Column({ name: 'phone', type: 'string', length: 18, nullable: false })
  phone: string;

  @Column({ name: 'born_date', type: 'date', nullable: false })
  bornDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @Column({
    name: 'active',
    type: 'boolean',
    length: 18,
    nullable: false,
    default: true,
  })
  active: boolean;
}
