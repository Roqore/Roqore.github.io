interface BreadcrumbItem {
  title: string;
  href?: string; // optional for the current page
}

export function Breadcrumb(id: string, items: BreadcrumbItem[]) {
  const breadcrumbHtml = items
    .map((item, index) => {
      const isLast = index === items.length - 1;
      return isLast
        ? `<span class="breadcrumb-current">${item.title}</span>`
        : `<a href="${item.href}" class="breadcrumb-link">${item.title}</a>`;
    })
    .join('<span class="breadcrumb-separator"> / </span>');

  return `
    <nav id="${id}" class="breadcrumb" aria-label="Breadcrumb">
      ${breadcrumbHtml}
    </nav>
  `;
}
