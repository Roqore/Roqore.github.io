export function careersAssessmentFormSubmit(
    formId: string,
    messageId: string,
    fetchUrl: string
) {
    const form = document.getElementById(formId) as HTMLFormElement;
    const message = document.getElementById(messageId);

    if (message !== null && form !== null && fetchUrl) {
        // message.style.display = "none"; // hide success message initially
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // stop normal form submit

            const formData = new FormData(form);

            fetch(fetchUrl, {
                method: "POST",
                mode: "no-cors",
                body: formData
            })
                .then(() => {
                    form.style.display = "none";     // hide the form
                    // message.style.display = "block"; // show success message
                    message?.classList.add('show');  // adds fade-in effect
                })
                .catch(() => {
                    alert("Something went wrong. Please try again.");
                });
        });
    }
}