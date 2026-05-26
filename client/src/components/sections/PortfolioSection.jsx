function PortfolioSection() {
  return (
    <section id="portfolio" className="section dark-section">
      <div className="container">
        <div className="section-tag reveal" style={{ color: "var(--gold)" }}>
          Our Portfolio
        </div>
        <h2 className="section-title reveal" style={{ color: "var(--off-white)" }}>
          Crafting Excellence Across
          <br />
          <em>Diverse Projects</em>
        </h2>
        <p className="section-desc reveal" style={{ color: "var(--gray-mid)" }}>
          Each project represents our commitment to innovation, quality, and timeless design.
        </p>

        <div className="portfolio-grid">
          <div className="port-card reveal" data-modal="vertex">
            <div className="port-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80"
                alt="Vertex Tower"
                loading="lazy"
              />
              <div className="port-overlay">
                <button className="port-view open-modal" data-modal="vertex">
                  View Details
                </button>
              </div>
            </div>
            <div className="port-info">
              <span className="port-cat">Mixed-Use Development</span>
              <h3>Vertex Tower</h3>
              <span className="port-year">2025</span>
            </div>
          </div>

          <div className="port-card reveal" data-modal="coastal">
            <div className="port-img-wrap">
              <img
                src="https://www.zentraxconstructions.com/coastal-residence.jpg"
                alt="Coastal Residence"
                loading="lazy"
              />
              <div className="port-overlay">
                <button className="port-view open-modal" data-modal="coastal">
                  View Details
                </button>
              </div>
            </div>
            <div className="port-info">
              <span className="port-cat">Luxury Living</span>
              <h3>Coastal Residence</h3>
              <span className="port-year">2025</span>
            </div>
          </div>

          <div className="port-card reveal" data-modal="innovation">
            <div className="port-img-wrap">
              <img
                src="https://www.zentraxconstructions.com/innovation-center.jpg"
                alt="Innovation Center"
                loading="lazy"
              />
              <div className="port-overlay">
                <button className="port-view open-modal" data-modal="innovation">
                  View Details
                </button>
              </div>
            </div>
            <div className="port-info">
              <span className="port-cat">Corporate Campus</span>
              <h3>Innovation Center</h3>
              <span className="port-year">2025</span>
            </div>
          </div>

          <div className="port-card reveal" data-modal="township">
            <div className="port-img-wrap">
              <img
                src="https://www.zentraxconstructions.com/residential-township.jpg"
                alt="Residential Township"
                loading="lazy"
              />
              <div className="port-overlay">
                <button className="port-view open-modal" data-modal="township">
                  View Details
                </button>
              </div>
            </div>
            <div className="port-info">
              <span className="port-cat">Planned Community</span>
              <h3>Residential Township</h3>
              <span className="port-year">2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
