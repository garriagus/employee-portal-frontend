import { prisma } from "@/data/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const tag = await prisma.tag.findUnique({
    where: {
      id,
    },
  });

  if (!tag) {
    return new NextResponse("No tag with ID found", { status: 404 });
  }

  return NextResponse.json(tag);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  let json = await request.json();

  const updated_tag = await prisma.tag.update({
    where: { id },
    data: json,
  });

  if (!updated_tag) {
    return new NextResponse("No tag with ID found", { status: 404 });
  }

  return NextResponse.json(updated_tag);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    await prisma.tag.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (error.code === "P2025") {
      return new NextResponse("No user with ID found", { status: 404 });
    }

    return new NextResponse(error.message, { status: 500 });
  }
}