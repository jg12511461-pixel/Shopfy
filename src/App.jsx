import Header from './componets/header'
import Footer from './componets/footer'
import Home from './pages/home'
import Products from './pages/Products'
import Categories from './pages/categories'
import About from './pages/about'
import DetailPage from './pages/detailPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Products/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  )
}
