// src/components/ContactForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

export const FormContainer = styled.div`
border: 1px solid black;
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
export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryText};
  margin-left: 5px;
`;
export const Input = styled.input`
  margin: 8px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.secondaryBg};
`;

export const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.secondaryBg};
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.primaryText};
  color: ${({ theme }) => theme.secondaryBg};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.secondaryText};
  }
`;

export const Message=styled.p`
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.primaryBg};
  margin: 10px 0;
  padding: 10px;
  width: 50%;
  align-self: center;
  font-size: 1.2rem;
  border-radius: 5px;
  text-align: center;
`;

