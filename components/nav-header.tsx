const NavHeader = () => {
  return (
    <header className="flex items-center h-16 bg-white-800 text-black px-4  border-b-4 border-gray-500 ">
      <div className="flex items-center">
        <a href="/" className="block">
          <img src="/logo.png" alt="FundPoint Logo" className="h-8 w-auto fill-current" />
        </a>
        {/* <span className="ml-4 text-xl font-bold">FundPoint</span> */}
      </div>
      <nav className="flex">
        <a href="/upload" className="text-gray-500 hover:underline mx-4">
          Create verification request
        </a>
        |
        <a href="/sign" className="text-gray-500 hover:underline mx-4">
          Find existing request
        </a>
        |
        <a href="/about" className="text-gray-500 hover:underline mx-4">
          About
        </a>
      </nav>
    </header>
  );
};

export default NavHeader;
