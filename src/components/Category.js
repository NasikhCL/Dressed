import React,{useState} from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';

export default function Category() { 
    const[currentCategory, setCurrentCategory] = useState('')
    const [open, setOpen] = useState(false);

    const onOpenModal = (cat) => {
        setCurrentCategory(cat)
        setOpen(true);
    }
    const onCloseModal = () =>{
        setOpen(false);
        setCurrentCategory('')
    } 
  
  return (
    <div className='my-7 text-blue-900'>
        <h1 id='category' className='text-2xl font-bold mb-5 px-7'>Category</h1>
        <div className='flex flex-wrap items-center justify-evenly w-full h-auto p-7'>
            {/* <Link  to='/category' onClick={onOpenModal} className='flex flex-col items-center w-2/12 h-fit hover:cursor-pointer hover:border border-blue-900 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out '> */}
                <div onClick={()=> onOpenModal('marrige-dress')} className='flex flex-col items-center w-[230px] m-1 h-fit hover:cursor-pointer hover:border border-blue-900 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out '>
                    <div className='h-80 w-full' >
                        <img className='h-full w-full rounded-xl' src="https://images.pexels.com/photos/1560303/pexels-photo-1560303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt='category'/>
                    </div>
                    <h4 className='font-bold text-xl'>Marrige Dress</h4>
                </div>
            {/* </Link> */}
            <div  onClick={()=> onOpenModal('anniversary-dress')} className='flex flex-col items-center  w-[230px] m-1 h-fit hover:cursor-pointer hover:border border-blue-900 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out '>
                <div className='h-80 w-full'>
                    <img className='h-full w-full rounded-xl' src="https://images.pexels.com/photos/1024984/pexels-photo-1024984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt='category'/>
                </div>
                <h4 className='font-bold text-xl'>Anniversary outfits</h4>
            </div>
            <div  onClick={()=> onOpenModal('birthday-dress')} className='flex flex-col items-center  w-[230px] m-1 h-fit hover:cursor-pointer hover:border border-blue-900 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out '>
                <div className='h-80 w-full'>
                    <img className='h-full w-full rounded-xl' src="https://images.pexels.com/photos/7180785/pexels-photo-7180785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt='category'/>
                </div>
                <h4 className='font-bold text-xl'>Birthday Dress</h4>
            </div>
            <div  onClick={()=> onOpenModal('college-fest-dress')} className='flex flex-col items-center  w-[230px] m-1 h-fit hover:cursor-pointer hover:border border-blue-900 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out '>
                <div className='h-80 w-full'>
                    <img className='h-full w-full rounded-xl' src="https://images.pexels.com/photos/5217446/pexels-photo-5217446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt='category'/>
                </div>
                <h4 className='font-bold text-xl'>College Fest Dress</h4>
            </div>
            
           
        </div>
        <Modal open={open} onClose={onCloseModal} center>
            <div className='flex justify-center py-6'>
                <div className='mx-1 w-2/5 h-60 cursor-pointer  '>
                    <Link to={`/category/lists`} >
                        <img className='transition-all duration-200 w-full h-full rounded-xl hover:bg-blue-900 hover:opacity-75' src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='male' />
                        <h2 className='text-center text-2xl font-bold text-blue-900'>Men</h2>
                    </Link>
                </div>
                <div className='mx-1 w-2/5 h-60 cursor-pointer  '>
                    <Link to={`/${currentCategory}/lists`} >
                        <img className='transition-all duration-200 w-full h-full rounded-xl hover:bg-gray-400 hover:opacity-50' src='https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='male' />
                        <h2 className='text-center text-2xl font-bold text-blue-900'>Women</h2>
                    </Link>
                </div> 
            </div>
         
        </Modal>
    </div>
  )
}
