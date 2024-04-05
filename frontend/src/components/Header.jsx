import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          Home
        </Link>
        <Link to="/dashboard">
          Dashboard
        </Link>
      </div>
    </header>
  )
}

export default Navbar