import React, { useState } from 'react';
import { FormContainer, Input, TextArea, Button, Form, Message } from './ContactStyles';
import { SectionContainer, SectionHeader } from '../../GlobalStyles/elements';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <SectionContainer>
      <SectionHeader>Contact Me</SectionHeader>
    <FormContainer>
      
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <Input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
          <Input 
          type="text" 
          name="subject"  
          placeholder="Subject" 
          value={formData.subject} 
          onChange={handleChange} 
          required 
        />
        <TextArea 
          name="message" 
          rows="5" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <Button type="submit">Send Message</Button> 
        {isSubmitted && <Message>Your message has been sent!</Message>}
      </Form>
   
    </FormContainer>
    </SectionContainer>
  );
};

export default ContactForm;