function Button({
  children,
  primary = true,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`px-7 py-3 rounded-xl font-semibold transition-all duration-300 ${
        primary
          ? "bg-violet-600 hover:bg-violet-700"
          : "border border-violet-500 hover:bg-violet-600"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;