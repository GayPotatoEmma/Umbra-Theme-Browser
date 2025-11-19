document.addEventListener('DOMContentLoaded', function () {
    
    const isIndexPage = document.getElementById('theme-grid');
    const isDetailPage = document.getElementById('detail-title');

    // --- LOGIC FOR INDEX PAGE (GRID) ---
    if (isIndexPage && typeof themeData !== 'undefined') {
        const themeGrid = document.getElementById('theme-grid');

        // Sort alphabetically
        themeData.sort((a, b) => a.name.localeCompare(b.name));

        themeGrid.innerHTML = ''; 
        
        themeData.forEach(theme => {
            const themeElement = document.createElement('a');
            themeElement.href = `theme.html?id=${theme.id}`; 
            themeElement.classList.add('theme-card');

            const imageElement = document.createElement('img');
            imageElement.src = theme.image;
            imageElement.alt = theme.name;
            // Fallback for broken images
            imageElement.onerror = () => imageElement.src = 'https://placehold.co/400x225?text=No+Image';
            
            themeElement.appendChild(imageElement);

            const titleElement = document.createElement('h2');
            titleElement.textContent = theme.name;
            themeElement.appendChild(titleElement);

            themeGrid.appendChild(themeElement);
        });
    }

    // --- LOGIC FOR THEME DETAIL PAGE ---
    if (isDetailPage && typeof themeData !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const themeId = urlParams.get('id');

        const theme = themeData.find(t => t.id === themeId);

        if (theme) {
            document.title = `${theme.name} - Umbra Theme Browser`;
            document.getElementById('detail-image').src = theme.image;
            document.getElementById('detail-title').textContent = theme.name;
            document.getElementById('detail-author').textContent = theme.author;
            document.getElementById('detail-desc').textContent = theme.description || "No description provided.";
            document.getElementById('import-code').value = theme.code || "No code provided.";
        } else {
            document.querySelector('.theme-detail').innerHTML = '<h1>Theme not found.</h1><p>Please go back to the home page.</p>';
        }
    }
});

function copyCode() {
    const codeTextArea = document.getElementById('import-code');
    codeTextArea.select();
    document.execCommand('copy');
    
    const btn = document.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = originalText, 2000);
}