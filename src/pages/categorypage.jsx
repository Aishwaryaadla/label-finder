import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { categoryName } = useParams();

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

  const category = categories.find(
    (category) => category.name.toLowerCase() === categoryName
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-purple-700">{category?.name}</h1>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
        {category?.labels.map((label) => (
          <div
            key={label.name}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <a href={label.link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-lg font-bold text-purple-600">{label.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;

