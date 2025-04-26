import { Link } from 'react-router-dom';
function Navbar() {
    return (
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-700">aisaa.</div>
        <div className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-purple-600">Home</Link>
        <Link to="/categories" className="text-gray-600 hover:text-purple-600">Categories</Link> {/* Link to Categories */}
        <button className="text-gray-600 hover:text-purple-600">About</button>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  