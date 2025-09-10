export function Services() {
  // Default fallback image
  const defaultImage = "/assets/roqore-default-service.webp";

  return `
    <section id="services" class="page-block services">
      <h2>Our Expertise</h2>
      <div class="grid">

      <div class="card">
        <img src="/assets/roqore-software-engineering-architecture.webp"
            alt="Abstract salmon-orange cube symbolizing custom software engineering and scalable system architecture by Roqore"
            width="400" height="300" loading="lazy"
            onerror="this.onerror=null; this.src='/assets/roqore-default-service.webp';">
        <div class="content">
          <h3>Software Engineering & Architecture</h3>
          <p>Custom applications & scalable systems.</p>
          <a href="/services/#software" class="read-more">Read More →</a>
        </div>
      </div>

      <div class="card">
        <img src="/assets/roqore-data-engineering-analysis.webp"
            alt="Glowing salmon-orange cube transforming into data streams and charts, representing Roqore data engineering and actionable insights"
            width="400" height="300" loading="lazy"
            onerror="this.onerror=null; this.src='${defaultImage}';">
        <div class="content">
          <h3>Data Engineering & Analysis</h3>
          <p>Transform data into actionable insights.</p>
          <a href="/services/#data" class="read-more">Read More →</a>
        </div>
      </div>

      <div class="card">
        <img src="/assets/roqore-ai-machine-learning.webp"
            alt="Futuristic salmon-orange cube with neural network patterns, symbolizing AI and machine learning automation by Roqore"
            width="400" height="300" loading="lazy"
            onerror="this.onerror=null; this.src='${defaultImage}';">
        <div class="content">
          <h3>Artificial Intelligence  & Machine Learning</h3>
          <p>Intelligent automation and predictive models.</p>
          <a href="/services/#ai" class="read-more">Read More →</a>
        </div>
      </div>

      <div class="card">
        <img src="/assets/roqore-cloud-deployments-automation.webp"
            alt="Salmon-orange cube floating within light whitish-blue cloud, representing Roqore cloud deployments and automation solutions"
            width="400" height="300" loading="lazy"
            onerror="this.onerror=null; this.src='${defaultImage}';">
        <div class="content">
          <h3>Cloud Deployments & Automation</h3>
          <p>Secure, scalable cloud solutions and automation.</p>
          <a href="/services/#cloud" class="read-more">Read More →</a>
        </div>
      </div>

      </div>
    </section>
  `;
}
