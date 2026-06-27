function Button({
  children,
  primary = true,
  onClick,
  href,
  download,
  target,
  rel,
}) {
  const classes = `px-7 py-3 rounded-xl font-semibold transition-all duration-300 ${
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
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;