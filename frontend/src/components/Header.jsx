
const Header = ({children}) => {
  return (
    <header id="header">
        <div className="logo">
          {children?children:<strong>LAB 2 Project</strong>}
          
        </div>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-snapchat-ghost">
              <span className="label">Snapchat</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-medium-m">
              <span className="label">Medium</span>
            </a>
          </li>
        </ul>
      </header>
  )
}

export default Header