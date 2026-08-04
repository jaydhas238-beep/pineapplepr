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

    // Exit if preloader doesn't exist
    if(!preloader){
        return;
    }

    // Select correct video
    let activeVideo;

    if(window.innerWidth <= 768){

        activeVideo = mobileVideo;

        if(desktopVideo){
            desktopVideo.pause();
            desktopVideo.style.display = "none";
        }

    }else{

        activeVideo = desktopVideo;

        if(mobileVideo){
            mobileVideo.pause();
            mobileVideo.style.display = "none";
        }

    }

    // If video is missing, hide preloader immediately
    if(!activeVideo){

        preloader.classList.add("hide");
        document.body.style.overflow = "auto";
        return;

    }

    document.body.style.overflow = "hidden";

    activeVideo.currentTime = 0;

    activeVideo.play().catch((err)=>{

        console.log(err);

    });

    function hidePreloader(){

        preloader.classList.add("hide");
        document.body.style.overflow = "auto";

    }

    activeVideo.addEventListener("ended", hidePreloader);

    // Fallback after 6 seconds
    setTimeout(hidePreloader,6000);

});
