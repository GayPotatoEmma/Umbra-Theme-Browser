document.addEventListener('DOMContentLoaded', function () {
    
    const isIndexPage = document.getElementById('theme-grid');
    const isDetailPage = document.getElementById('detail-title');

    // --- LOGIC FOR INDEX PAGE (GRID) ---
    if (isIndexPage && typeof themeData !== 'undefined') {
        const themeGrid = document.getElementById('theme-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');

        // 1. Function to render themes
        function renderThemes(themesToRender) {
            themeGrid.innerHTML = ''; // Clear current grid

            if (themesToRender.length === 0) {
                themeGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 40px; color: var(--text-muted); font-size: 1.2rem;">No themes found with this tag.</p>';
                return;
            }

            themesToRender.forEach(theme => {
                const themeElement = document.createElement('a');
                themeElement.href = `theme.html?id=${theme.id}`; 
                themeElement.classList.add('theme-card');

                // Image
                const imageElement = document.createElement('img');
                imageElement.src = theme.image;
                imageElement.alt = theme.name;
                imageElement.onerror = () => imageElement.src = 'https://placehold.co/400x225?text=No+Image';
                themeElement.appendChild(imageElement);

                // Title
                const titleElement = document.createElement('h2');
                titleElement.textContent = theme.name;
                themeElement.appendChild(titleElement);

                // Tags (New)
                if (theme.tags && theme.tags.length > 0) {
                    const tagContainer = document.createElement('div');
                    tagContainer.classList.add('tag-container');
                    
                    theme.tags.forEach(tag => {
                        const tagSpan = document.createElement('span');
                        tagSpan.classList.add('theme-tag');
                        tagSpan.textContent = tag;
                        tagContainer.appendChild(tagSpan);
                    });
                    themeElement.appendChild(tagContainer);
                }

                themeGrid.appendChild(themeElement);
            });
        }

        // 2. Function to handle filtering
        function filterThemes(category) {
            if (category === 'all') {
                renderThemes(themeData);
            } else {
                const filtered = themeData.filter(theme => 
                    theme.tags && theme.tags.includes(category)
                );
                renderThemes(filtered);
            }
        }

        // 3. Event Listeners for Buttons
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Filter
                const filterValue = btn.getAttribute('data-filter');
                filterThemes(filterValue);
            });
        });

        // Initial Sort & Render
        themeData.sort((a, b) => a.name.localeCompare(b.name));
        renderThemes(themeData);
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