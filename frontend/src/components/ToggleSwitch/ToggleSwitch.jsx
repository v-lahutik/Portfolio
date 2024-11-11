import { SwitchContainer, Toggle } from './ToggleSwitchStyles';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

// This is responsible for the toggle switch that changes the themes of dark and light mode
const ToggleSwitch = () => {

  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <SwitchContainer onClick={toggleTheme}>
      <Toggle $isDarkTheme={isDarkTheme} /> 
    </SwitchContainer>
  );
};

export default ToggleSwitch;
