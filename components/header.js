class RQHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>My Site</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/pages/about.html">About</a>
        </nav>
      </header>
    `;
  }
}
customElements.define("rq-header", RQHeader);
