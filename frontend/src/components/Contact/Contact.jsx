import React, { useState } from "react";
import {
  FormContainer,
  Input,
  TextArea,
  Button,
  Form,
  Message,
  Label,
} from "./ContactStyles";
import {
  HeaderWrapper,
  HeaderIcon,
  SectionContainer,
  SectionHeader,
} from "../../GlobalStyles/elements";
import { useTheme } from "../../context/ThemeContext";
import contact from "../../assets/headingIcons/contact.png";
import contactMint from "../../assets/headingIcons/contact-mint.png";

const ContactForm = () => {
  const { isDarkTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <SectionContainer>
      <HeaderWrapper>
        <SectionHeader className='gloock-regular'>Contact Me</SectionHeader>
       
        <HeaderIcon src={isDarkTheme ? contactMint : contact} alt="contact icon" />

      </HeaderWrapper>

      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"

            value={formData.email}
            onChange={handleChange}
            required
          />
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <Label htmlFor="message">Message</Label>
          <TextArea
            name="message"
            rows="5"
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
