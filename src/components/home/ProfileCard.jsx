const ProfileCard = () => {
  return (
    <div className="profile-wrap reveal delay-2">
      <div className="tech-orbit orbit-react">⚛</div>
      <div className="tech-orbit orbit-node">🍃</div>
      <div className="tech-orbit orbit-js">JS</div>
      <div className="profile-ring">
        <div className="profile-inner">
          <img src="/devlogo.png" alt="Profile" className="profile-img" />
        </div>
      </div>
      <div className="profile-badge">✦ MERN Stack Developer</div>
    </div>
  );
};

export default ProfileCard;
