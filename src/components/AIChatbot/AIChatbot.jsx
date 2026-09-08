import { useEffect, useRef, useState } from "react";
import { Sparkles, X } from "lucide-react";

import { streamChatMessage } from "../../services/chatService.js";

import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

import "./chatbot.css";

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi 👋 I'm Devendra's AI Assistant. Ask me about his skills, experience, projects or technologies.",
    },
  ]);

  const messagesEndRef = useRef(null);

  // ================================
  // Auto Scroll
  // ================================
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // ================================
  // Send Message
  // ================================
 const handleSendMessage = async () => {
  const message = input.trim();

  if (!message || loading) {
    return;
  }

  setInput("");

  const userMessage = {
    id: Date.now(),
    role: "user",
    content: message,
  };

  const assistantMessageId =
    Date.now() + 1;


  // ==================================
  // Build Gemini conversation history
  // ==================================

  const history = messages
    .filter(
      (chatMessage) =>
        chatMessage.role === "user" ||
        chatMessage.role === "assistant"
    )
    .filter(
      (chatMessage) =>
        chatMessage.content?.trim()
    )
    .map((chatMessage) => ({
      role:
        chatMessage.role === "assistant"
          ? "model"
          : "user",

      parts: [
        {
          text: chatMessage.content,
        },
      ],
    }));


  // ==================================
  // Add User + Empty AI message
  // ==================================

  setMessages((previousMessages) => [
    ...previousMessages,

    userMessage,

    {
      id: assistantMessageId,
      role: "assistant",
      content: "",
      isStreaming: true,
    },
  ]);


  setLoading(true);


  // ==================================
  // Streaming
  // ==================================

  await streamChatMessage(
    message,
    history,

    // -------------------------------
    // Chunk
    // -------------------------------

    (chunk) => {
      setMessages(
        (previousMessages) =>
          previousMessages.map(
            (chatMessage) =>
              chatMessage.id ===
              assistantMessageId
                ? {
                    ...chatMessage,

                    content:
                      chatMessage.content +
                      chunk,

                    isStreaming: false,
                  }
                : chatMessage
          )
      );
    },


    // -------------------------------
    // Complete
    // -------------------------------

    () => {
      setMessages(
        (previousMessages) =>
          previousMessages.map(
            (chatMessage) =>
              chatMessage.id ===
              assistantMessageId
                ? {
                    ...chatMessage,
                    isStreaming: false,
                  }
                : chatMessage
          )
      );

      setLoading(false);
    },


    // -------------------------------
    // Error
    // -------------------------------

    (error) => {
      console.error(
        "Chat streaming error:",
        error
      );

      setMessages(
        (previousMessages) =>
          previousMessages.map(
            (chatMessage) =>
              chatMessage.id ===
              assistantMessageId
                ? {
                    ...chatMessage,

                    content:
                      "Sorry, I'm unable to respond right now. Please try again later.",

                    isStreaming: false,
                  }
                : chatMessage
          )
      );

      setLoading(false);
    }
  );
};

  // ================================
  // Close Chatbot
  // ================================
  const handleClose = () => {
    setIsOpen(false);
  };

  // ================================
  // Open Chatbot
  // ================================
  const handleOpen = () => {
    setIsOpen(true);
  };

  // ================================
  // UI
  // ================================
  return (
    <>
      {/* =================================
          Floating AI Button
      ================================= */}
      {!isOpen && (
        <button
          type="button"
          className="ai-floating-button"
          onClick={handleOpen}
          aria-label="Open AI assistant"
        >
          <Sparkles size={22} />

          <span className="ai-floating-label">
            Chat with Devendra's AI
          </span>
        </button>
      )}

      {/* =================================
          Chatbot Window
      ================================= */}
      {isOpen && (
        <div className="ai-chatbot">

          {/* ===============================
              Header
          =============================== */}
          <ChatHeader
            onClose={handleClose}
          />

          {/* ===============================
              Messages
          =============================== */}
          <div className="chat-messages">

            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
              />
            ))}

            {/* Scroll Anchor */}
            <div ref={messagesEndRef} />

          </div>

          {/* ===============================
              Input
          =============================== */}
          <ChatInput
            value={input}
            onChange={setInput}
            onSend={handleSendMessage}
            loading={loading}
          />

          {/* ===============================
              Footer
          =============================== */}
          <div className="chat-footer">
            Powered by AI • Portfolio Assistant
          </div>

          
        </div>
      )}
    </>
  );
};

export default AIChatbot;