import { Link, useParams } from 'react-router-dom'
import products from '../data'

const ProductInfo = () => {

  const { productID } = useParams()
  const product = products.find((product) =>
    productID === product.id
  )
  const { image, name } = product

  return (
    <div className='product'>
      <img alt={name} src={image} />
      <h4>{name}</h4>
      <Link className='link' to='/products'>Back to Products</Link>
    </div>
  )
}

export default ProductInfo