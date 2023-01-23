import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import TBC from '../images/TBC.png';
import HeaderVideo from '../videos/headerVideo.mp4'
import './navbar.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';
// import {db} from '../config/firebase'

// import { 
//     collection,
//     addDoc
// } from 'firebase/firestore'

export const Navbar = () => {
    const navigate = useNavigate()
    
    // const addDatas = async()=>{

    //     userDatas.forEach( async(user) => {
        
    //         try {
    //             const docRef = await addDoc(collection(db, "outfits"), {
    //                 id: crypto.getRandomValues(new Uint32Array(1))[0],
    //                 category: user.category,
    //                 photoUrl: user.photoUrl,
    //                 gender: user.gender,
    //                 title: user.title,
    //                 description: user.description
    //             });
    //             console.log("Document written with ID: ", docRef.id);
    //         } catch (e) {
    //             console.error("Error adding document: ", e);
    //         }
    
          
    //     })

    // }
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchQuery = (e)=>{
        const{value} = e.target
        setSearchQuery(value)
        // console.log(searchQuery)
    }
    // console.log(searchQuery);

    const handleSearch = ()=>{
        console.log(searchQuery)
        navigate(`/searchResults/${searchQuery}`)
    }
    const[isHambListVisible,setIsHambListVisbile] =useState(false)

    const[currentCategory, setCurrentCategory] = useState('')
    const [open, setOpen] = useState(false);
   

    const onOpenModal = (cat) => {
        setCurrentCategory(cat)
        setIsHambListVisbile(false)
        setOpen(true);
    }

    
    const onCloseModal = () =>{
        setOpen(false);
        setCurrentCategory('')
    } 
  

    const handleHamb =()=>{ 
       setIsHambListVisbile(prevState=> !prevState)
    }
  return (  
    <div className='w-full bg-transparent text-white font-medium' style={{zIndex:'100'}}>
        <div className="marquee-container bg-black text-white w-full">
            <div className="marquee-text py-1">
                <span> Style is a way to say who you are without having to speak…Let's get dressed |</span>
                <span> Style is a way to say who you are without having to speak…Let's get dressed |</span>
                <span> Style is a way to say who you are without having to speak…Let's get dressed |</span>
                <span> Style is a way to say who you are without having to speak…Let's get dressed |</span>

            </div>
        </div>
        <video className='top-0 object-cover h-[500px] lg:h-[550px] w-full  max-w-none' src={HeaderVideo} loop muted playsInline autoPlay></video>
        <nav className=' absolute top-12 w-full h-14 mb-2 z-20 px-4   border-gay-400  flex items-center justify-center'>
        <h2 className='absolute top-96 text-bold italic text-2xl '><div>"Find your fashion</div><div> Own your fashion"</div></h2>
            {/* <div className='w-?1/5 '> */}
                {/* <img className="w-14 h-10  mr-2 object-cover"  src={TBC} alt="logo"/>             
                <h4 className="font-bold">Lets Get Dressed</h4>  */}
            {/* </div> */}
            <ul className='w-full flex justify-evenly text-xl '>
                <li className='hidden lg:block  hover:text-black hover:scale-105 cursor-pointer' onClick={()=> navigate('/')}><a href='#home'>Home</a></li>
                <li className='hidden lg:block  cursor-pointer hover:text-black hover:scale-105 relative group ' onClick={handleHamb}> 
                   <a href='/#category'>Category</a>
                    <ul className='hidden z-90 group-hover:block absolute top-4 pt-5 w-[230px] left-0 group-hover:transition-all group-hover:duration-300 '>
                        <li className='bg-black text-white  hover:bg-gray-500 p-2' onClick={()=> onOpenModal('marrige-outfits')}>Marrige outfits</li>
                        <li className='bg-black text-white  hover:bg-gray-500 p-2' onClick={()=> onOpenModal('anniversary-outfits')}>Anniversary outfits</li>
                        <li className='bg-black text-white  hover:bg-gray-500 p-2' onClick={()=> onOpenModal('birthday-outfits')}>Birthday outfits</li>
                        <li className='bg-black text-white  hover:bg-gray-500 p-2' onClick={()=> onOpenModal('college-fest-outfits')}>College Fest outfits</li>
                    </ul>
                </li>
                 <div className='flex flex-col text-sm lg:text-xl justfy-center items-center '>
                    <img className="w-fit h-7 lg:h-10   object-cover"  src={TBC} alt="logo"/>             
                    <h4 className="font-bold">Lets Get Dressed</h4> 
                </div>
                <li className='hidden lg:block  cursor-pointer hover:text-black hover:scale-105'><a href='/#about-us'>About Us</a></li>
                <li className='hidden lg:block  cursor-pointer hover:text-black hover:scale-105'><a href='/#contact-us'>Contact Us</a></li>
            <div className='hidden  lg:visible relative lg:flex items-center '>
                <div className='mr-5 text-2xl ' onClick={()=> navigate('/favourites')} >
                    <i className="fa-regular cursor-pointer fa-heart"></i>
                </div>
                <input type='search' onKeyDown={(e) => e.key === 'Enter' && handleSearch()} placeholder='Search...' className='pl-2 rounded-xl text-black border border-black outline-none w-60 px-2 py-1' value={searchQuery} onChange={handleSearchQuery}/>
            
                    <div className='absolute right-3 backg cursor-pointer text-black' onClick={handleSearch} >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
              
            </div>
            </ul>
            
            
            
            <div onClick={handleHamb} className='lg:hidden flex items-center'>
                <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
        
    
        <ul className={isHambListVisible ? 'text-white pb-3 bg-black lg:hidden absolute top-24 right-0 w-full' : 'text-white bg-black pb-3 hidden'} onClick={handleHamb}>
            <li className='block px-3 my-3 pt-3  hover:bg-gray-200 ' onClick={()=> navigate('/')}>Home</li>
            <li className='block px-3 my-3 hover:bg-gray-200 ' onClick={()=> navigate('/favourites')}>Favourites</li>
            
            <li className='block px-3 hover:bg-gray-200 relative group ' > 
                   <a href='/#category' >Category</a>
            </li>
            <li className='block px-3 my-3 hover:bg-gray-200 ' >
                <a href='/#about-us' >About Us</a>
            </li>
            <li className='block px-3 my-3 hover:bg-gray-200 ' >
                <a href='/#contact-us' >Contact Us</a>
            </li>
            <div className=' lg:hidden lg:flex w-fit items-center text-black relative mx-auto py-2 ' onClick={handleHamb}>
                    <input type='search' onKeyDown={(e) => e.key === 'Enter' && handleSearch()} placeholder='Search...' className='pl-2 rounded-xl border' value={searchQuery} onChange={handleSearchQuery} />
                    <div onClick={handleSearch} className='absolute right-4 top-2 text-black cursor-pointer'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                     
            </div>
        </ul>
        { open && <Modal open={open} onClose={onCloseModal} center>
            <div className='flex justify-center py-6'>
                <div className='mx-1 w-2/5 h-60 cursor-pointer ' onClick={onCloseModal} >
                    <Link to={`/category/male/${currentCategory}`} >
                        <img className='transition-all duration-200 w-full h-full rounded-xl hover:bg-blue-900 hover:opacity-75' src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='male' />
                        <h2 className='text-center text-2xl font-bold text-blue-900'>Men</h2>
                    </Link>
                </div>
                <div className='mx-1 w-2/5 h-60 cursor-pointer' onClick={onCloseModal} >
                    <Link to={`/category/female/${currentCategory}`} >
                        <img className='transition-all duration-200 w-full h-full rounded-xl hover:bg-gray-400 hover:opacity-50' src='https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='male' />
                        <h2 className='text-center text-2xl font-bold text-blue-900'>Women</h2>
                    </Link>
                </div> 
            </div>
         
        </Modal>}
    </div>
  )
}
