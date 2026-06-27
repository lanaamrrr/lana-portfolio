function Button({
  children,
  primary = true,
  href,
  onClick,
  download,
  target,
  rel,
}) {
  const className = `inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
    primary
      ? "bg-violet-600 hover:bg-violet-700 text-white"
      : "border border-violet-500 hover:bg-violet-600 text-white"
  }`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;