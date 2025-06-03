        document.addEventListener('DOMContentLoaded', function () {
            
            function createBubbles() {
                const bubblesContainer = document.getElementById('bubbles-container');
                if (!bubblesContainer) {
                    const container = document.createElement('div');
                    container.id = 'bubbles-container';
                    document.body.appendChild(container);
                }

                for (let i = 0; i < 20; i++) {
                    const bubble = document.createElement('div');
                    bubble.classList.add('bubble');

                    
                    const size = Math.random() * 150 + 50;
                    bubble.style.width = `${size}px`;
                    bubble.style.height = `${size}px`;

                    
                    bubble.style.left = `${Math.random() * 100}%`;
                    bubble.style.top = `${Math.random() * 100}%`;

                
                    bubble.style.animationDuration = `${Math.random() * 20 + 10}s`;

                    // Random delay
                    bubble.style.animationDelay = `${Math.random() * 5}s`;

                    document.getElementById('bubbles-container').appendChild(bubble);
                }
            }

            createBubbles();

            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            const backToTopBtn = document.querySelector('.back-to-top');
            const animateElements = document.querySelectorAll('.animate, .animate-left, .animate-right');

            mobileMenuBtn.addEventListener('click', function () {
                navLinks.classList.toggle('active');
                this.querySelector('i').classList.toggle('fa-times');
                this.querySelector('i').classList.toggle('fa-bars');
            });

            window.addEventListener('scroll', function () {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('active');
                } else {
                    backToTopBtn.classList.remove('active');
                }

                animateOnScroll();
            });

            backToTopBtn.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            const countries = document.querySelectorAll('.country');
            countries.forEach(country => {
                country.addEventListener('click', function () {
                    countries.forEach(c => c.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            function animateOnScroll() {
                animateElements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;

                    if (elementPosition < screenPosition) {
                        element.style.opacity = '1';
                        if (element.classList.contains('animate')) {
                            element.style.transform = 'translateY(0)';
                        } else if (element.classList.contains('animate-left')) {
                            element.style.transform = 'translateX(0)';
                        } else if (element.classList.contains('animate-right')) {
                            element.style.transform = 'translateX(0)';
                        }
                    }
                });
            }

            // Initialize animations on load
            animateOnScroll();

            // Auto-scroll testimonials
            let scrollInterval;
            function startTestimonialScroll() {
                const slider = document.querySelector('.testimonial-slider');
                if (slider) {
                    let scrollAmount = 0;
                    const scrollStep = 1;
                    const slideWidth = 350 + 30; // card width + gap

                    scrollInterval = setInterval(() => {
                        scrollAmount += scrollStep;
                        if (scrollAmount >= slideWidth) {
                            const firstChild = slider.firstElementChild;
                            slider.appendChild(firstChild);
                            slider.scrollLeft -= slideWidth;
                            scrollAmount = 0;
                        } else {
                            slider.scrollLeft += scrollStep;
                        }
                    }, 20);
                }
            }

            function stopTestimonialScroll() {
                clearInterval(scrollInterval);
            }

            const testimonialSlider = document.querySelector('.testimonial-slider');
            if (testimonialSlider) {
                testimonialSlider.addEventListener('mouseenter', stopTestimonialScroll);
                testimonialSlider.addEventListener('mouseleave', startTestimonialScroll);
                startTestimonialScroll();
            }
        });
