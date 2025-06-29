import { prisma } from "@/lib/prisma ";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  // console.log(request)
  const id = params.id;

  try {
    await prisma.post.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 400,
    });
  }
}
