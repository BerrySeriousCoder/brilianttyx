import { Button } from '@mui/material';
import textlogo from '../../assets/textlogo.png';
import MeetingScheduler from '../meetingschedule/meetingschedule';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center bg-black text-white p-5 lg:p-7 relative">
      {/* Logo */}
      <div onClick={() => navigate('/') } >
        <img className="h-7" src={textlogo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div
  className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center gap-5 transition-transform transform z-40 lg:static lg:bg-transparent lg:flex lg:flex-row lg:gap-10 ${
    isMenuOpen ? 'translate-x-0' : 'hidden'
  }`}
>

        <div  onClick={() => {
          navigate('/') 
          setIsMenuOpen(false)
         } }  
         className="text-lg lg:text-base cursor-pointer">Home</div>
        <div  onClick={() => {
          navigate('/aboutus')
           setIsMenuOpen(false)
        } } className="text-lg lg:text-base cursor-pointer">About</div>
        <div  onClick={() => {
          navigate('/Contactus')
          setIsMenuOpen(false)
          } } className="text-lg lg:text-base cursor-pointer">ContactUs</div>
        <div  onClick={() => setIsOpen(true)} className="text-lg lg:text-base cursor-pointer">Schedule Meeting</div>
        <div className="lg:hidden">
          <Button
            onClick={() => setIsOpen(true)}
            sx={{ color: 'white' }}
            variant="outlined"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Contact Us Button (visible only on large screens) */}
      <div className="hidden lg:block">
        <Button
          onClick={() => setIsOpen(true)}
          sx={{ color: 'white' }}
          variant="outlined"
        >
          Contact Us
        </Button>
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Meeting Scheduler Modal */}
      <MeetingScheduler isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
