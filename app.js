async function sendMessage() {
    const userInput = document.getElementById("user_input").value;
    const chatlogs = document.getElementById("chatlogs");

    const response = await fetch('/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
    });
    const data = await response.json();
    chatlogs.innerHTML += `<p>You: ${userInput}</p><p>Bot: ${data.answer}</p>`;
    document.getElementById("user_input").value = '';
}

document.getElementById('settingsForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const settings = {
        apiKey: document.getElementById('api_key').value,
        wpUsername: document.getElementById('wp_username').value,
        wpPassword: document.getElementById('wp_password').value,
        shopifyApiKey: document.getElementById('shopify_api_key').value,
        shopifyPassword: document.getElementById('shopify_password').value,
    };
    console.log(settings);
});
