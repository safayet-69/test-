document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('scanner-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form input values
        const email = document.getElementById('email-input').value;
        const number = document.getElementById('number-input').value;

        // Store email and number in local storage
        localStorage.setItem('scannedEmail', email);
        localStorage.setItem('scannedNumber', number);

        // Redirect to results page
        window.location.href = `results.html`;
    });
});
