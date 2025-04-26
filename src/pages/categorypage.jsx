function CategoryPage() {
    // Dummy data for categories and labels
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
  
    return (
      <div className="p-6">
        <h1 className="text-4xl font-bold text-center text-purple-600">Categories 🛍️</h1>
        <p className="text-center mt-4 text-gray-600">Browse through these amazing labels from small businesses.</p>
  
        {/* Categories */}
        <div className="mt-12">
          {categories.map((category) => (
            <div key={category.name} className="mb-12">
              <h2 className="text-3xl font-semibold text-purple-700">{category.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {category.labels.map((label) => (
                  <div
                    key={label}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                  >
                    <h3 className="text-lg font-bold text-purple-600">{label}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default CategoryPage;
  