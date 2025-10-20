// Glow Beauty Co. - Main JavaScript

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Add to Bag
const addToBagBtns = document.querySelectorAll('.btn-add-cart');
let bag = [];

addToBagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const productCard = btn.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        
        bag.push(productName);
        
        btn.textContent = 'Added to Bag ✓';
        btn.style.backgroundColor = '#8B0000';
        btn.style.color = '#FFFFFF';
        
        setTimeout(() => {
            btn.textContent = 'Add to Bag';
            btn.style.backgroundColor = '';
            btn.style.color = '';
        }, 2000);
    });
});

// Shade Finder
const shadeBtns = document.querySelectorAll('.shade-btn');

shadeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        shadeBtns.forEach(b => b.style.borderColor = 'transparent');
        btn.style.borderColor = '#8B0000';
        btn.style.borderWidth = '3px';
    });
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('.newsletter-input');
        const email = input.value;
        
        if (email) {
            alert(`Thanks for joining! Welcome to the Glow fam, ${email}`);
            input.value = '';
        }
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .value-card, .community-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log('%c GLOW BEAUTY ', 'background: #FFB6C1; color: #8B0000; font-size: 20px; padding: 10px; font-weight: bold;');
console.log('%c Portfolio project by Criatto Digital ', 'background: #8B0000; color: #FFFFFF; font-size: 14px; padding: 5px;');
