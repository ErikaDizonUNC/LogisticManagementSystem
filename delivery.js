document.addEventListener('DOMContentLoaded', function () {
    function subscribeToDeliveryAlerts() {
        // Assume there is a backend endpoint to subscribe to delivery alerts
        fetch('/api/subscribeToDeliveryAlerts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: 'user123', // Replace with the actual user ID
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('You have successfully subscribed to delivery alerts!');
            } else {
                alert('Failed to subscribe to delivery alerts. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    }
});
