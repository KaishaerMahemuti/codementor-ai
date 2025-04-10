import React, { useState, useEffect } from "react";
import lessons from '../data/lessons'; // for languages
import frameworkLessons from '../data/frameworkLessons'; // for frameworks

interface ChatUIProps {
  language: string;
  lessonId?: number;
}

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

const ChatUI: React.FC<ChatUIProps> = ({ language, lessonId }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const lessonName =
    lessons[language]?.[lessonId ?? 0] ||
    frameworkLessons[language]?.[lessonId ?? 0] ||
    "Introduction";

  // ✅ Reset chat messages when the lesson changes
  useEffect(() => {
    setMessages([
      {
        sender: "ai",
        text: `📘 New Lesson: ${lessonName}`,
      },
      {
        sender: "ai",
        text: `👋 I'm your ${language.toUpperCase()} tutor. Let's learn "${lessonName}".`,
      },
    ]);
  }, [language, lessonId]);

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
      console.log("Lesson:", lessonName);

      const response = await fetch("http://localhost:5174/api/tutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language,
          lesson: lessonName,
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
