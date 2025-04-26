function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = [
    {
      name: "Fashion",
      labels: ["Trendy Tees", "Classic Jackets", "Cool Shoes", "Accessories Hub"],
    },
    {
      name: "Skincare",
      labels: ["Glow Skincare", "Natural Face Masks", "Hydration Boosters"],
    },
    {
      name: "Accessories",
      labels: ["Stylish Earrings", "Handmade Bags", "Eco-friendly Watches"],
    },
    {
      name: "Art & Crafts",
      labels: ["Handmade Ceramics", "Watercolor Art", "Macrame Crafts"],
    },
  ];

  // Filter labels based on the search query
  const filteredLabels = categories.map((category) => ({
    ...category,
    labels: category.labels.filter((label) =>
      label.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

    return (
      <div className="p-6">
        {/* Hero Section */}
        <section className="text-center mt-12">
          <h1 className="text-5xl font-bold text-purple-700">Discover Labels You’ll Love 💜</h1>
          <p className="mt-4 text-gray-600 text-lg">Search and shop from amazing small businesses on Instagram!</p>
  
          {/* Search Bar */}
          <div className="mt-8 flex justify-center">
            <input
              type="text"
              placeholder="Search for labels..."
              className="w-80 p-3 rounded-l-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="bg-purple-600 text-white p-3 rounded-r-lg hover:bg-purple-700">
              Search
            </button>
          </div>
        </section>
  
        {/* Popular Labels Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Popular Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Category Card */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-purple-600">Fashion</h3>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-purple-600">Skincare</h3>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-purple-600">Accessories</h3>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-purple-600">Art & Crafts</h3>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default HomePage;
  