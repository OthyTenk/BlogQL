import { builder } from "@/graphql/builder";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name", { nullable: true }),
    email: t.exposeString("email", { nullable: true }),

    image: t.exposeString("image", { nullable: true }),
    
    role: t.exposeString("role", { nullable: true }),
    // role: t.expose("role", { type: Role }),
  }),
});
