import { NavLink } from 'react-router-dom'
import './Home.css'
import laptopImage from '../../laptop1.png'

export default function Home() {
  return (

    <div style={{background:'#dff2ff'}}>
    <main className="container py-4">
      <section className="row g-0 home-hero overflow-hidden">
        <div className="col-md-6 d-flex align-items-center home-hero__content">
          <div className="p-4 p-lg-5">
            <h1 className="display-5 fw-bold">Beauty, made effortless</h1>
            <p className="lead mb-4">
              Find your next favorite beauty essentials and add a little color to your day.
            </p>
            <NavLink to="/product" className="btn btn-primary">
              Shop products
            </NavLink>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img className="home-hero__image" src={laptopImage} alt="Laptop" />
        </div>
      </section>
    </main>
    </div>
  )
}
