// template_dvh8i9r
// service_mnyzxlk
// hVSlTNnIR0WxRDtF3

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            "service_mnyzxlk",
            "template_dvh8i9r",
            event.target,
            "hVSlTNnIR0WxRDtF3"
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavaiable. Please contact me directly on ryanmello897@gmail.com"
        );
    })
}