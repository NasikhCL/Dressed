import React from 'react'
import { NavLink, Route, Routes} from 'react-router-dom';
import Login from '../components/Login'
import AddUser from '../components/AddUser';
import PrivateRoute from '../PrivateRoute';
import { Navbar } from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import F0F from '../components/F0F';

export default function AdminPage() {
  return (
    <div className=' h-screen bg-gray-300'>
        <Navbar />
        
        {/* <div className=' flex  justify-center items-center h-fit bg-cover '> */}
            <Routes>
                <Route exact path='/login' element={<Login />}/>
                <Route exact path='/add-new-outfit' element={ <PrivateRoute> <AddUser /></PrivateRoute> }/>
                <Route path="*" element={<F0F />} />
            </Routes> 
            
        {/* </div>  */}
        <ToastContainer />
    </div>
  )
}
// bg-[url("https://images.pexels.com/photos/2318554/pexels-photo-2318554.jpeg?auto=compress&cs=tinysrgb&w=600")]