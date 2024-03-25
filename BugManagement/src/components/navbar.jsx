import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold">Your Website</Link>
                <div>
                    <Link to="/bug-management" className="text-white mx-2">Bug Management</Link>
                    <Link to="/about" className="text-white mx-2">About</Link>
                    {/* Add more links as needed */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
