const ResetButton = ({ handleReset }) => {
  return (
    <button className="reset-btn" type="button" onClick={handleReset}>
      Reset <i className="fas fa-recycle"></i>
    </button>
  );
};

export default ResetButton;
