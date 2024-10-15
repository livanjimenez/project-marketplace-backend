import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'listing' })
export class Listing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column({ default: false })
  isPublished: boolean;
}
