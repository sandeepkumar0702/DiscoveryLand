document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".disc-gall-header");
    const darkLogo = document.querySelector(".disc-gall-header-nav-dark-logo");
    const lightLogo = document.querySelector(".disc-gall-header-nav-white-logo");
    let lastScrollY = window.scrollY;
    let ticking = false; // Improves performance using requestAnimationFrame

    function handleScroll() {
        let scrollY = window.scrollY;

        if (scrollY > 50) {
            header.style.backgroundColor = "white";
            header.style.color = "black";

            header.querySelectorAll(".disc-gall-header-nav-links div").forEach(link => {
                link.style.color = "black";
            });

            lightLogo.style.display = "none";
            darkLogo.style.display = "block";
        } else {
            header.style.backgroundColor = "transparent";
            header.style.color = "white";

            header.querySelectorAll(".disc-gall-header-nav-links div").forEach(link => {
                link.style.color = "white";
            });

            lightLogo.style.display = "block";
            darkLogo.style.display = "none";
        }

        if (scrollY > 500) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    window.addEventListener("scroll", function () {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const campusSection = document.querySelector('.campus-div');  // Select the campus section
    let lastScrollY = window.scrollY;
    let ticking = false;

    // Add scroll event listener
    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });

    function handleScroll() {
        let scrollY = window.scrollY;

        // If scrolling down
        if (scrollY > lastScrollY) {
            // Scroll down: Slide the campus section back to the original position
            campusSection.style.transform = `translateY(0)`;
        } else {
            // Scroll up: Slide the campus section up (simulate sliding over footer)
            campusSection.style.transform = `translateY(-80px)`;  // Adjust the value as needed
        }

        // Keep track of the last scroll position
        lastScrollY = scrollY;
        ticking = false;
    }
});


document.getElementById("responsiveLink").addEventListener("click", function (event) {
    if (window.innerWidth >= 350) {
        event.preventDefault(); // Prevent navigation
    }
});



let index = 0;
        const carousel = document.getElementById('carousel');
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length / 2;
        
        function moveSlide(step) {
            index += step;
            if (index >= totalSlides) {
                setTimeout(() => {
                    carousel.style.transition = 'none';
                    index = 0;
                    carousel.style.transform = `translateX(-${index * 33.33}%)`;
                }, 500);
            } else if (index < 0) {
                setTimeout(() => {
                    carousel.style.transition = 'none';
                    index = totalSlides - 1;
                    carousel.style.transform = `translateX(-${index * 33.33}%)`;
                }, 500);
            }
            carousel.style.transition = 'transform 0.5s ease-in-out';
            carousel.style.transform = `translateX(-${index * 33.33}%)`;
        }
        
        function autoSlide() {
            moveSlide(1);
        }
        setInterval(autoSlide, 2000); // Auto-slide every 3 second