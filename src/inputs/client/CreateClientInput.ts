import { InputType, Field } from "type-graphql";
import { AddressInput } from "./AddressInput";

@InputType()
export class CreateClientInput {
  @Field()
  name: string;

  @Field()
  lastname: string;

  @Field()
  rut: string

  @Field(type => [AddressInput])
  address: AddressInput[];

}