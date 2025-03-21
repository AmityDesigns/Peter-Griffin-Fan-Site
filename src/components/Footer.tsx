const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl font-family-guy text-blue-400">Peter Griffin</span>
            <p className="mt-2 text-gray-400 text-sm">
              Learn all about Family Guy's beloved patriarch
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Peter Griffin Fan Site
            </p>
            <p className="text-gray-500 text-xs mt-1">
              This is a fan-made site. Family Guy and Peter Griffin are owned by 20th Television Animation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
