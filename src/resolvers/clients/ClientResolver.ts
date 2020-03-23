import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Client } from "../../models/Client";
import { CreateClientInput } from "../../inputs/client/CreateClientInput";
import { Address } from "../../models/Address";



@Resolver()
export class ClientResolver {
    @Query(() => [Client])
    client() {
        return Client.find();
    }

    @Mutation(() => Client)
    async createClient(@Arg("data") data: CreateClientInput) {
      

        const clientData = new Client();
        const addressData = new Address();

        addressData.name = data.address[0].name;
        addressData.urlmaps = data.address[0].url;
        addressData.description = data.address[0].description;
        const valores = [];
        valores.push(addressData);

        clientData.address = valores;
        clientData.name = data.name;
        clientData.lastname = data.lastname;
        clientData.rut = data.rut;

        const client = Client.create(clientData);

        await client.save();
        return client;
    }
}