const ResetButton = ({ handleReset, children, className }) => {
  return (
    <button
      className={`reset-btn ${className}`}
      type="button"
      onClick={handleReset}
    >
      {children}
    </button>
  );
};

export default ResetButton;
