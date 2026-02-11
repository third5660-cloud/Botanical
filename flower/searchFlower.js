/* ==========================================================================
   ส่วนที่ 1: ฐานข้อมูลพันธุ์ไม้ (Database)
   ========================================================================== */
const plantDatabase = [
    { name: "ชวนชม", category: "ไม้พุ่ม", keywords: "ทนแล้ง ดอกสีชมพู ดอกสีแดง เลี้ยงง่าย แดดจัด", url: "Adenium.html" },
    { name: "ต้นหมาก", category: "ไม้ยืนต้น", keywords: "ปาล์ม สูง ให้ร่มเงา แดดจัด", url: "Areca plam.html" },
    { name: "ต้นกระดังงา", category: "ไม้ยืนต้น", keywords: "ดอกหอม ดอกสีเหลือง ไม้มงคล ไทยแท้", url: "Cananga Tree.html" },
    { name: "ชาฮกเกี้ยน", category: "ไม้พุ่ม", keywords: "ทำรั้ว ดัดทรงได้ ดอกสีขาว ผลสีส้ม แดดจัด", url: "Carmona.html" },
    { name: "โกสน", category: "ไม้พุ่ม", keywords: "ใบสีสวย ใบหลากสี ไม้มงคล ทนแดด", url: "Croton.html" },
    { name: "กุหลาบหนู", category: "ไม้พุ่ม", keywords: "ดอกสวย ดอกกุหลาบ ดอกหลากสี หนาม", url: "Fairy Rose.html" },
    { name: "โกสนใบขนุน", category: "ไม้พุ่ม", keywords: "ใบสีเหลือง ใบเขียว ใบหนา ไม้มงคล", url: "Garden Croton.html" },
    { name: "หนวดปลาหมึกแคระด่าง", category: "ไม้พุ่ม", keywords: "ใบด่าง ฟอกอากาศ ปลูกในร่มได้", url: "Hawaiian.html" },
    { name: "ดอกเข็ม", category: "ไม้พุ่ม", keywords: "ดอกสีแดง ดอกสีเหลือง ทำรั้ว น้ำหวาน ไหว้ครู", url: "Ixora.html" },
    { name: "ราชพฤกษ์", category: "ไม้ยืนต้น", keywords: "แก้ท้องผูก ดอกสีเหลือง ไม้มงคล ไทยแท้", url: "Golden Shower.html" },
    { name: "สังกาลังกา", category: "ไม้ยืนต้น", keywords: "Cannonball ดอกสีเหลือง ไม้มงคล ไทยแท้ ประดับสวน", url: "Cannonball.html" },
    { name: "หูปลาช่อน", category: "ไม้พุ่ม", keywords: "ใบเขียว ดอกสีเหลือง ประดับสวน", url: "Copperleaf.html" },
    { name: "โกสนช้างเข้าโบสถ์", category: "ไม้พุ่ม", keywords: "ใบสีสวย ใบหลากสี ไม้มงคล ทนแดด", url: "Spiral Croton.html" },
    { name: "กล้วยไม้หวาย", category: "ไม้ล้มลุก", keywords: "ดอกสีสวย ไม้มงคล ดอกไม้บูชา", url: "Dendrobium.html" },
    { name: "มะละกอ", category: "ไม้ล้มลุก", keywords: "ผลสุก ไม้มงคล ดอกไม้บูชา", url: "Papaya.html" },
    { name: "เทียนทอง", category: "ไม้พุ่ม", keywords: "ใบเขียว ดอกสีเหลือง ประดับสวน ตกแต่งสวน", url: "Sky Flower.html" },
    { name: "กะเพราแดง", category: "ไม้พุ่ม", keywords: "ใบเขียว หอม กินได้ ตกแต่งสวน", url: "Red Holy Basil.html" },
    { name: "กุหลาบขาว", category: "ไม้พุ่ม", keywords: "ดอกสวย ดอกกุหลาบ ดอกหลากสี หนาม", url: "Write Rose.html" },
    { name: "ต้นไทรทอง", category: "ไม้ยืนต้น", keywords: "ใบเขียว ไม้มงคล ไทยแท้ ประดับสวน", url: "Lofty Fig.html" },
    { name: "โกสนสายรุ้ง", category: "ไม้พุ่ม", keywords: "ใบสีสวย ใบหลากสี ไม้มงคล ทนแดด", url: "Rainbow Croton.html" },
    { name: "มอนสเตรา", category: "ไม้เลื้อย", keywords: "ใบสีสวย ใบใหญ่ ทนแดด ประดับสวน ประดับบ้าน", url: "Monstera.html" },
    { name: "เล็บครุฑฝอยทอง", category: "ไม้พุ่ม", keywords: "ใบสีสวย ใบใหญ่ ทนแดด ประดับสวน ประดับบ้าน", url: "Polyscias.html" },
    { name: "สาละลังกา", category: "ไม้ยืนต้น", keywords: "ดอกหอม ออกดอกตามลำต้น ผลกลมใหญ่ ไม้มงคลในวัด", url: "Canonball.html" }
    // { name: "หนวดปลาหมึกเเคระด่าง", category: "ไม้พุ่ม", keywords: "ใบด่าง ฟอกอากาศ ปลูกในร่มได้ ดูแลง่าย ชอบแดดรำไร ไม้ประดับ", url: "Hawaiian.html" }
];

/* ==========================================================================
   ส่วนที่ 2: ฟังก์ชันค้นหาหลัก (Search Logic)
   ========================================================================== */
function searchPlants() {
    // *** จุดสำคัญที่แก้ไข: ใช้ ID 'mainSearchInput' ให้ตรงกับ HTML ใหม่ ***
    const input = document.getElementById('mainSearchInput'); 
    
    // ป้องกัน Error กรณีหา element ไม่เจอ
    if (!input) return;

    const filter = input.value.trim().toLowerCase();
    
    // *** จุดสำคัญที่แก้ไข: ใช้ ID 'mainSearchResults' ให้ตรงกับ HTML ใหม่ ***
    const resultsContainer = document.getElementById('mainSearchResults');
    if (!resultsContainer) return;

    // กรณี 1: ช่องค้นหาว่าง -> ซ่อนกล่องผลลัพธ์
    if (filter.length === 0) {
        resultsContainer.style.display = 'none';
        resultsContainer.innerHTML = '';
        return;
    }

    // กรณี 2: กรองข้อมูล
    const filteredPlants = plantDatabase.filter(plant => {
        const matchName = plant.name.includes(filter);
        const matchCategory = plant.category.includes(filter);
        const matchKeywords = plant.keywords && plant.keywords.includes(filter);
        return matchName || matchCategory || matchKeywords;
    });

    displayResults(filteredPlants);
}

/* ==========================================================================
   ส่วนที่ 3: ฟังก์ชันแสดงผล (Display HTML)
   ========================================================================== */
function displayResults(plants) {
    const resultsContainer = document.getElementById('mainSearchResults');
    resultsContainer.innerHTML = ''; 

    // ไม่เจอข้อมูล
    if (plants.length === 0) {
        resultsContainer.style.display = 'block';
        resultsContainer.innerHTML = '<div class="search-item" style="color: #999; cursor: default; padding: 15px;">ไม่พบข้อมูลพันธุ์ไม้ที่ค้นหา</div>';
        return;
    }

    // เจอข้อมูล
    plants.forEach(plant => {
        const itemLink = document.createElement('a');
        itemLink.href = plant.url;
        itemLink.classList.add('search-item');
        
        // จัดหน้าตาใน Dropdown
        itemLink.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h4 style="margin: 0; font-size: 1rem; font-weight: 600; color: #333;">${plant.name}</h4>
                <span style="font-size: 0.8rem; color: #1a7e1a; background: #e8f5e9; padding: 2px 8px; border-radius: 10px;">${plant.category}</span>
            </div>
            <div style="font-size: 0.85rem; color: #666; margin-top: 4px;">
                ${plant.keywords ? plant.keywords : ''}
            </div>
        `;

        resultsContainer.appendChild(itemLink);
    });

    resultsContainer.style.display = 'block';
}

/* ==========================================================================
   ส่วนที่ 4: ฟังก์ชันเสริม
   ========================================================================== */

// 4.1 คลิก Tag แนะนำ (แก้ ID ให้ตรงกัน)
function autoSearch(keyword) {
    const input = document.getElementById('mainSearchInput');
    if (input) {
        input.value = keyword;
        searchPlants();
        input.focus();
    }
}

// 4.2 คลิกพื้นที่อื่นเพื่อปิดกล่อง (ตรวจสอบ class 'search-hero-section')
document.addEventListener('click', function(e) {
    const container = document.querySelector('.search-hero-section'); 
    const results = document.getElementById('mainSearchResults');
    
    // ถ้าคลิกนอกพื้นที่ container ให้ซ่อนผลลัพธ์
    if (container && !container.contains(e.target)) {
        if(results) results.style.display = 'none';
    }
});