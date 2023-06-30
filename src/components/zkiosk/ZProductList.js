
const products = [
  {pno:1, pname:'Americano', price: 7000},
  {pno:2, pname:'Latte', price: 8000},
  {pno:3, pname:'Milk Tea', price: 9000},
  {pno:4, pname:'Green Tea', price: 6000},
]

const ZProductList = ({buyProduct, viewProduct}) => {

  return ( 
    <div className="w-full bg-indigo-500 text-3xl m-12 p-10">
      <ul>
        {products.map( p => 
          <li key={p.pno}>
          {p.pname}
            <button 
            className="bg-red-400"
            onClick={() => buyProduct({...p})}
            >BUY</button>
          </li>)}
      </ul>
    </div>
  );
}
 
export default ZProductList;