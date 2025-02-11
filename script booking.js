const bookingForm = document.getElementById('booking-form');
const bookingConfirmation = document.getElementById('booking-confirmation');

bookingForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const cafeName = document.getElementById('cafe-name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const persons = document.getElementById('persons').value;

    // Simulate form submission (replace with actual server-side logic)
    // ... (e.g., send data to server using AJAX)

    // Display confirmation message
    bookingConfirmation.style.display = 'block';

    // Clear form (optional)
    bookingForm.reset();
});