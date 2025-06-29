// lib/prisma.ts
import { PrismaClient } from "@/generated/prisma";
const globalForPrisma = global;
export const prisma = globalForPrisma.prisma || new PrismaClient();
// this is the prisma clientinstance  wrapper we use everywhere to get the methods
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
