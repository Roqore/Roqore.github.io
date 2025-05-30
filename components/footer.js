class RQFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <p>&copy; ${new Date().getFullYear()} Roqore. All rights reserved.</p>
          <div class="footer-links">
            <a href="/pages/privacy.html">Privacy</a>
            <a href="/pages/terms.html">Terms</a>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define("site-footer", RQFooter);
