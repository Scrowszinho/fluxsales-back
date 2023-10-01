import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', type: 'string' })
  user_id: string;

  @Column({ name: 'name', type: 'string' })
  name: string;

  @Column({ name: 'description', type: 'string', length: 500 })
  description: string;

  @Column({ name: 'bid_interval', type: 'float' })
  bid_interval: number;

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
