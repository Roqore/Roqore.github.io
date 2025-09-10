export function Card(title: string, description?: string | null, src?: string, alt?: string | null, imgTitle?: string | null) {
    return `
    <div class="card">
        <img 
        src=${src || '/assets/roqore-default-image.webp'}
        alt=${alt || 'roqore default image'} 
        title=${imgTitle || 'Roqore'}
        />
        <div class="content">
            <h3>${title}</h3>
            ${description ? `<p>${description}</p>` : ''}
        </div>
    </div>
  `;
}
