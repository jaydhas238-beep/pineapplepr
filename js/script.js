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

/*==================================
        PRELOADER
===================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");
    const desktopVideo = document.getElementById("loaderDesktop");
    const mobileVideo = document.getElementById("loaderMobile");

    // Choose the correct video
    const activeVideo = window.innerWidth <= 768
        ? mobileVideo
        : desktopVideo;

    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Make sure the video starts from the beginning
    activeVideo.currentTime = 0;

    // Play the video
    activeVideo.play().catch(err => {
        console.log("Autoplay prevented:", err);
    });

    // Function to hide the preloader
    function hidePreloader() {

        preloader.classList.add("hide");
        document.body.style.overflow = "auto";

    }

    // Hide when the video finishes
    activeVideo.addEventListener("ended", hidePreloader);

    // Fallback: hide after 6 seconds if "ended" doesn't fire
    setTimeout(hidePreloader, 6000);

});
