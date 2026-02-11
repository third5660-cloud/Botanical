// 3. ฟังก์ชัน Dark Mode
        const themeToggleBtn = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('theme');

        function updateButton(theme) {
            if (theme === 'dark') {
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> โหมดสว่าง';
            } else {
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> โหมดมืด';
            }
        }

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            updateButton(currentTheme);
        }

        themeToggleBtn.addEventListener('click', function() {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                updateButton('light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateButton('dark');
            }
        });