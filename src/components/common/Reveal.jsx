const Reveal = ({ children, className = "" }) => {
  return <div className={`reveal ${className}`}>{children}</div>;
};

export default Reveal;
