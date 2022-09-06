const Header = ({ logo }) => {
  // const logo = props.logo;

  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>{logo}</h1>
        </div>
        <div className="navbar">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </>
  )
};

export default Header;