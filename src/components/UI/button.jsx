const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  const base = "px-2 py-1 cursor-pointer rounded font-semibold transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-900",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
