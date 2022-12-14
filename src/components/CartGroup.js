import './style.css';
import ChangeTheme from './ChangeTheme';
import CountProduct from './CountProduct';
import AcceptProd from './AcceptProd';



function CartGroup({filteredProducts}){

  if(!filteredProducts.length){
    return filteredProducts;
  }
  return <div className={'cart p-4 text-black bg-info'}>
      <h2 className='text-decoration-underline'>YOUR PRODUCTS</h2>
      <CountProduct filteredProducts={filteredProducts}/>
      <AcceptProd/>
      <ChangeTheme/>
    </div>
}

export default CartGroup;