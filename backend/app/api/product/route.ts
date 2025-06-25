import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET (ambil semua produk)
export const GET = async () => {
  const products = await prisma.product.findMany();

  return NextResponse.json({
    metaData: {
      error: 0,
      message: "Berhasil mengambil data produk!",
      status: 200,
    },
    data: products,
  });
};

// POST (tambah produk baru)
export const POST = async (req: NextRequest) => {
  const { name, description, price } = await req.json();

  // Cek apakah produk dengan nama yang sama sudah ada
  const existingProduct = await prisma.product.findFirst({
    where: { name },
  });

  if (existingProduct) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "Produk sudah ada!!",
          status: 409,
        },
      },
      { status: 409 }
    );
  }

  // Tambah produk baru
  const newProduct = await prisma.product.create({
    data: {
      name,
      description,
      price: Number(price),
    },
  });

  return NextResponse.json(
    {
      metaData: {
        error: 0,
        message: "Produk berhasil ditambahkan!",
        status: 201,
      },
      data: newProduct,
    },
    { status: 201 }
  );
};



