/*======================================================
            LITTLE BLOSSOMS PLAY SCHOOL
                    SCRIPT.JS
========================================================*/


/*=========================================
            LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 800);

});


/*=========================================
            STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});


/*=========================================
            MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.classList.toggle("active");

});


/*=========================================
        CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*======================================================
            SCRIPT.JS - PART 2
========================================================*/


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/*=========================================
            FAQ ACCORDION
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll("[data-target]");

function startCounter() {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const increment = Math.ceil(target / 100);

        const update = () => {

            count += increment;

            if (count >= target) {

                counter.innerText = target + "+";

            } else {

                counter.innerText = count;

                requestAnimationFrame(update);

            }

        };

        update();

    });

}


/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

    ".about, .program-card, .why-card, .facility-card, .gallery-item, .teacher-card, .testimonial-card, .step, .contact-card"

);

function revealOnScroll() {

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 80) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(50px)";

    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/*=========================================
        START COUNTERS WHEN VISIBLE
=========================================*/

let counterStarted = false;

window.addEventListener("scroll", () => {

    const heroStats = document.querySelector(".hero-stats");

    if (!heroStats) return;

    const position = heroStats.getBoundingClientRect().top;

    if (position < window.innerHeight && !counterStarted) {

        counterStarted = true;

        startCounter();

    }

});


/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*======================================================
            SCRIPT.JS - PART 3
========================================================*/


/*=========================================
        GALLERY FILTER
=========================================*/

const filterButtons = document.querySelectorAll(".gallery-filter button");

const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.textContent.trim().toLowerCase();

        galleryItems.forEach(item => {

            const category =
                item.dataset.category || "all";

            if (
                filter === "all" ||
                category === filter
            ){

                item.style.display = "block";

                setTimeout(()=>{

                    item.style.opacity="1";

                    item.style.transform="scale(1)";

                },50);

            }

            else{

                item.style.opacity="0";

                item.style.transform="scale(.8)";

                setTimeout(()=>{

                    item.style.display="none";

                },300);

            }

        });

    });

});


/*=========================================
        HERO PARALLAX
=========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    if(!hero) return;

    let y = window.scrollY;

    hero.style.backgroundPositionY = y * .35 + "px";

});


/*=========================================
        FLOATING SHAPES
=========================================*/

const shapes = document.querySelectorAll(".shape");

window.addEventListener("mousemove",(e)=>{

    const x = e.clientX/window.innerWidth;

    const y = e.clientY/window.innerHeight;

    shapes.forEach((shape,index)=>{

        const speed=(index+1)*12;

        shape.style.transform=
        `translate(${x*speed}px,${y*speed}px)`;

    });

});


/*=========================================
        IMAGE HOVER EFFECT
=========================================*/

document.querySelectorAll("img").forEach(image=>{

    image.setAttribute("loading","lazy");

});


/*=========================================
        PAGE FADE IN
=========================================*/

document.body.style.opacity="0";

window.addEventListener("load",()=>{

    document.body.style.transition="opacity .8s ease";

    document.body.style.opacity="1";

});


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn-main,.primary-btn").forEach(btn=>{

    btn.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.className="ripple";

        const rect=this.getBoundingClientRect();

        ripple.style.left=(e.clientX-rect.left)+"px";

        ripple.style.top=(e.clientY-rect.top)+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*=========================================
        NAVBAR HIDE / SHOW
=========================================*/

let lastScroll=0;

window.addEventListener("scroll",()=>{

    const current=window.pageYOffset;

    if(current>lastScroll && current>150){

        header.style.transform="translateY(-120%)";

    }

    else{

        header.style.transform="translateY(0)";

    }

    lastScroll=current;

});


/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log(

"%cLittle Blossoms Play School",

"color:#5B4BFF;font-size:22px;font-weight:bold;"

);

console.log(

"%cWebsite Designed With ❤️",

"color:#FF4081;font-size:16px;"

);
