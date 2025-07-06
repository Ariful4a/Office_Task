import { Link } from "react-router";

const Header = () => {
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Task-03</Link>
      </li>
      <li>
        <Link to="/task_06">Task-06</Link>
      </li>
      <li>
        <Link to="/our_service">Task-06: Our Service</Link>
      </li>
    </>
  );

  return (
    <section className="bg-sky-700 shadow-sm text-white">
      <header>
        <div className="navbar max-w-6xl mx-auto">
          {/* Navbar Start */}
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl font-black">
              Ariful
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            <Link to="/login">
              <button className="btn btn-outline border-b-4 border-t-2 border-l-4 border-r-4 border-orange-700 border-l-amber-400 border-r-amber-400 text-white font-bold hover:bg-orange-600 transition duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
