"use client";

import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FiSend } from "react-icons/fi";

import fetchChatResponse from "@/services/chatService";

// Define the shape of messages
interface Message {
  text: string;
  isBot: boolean;
}

const prebuiltQuestions: string[] = [
  "Quels types de viandes proposez-vous ?",
  "Quel est le montant minimum de commande ?",
  "La livraison est-elle gratuite ?",
  "Comment se déroulent les livraisons avec Chronofresh ?",
  "Quels sont vos délais d'expédition ?",
  "Puis-je choisir une date de livraison spécifique ?",
  "Comment sont emballées les viandes ?",
  "Comment se déroule la livraison pour l'Île-de-France ?",
  "Est-ce que les viandes peuvent être congelées ?",
  "Que faire en cas de problème de livraison Chronofresh ?",
  "Pourquoi choisir Marbled Beef ?",
  "Suivre ma commande",
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPrebuiltQuestions, setShowPrebuiltQuestions] =
    useState<boolean>(true);

  /* eslint-disable no-console */

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const toggleChatbot = () => setIsOpen((prev) => !prev);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async (message: string) => {
    const userMessage = message || input.trim();

    if (!userMessage) return;

    const newMessages = [...messages, { text: userMessage, isBot: false }];

    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setShowPrebuiltQuestions(false);
    try {
      const botResponse = await fetchChatResponse(newMessages, "chatbot");

      setMessages([...newMessages, { text: botResponse, isBot: true }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { text: "Something went wrong. Please try again later.", isBot: true },
      ]);
    } finally {
      setLoading(false);
    }
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage(input.trim());
  };

  // Scroll to the bottom whenever messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed right-0 bottom-0 pb-2 sm:pb-5 z-50 font-urbanist">
      <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <button
          className="bg-red-primary text-white dark:text-zinc-50 p-3 rounded-md shadow-lg transition-all duration-500 ease-in-out"
          onClick={() => {
            toggleChatbot();
            if (isOpen) setShowPrebuiltQuestions(false);
          }}
        >
          {isOpen ? (
            <div className="flex justify-center items-center gap-2">
              <RxCross2 color="#fff" size={24} />
              Discuter
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2">
              <IoChatbubbleEllipsesSharp color="#fff" size={24} />
              Discuter
            </div>
          )}
        </button>

        {isOpen && (
          <div className="absolute bottom-16 right-3 md:right-8 w-72 md:w-80 bg-background-primary shadow-lg overflow-hidden">
            <div className="py-2 px-4 bg-background-primary text-zinc-50 text-sm">
              Marbled Beef <span className="font-bold"> AI Chatbot</span>
            </div>

            <h2 className="text-3xl font-bold px-4 font-urbanist text-white">
              Hello, I’m your AI Assistant!
            </h2>

            <div className="p-4 chat-content h-80 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className="space-y-3">
                  {msg.isBot ? (
                    <div className="bg-button-primary border border-gold text-zinc-900 dark:text-zinc-50 p-2 w-2/3 rounded-tl-md rounded-tr-md rounded-br-none rounded-bl-md text-sm mb-3">
                      {msg.text}
                    </div>
                  ) : (
                    <div className="flex justify-end w-full mb-3">
                      <div className="bg-zinc-200 text-black  p-2 w-2/3 rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-md text-sm self-end mb-1">
                        {msg.text}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex justify-center items-center mt-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-400" />
                </div>
              )}

              {showPrebuiltQuestions && (
                <div className="mt-4 border border-gold p-4 rounded-2xl">
                  <h3 className="text-sm font-semibold text-white mb-2 py-1">
                    Questions rapides::
                  </h3>
                  <div className="space-y-2">
                    {prebuiltQuestions.map((question, index) => (
                      <button
                        key={index}
                        className="bg-zinc-200 text-black  p-2 w-full rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-md text-sm self-end mb-1"
                        onClick={() => handleSendMessage(question)}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            <div className="py-2 px-4 border-t border-gold bg-button-primary flex gap-2">
              <input
                className="w-full p-2 bg-transparent rounded-xl border border-gold  text-zinc-50"
                disabled={loading}
                placeholder="Type a message..."
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <button
                className={` text-white  ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
                onClick={() => handleSendMessage(input.trim())}
              >
                <FiSend size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
