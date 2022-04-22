import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AdminApp from './apps/admin'
import UserApp from './apps/user'
import Router from './routes'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}



export default App
