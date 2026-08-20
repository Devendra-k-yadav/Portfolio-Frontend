const BackToTop = ({ visible }) => {
  return (
    <button
      className={`back-top ${visible ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
