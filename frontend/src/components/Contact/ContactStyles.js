// src/components/ContactForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import {theme} from '../../GlobalStyles/themes.js';

export const FormContainer = styled.div`
border: 1px solid green;
 width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

`;
export const Form=styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const Message=styled.p`
  color: white;
  background-color: green;
  margin: 10px 0;
  padding: 10px;
  width: 50%;
  align-self: center;
  font-size: 1.2rem;
  border-radius: 5px;
  text-align: center;
`;

