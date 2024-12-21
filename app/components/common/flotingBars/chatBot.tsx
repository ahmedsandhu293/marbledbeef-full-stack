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

/* eslint-disable no-console */
console.log("🚀 ~ prebuiltQuestions:", prebuiltQuestions);

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you?", isBot: true },
    { text: "Do you have Beef in stock? ", isBot: false },
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPrebuiltQuestions, setShowPrebuiltQuestions] =
    useState<boolean>(true);

  /* eslint-disable no-console */

  console.log(showPrebuiltQuestions);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const toggleChatbot = () => setIsOpen((prev) => !prev);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async (message?: string) => {
    const userMessage = message || input.trim();

    if (!userMessage) return;

    const newMessages = [...messages, { text: userMessage, isBot: false }];

    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setShowPrebuiltQuestions(false);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage();
  };

  // Scroll to the bottom whenever messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed right-0 bottom-0 pb-2 sm:pb-5 z-10">
      <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <button
          className="bg-[#CF2D2D] text-white dark:text-zinc-50 p-3 rounded-md shadow-lg transition-all duration-500 ease-in-out"
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

            <div className="p-4 chat-content h-80 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className="space-y-3">
                  {msg.isBot ? (
                    <div className="bg-button-primary border border-button-primary text-zinc-900 dark:text-zinc-50 p-2 w-2/3 rounded-tl-md rounded-tr-md rounded-br-none rounded-bl-md text-sm mb-3">
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

              {/* {showPrebuiltQuestions && (
                <div className="mt-4 border-t border-gray-300 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-gray-300 mb-2 pt-1">
                    Questions rapides:
                  </h3>
                  <div className="space-y-2">
                    {prebuiltQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(question)}
                        className="block w-full text-left p-2 bg-gray-300 dark:bg-gray-700 text-zinc-900 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )} */}

              <div ref={chatEndRef} />
            </div>

            <div className="py-2 px-4 border-t border-border-primary bg-button-primary flex gap-2">
              <input
                className="w-full p-2 bg-transparent rounded-xl border border-gray-100  text-zinc-50"
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
                onClick={() => handleSendMessage()}
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
