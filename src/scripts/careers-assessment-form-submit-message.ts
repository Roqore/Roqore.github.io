export function initHeaderScroll() {
    const form = document.getElementById('submissionForm') as HTMLFormElement;
    const message = document.getElementById('successMessage');

    if (message !== null && form !== null) {
        message.style.display = "none"; // hide success message initially
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // stop normal form submit

            const formData = new FormData(form);

            fetch("https://docs.google.com/forms/d/e/1FAIpQLSc2ogookr1b2TSXH1WpA3Iw35r8Bq_xthSBm6WyZSWsXsK0Zg/formResponse", {
                method: "POST",
                mode: "no-cors",
                body: formData
            })
                .then(() => {
                    form.style.display = "none";     // hide the form
                    message.style.display = "block"; // show success message
                })
                .catch(() => {
                    alert("Something went wrong. Please try again.");
                });
        });
    }
}