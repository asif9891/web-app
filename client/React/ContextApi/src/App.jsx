import UserContextProvider from './Context/Usercontextprovider'
import './App.css'
import Login from './Context/Login'
import Profile from './Context/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
