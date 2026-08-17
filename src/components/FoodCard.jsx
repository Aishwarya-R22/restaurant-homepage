export default function FoodCard({ item }) { return <article className="food-card">
  <div className="food-img"><img src={item.image} alt={item.name}/><span>SALE</span></div>
  <div className="food-copy"><h3>{item.name}</h3><p>{item.desc}</p><div><strong>${item.price}</strong><button aria-label={`Add ${item.name} to cart`}>+</button></div></div>
 </article> }
