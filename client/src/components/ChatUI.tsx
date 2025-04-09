import React, { useState } from "react";

interface ChatUIProps {
  language: string;
}

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

const ChatUI: React.FC<ChatUIProps> = ({ language }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "ai",
      text: `👋 Hi there! I'm your ${language.toUpperCase()} tutor. Let's get started!`,
    },
  ]);

  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage: ChatMessage = {
      sender: "user",
      text: userInput.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setLoading(true);

    try {
      console.log("📨 Sending message to backend...");
      console.log("Message:", userMessage.text);
      console.log("Language:", language);

      const response = await fetch("http://localhost:5174/api/tutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language,
          message: userMessage.text,
        }),
      });

      const data = await response.json();

      const aiMessage: ChatMessage = {
        sender: "ai",
        text: data.reply || "🤖 (No response)",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="mt-4">
      <div
        className="border rounded p-3 mb-3"
        style={{ height: "400px", overflowY: "auto", background: "#f9f9f9" }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${
              msg.sender === "user"
                ? "text-end text-primary"
                : "text-start text-dark"
            }`}
          >
            <div>
              <strong>{msg.sender === "user" ? "You" : "AI"}:</strong>
            </div>
            <div>{msg.text}</div>
          </div>
        ))}
        {loading && <div className="text-muted">AI is typing...</div>}
      </div>

      <textarea
        className="form-control mb-2"
        rows={2}
        value={userInput}
        placeholder="Type your response here..."
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="btn btn-success"
        onClick={sendMessage}
        disabled={loading}
      >
        Send
      </button>
    </div>
  );
};

export default ChatUI;
