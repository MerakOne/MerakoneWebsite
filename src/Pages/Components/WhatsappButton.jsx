// src/components/WhatsappButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.css'; // optional for extra CSS if needed

const WhatsappButton = () => {
  return (
    <a 
      href="https://wa.me/+966545059009
" // replace with your actual WhatsApp number
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={36} />
    </a>
  );
};

export default WhatsappButton;
