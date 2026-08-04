const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

document
.getElementById("whatsappForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const text =
`*New Website Enquiry*

👤 Name: ${name}

📧 Email: ${email}

📱 Phone: ${phone}

💼 Service: ${service}

📝 Message:
${message}`;

    window.open(
        `https://wa.me/917972219776?text=${encodeURIComponent(text)}`,
        "_blank"
    );

});


/*==================================
        PRELOADER
===================================*/

const preloader = document.getElementById("preloader");

const desktopVideo = document.getElementById("loaderDesktop");
const mobileVideo = document.getElementById("loaderMobile");

const activeVideo = window.innerWidth <= 768
    ? mobileVideo
    : desktopVideo;

document.body.style.overflow = "hidden";

activeVideo.addEventListener("ended", () => {

    setTimeout(() => {

        preloader.classList.add("hide");

        document.body.style.overflow = "auto";

    },300);

});
