export function Card(title: string, description?: string | null, src?: string, alt?: string | null, imgTitle?: string | null) {
    return `
    <div class="card">
        <img 
        src=${src || '/assets/roqore-default-image.webp'}
        alt=${alt || 'roqore default image'} 
        title=${imgTitle || 'Roqore'}
        width="400"
        height="300"
        loading="lazy"
        onerror="this.onerror=null; this.src='/assets/roqore-default-service.webp';"
        />
        <div class="content">
            <h3>${title}</h3>
            ${description ? `<p>${description}</p>` : ''}
        </div>
    </div>
  `;
}

export function CardLink(title: string, description?: string | null, href?: string | null, actionTitle?: string | null, src?: string, alt?: string | null, imgTitle?: string | null) {
    return `
    <div class="card">
        <img 
        src=${src || '/assets/roqore-default-image.webp'}
        alt=${alt || 'roqore default image'} 
        title=${imgTitle || 'Roqore'}
        width="400"
        height="300"
        loading="lazy"
        onerror="this.onerror=null; this.src='/assets/roqore-default-service.webp';"
        />
        <div class="content">
            <h3>${title}</h3>
            ${description ? `<p>${description}</p>` : ''}
            ${href ? `<a href=${href} class="card-link">${actionTitle}</a>` : ''}
        </div>
    </div>
  `;
}