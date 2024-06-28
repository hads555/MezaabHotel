// InputComponent.tsx
import React, { useState } from 'react';
import styles from './CustomInput.module.css'; // Import module CSS
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

interface InputProps {
  type: 'text' | 'password'; // Define input type using props
  label?: string; // Label prop
  placeholder?: string;
  className?: string;
}

const CustomInput: React.FC<InputProps> = ({ type, label, placeholder, className }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${styles.inputContainer} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={showPassword && type === 'password' ? 'text' : type}
        placeholder={placeholder}
        className={styles.inputField}
      />
      {type === 'password' && (
        <div className={styles.eyeIcon} onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      )}
    </div>
  );
}

export default CustomInput;
