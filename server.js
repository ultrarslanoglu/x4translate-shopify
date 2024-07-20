const express = require('express');
const bodyParser = require('body-parser');
const openai = require('openai');

// OpenAI API key
openai.apiKey = 'YOUR_OPENAI_API_KEY';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/chatbot', async (req, res) => {
    const question = req.body.message;
    const response = await openai.Completion.create({
        engine: 'text-davinci-003',
        prompt: `User: ${question}\nAI:`,
        max_tokens: 150,
        n: 1,
        stop: ['User:']
    });

    const answer = response.choices[0].text.trim();
    res.json({ answer });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
