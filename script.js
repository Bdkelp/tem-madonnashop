// The Madonna Shop - JavaScript

// Store hours data
const storeHours = {
    'Monday': { open: null, closed: true },
    'Tuesday': { open: '10:00 AM', close: '5:00 PM', closed: false },
    'Wednesday': { open: '10:00 AM', close: '5:00 PM', closed: false },
    'Thursday': { open: '10:00 AM', close: '5:00 PM', closed: false },
    'Friday': { open: '10:00 AM', close: '5:00 PM', closed: false },
    'Saturday': { open: '10:00 AM', close: '5:00 PM', closed: false },
    'Sunday': { open: null, closed: true }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateCurrentYear();
    displayStoreHours();
    setupContactForm();
    setupReviewButton();
    
    // Add loading class removal after page load
    document.body.classList.add('loaded');
});

// Update current year in footer
function updateCurrentYear() {
    const yearElements = document.querySelectorAll('#current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Display store hours
function displayStoreHours() {
    const hoursElements = [
        document.getElementById('store-hours'),
        document.getElementById('footer-hours'),
        document.getElementById('contact-hours')
    ];
    
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const todayName = dayNames[new Date().getDay()];
    
    hoursElements.forEach(element => {
        if (element) {
            element.innerHTML = generateHoursHTML(todayName);
        }
    });
}

// Generate hours HTML
function generateHoursHTML(today) {
    let html = '';
    
    Object.entries(storeHours).forEach(([day, hours]) => {
        const isToday = day.toLowerCase() === today;
        const dayClass = isToday ? 'today' : '';
        
        if (hours.closed) {
            html += `<div class="hours-day ${dayClass}">
                        <span class="day">${day}:</span> 
                        <span class="time closed">Closed</span>
                     </div>`;
        } else {
            html += `<div class="hours-day ${dayClass}">
                        <span class="day">${day}:</span> 
                        <span class="time">${hours.open} - ${hours.close}</span>
                     </div>`;
        }
    });
    
    // Add today's status
    const todayHours = storeHours[today.charAt(0).toUpperCase() + today.slice(1)];
    if (todayHours) {
        if (todayHours.closed) {
            html += '<p class="today-status closed"><strong>Closed today</strong></p>';
        } else {
            html += `<p class="today-status open"><strong>Open today: ${todayHours.open} - ${todayHours.close}</strong></p>`;
        }
    }
    
    return html;
}

// Setup contact form handling
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            submitContactForm(name, email, phone, message);
        });
    }
}

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Submit contact form (placeholder implementation)
function submitContactForm(name, email, phone, message) {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Hide form and show success message
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth' });
        
        // TODO: Replace this with actual form submission to webhook
        // For production, replace the above with:
        // fetch('YOUR_WEBHOOK_URL', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, phone, message })
        // }).then(response => {
        //     if (response.ok) {
        //         contactForm.style.display = 'none';
        //         successMessage.style.display = 'block';
        //     } else {
        //         throw new Error('Form submission failed');
        //     }
        // }).catch(error => {
        //     alert('There was an error sending your message. Please try calling us directly.');
        //     submitButton.textContent = originalText;
        //     submitButton.disabled = false;
        // });
        
    }, 1500);
}

// Setup review button (placeholder)
function setupReviewButton() {
    const reviewButton = document.getElementById('google-review-btn');
    
    if (reviewButton) {
        reviewButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show user-friendly message for placeholder functionality
            alert('We appreciate your interest in leaving a review! This link will be updated with our Google Business review URL soon. In the meantime, please call us at (915) 775-0113 to share your feedback.');
            
            // TODO: Replace with actual Google Business review URL
            // Once you have the real URL, replace the href in the HTML and remove this alert
            // The button should link directly to: https://g.page/r/YOUR_GOOGLE_PLACE_ID/review
        });
    }
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});

// Add intersection observer for animations (optional enhancement)
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.addEventListener('DOMContentLoaded', () => {
        const animatedElements = document.querySelectorAll('.item-card, .benefit, .product-category, .connect-item');
        animatedElements.forEach(el => observer.observe(el));
    });
}

// Phone number formatting (optional enhancement)
function formatPhoneNumber(input) {
    const cleaned = input.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    
    return input;
}

// Auto-format phone input
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            e.target.value = formatPhoneNumber(e.target.value);
        });
    }
});

// Add CSS classes for hours display
const hoursCSS = `
    .hours-day {
        display: flex;
        justify-content: space-between;
        padding: 0.25rem 0;
        border-bottom: 1px solid var(--border-color);
    }
    
    .hours-day:last-child {
        border-bottom: none;
    }
    
    .hours-day.today {
        font-weight: 600;
        background-color: var(--light-gray);
        padding: 0.5rem;
        border-radius: 4px;
        border-bottom: none;
        margin-bottom: 0.5rem;
    }
    
    .day {
        font-weight: 500;
    }
    
    .time.closed {
        color: var(--slate);
        font-style: italic;
    }
    
    .today-status {
        margin-top: 1rem;
        padding: 0.75rem;
        border-radius: 4px;
        text-align: center;
        font-weight: 600;
    }
    
    .today-status.open {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    .today-status.closed {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    
    .in-view {
        animation: fadeInUp 0.6s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Inject hours CSS
const style = document.createElement('style');
style.textContent = hoursCSS;
document.head.appendChild(style);

// Add error handling for console
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Service worker registration (optional for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you want to add PWA features
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}