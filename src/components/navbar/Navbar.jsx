import { Link } from "react-router-dom"
export default function Navbar({userData ,logout}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary zxc">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
      <li className="nav-item d-flex align-items-center">
       <i className="fab mx-2 fa-facebook"></i>
        <i className="fab mx-2 fa-twitter"></i>
        <i className="fab mx-2 fa-instagram"></i>
        <i className="fab mx-2 fa-tiktok"></i>
        <i className="fab mx-2 fa-linkedin"></i>
     </li>

     <li className="nav-item">
        <Link className="nav-link text-white" to="weather">weather</Link>
        </li>



     
    


    
       

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
