export default function Home() {
  return (
    <main className="bg-[#db641f4] min-h-screen font-sans">
      {/* Header */}
      <nav className="bg-orange-600 text-white px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-lg">Food Delivery</div>
        <div className="space-x-6">
        <a href="/app" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/location" className="hover:underline">Location</a> {/* ← Tambahan */}
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
        <p className="text-gray-700 mb-8">Please select a dish from the menu to order.</p>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-6">
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
              <div className="text-6xl mb-2">{item.image}</div>
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