function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content reveal">
        <div className="hero-logo-wrap">
          <div className="hero-logo-bg">
            <img src="logo.png" alt="Zentrax" className="hero-logo" />
          </div>
          <div className="hero-brand-name">
            <span className="hero-brand-main">ZENTRAX</span>
            <span className="hero-brand-sub">CONSTRUCTION</span>
          </div>
        </div>
        <div className="hero-divider"></div>
        <p className="hero-sub">Architecture &amp; Engineering Excellence</p>
        <h1 className="hero-title">
          Where Vision
          <br />
          <em>Meets Execution</em>
        </h1>
        <p className="hero-desc">Engineering Modern Spaces with Precision &amp; Excellence</p>
        <div className="hero-btns">
          <a href="#portfolio" className="btn-gold">
            Explore Projects
          </a>
          <a href="#contact" className="btn-outline">
            Contact Us
          </a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="hstat">
          <span className="hstat-num" data-target="2018">
            0
          </span>
          <span className="hstat-label">Founded</span>
        </div>
        <div className="hstat-sep"></div>
        <div className="hstat">
          <span className="hstat-num" data-target="24">
            0
          </span>
          <span className="hstat-suffix">/7</span>
          <span className="hstat-label">Support</span>
        </div>
        <div className="hstat-sep"></div>
        <div className="hstat">
          <span className="hstat-num" data-target="100">
            0
          </span>
          <span className="hstat-suffix">%</span>
          <span className="hstat-label">Commitment</span>
        </div>
      </div>
      <a href="#philosophy" className="scroll-down">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </a>
    </section>
  );
}

export default HeroSection;
