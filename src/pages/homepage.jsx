import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      name: "Fashion",
      labels: [
        { name: "Trendy Tees", link: "https://www.instagram.com/trendytees/" },
        { name: "Classic Jackets", link: "https://www.instagram.com/classicjackets/" },
        { name: "Cool Shoes", link: "https://www.instagram.com/coolshoes/" },
        { name: "Accessories Hub", link: "https://www.instagram.com/accessorieshub/" },
      ],
    },
    {
      name: "Skincare",
      labels: [
        { name: "Glow Skincare", link: "https://www.instagram.com/glowskincare/" },
        { name: "Natural Face Masks", link: "https://www.instagram.com/naturalfacemasks/" },
        { name: "Hydration Boosters", link: "https://www.instagram.com/hydrationboosters/" },
      ],
    },
    {
      name: "Accessories",
      labels: [
        { name: "Stylish Earrings", link: "https://www.instagram.com/stylishearrings/" },
        { name: "Handmade Bags", link: "https://www.instagram.com/handmadebags/" },
        { name: "Eco-friendly Watches", link: "https://www.instagram.com/ecofriendlywatches/" },
      ],
    },
    {
      name: "Art & Crafts",
      labels: [
        { name: "Handmade Ceramics", link: "https://www.instagram.com/handmadeceramics/" },
        { name: "Watercolor Art", link: "https://www.instagram.com/watercolorart/" },
        { name: "Macrame Crafts", link: "https://www.instagram.com/macramecrafts/" },
      ],
    },
  ];

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            placeholder="Search for categories..."
            className="w-80 p-3 rounded-l-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-purple-600 text-white p-3 rounded-r-lg hover:bg-purple-700">
            Search
          </button>
        </div>
      </section>

      {/* Filtered Categories */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Popular Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {filteredCategories.map((category) => (
            <Link
              to={`/category/${category.name.toLowerCase()}`}
              key={category.name}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-purple-600">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;

