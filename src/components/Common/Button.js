function Button({ children, className, onClick, disabled,content }) {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      content={content}
    >
      {children}
    </button>
  )
}

export default Button
