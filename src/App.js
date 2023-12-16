import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllBlogs from './pages/home/AllBlogs';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import CreateNewBlog from './pages/create-blog/CreateNewBlog.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProfile from './pages/myprofile/MyProfile';
import { useEffect } from 'react';
import store from "./store"
import { LoadingUser } from './action/AuthActions';
import ProtectRouter from './router/ProtectRouter';
import EditProfile from './pages/edit-profile/EditProfile';
import EditBlog from './pages/edit_blog/EditBlog';
import CreatePage from './pages/CreatePage/CreatePage';
import AllPage from './pages/AllPage/AllPage';
import EditPage from './pages/edit_Page/EditPage.js';


function App() {

  useEffect(()=>{
    store.dispatch(LoadingUser)
  })
  return (
    <div className="App" >
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/allblogs' element={<ProtectRouter><AllBlogs /></ProtectRouter>} />
          <Route path='/allpages' element={<ProtectRouter><AllPage/></ProtectRouter>} />
          <Route path='/' element={<Login />} />
          <Route path='/create-blog' element={<ProtectRouter><CreateNewBlog/></ProtectRouter>} />
          <Route path='/myprofile' element={<ProtectRouter><MyProfile/></ProtectRouter>} />
          <Route path='/editBlog/:id' element={<ProtectRouter><EditBlog/></ProtectRouter>} />
          <Route path='/editpage/:id' element={<ProtectRouter><EditPage/></ProtectRouter>} />
          <Route path='/editprofile' element={<EditProfile/>} />
          <Route path='/create-page' element={<ProtectRouter><CreatePage/></ProtectRouter>} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
