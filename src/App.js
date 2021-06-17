import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'


function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="86a40797-ff1d-4630-b99c-02c3fc2ca0ea"
      userName="Vladislavpolar"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
