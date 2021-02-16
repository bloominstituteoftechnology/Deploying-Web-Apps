const Nav = (props) =>{

    const toggleMode = e => {
        e.preventDefault();
        props.setDarkMode(!props.darkMode);
      };

    return(
        <div className='navigation'>
            <nav>
                <a href='header'>Home</a>
                <a href='projects-section'>Projects</a>
                <a href='about-section'>About</a>
                <a href='contact'>Contact</a>
            </nav>
            <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
        </div>
    )
};

export default Nav;