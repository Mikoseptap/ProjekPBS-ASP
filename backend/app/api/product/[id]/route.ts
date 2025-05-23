import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET by ID
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "ID harus berupa angka",
          status: 400,
        },
      },
      { status: 400 }
    );
  }

  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "Produk tidak ditemukan",
          status: 404,
        },
      },
      { status: 404 }
    );
  }

  return NextResponse.json(
    {
      metaData: {
        error: 0,
        message: null,
        status: 200,
      },
      data: product,
    },
    { status: 200 }
  );
};

// PUT (edit product)
export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "ID harus berupa angka",
          status: 400,
        },
      },
      { status: 400 }
    );
  }

  const { name_value, descripion_value, price_value } = await req.json();

  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "Produk tidak ditemukan",
          status: 404,
        },
      },
      { status: 404 }
    );
  }

  await prisma.product.update({
    where: { id },
    data: {
      name: name_value,
      description: descripion_value,
      price: Number(price_value),
    },
  });

  return NextResponse.json(
    {
      metaData: {
        error: 0,
        message: "Produk berhasil diupdate",
        status: 200,
      },
    },
    { status: 200 }
  );
};

// DELETE product
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "ID harus berupa angka",
          status: 400,
        },
      },
      { status: 400 }
    );
  }

  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "Produk tidak ditemukan",
          status: 404,
        },
      },
      { status: 404 }
    );
  }

  await prisma.product.delete({ where: { id } });

  return NextResponse.json(
    {
      metaData: {
        error: 0,
        message: "Produk berhasil dihapus",
        status: 200,
      },
    },
    { status: 200 }
  );
};