import type { NextApiRequest, NextApiResponse } from "next";

// Simulasi data menu (in-memory array)
let menu: any[] = [
  { id: 1, nama: "Nasi Goreng", kategori: "Makanan", harga: 15000, stok: 10 },
  { id: 2, nama: "Es Teh", kategori: "Minuman", harga: 5000, stok: 20 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    //Ambil semua menu
    res.status(200).json(menu);
  } else if (req.method === "POST") {
    //Tambah menu baru
    const newItem = { ...req.body, id: Date.now() };
    menu.push(newItem);
    res.status(201).json(newItem);
  } else if (req.method === "PUT") {
    //Update menu berdasarkan ID
    const index = menu.findIndex((item) => item.id === req.body.id);
    if (index !== -1) {
      menu[index] = req.body;
      res.status(200).json(menu[index]);
    } else {
      res.status(404).json({ error: "Menu tidak ditemukan" });
    }
  } else if (req.method === "DELETE") {
    //Hapus menu berdasarkan ID
    menu = menu.filter((item) => item.id !== req.body.id);
    res.status(200).json({ success: true });
  } else {
    //Method tidak diizinkan
    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
