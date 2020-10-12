import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface ModuleWrapperProps {
  customWidth?: boolean // TODO: Check type definition
  width?: number
  className?: string
}

// C O M P O N E N T
export const ModuleWrapper: React.FC<ModuleWrapperProps> = ({
  className = 'StyledModuleWrapper',
  width = 280,
  children,
  customWidth
}) => {
  return (
    <StyledModuleWrapper
      className={`${customWidth ? 'customWidth' : ''} ${className}`}
      width={width}
    >
      {children}
    </StyledModuleWrapper>
  )
}

// I N T E R F A C E
interface StyledModuleWrapperProps {
  width: number
}

// S T Y L E S
const StyledModuleWrapper = styled.div<StyledModuleWrapperProps>`
  --width: ${(props): number => { return props.width }}px; 
  
  position: fixed;
  top: 3.2rem;
  left: 0;
  z-index: 100;
  background-color: var(--color-dark);
  padding: var(--space-xs);
  width: 100%;
  color: var(--color-white);
  border-radius: var(--radius);
  overflow-x: hidden;
  overflow-y: auto;
  
  &.customWidth {
    right: auto;
    left: 0;
    width: 100%;    
  }

  @media (min-width: 60em) {
    top: 6.25rem;
    left: 50%;
    overflow: hidden;
    background-color: var(--color-darker);
    padding: 0;
    transform: translateX(-50%);
    max-width: var(--content-max-width); 
    border-radius: var(--radius);
    
    &.customWidth {
      right: 2rem;
      left: auto;
      transform: none;
      max-width: var(--width);
    }
  }
`
StyledModuleWrapper.displayName = 'StyledModuleWrapper'