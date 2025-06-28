// app/api/menu/route.ts
import { NextResponse } from "next/server";

let menu: any[] = [
  { id: 1, nama: "Nasi Goreng", kategori: "Makanan", harga: 15000, stok: 10 },
  { id: 2, nama: "Es Teh", kategori: "Minuman", harga: 5000, stok: 20 },
];

export async function GET() {
  return NextResponse.json(menu);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newItem = { ...body, id: Date.now() };
  menu.push(newItem);
  return NextResponse.json(newItem, { status: 201 });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const index = menu.findIndex((item) => item.id === body.id);
  if (index !== -1) {
    menu[index] = body;
    return NextResponse.json(menu[index]);
  } else {
    return NextResponse.json({ error: "Menu tidak ditemukan" }, { status: 404 });
  }
}

export async function DELETE(req: Request) {
  const body = await req.json();
  menu = menu.filter((item) => item.id !== body.id);
  return NextResponse.json({ success: true });
}
