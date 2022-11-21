import logo from './logo.svg';
import './App.css';
import Messenger from './Components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route} from 'react-router-dom'
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';

function App() {

  const clientId = "307814960595-5oqrijcv1mj3naegp9qsmetuvvefo0m5.apps.googleusercontent.com"
  return (
    <>
    <GoogleOAuthProvider clientId={clientId}>
     
        <Routes>
          <Route path="/" element={ <Messenger />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={ <Register />} />
        </Routes>
    </GoogleOAuthProvider>
    </>
  );
}

export default App;



{/* <GoogleOAuthProvider clientId="<your_client_id>">...</GoogleOAuthProvider>; */}