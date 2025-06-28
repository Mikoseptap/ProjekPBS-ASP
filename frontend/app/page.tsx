export default function Home() {
  return (
    <main className="bg-[#db641f4] min-h-screen font-sans">
      {/* Header */}
      <header className="bg-[#db641f] text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Waroeng MakJum</h1>
        <nav className="space-x-4">
          <a href="" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/location" className="hover:underline">Location</a>
        </nav>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-2">Selamat datang di Waroeng MakJum</h2>
        <p className="text-gray-700 mb-8">Silahkan pilih menu yang ingin anda pesan</p>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-6 text-orange-400">
          {[
            { name: "Hamburger", price: "Rp. 35.000", image: "🍔" },
            { name: "Pizza", price: "Rp. 55.000", image: "🍕" },
            { name: "Coffee", price: "Rp. 25.000", image: "☕" },
            { name: "Orange Juice", price: "Rp. 20.000", image: "🍊" }
          ].map((item) => (
            <div
              key={item.name}
              className="border border-[#db641f] p-4 rounded text-center bg-white shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>
              <button className="mt-3 bg-[#db641f] text-white px-4 py-1 rounded hover:bg-[#f36a9d]">
                Order
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}