import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Address } from "./Address";

@Entity()
@ObjectType()
export class Client extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  lastname: string;

  @Field(()=>String)
  @Column()
  rut: string;

  @OneToMany(type => Address, addr => addr.client_,{
    cascade: true
  })
  address: Address[];

}