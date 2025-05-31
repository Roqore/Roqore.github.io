class RQGetInTouch extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="contact">
        <h2>Ready to Solve Your Challenge?</h2>
        <p>Tell us your biggest pain point — we’ll show you how software can fix it. No jargon, no fluff, just smart
            solutions.</p>
        <a href="mailto:contact@Roqore.dev" class="cta-buttons">Get in Touch</a>
      </section>
    `;
  }
}
customElements.define("rq-get-in-touch", RQGetInTouch);
