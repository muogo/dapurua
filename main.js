// 1. Navbar
const navbar = document.querySelector(".navbar");

const handleNavbar = () => {
    if (window.scrollY >= 150) {
        navbar.classList.add("change");
    }

    else {
        navbar.classList.remove("change");
    }
}

window.addEventListener("scroll", handleNavbar);


// -------------------------------------------------------------------
// 2. Active Link
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        menuLinks.forEach(l => l.classList.remove("active"));

        // Add 'active' class to the clicked link
        link.classList.add("active");
    });
});

// 2.1. To dynamically update the active link based on the section the user is currently viewing (e.g., #home, #about)
const sections = document.querySelectorAll('section'); // Target sections with IDs like #home, #about

// To remove active class from all links
const removeActiveClasses = () => {
    menuLinks.forEach(link => link.classList.remove("active"));
};

// To add active class to the link that matches the given id
const setActiveLink = (id) => {
    removeActiveClasses();
    const activeLink = document.querySelector(`.menu a[href="#${id}"]`);
    if (activeLink) activeLink.classList.add("active");
};

// Intersection Observer to detect which section is in the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id; // Get the ID of the section
            setActiveLink(sectionId); // Set the corresponding link to active

            // Update the URL hash
            window.history.pushState(null, null, `#${sectionId}`);
        }
    });
}, {
    threshold: 0.6 // Adjust threshold for when a section is considered "visible"
});

// Observe each section
sections.forEach(section => observer.observe(section));


// -------------------------------------------------------------------
// 3. Scroll to the top
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls down
const handleScrollTopBtn = () => {
    if (window.scrollY > 185) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
};

// Scroll to the top when the button is clicked
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", handleScrollTopBtn);


// --------------------------------------------------------------------
// 4. Hamburger Menu Open Close
const hamburgerOpen = document.getElementById('hamburgerOpen');
const hamburgerClose = document.getElementById('hamburgerClose');
const menu = document.querySelector('.menu');

// To open menu
hamburgerOpen.addEventListener('click', () => {
    menu.classList.add("open");
});

// To close menu
hamburgerClose.addEventListener('click', () => {
    menu.classList.remove("open");
});

// Closing the menu when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInside = menu.contains(event.target) || hamburgerOpen.contains(event.target);
    if (!isClickInside) {
        menu.classList.remove("open");
    }
});


// -----------------------------------------------------------------
// 5.
document.addEventListener('DOMContentLoaded', () => {
    const scrollButtons = document.querySelectorAll('.ul-btn, .nav-btn, .about-btn');
    const getInTouchSection = document.querySelector('#get-in-touch');

    // Adding click event listener to each button
    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            getInTouchSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Scroll to the start of the section
            });
        });
    });
});



