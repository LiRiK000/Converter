import React, { FC } from 'react';
import styles from './Btn.module.css';

interface IProps {
  onClick: () => void;
  label: string;
}

const Button: FC<IProps> = ({ onClick, label }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;