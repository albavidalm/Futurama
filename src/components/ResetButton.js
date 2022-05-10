const ResetButton = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button className="reset-btn" type="button" onClick={handleReset}>
      Reset
    </button>
  );
};

export default ResetButton;
