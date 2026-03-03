import express from 'express';
import twilio from 'twilio';
import logger from '../utils/logger.js';

const router = express.Router();

router.post('/send-whatsapp', async (req, res) => {
  const { name, phone, email, propertyType, size, message } = req.body;

  // Input validation
  if (!name || !phone || !email || !propertyType || !size || !message) {
    return res.status(400).json({
      error: 'Missing required fields: name, phone, email, propertyType, size, message',
    });
  }

  // Format the message
  const formattedMessage = `Nome: ${name}\nTelefone: ${phone}\nEmail: ${email}\nTipo de Imóvel: ${propertyType}\nTamanho Aproximado: ${size}m²\nMensagem: ${message}`;

  // Initialize Twilio client
  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  // Send WhatsApp message
  const result = await client.messages.create({
    from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
    to: `whatsapp:${phone}`,
    body: formattedMessage,
  });

  logger.info(`WhatsApp message sent successfully. SID: ${result.sid}`);

  res.json({
    success: true,
    message: 'Mensagem enviada com sucesso',
  });
});

export default router;
