import {Field, ID, InputType, ObjectType} from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Todos extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number | null = null;

  @Field(() => String)
  @Column()
  title: string = '';

  @Field(() => String)
  @Column()
  description: string = '';

  @Field(() => String)
  @Column()
  creatorName: string = '';
}

@InputType()
export class TodoInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  creatorName?: string;
}
