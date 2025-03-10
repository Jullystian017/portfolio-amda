// Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Scroll Animation
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const skillBars = document.querySelectorAll('.skill-progress');
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < window.innerHeight * 0.75) {
                    section.classList.add('active');
                }
            });
            
            skillBars.forEach(bar => {
                const barTop = bar.getBoundingClientRect().top;
                if (barTop < window.innerHeight * 0.9) {
                    bar.style.width = bar.getAttribute('data-width') || bar.style.width;
                }
            });
        });

        // Contact Form
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Dalam implementasi nyata, data akan dikirim ke server atau API
            console.log("Form submitted:", { name, email, subject, message });
            
            // Simulasi pengiriman data
            alert("Terima kasih! Pesan Anda telah terkirim.");
            contactForm.reset();
        });
