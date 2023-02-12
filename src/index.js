import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import AppNavbar from './components/AppNavbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Notes from './components/Notes';
import Todos from './components/Todos';
import ProtectedRoute from './utils/ProtectedRoute';
import Logout from './components/Logout';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/todos" element={<Todos />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
 