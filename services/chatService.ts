import { ChatSystemPrompts, RecipeSystemPrompts } from "./SystemPrompts";

const API_KEY =
  process.env.OPENAI_API_KEY ||
  "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";

if (!API_KEY) {
  throw new Error("API key is missing. Please set OPENAI_API_KEY.");
}

interface Message {
  isBot: boolean;
  text: string;
}

export const fetchChatResponse = async (
  messages: Message[] | string,
  botType: "chatbot" | "recipe"
): Promise<string> => {
  try {
    const systemMessage = {
      role: "system",
      content: botType === "chatbot" ? ChatSystemPrompts : RecipeSystemPrompts,
    };

    const formattedMessages =
      botType === "chatbot"
        ? [
            systemMessage,
            ...(Array.isArray(messages)
              ? messages.map((msg) => ({
                  role: msg.isBot ? "assistant" : "user",
                  content: msg.text,
                }))
              : []),
          ]
        : [systemMessage, { role: "user", content: messages as string }];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: formattedMessages,
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("API error details:", errorDetails);
      throw new Error("Failed to fetch the bot's response");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    throw new Error("Something went wrong. Please try again.");
  }
};

export default fetchChatResponse;
