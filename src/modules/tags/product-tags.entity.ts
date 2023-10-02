import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'files' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'tags_id', type: 'string' })
  tags_id: string;

  @Column({ name: 'product_id', type: 'string' })
  product_id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
