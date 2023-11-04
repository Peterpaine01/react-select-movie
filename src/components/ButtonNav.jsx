const ButtonNav = ({ name, background, setSearchMovie, setBg, index }) => {
  return (
    <>
      <button
        key={index}
        onClick={() => {
          setSearchMovie(name);
          setBg(background);
        }}
      >
        {name}
      </button>
    </>
  );
};

export default ButtonNav;
