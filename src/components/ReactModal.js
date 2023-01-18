import React,{useState, useEffect} from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';



export default function ReactModal({category, isOpen}) {

    const [open, setOpen] = useState(false);

    const[currentCategory, setCurrentCategory] = useState('')
    useEffect(() => {
       if(category){
           setOpen(true)
       }else{
        setOpen(false)
       }
     setCurrentCategory(category)
     
    
     console.log('modal loded', category);
      
    }, [category])
    
    // console.log(currentCategory);
    // const onOpenModal = (cat) => { 
    //     setCurrentCategory(cat)
    //     setOpen(true);
    // }
    const onCloseModal = () =>{
        setOpen(false);
        setCurrentCategory('') 
    }  
    // styles={{animationFillMode:"forwards !important;"}}
 
  return ( 
    <div>
    {open && <Modal open={open} onClose={onCloseModal} center>
        <div className='flex justify-center py-6'>
            <div className='mx-1 w-2/5 h-60 cursor-pointer  '>
                <Link to={`/category/male/${currentCategory}`} >
                    <img className='transition-all duration-200 w-full h-full rounded-xl hover:bg-blue-900 hover:opacity-75' src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='male' />
                    <h2 className='text-center text-2xl font-bold text-blue-900'>Men</h2>
                </Link>
            </div>
            <div className='mx-1 w-2/5 h-60 cursor-pointer  '>
                <Link to={`/category/female/${currentCategory}`} >
                    <img className='transition-all duration-200 w-full h-full rounded-xl hover:bg-gray-400 hover:opacity-50' src='https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='male' />
                    <h2 className='text-center text-2xl font-bold text-blue-900'>Women</h2>
                </Link>
            </div> 
        </div>
    </Modal>
    }
    </div>
  )
}
