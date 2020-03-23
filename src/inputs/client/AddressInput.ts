import { InputType, Field } from "type-graphql";

@InputType()
export class AddressInput {
  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  description: string
}