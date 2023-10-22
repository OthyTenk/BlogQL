import { builder } from "@/graphql/builder";
import prisma from "@/prisma/prismadb";

builder.queryFields((t) => ({
    getUser: t.prismaField({
        type: "User",
        args: {
            email: t.arg.string({required: true}),
        },
        resolve: async (query, _, args, _context) => {
            return prisma.user.findUnique({
                ...query,
                where: { email: args.email },
            });
        },
    }),
    getUsers: t.prismaField({
        type: ["User"],
        resolve: async (query, _parent, _args, _context) => {
            return prisma.user.findMany(query);
        },
    }),
}));