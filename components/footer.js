class RQFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>&copy; ${new Date().getFullYear()} Roqore. All rights reserved.</p>
        <p>
            <a href="#">About</a> |
            <a href="#services">Services</a> |
            <a href="#">Privacy Policy</a>
        </p>
        <p>Email: <a href="mailto:sakd@Roqore.dev">sakd@Roqore.dev</a></p>
      </footer>
    `;
  }
}
customElements.define("rq-footer", RQFooter);
