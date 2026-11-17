import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './detailPage.css'

export default function DetailPage() {
    const [data,setData]=useState({})
    const {id} = useParams()

    useEffect(()=>{
        const fetchdata =async ()=>{
            const res =await fetch (`https://fakestoreapi.com/products/${id}`)
            const apiData =await res.json()
            setData(apiData)
            }
            fetchdata()
        },[id]) 
        
  return (
    <main className="container product-detail py-4 py-md-5">
      <div className="row g-4 g-lg-5 align-items-center">
            <div className="col-12 col-lg-6">
                <img className="product-detail__image" src={data.image}  />
            </div>
            <div className="col-12 col-lg-6">
                <section className="product-detail__content">
                  <h1 className="product-detail__title">{data.title}</h1>
                  <p className="product-detail__description">{data.description}</p>
                  <p className="product-detail__price">Price: ${data.price}</p>
                </section>
            </div>
      </div>
    </main>
  )
}
