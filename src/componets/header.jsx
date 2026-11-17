import { NavLink } from 'react-router-dom'
import './header.css'
import { IoPersonSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-3 px-lg-5 py-3">
      <NavLink className="navbar-brand fs-2 fw-bold text-dark" to="/">Shopify</NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#shopfyNavbar"
        aria-controls="shopfyNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="shopfyNavbar">
        <form className="d-flex header-search-form mx-lg-auto my-3 my-lg-0" role="search">
          <input
            className="form-control border-dark"
            type="search"
            placeholder="Search products..."
            aria-label="Search products"
          />
          <button className="btn header-search-button" type="submit" aria-label="Search">
            <FaSearch />
          </button>
        </form>
        <div className="navbar-nav align-items-lg-center gap-lg-4">
          <NavLink to="/product" className="nav-link fw-bold">Products</NavLink>
          <NavLink to="/categories" className="nav-link fw-bold">Categories</NavLink>
          <NavLink to="#" className="nav-link fs-4" aria-label="People">
            <IoPersonSharp />
          </NavLink>
          <a href="#" className="nav-link text-secondary fs-4 position-relative" aria-label="Cart">
            <BsCart4 />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0
            </span>
          </a>
          <a href="#" className="nav-link text-dark fs-4" aria-label="Toggle dark mode">
            <FaRegMoon />
          </a>
        </div>
      </div>
    </nav>
  )
}
