"use client";

import { useState } from "react";

type MenuItem = {
  id: number;
  nama: string;
  kategori: string;
  harga: number;
  stok: number;
};

export default function MenuPage() {
  const [menu, setMenu] = useState<MenuItem[]>([
    { id: 1, nama: "Nasi Goreng", kategori: "Makanan", harga: 15000, stok: 10 },
    { id: 2, nama: "Es Teh", kategori: "Minuman", harga: 5000, stok: 20 },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Menu</h1>
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Kategori</th>
            <th className="border p-2">Harga</th>
            <th className="border p-2">Stok</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.nama}</td>
              <td className="border p-2">{item.kategori}</td>
              <td className="border p-2">Rp {item.harga}</td>
              <td className="border p-2">{item.stok}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
