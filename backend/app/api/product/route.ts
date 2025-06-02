// app/api/product/route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET all products
export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json({ data: products });
}

// POST new product
export async function POST(req: Request) {
  const body = await req.json();
  const { name, price, description } = body;

  const product = await prisma.product.create({
    data: { name, price, description },
  });

  return NextResponse.json({ message: 'Product created', data: product });
}
