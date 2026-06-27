function Button({
  children,
  primary = true,
  href,
  onClick,
  download,
  target,
  rel,
}) {
  const className = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    px-7
    py-3.5
    font-semibold
    transition-all
    duration-300
    cursor-pointer
    select-none
    hover:-translate-y-1
    active:scale-95
    ${
      primary
        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30 hover:bg-violet-500 hover:shadow-violet-500/40"
        : "border border-violet-500/40 bg-white/5 backdrop-blur-xl text-white hover:bg-violet-500/10 hover:border-violet-400"
    }
  `;

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