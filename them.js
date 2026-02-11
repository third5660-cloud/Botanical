// 1. จัดการ Navbar เมื่อเลื่อนจอ (Scroll Effect)
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


// 2. จัดการเปลี่ยนธีม (Dark/Light Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// ฟังก์ชันอัปเดตหน้าตาปุ่ม (Icon และ Text)
function updateButton(theme) {
    if (theme === 'dark') {
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> โหมดสว่าง';
    } else {
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> โหมดมืด';
    }
}

// ตรวจสอบธีมเดิมตอนโหลดหน้าเว็บ
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateButton(currentTheme);
}

// เมื่อกดปุ่มเปลี่ยนธีม
themeToggleBtn.addEventListener('click', function() {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        // เปลี่ยนเป็นสว่าง
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateButton('light');
    } else {
        // เปลี่ยนเป็นมืด
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateButton('dark');
    }
});