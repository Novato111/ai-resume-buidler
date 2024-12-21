const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the generative AI client with your API key
const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE"); // Replace with your actual API key

// Initialize the generative model
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp", // Replace with the actual model ID you want to use
});

// Set up generation config options (optional)
const generationConfig = {
  temperature: 0.8,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Function to create a completion (similar to OpenAI's usage)
async function generateCompletion(messages) {
  const chatSession = model.startChat({
    generationConfig,
    history: messages,
  });

  const result = await chatSession.sendMessage(messages);
  return result.response.text();
}

// Export the client to use in other parts of the application
export default { chat: { completions: { create: generateCompletion } } };
