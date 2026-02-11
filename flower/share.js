
        // ฟังก์ชันแชร์ไปยัง Facebook
        function shareToFacebook() {
            const url = encodeURIComponent(window.location.href);
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
        }

        // ฟังก์ชันแชร์ไปยัง Line
        function shareToLine() {
            const url = encodeURIComponent(window.location.href);
            window.open('https://social-plugins.line.me/lineit/share?url=' + url, '_blank');
        }


        // ฟังก์ชันแชร์ไปยัง X (Twitter)
function shareToX() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("ดูข้อมูลพันธุ์ไม้ที่น่าสนใจ: "); // คุณสามารถแก้ข้อความตรงนี้ได้
    window.open('https://twitter.com/intent/tweet?url=' + url + '&text=' + text, '_blank');
}
        // หมายเหตุ: Instagram API ไม่อนุญาตให้แชร์ลิงก์เว็บลง Feed โดยตรง
        // ปุ่มจึงตั้งค่าให้เปิดหน้าเว็บ Instagram แทน
    