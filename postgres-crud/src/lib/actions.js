"use server";
import { prisma } from "./prisma ";
export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      //   where: { published: true },
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
export const handleAddPost = async (formData) => {
  console.log(formData, "here");
  try {
    await prisma.post.create({
      data: {
        title: formData.get("title"),
        content: formData.get("content"),
        author: {
          create: {
            name: "Ace Aryal",
          },
        },
      },
    });
    console.log("success");
  } catch (error) {
    console.log("some error");
    console.error(error);
  }
};
