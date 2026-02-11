// ฟังก์ชันแชร์ไปยัง X (Twitter)
function shareToX() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("ข้อมูลพันธุ์ไม้พุ่มที่น่าสนใจ: ");
    window.open('https://twitter.com/intent/tweet?url=' + url + '&text=' + text, '_blank');
}

function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
}

function shareToLine() {
    const url = encodeURIComponent(window.location.href);
    window.open('https://social-plugins.line.me/lineit/share?url=' + url, '_blank');
}