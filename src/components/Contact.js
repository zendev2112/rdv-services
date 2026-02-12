import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Contactanos</h2>
          <p>Estamos listos para potenciar tu marca. Hablemos de tu próxima campaña.</p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-card glass-card">
              <h3>Información de Contacto</h3>
              
              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <strong>Teléfono</strong>
                  <p>+54 9 11 XXXX-XXXX</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <strong>Email</strong>
                  <p>publicidad@radiodelvolga.com.ar</p>
                </div>
              </div>
              
              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <strong>Ubicación</strong>
                  <p>Buenos Aires, Argentina</p>
                </div>
              </div>
              
              <div className="contact-item">
                <MessageCircle size={20} />
                <div>
                  <strong>WhatsApp</strong>
                  <p>+54 9 11 XXXX-XXXX</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="form-card glass-card">
              <h3>Solicitar Cotización</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Nombre completo" required />
                </div>
                
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                
                <div className="form-group">
                  <input type="tel" placeholder="Teléfono" required />
                </div>
                
                <div className="form-group">
                  <select required>
                    <option value="">Seleccionar paquete</option>
                    <option value="presencia">Pack Presencia</option>
                    <option value="movimiento">Pack Movimiento</option>
                    <option value="ultima-cena">Pack La Última Cena</option>
                    <option value="personalizado">Personalizado</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <textarea placeholder="Contanos sobre tu proyecto..." rows="4"></textarea>
                </div>
                
                <button type="submit" className="btn-primary">
                  <Send size={20} />
                  Enviar Consulta
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;