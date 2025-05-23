export default function Home() {
  return (
    <main className="bg-[#db641f4] min-h-screen font-sans">
      {/* Header */}
      <header className="bg-[#db641f] text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Food Delivery</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
        </nav>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
        <p className="text-gray-700 mb-8">Please select a dish from the menu to order.</p>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { name: "Hamburger", price: "$5.99", image: "🍔" },
            { name: "Pizza", price: "$8.99", image: "🍕" },
            { name: "Coffee", price: "$2.99", image: "☕" },
            { name: "Orange Juice", price: "$3.99", image: "🍊" }
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