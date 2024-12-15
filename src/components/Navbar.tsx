import { FC, useState } from 'react';
import Logo from "../assets/sitech-logo.png"
import { Link, useNavigate, useLocation } from 'react-router';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleHome = () => {
      navigate('/');
      window.scrollTo(0, 0);
    };

  const handleContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const handleProjects = () => {
    navigate('/projects');
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-4 md:px-8 py-2">
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="Si-Tech Solar" className="w-[84px] h-[58px]" />
        </Link>
      </div>

      <button 
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div className="flex gap-8">
        <Link 
          to="/" 
          onClick={handleHome} 
          className={`${location.pathname === '/' ? 'text-orange-500' : ''} hover:text-orange-500`}
        >
          Home
        </Link>
        <Link 
          to='/projects' 
          onClick={handleProjects}
          className={`${location.pathname === '/projects' ? 'text-orange-500' : ''} hover:text-orange-500`}
        >
          Our Projects
        </Link>
        <Link 
          to='/contact' 
          className={`${location.pathname === '/contact' ? 'text-orange-500' : ''} hover:text-orange-500`}
        >
          Contact Us
        </Link>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 flex-col bg-white shadow-md py-4 px-4 justify-center items-center`}>
        <Link 
          to="/" 
          onClick={handleHome} 
          className={`py-2 ${location.pathname === '/' ? 'text-orange-500' : ''} hover:text-orange-500`}
        >
          Home
        </Link>
        <Link 
          to='/projects' 
          onClick={handleProjects}
          className={`py-2 ${location.pathname === '/projects' ? 'text-orange-500' : ''} hover:text-orange-500`}
        >
          Our Projects
        </Link>
        <Link 
          to='/contact' 
          className={`py-2 ${location.pathname === '/contact' ? 'text-orange-500' : ''} hover:text-orange-500`}
        >
          Contact Us
        </Link>
        <button 
          onClick={() => {
            handleContact();
            setIsMenuOpen(false);
          }} 
          className="py-2 hover:text-orange-500 bg-black text-white px-4 rounded-full w-fit"
        >
          Request a Quote
        </button>
      </div>

      <button 
        onClick={handleContact} 
        className="hidden md:block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
      >
        Request a Quote
      </button>

    </nav>
  );
};

export default Navbar; 