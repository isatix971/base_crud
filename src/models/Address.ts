import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Client } from "./Client";

@Entity()
@ObjectType()
export class Address extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(type => Client, client => client.id)
  client_: Address;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  urlmaps: string;

  @Field(()=>String)
  @Column()
  description: string;


}