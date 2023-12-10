// pages/api/tag/index.ts

import {prisma} from '@/data/prisma';
import { Tag } from '@prisma/client';
import { NextResponse } from "next/server";
// tag /api/tag
// Required fields in body: title
// Optional fields in body: content


export async function GET(request: Request) {
  const tags = await prisma.tag.findMany();
  return NextResponse.json(tags);
}


export async function TAG(request: Request) {
  try {
    const json = await request.json();

    const tag = await prisma.tag.create({
      data: json,
    });
    return new NextResponse(JSON.stringify(tag), { 
     status: 201, 
     headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return new NextResponse("tag with thie title already exists", {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}