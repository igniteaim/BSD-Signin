function sendToDiscord() {
    var email = document.getElementById("email").value;

    // Replace 'YOUR_DISCORD_WEBHOOK_URL' with your actual Discord webhook URL
    var webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL';

    // Create a JSON payload with the email
    var payload = {
        content: 'New email entered: ' + email
    };

    // Send the payload to the Discord webhook using fetch
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send data to Discord');
        }
        console.log('Data sent to Discord successfully');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}