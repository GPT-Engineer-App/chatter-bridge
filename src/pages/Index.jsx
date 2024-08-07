import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ChatArea } from '../components/ChatArea';

const Index = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onSelectChannel={setSelectedChannel} />
      <ChatArea selectedChannel={selectedChannel} />
    </div>
  );
};

export default Index;
