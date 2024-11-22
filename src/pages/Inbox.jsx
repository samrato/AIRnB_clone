import React, { useState } from 'react';

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const newMessage = { text: message, time: new Date().toISOString() };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Inbox</h2>
      <div className="bg-white p-4 rounded shadow mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="text-gray-800">{msg.text}</span>
            <span className="text-sm text-gray-500 ml-2">
              {new Date(msg.time).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Inbox;
