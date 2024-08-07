import { useState } from 'react';
import { Hash, ChevronDown, Plus } from 'lucide-react';

const channels = [
  { id: 1, name: 'general' },
  { id: 2, name: 'random' },
  { id: 3, name: 'project-ideas' },
];

export const Sidebar = ({ onSelectChannel }) => {
  const [isChannelsOpen, setIsChannelsOpen] = useState(true);

  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Slack Clone</h1>
      <div className="mb-4">
        <button
          className="flex items-center justify-between w-full text-left"
          onClick={() => setIsChannelsOpen(!isChannelsOpen)}
        >
          <span className="flex items-center">
            <ChevronDown className={`mr-1 ${isChannelsOpen ? 'transform rotate-0' : 'transform -rotate-90'}`} />
            Channels
          </span>
          <Plus className="h-4 w-4" />
        </button>
        {isChannelsOpen && (
          <ul className="mt-2 space-y-1">
            {channels.map((channel) => (
              <li key={channel.id}>
                <button
                  className="flex items-center w-full px-2 py-1 text-gray-300 hover:bg-gray-700 rounded"
                  onClick={() => onSelectChannel(channel)}
                >
                  <Hash className="mr-2 h-4 w-4" />
                  {channel.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
