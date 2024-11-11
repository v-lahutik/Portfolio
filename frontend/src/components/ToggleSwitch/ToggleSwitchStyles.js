import styled from 'styled-components';

export const SwitchContainer = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.secondaryBg};
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
`;

export const Toggle = styled.div`
  position: absolute;
  top: 2px;
  left: ${({ $isDarkTheme }) => ($isDarkTheme ? '26px' : '2px')}; 
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primaryText};
  transition: left 0.3s ease;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  pointer-events: none; /* Prevents toggle from blocking clicks on container */
`;