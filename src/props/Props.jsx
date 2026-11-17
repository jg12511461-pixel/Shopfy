import Cards from './Cards'
import nailPaintImage from '../../../Shopfy/nail paint.jpg'
import Mascara from '../../../Shopfy/mascara.jpg'
import Eyeshawdo from '../../../Shopfy/eyeshawdo.jpg'
import Compact from '../../../Shopfy/compact.jpg'

export default function Props() {
  return (
    <div className="m-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="mb-0"><b>Products</b></p>
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Default
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>Default</li>
            <li>price(low-to-heigh)</li>
            <li>price(heigh-to-low)</li>
          
          </ul>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
      <div className="col">
        <Cards
          image={nailPaintImage}
          title="RED NAIL POLISH"
          price="$7.96"
          rating={4.32}
        />
      </div>
      <div className="col">
        <Cards
          image={Mascara}
          title="RED NAIL POLISH"
          price="$7.96"
          rating={4.32}
        />
      </div>
      <div className="col">
        <Cards
          image={Eyeshawdo}
          title="RED NAIL POLISH"
          price="$7.96"
          rating={4.32}
        />
      </div>
       <div className="col">
        <Cards
          image={Compact}
          title="RED NAIL POLISH"
          price="$7.96"
          rating={4.32}
        />
      </div>
    </div>
    </div>
  )
}
