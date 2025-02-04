document.addEventListener('DOMContentLoaded', function () {
    const mainHeader = document.querySelector('.disc-exp-header');
    const header = document.querySelector('.disc-exp-header-nav');
    const headerLinks = document.querySelectorAll('.disc-exp-header-nav-links a');
    const headerDarkLogo = document.querySelector('.disc-exp-header-nav-dark-logo');
    const headerLightLogo = document.querySelector('.disc-exp-header-nav-white-logo');
    const animationUnderlines = document.querySelectorAll('.disc-exp-header-nav-span');
    const headerMenuIconBorder = document.querySelector('.disc-gall-header-nav-menu-option');
    const headerMenuIcon = document.querySelector('.disc-gall-header-nav-menu-option p');

    const bannerText = document.querySelectorAll(".disc-exp-main-text-container")
    console.log(bannerText)

    bannerText.forEach(text => {
        text.style.transform = 'translateY(30px)';
        text.style.opacity = '0';
    })

    bannerText.forEach((text, idx) => {
        setTimeout(() => {
            text.style.transform = 'translateY(0)';
            text.style.opacity = '1';
            text.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
        }, idx * 5000);
    })

    const footer = document.querySelector('footer');
    const main = document.querySelector('main');

    const mainText1 = document.querySelectorAll('.disc-exp-main-text h2 div')

    const subContainerCard1MainText = document.querySelectorAll('.disc-exp-main-sub-container-card-text > h2 > div')
    const subContainerCard1SecondaryText = document.querySelectorAll('.disc-exp-main-sub-container-card-text > div > div')

    const overlappingCard1Title = document.querySelector('.disc-exp-overlappingcard1 > div > h2')
    const overlappingCard1Desc = document.querySelectorAll('.disc-exp-overlappingcard1 div:nth-child(2) div')

    const overlappingCard2Title = document.querySelector('.disc-exp-overlappingcard2 > div > h2')
    const overlappingCard2Desc = document.querySelectorAll('.disc-exp-overlappingcard2 div:nth-child(2) div')

    const overlappingCard3Title = document.querySelector('.disc-exp-overlappingcard3 > div > h2')
    const overlappingCard3Desc = document.querySelectorAll('.disc-exp-overlappingcard3 div:nth-child(2) div')


    overlappingCard1Title.style.transform = 'translateY(30px)';
    overlappingCard1Title.style.opacity = '0';
    overlappingCard1Title.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';

    overlappingCard2Title.style.transform = 'translateY(30px)';
    overlappingCard2Title.style.opacity = '0';
    overlappingCard2Title.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';

    overlappingCard3Title.style.transform = 'translateY(30px)';
    overlappingCard3Title.style.opacity = '0';
    overlappingCard3Title.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';

    overlappingCard2Desc.forEach(text => {
        text.style.transform = 'translateY(30px)';
        text.style.opacity = '0';
        // text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease
    })

    overlappingCard3Desc.forEach(text => {
        text.style.transform = 'translateY(30px)';
        text.style.opacity = '0';
    })


    overlappingCard1Desc.forEach(text => {
        text.style.transform = 'translateY(30px)';
        text.style.opacity = '0';
        // text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease
    })

    subContainerCard1MainText.forEach(text => {
        text.style.transform = 'translateY(30px)';
        text.style.opacity = '0';
        text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
    })

    subContainerCard1SecondaryText.forEach(text => {
        text.style.transform = 'translateY(30px)';
        text.style.opacity = '0';
        text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
    })

    mainHeader.style.position = 'fixed';
    mainHeader.style.width = '100%';
    mainHeader.style.top = '0';
    mainHeader.style.transition = 'transform 0.8s ease-in-out';
    mainHeader.style.zIndex = '3';

    let lastScrollPosition = window.scrollY;
    let ticking = false;

    const isMobile = () => window.innerWidth < 768;//to check for mobile screens

    if (!isMobile()) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.left = '0';
        footer.style.width = '100%';
        footer.style.zIndex = '1';
    }

    const wrapper = document.createElement('div')
    wrapper.style.position = 'relative';
    wrapper.style.zIndex = '2';
    wrapper.style.backgroundColor = 'rgb(16, 16, 16)';

    main.parentNode.insertBefore(wrapper, main);
    wrapper.appendChild(main);

    const footerHeight = footer.offsetHeight;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const maxScroll = documentHeight - windowHeight - footerHeight;

                if (currentScroll > 50) {
                    header.style.backgroundColor = '#ffffff';
                    header.style.transition = 'background-color 0.8s ease-in-out';
                    headerLinks.forEach(link => link.style.color = '#000000');
                    headerLinks.forEach(link => link.style.transition = 'color 0.8s ease-in-out');
                    headerLightLogo.style.display = 'none';
                    headerDarkLogo.style.display = 'block';
                    animationUnderlines.forEach(span => span.style.backgroundColor = '#000000');
                    headerMenuIcon.style.color = '#000000';
                    headerMenuIconBorder.style.borderColor = '#000000';
                } else {
                    header.style.backgroundColor = 'transparent';
                    headerLinks.forEach(link => link.style.color = '#ffffff');
                    headerDarkLogo.style.display = 'none';
                    headerLightLogo.style.display = 'block';
                    animationUnderlines.forEach(span => span.style.backgroundColor = '#ffffff');
                    headerMenuIcon.style.color = '#ffffff';
                    headerMenuIconBorder.style.borderColor = '#ffffff';
                }

                if (currentScroll > 320) {
                    mainText1.forEach((text, idx) => {
                        setTimeout(() => {
                            text.style.transform = 'translateY(0)';
                            text.style.opacity = '1';
                            text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                        }, idx * 80);
                    }
                    )
                }

                if (currentScroll > 800) {
                    subContainerCard1MainText.forEach((text, idx) => {
                        setTimeout(() => {
                            text.style.transform = 'translateY(0)';
                            text.style.opacity = '1';
                            text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                        }, idx * 80);
                    });
                }

                if (currentScroll > 1000) {
                    subContainerCard1SecondaryText.forEach((text, idx) => {
                        setTimeout(() => {
                            text.style.transform = 'translateY(0)';
                            text.style.opacity = '1';
                            text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                        }, idx * 80);
                    });
                }

                if (currentScroll > 1500) {
                    overlappingCard1Title.style.transform = 'translateY(0)';
                    overlappingCard1Title.style.opacity = '1';
                }
                if (currentScroll > 1500) {
                    overlappingCard1Desc.forEach((text, idx) => {
                        setTimeout(() => {
                            text.style.transform = 'translateY(0)';
                            text.style.opacity = '1';
                            text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                        }, idx * 80);
                    });
                }

                if (currentScroll > 2500) {
                    overlappingCard2Title.style.transform = 'translateY(0)';
                    overlappingCard2Title.style.opacity = '1';
                }

                if (currentScroll > 2600) {
                    overlappingCard2Desc.forEach((text, idx) => {
                        setTimeout(() => {
                            text.style.transform = 'translateY(0)';
                            text.style.opacity = '1';
                            text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                        }, idx * 80);
                    });
                }

                if (currentScroll > 2900) {
                    overlappingCard3Title.style.transform = 'translateY(0)';
                    overlappingCard3Title.style.opacity = '1';
                }

                if (currentScroll > 3200) {
                    overlappingCard3Desc.forEach((text, idx) => {
                        setTimeout(() => {
                            text.style.transform = 'translateY(0)';
                            text.style.opacity = '1';
                            text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                        }, idx * 80);
                    });
                }

                if (currentScroll > 150) {

                    if (currentScroll > lastScrollPosition) {
                        mainHeader.style.transform = 'translateY(-100%)';
                    } else {
                        mainHeader.style.transform = 'translateY(0)';
                    }
                } else {
                    mainHeader.style.transform = 'translateY(0)';
                }

                if (!isMobile() && currentScroll > maxScroll - footerHeight) {
                    const translateY = currentScroll - (maxScroll - footerHeight);
                    wrapper.style.transform = `translateY(-${translateY}px)`;
                } else {
                    wrapper.style.transform = `translateY(0)`;
                }

                lastScrollPosition = currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    });
    window.addEventListener('resize', function () {
        if (isMobile()) {
            footer.style.position = 'static';
            wrapper.style.transition = 'none';
            wrapper.style.transform = 'translateY(0)';
        } else {
            footer.style.position = 'fixed';
            footer.style.bottom = '0';
            footer.style.left = '0';
            footer.style.width = '100%';
            footer.style.zIndex = '1';
            wrapper.style.transition = 'transform 0.8s ease-in-out';
        }
    });
});

/// navigation btn
document.getElementById("responsiveLink").addEventListener("click", function (event) {
    if (window.innerWidth >= 350) {
        event.preventDefault(); // Prevent navigation
    }
});
