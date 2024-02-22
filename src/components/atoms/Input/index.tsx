import React from 'react'
import styles from './index.module.css';


type InputProps = {
    value: string;
    type: string;
    placeholder: string;
    onKeyDown: (param: any) => void;
    onChange: (param: any) => void;
    onBlur: () => void;
    onFocus: () => void;
}

const Input = ({
    onChange,
    onKeyDown,
    onBlur,
    onFocus,
    placeholder,
    type,
    value
}: InputProps) => {
  return (
    <input
        className={styles.container}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        type={type}
        placeholder={placeholder}
    />
  )
}

export default Input