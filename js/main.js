document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        document.addEventListener('click', function(event) {
            if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Не показываем на главной странице
    if (window.location.pathname.endsWith('index.html') || 
        window.location.pathname === '/') return;

    const btn = document.createElement('a');
    btn.href = 'javascript:history.back()';
    btn.innerHTML = '← К разделам';
    btn.style.cssText = `
        display: inline-block;
        margin-bottom: 20px;
        font-size: 13px;
        color: #666666;
        text-decoration: none;
        cursor: pointer;
    `;
    btn.onmouseover = () => btn.style.color = '#333333';
    btn.onmouseout = () => btn.style.color = '#666666';

    const content = document.querySelector('.content');
    if (content) content.prepend(btn);
});