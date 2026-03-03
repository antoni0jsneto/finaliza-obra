
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    // Placeholder WhatsApp number - can be configured
    const phoneNumber = '5511999999999';
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-[#2BB673] text-white p-4 rounded-full shadow-lg hover:bg-[#25a063] transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.button>
  );
};

export default FloatingWhatsAppButton;
