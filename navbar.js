// ตรวจสอบปุ่ม
const themeBtn = document.getElementById('theme-toggle');

// ตรวจสอบว่าเคยเลือกโหมดไหนไว้หรือไม่ (จำค่าได้)
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if(themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i> โหมดสว่าง';
}

// ฟังก์ชันเมื่อกดปุ่ม
if(themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i> โหมดสว่าง';
            localStorage.setItem('theme', 'dark'); // บันทึกว่าเลือกโหมดมืด
        } else {
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i> โหมดมืด';
            localStorage.setItem('theme', 'light'); // บันทึกว่าเลือกโหมดสว่าง
        }
    });
}