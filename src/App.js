import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
// import { LoginForm } from './components/LoginForm'
import LoginForm from './components/LoginForm'

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="86a40797-ff1d-4630-b99c-02c3fc2ca0ea"
      // userName="jeremypumpkin"
      userName={localStorage.getItem('username')}
      // userSecret="123123"
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
