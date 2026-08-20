const Particles = () => {
  const particles = Array.from({ length: 55 }, (_, index) => ({
    left: `${(index * 37) % 100}%`,
    delay: `${-((index * 13) % 18)}s`,
    duration: `${8 + (index % 14)}s`,
    drift: `${((index * 29) % 180) - 90}px`,
    size: `${1 + (index % 4)}px`,
  }));
  return (
    <div className="particles">
      {particles.map((particle, index) => (
        <i
          key={index}
          className="particle"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            width: particle.size,
            height: particle.size,
            "--drift": particle.drift,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
