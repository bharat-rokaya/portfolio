const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.2
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));



document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_7jgjecm", "template_5h9ufrq", this)
        .then(() => {
            alert("Message sent successfully!");
            this.reset();
        }, (error) => {
            alert("Failed to send message. Please try again later.");
        });
});
