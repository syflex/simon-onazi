import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './button.styles'
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, disabled, size, label, className, ...props }) => {
  
  return (
    <>
      <StyledButton
        type="button"
        variant={variant}
        disabled={disabled}
        className={className}
        {...props}
      >
        
        {label}
      </StyledButton>
      
    </>
  );
};

Button.propTypes = {
  /**
 * The variant prop determines the color style of the button. the default is primary
 */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'misc',
    'image',
    'menu',
    'error',
    'warning',
    'success',
  ]),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label:  PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * The disabled prop determines if the button is disabled or not. A disabled button cannot be clicked
   */
  disabled: PropTypes.bool,
  /**
   * This will become the class name for the button
   */
  className: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  label: 'button',
  disabled: false,
  className: null,
  onClick: undefined,
};
