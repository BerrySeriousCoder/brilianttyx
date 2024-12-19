import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContainer = styled(motion.div)`
  background: #1e1e1e;
  color: #f5f5f5;
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #f5f5f5;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ff4d4d;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #333;
  border-radius: 5px;
  background: #2b2b2b;
  color: #f5f5f5;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ff6f61;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #ff6f61;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e55b50;
  }
`;

const MeetingScheduler = ({ isOpen, onClose }) => {
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Scheduled Meeting:", formData);
    onclose()
    // setIsOpen(false);
    // Add your form submission logic here
  };

  if (!isOpen) return null

  return (
    <div>

        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <PopupContainer
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <Header>
              Schedule a Meeting
              <CloseButton onClick={onClose}>&times;</CloseButton>
            </Header>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
              <Input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              />
              <Button  type="submit">Confirm</Button>
            </form>
          </PopupContainer>
        </Overlay>
     
    </div>
  );
};

export default MeetingScheduler;
