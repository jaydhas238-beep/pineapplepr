/*==================================
        FAQ
===================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    if(button){

        button.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    }

});


/*==================================
        WHATSAPP FORM
===================================*/

const whatsappForm = document.getElementById("whatsappForm");

if(whatsappForm){

    whatsappForm.addEventListener("submit", function(e){

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

}


/*==================================
        PRELOADER
===================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");
    const desktopVideo = document.getElementById("loaderDesktop");
    const mobileVideo = document.getElementById("loaderMobile");

    if (!preloader) return;

    const activeVideo = window.innerWidth <= 768
        ? mobileVideo
        : desktopVideo;

    if (!activeVideo) {
        preloader.classList.add("hide");
        return;
    }

    document.body.style.overflow = "hidden";

    activeVideo.currentTime = 0;

    activeVideo.play().catch(err => console.log(err));

    activeVideo.onended = () => {

        preloader.classList.add("hide");
        document.body.style.overflow = "auto";

    };

});
