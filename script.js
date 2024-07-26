document.addEventListener('DOMContentLoaded', function () {

const themeData = [
    {
        name: "Windows XP",
        author: "gaypotatoemma",
        image: "themes/Windows XP/windowsxp.png",
        htmlFile: "themes/Windows XP/windowsxp.html"
    },
    {
        name: "Windows 98",
        author: "gaypotatoemma",
        image: "themes/Windows 98/windows98.png",
        htmlFile: "themes/Windows 98/windows98.html"
    },
    {
        name: "Ubuntu",
        author: "gaypotatoemma",
        image: "themes/Ubuntu/ubuntu.png",
        htmlFile: "themes/Ubuntu/ubuntu.html"
    },
    {
        name: "Aetheris UI",
        author: "bonsaibnuuy",
        image: "themes/Aetheris UI/aetherisui.png",
        htmlFile: "themes/Aetheris UI/aetherisui.html"
    },
    {
        name: "FrostUI Purple",
        author: "zanthana",
        image: "themes/FrostUI Purple/frostui.png",
        htmlFile: "themes/FrostUI Purple/frostui.html"
    },
    {
        name: "Catppuccin Mocha",
        author: "fmauneko",
        image: "themes/Catppuccin Mocha/catppuccinmocha.png",
        htmlFile: "themes/Catppuccin Mocha/catppuccinmocha.html"
    },
    {
        name: "Vanilla UI - Dark",
        author: "legiana",
        image: "themes/Vanilla UI - Dark/vanillauidark.png",
        htmlFile: "themes/Vanilla UI - Dark/vanillauidark.html"
    },
    {
        name: "Anna Theme (Kirin Edit)",
        author: "serenkumara",
        image: "themes/Anna Theme (Kirin Edit)/annathemekirinedit.png",
        htmlFile: "themes/Anna Theme (Kirin Edit)/annathemekirinedit.html"
    },
    {
        name: "Transparent Toolbar and Black Settings",
        author: "realraiden",
        image: "themes/Transparent Toolbar and Black Settings/transparentandblack.png",
        htmlFile: "themes/Transparent Toolbar and Black Settings/transparentandblack.html"
    },
    {
        name: "Material UI",
        author: "cptn_cosmo",
        image: "themes/Material UI/materialui.png",
        htmlFile: "themes/Material UI/materialui.html"
    },
    {
        name: "Material UI - Dark Red",
        author: "fabunova",
        image: "themes/Material UI - Dark Red/materialuidarkred.png",
        htmlFile: "themes/Material UI - Dark Red/materialuidarkred.html"
    }
];

    const themeGrid = document.getElementById('theme-grid');

        function displayThemes(themes) {
        themeGrid.innerHTML = ''; 
        themes.forEach(theme => {
                        const themeElement = document.createElement('a');
            themeElement.href = theme.htmlFile;             themeElement.classList.add('theme-card');

                        const imageElement = document.createElement('img');
            imageElement.src = theme.image;
            imageElement.alt = theme.name;
            themeElement.appendChild(imageElement);

                        const titleElement = document.createElement('h2');
            titleElement.textContent = theme.name;
            themeElement.appendChild(titleElement);

                        themeGrid.appendChild(themeElement);
        });
    }

    themeData.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
    displayThemes(themeData);

});
