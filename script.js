document.addEventListener('DOMContentLoaded', function () {

const themeData = [
    {
        name: "Windows XP",
        author: "gaypotatoemma",
        image: "Themes/Windows XP/windowsxp.png",
        htmlFile: "Themes/Windows XP/windowsxp.html"
    },
    {
        name: "Windows 98",
        author: "gaypotatoemma",
        image: "Themes/Windows 98/windows98.png",
        htmlFile: "Themes/Windows 98/windows98.html"
    },
    {
        name: "Ubuntu",
        author: "gaypotatoemma",
        image: "Themes/Ubuntu/ubuntu.png",
        htmlFile: "Themes/Ubuntu/ubuntu.html"
    },
    {
        name: "Aetheris UI",
        author: "bonsaibnuuy",
        image: "Themes/Aetheris UI/aetherisui.png",
        htmlFile: "Themes/Aetheris UI/aetherisui.html"
    },
    {
        name: "FrostUI Purple",
        author: "zanthana",
        image: "Themes/FrostUI Purple/frostui.png",
        htmlFile: "Themes/FrostUI Purple/frostui.html"
    },
    {
        name: "Catppuccin Mocha",
        author: "fmauneko",
        image: "Themes/Catppuccin Mocha/catppuccinmocha.png",
        htmlFile: "Themes/Catppuccin Mocha/catppuccinmocha.html"
    },
    {
        name: "Vanilla UI Dark",
        author: "legiana",
        image: "Themes/Vanilla UI - Dark/vanillauidark.png",
        htmlFile: "Themes/Vanilla UI - Dark/vanillauidark.html"
    },
    {
        name: "Anna Theme (Kirin Edit)",
        author: "serenkumara",
        image: "Themes/Anna Theme (Kirin Edit)/annathemekirinedit.png",
        htmlFile: "Themes/Anna Theme (Kirin Edit)/annathemekirinedit.html"
    },
    {
        name: "Transparent Toolbar and Black Settings",
        author: "realraiden",
        image: "Themes/Transparent Toolbar and Black Settings/transparentandblack.png",
        htmlFile: "Themes/Transparent Toolbar and Black Settings/transparentandblack.html"
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