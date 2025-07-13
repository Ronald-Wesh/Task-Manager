const Footer = () => {
  return (
    <footer className="cursor-pointer bg-gray-900 text-white text-center p-4 mt-10">
      <p>© {new Date().getFullYear()} Task Manager. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
