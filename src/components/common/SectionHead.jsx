const SectionHead = ({ kicker, title, description }) => {
  return (
    <div className="section-head reveal">
      <div>
        <div className="section-kicker">{kicker}</div>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHead;
