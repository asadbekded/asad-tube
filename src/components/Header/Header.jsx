import  { useRef } from 'react';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Avatar, Badge } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import User from '../../assets/images/photo_2023-01-25_15-16-46.jpg'

export default function Header() {
    const navigate = useNavigate()
    const searchInp = useRef();
    const searchInpTwo = useRef();

    const handleSub = (evt) => {
        evt.preventDefault();
        if(searchInp){
            navigate(`/search/${searchInp.current.value}`)
        }
    }
    const handleSubTwo = (evt) => {
        evt.preventDefault();
        if(searchInpTwo){
            navigate(`/search/${searchInpTwo.current.value}`)
        }
    }

  return (
    // start header
    <header className='site__header'>
        <div className="container">
            <div className='header__content'>
                <Link className='header__link' to='/' >
                    <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png" alt="site logo" width={150} height={50} />
                </Link>
                <form onSubmit={(evt) => handleSub(evt)} className='header__form' >
                    <input ref={searchInp} className='header__inp' type="search" placeholder='Search...' />
                    <button type='submit' className='header__btn'><Search/></button>
                </form>
                <div className='header__box'>
                    <VideoCallIcon sx={{cursor:'pointer'}}/>
                    <Badge  badgeContent={3} color='error'>
                       <NotificationsNoneIcon sx={{cursor:'pointer'}} fontSize='medium'/>
                    </Badge>
                    <Avatar sx={{cursor:'pointer'}} alt="Asadbek Ergashev" src={User} />
                </div>
            </div>
            <div className='header__site'>
                <div className='site__hero-box'>
                <Link className='header__link' to='/' >
                    <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png" alt="site logo" width={150} height={50} />
                </Link>

                <div className='header__box'>
                    <VideoCallIcon sx={{cursor:'pointer'}}/>
                    <Badge  badgeContent={3} color='error'>
                       <NotificationsNoneIcon sx={{cursor:'pointer'}} fontSize='medium'/>
                    </Badge>
                    <Avatar sx={{cursor:'pointer'}} alt="Asadbek Ergashev" src={User} />
                </div>
                </div>
                <form onSubmit={(evt) => handleSubTwo(evt)} className='header__form' >
                    <input ref={searchInpTwo} className='header__inp' type="search" placeholder='Search...' />
                    <button type='submit' className='header__btn'><Search/></button>
                </form>
            </div>
        </div>
    </header>
    // end header
  )
}
