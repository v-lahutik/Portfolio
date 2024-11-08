import { SwitchContainer, Toggle } from './ToggleSwitchStyles';
import React, { useEffect} from 'react';
import { useTheme } from '../../context/ThemeContext';

const ToggleSwitch = () => {

  const { toggleTheme, isDarkTheme } = useTheme();

  return (
        <SwitchContainer onClick={toggleTheme}>
      <Toggle isDarkTheme={isDarkTheme} />
    </SwitchContainer>
    
  );
};

export default ToggleSwitch;
