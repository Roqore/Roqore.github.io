class RQHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>Solving Problems, One Line of Code at a Time</h1>
        <p>At <strong>Roqore</strong>, we build custom software solutions for real-world challenges — no matter the
            industry, scale, or complexity.</p>
        <div class="cta-buttons">
            <a href="#services">Explore Our Services</a>
            <a href="#contact">Let's Talk</a>
        </div>
      </header>
    `;
  }
}
customElements.define("rq-header", RQHeader);
