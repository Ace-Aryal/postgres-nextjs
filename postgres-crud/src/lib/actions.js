"use server";
import { prisma } from "./prisma ";
export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    return posts;
  } catch (error) {
    console.error(error);
    return false;
  }
}
