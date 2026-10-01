// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// CLOSE MENU AFTER CLICKING LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// PRICING BUTTONS

const chooseButtons =
    document.querySelectorAll(".choose-btn");

chooseButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const plan =
            button.closest(".price-card")
            .querySelector("h3")
            .textContent;

        alert(
            "You selected the " +
            plan +
            " plan! 🚀"
        );

    });

});


// CONTACT FORM

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {

        formMessage.style.color = "#dc2626";

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    formMessage.style.color = "#16a34a";

    formMessage.textContent =
        "Thank you, " +
        name +
        "! Your message has been sent successfully. 🎉";


    contactForm.reset();

});


// CARD SCROLL ANIMATION

const cards =
    document.querySelectorAll(".card, .price-card");

const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "all 0.7s ease";

    observer.observe(card);

});
