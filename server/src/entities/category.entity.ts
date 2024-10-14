import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Category {
  @PrimaryColumn({ type: 'uuid' })
  id: string

  @Column({ type: 'varchar', length: 255 })
  title: string

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date
}
