const ButtonIconAtm = ({ srcProps, altProps, evtProps }) => {
  return (
    <button onClick={evtProps}>
      <img src={srcProps} alt={altProps} />
    </button>
  );
};
export default ButtonIconAtm;
