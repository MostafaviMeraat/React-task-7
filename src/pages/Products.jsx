import products from '../data'
import { Link } from 'react-router-dom'

const Products = () => {

  return (
    <div>

      <div className='products'>
        <h2>Products</h2>
        {products.map((product) => {
          return (
            <div key={Math.random()}>
              <article >
                <h3>{product.name}</h3>
                <Link to={`/products/${product.id}`} className='link' >more info</Link>
              </article>
            </div>)

        })}

      </div>

    </div>
  )
}

export default Products