import { db } from "../../prisma/index";
import { builder } from "../builder";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    name: t.exposeString("name"),
    email: t.exposeString("email"),
    pass: t.exposeString("hashedPassword"),
    isOnline: t.exposeBoolean("isOnline"),
    username: t.exposeString("username"),
    birthday: t.expose("birthday", {
      type: "Date",
    }),
  }),
});

// Ok, using the queryField like we mentioned
builder.queryFields((t) => ({
  // Here we name our field for the root query
  retrieveUser: t.prismaField({
    // We are using the 'User' model from Prisma types
    type: "User",
    // We want the user to pass an argument of the type int
    args: {
      id: t.arg.int({ required: true }),
    },
    // Now we can defined what the resolver returns
    resolve: (query, root, args, ctx, info) => {
      // We find the user with that id using Prisma
      return db.user.findUniqueOrThrow({
        where: {
          id: args.id,
        },
      });
    },
  }),
}));

builder.mutationFields((t) => ({
  createUser: t.prismaField({
    type: "User",
    args: {
      name: t.arg.string({ required: true }),
      email: t.arg.string({ required: true }),
      pass: t.arg.string({ required: true }),
      username: t.arg.string({ required: true }),
      birthday: t.arg({ type: "Date", required: true }),
    },
    resolve: (query, root, args, ctx, info) => {
      return db.user.create({
        data: {
          name: args.name,
          email: args.email,
          hashedPassword: args.pass,
          username: args.username,
          birthday: args.birthday,
        },
      });
    },
  }),
}));

export const schema = builder.toSchema();
