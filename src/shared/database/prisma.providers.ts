import { PrismaClient } from '@prisma/client';

export default async () => {
  const prismaClient = new PrismaClient();
  return prismaClient;
};
