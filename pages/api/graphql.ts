import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { schema } from "../../graphql/schema";
import { createContext } from "@/graphql/context";


const server = new ApolloServer({
  schema,
});

export default startServerAndCreateNextHandler(server, {
    context: async ( req, res ) => await createContext({ req, res }),
});
