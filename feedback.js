document.addEventListener('DOMContentLoaded', function () {
    function submitFeedback() {
        // Collect feedback data
        const feedbackData = {
            rating: document.getElementById('rating').value,
            comments: document.getElementById('comments').value,
            timestamp: new Date().toISOString(),
        };

        // Send the data to the backend (replace with your backend endpoint)
        fetch('/api/submitFeedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedbackData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you for your feedback!');
            } else {
                alert('Failed to submit feedback. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    }
});
