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
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [form, setForm] = useState<Omit<MenuItem, "id">>({
    nama: "",
    kategori: "Makanan",
    harga: 0,
    stok: 0,
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const [editingId, setEditingId] = useState<number | null>(null);

  const tambahAtauEditMenu = () => {
    if (editingId !== null) {
      // Edit
      setMenu(
        menu.map((item) =>
          item.id === editingId ? { ...item, ...form } : item
        )
      );
      setEditingId(null);
    } else {
      // Tambah
      const newItem = { ...form, id: Date.now() };
      setMenu([...menu, newItem]);
    }
    setForm({ nama: "", kategori: "Makanan", harga: 0, stok: 0 });
  };

  const editMenu = (item: MenuItem) => {
    setForm({ nama: item.nama, kategori: item.kategori, harga: item.harga, stok: item.stok });
    setEditingId(item.id);
  };

  const hapusMenu = (id: number) => {
    setMenu(menu.filter((item) => item.id !== id));
    if (editingId === id) setEditingId(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Menu</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Nama Menu"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          className="border p-2 rounded"
        />
        <select
          value={form.kategori}
          onChange={(e) => setForm({ ...form, kategori: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="Makanan">Makanan</option>
          <option value="Minuman">Minuman</option>
        </select>
        <input
          type="number"
          placeholder="Harga"
          value={form.harga}
          onChange={(e) => setForm({ ...form, harga: Number(e.target.value) })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Stok"
          value={form.stok}
          onChange={(e) => setForm({ ...form, stok: Number(e.target.value) })}
          className="border p-2 rounded"
        />
        <button
          onClick={tambahAtauEditMenu}
          className={`${
            editingId ? "bg-yellow-600" : "bg-green-600"
          } text-white p-2 rounded col-span-1 md:col-span-2`}
        >
          {editingId ? "Simpan Perubahan" : "Tambah Menu"}
        </button>
      </div>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Kategori</th>
            <th className="border p-2">Harga</th>
            <th className="border p-2">Stok</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.nama}</td>
              <td className="border p-2">{item.kategori}</td>
              <td className="border p-2">Rp {item.harga}</td>
              <td className="border p-2">{item.stok}</td>
              <td className="border p-2 flex gap-2 justify-center">
                <button
                  onClick={() => editMenu(item)}
                  className="bg-yellow-500 px-2 py-1 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => hapusMenu(item.id)}
                  className="bg-red-600 px-2 py-1 text-white rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
