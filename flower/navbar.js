const navbar = document.querySelector('.navbar');
        const scrollThreshold = 60; 

        function handleScroll() {
            if (window.scrollY > scrollThreshold) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        window.addEventListener('scroll', handleScroll);

        const menuToggle = document.querySelector('.menu-toggle');
        const navbarMenu = document.querySelector('.navbar-menu');

        menuToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });