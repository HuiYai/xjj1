// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 移动端导航菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
    // 导航链接点击事件
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有active类
            navItems.forEach(link => link.classList.remove('active'));
            // 给当前点击的链接添加active类
            this.classList.add('active');
            // 关闭移动端菜单
            navLinks.classList.remove('show');
        });
    });
    // 滚动监听，更新导航active状态
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
        // 滚动时添加动画效果
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.classList.add('fade-in');
            }
        });
    });
    // 表单提交处理
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        // 简单验证
        if (!name || !email || !message) {
            alert('请填写完整的表单信息！');
            return;
        }
        // 模拟表单提交
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中...';
        submitBtn.disabled = true;
        // 模拟网络请求
        setTimeout(function() {
            alert(`感谢${name}的留言！我会尽快回复你。`);
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
    // 页面加载时触发一次滚动事件，初始化状态
    window.dispatchEvent(new Event('scroll'));
    // 为兴趣爱好添加动画效果
    const hobbyItems = document.querySelectorAll('.hobby-item');
    hobbyItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
        });
    });
});

