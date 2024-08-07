import { useState } from 'react';
import { Send } from 'lucide-react';

const mockMessages = [
  { id: 1, user: 'Alice', content: 'Hey everyone!', timestamp: '2:30 PM' },
  { id: 2, user: 'Bob', content: 'Hi Alice, how are you?', timestamp: '2:31 PM' },
  { id: 3, user: 'Charlie', content: 'Welcome to the channel!', timestamp: '2:32 PM' },
];

export const ChatArea = ({ selectedChannel }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {selectedChannel ? (
        <>
          <div className="bg-white border-b p-4">
            <h2 className="text-xl font-semibold">#{selectedChannel.name}</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {mockMessages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  {msg.user[0]}
                </div>
                <div>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-semibold">{msg.user}</span>
                    <span className="text-xs text-gray-500">{msg.timestamp}</span>
                  </div>
                  <p>{msg.content}</p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="border-t p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Select a channel to start chatting
        </div>
      )}
    </div>
  );
};
