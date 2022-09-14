import { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';
function App() {
  const Manush=['anwar','janowar','monowar','salowar','dipjol','manna']
  const productList=[
    {name:"photoshop",price:"50$"},
    {name:"illustrator", price:"25$"},
    {name:"Windows", price:"55$"},
    {name:"VS Code", price:"80$"},
    {name:"Adb Reader", price:"99$"}
  ]
return (
  <header className="app-header">
{/* <User name={Manush[0]} Occupation="Developer"></User>
<User name="Sakib"  Occupation="Cricketer"></User>
<User name="Rarim" Occupation="Teacher"></User>
<User name="Solim" Occupation="Farmer"></User>
<User name="Sahel" Occupation="Broker"></User> */}

<ul>
{
    Manush.map( manush => <li>{manush}</li>)
}
{
  productList.map(product=> <li>{product.name}</li>)
}
</ul>
{
  productList.map(product => <Product product={product}></Product>)
}
<Counter></Counter> 
<Users></Users>

</header>
  );
}
function Users(){
  const [user, setUsers]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h2 >The Emails Of Users</h2>
     <ul>
      {
      user.map(user => <li>{user.email}</li> ) }
     </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount]=useState(0);

  return (
    <div style={{marginLeft:"50px"}}>
      <h2>count: {count}</h2>
      <button onClick={() =>{ setCount(count+1)}} style= {{padding:"7px 10px",backgroundColor:"aqua",color:"white",border:"0px"}}>Do Increase</button>    <button onClick={() =>{ setCount(count-1)}} style= {{padding:"7px 10px",backgroundColor:"aqua",color:"white",border:"0px"}}>Do Decrease</button>
    </div>
  )
}
function Product(props){
  const {name,price}=props.product;
  let productStyle={
    backgroundColor:"salmon",
    height:"150px",
    color:"white",
    width:"150px",
    padding:"20px",
    margin:"30px",
    textAlign:"center",
    borderRadius:"10px"
  }
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button style={{padding:"7px 10px",backgroundColor:"orange",color:"white",border:"0px"}}>Buy Now</button>
    </div>
  )
}
// function User(props){
//   const userStyle={
//     color:"#f1c40f",
//     background:"#34495e",
//     padding:"15px",
//     margin:"20px",
//     textAlign:"center",
//     width:"50%"
//   }
//   return(  
//   <div style={userStyle} >
//   <h2>Name: {props.name} </h2>
//   <h3>Occupation: {props.Occupation}</h3>
//   </div>
//   )
// }
export default App;
