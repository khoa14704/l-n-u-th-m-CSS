// ==========================================================================
// 1. Chuyển đổi giữa các trang (Single Page Navigation)
// ==========================================================================
function showPage(pageId) {
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// ==========================================================================
// 2. Tính năng nâng cao 1: Custom JS - Tìm kiếm/Lọc sách Real-time
// ==========================================================================
function filterBooks() {
    const input = document.getElementById('book-search').value.toLowerCase();
    const cards = document.querySelectorAll('.book-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const author = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(input) || author.includes(input)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// ==========================================================================
// 3. Truyền dữ liệu chi tiết sách sang Trang Chi Tiết (Book Detail Page)
// ==========================================================================
function viewBookDetail(title, author, desc) {
    document.getElementById('detail-title').textContent = title;
    document.getElementById('detail-author').textContent = author;
    document.getElementById('detail-desc').textContent = desc;
    showPage('detail-page');
}

// ==========================================================================
// 4. Tính năng nâng cao 4: Carousel Slider (Không tự động chạy - No Autoplay)
// ==========================================================================
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function moveSlide(direction) {
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    
    document.getElementById('slide-number').textContent = `Slide ${currentSlide + 1} / ${slides.length}`;
}