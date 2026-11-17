import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch("https://fakestoreapi.com/products")
            const apiData =await res.json()
            setData(apiData)
        }
        fetchData()
    },[])
  return (
     <>
       <div>
       <div className="container">
        <div className="row">
            {
                data.map((v)=>(
                       <div className="col-lg-3" key={v.id}>
                        <div className="card" style={{width: '18rem'}}>
 <NavLink to={`/detail/${v.id}`}> <img src={v.image} className="card-img-top" alt="..." /> </NavLink>
  <div className="card-body">
    <h5 className="card-title">{v.title}</h5>
    <p className="card-text">{v.description.slice(0,70)}...</p>
    <a href="#" className="btn btn-primary">${v.price}</a>
    <p>{v.rating.rate} ({v.rating.count})</p>
  </div>
</div>

                       </div>
                ))
            }
        </div>
       </div>
    </div>
    </>
  )
}
