export function PageTitle(id: string, title: string, tagline?: string | null) {
  return `
    <section id=${id} class="page-block page-title">
        <h1>${title}</h1>
        ${tagline ? `<p class="tagline">${tagline}</p>` : ''}
    </section>
  `;
}
