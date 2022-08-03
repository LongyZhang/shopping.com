import { useEffect, useState } from "react";

const products=[
  {name:'product1',price:100.00},
  {name:'product2',price:200.00},
  {name:'product2',price:200.00},
  {name:'product4',price:200.00},
]

function App() {
  const[products,setProducts]=useState([
  {name:'product2',price:200.00},
  {name:'product4',price:200.00},

  ]);

  useEffect(()=>{
    fetch('http://localhost:5000/api/products')
    .then(response =>response.json())
    .then(data=> setProducts(data))
  },[])

  function addProduct(){
    setProducts(prevState=>[...prevState,{name:'product'+(prevState.length+1),price:(prevState.length+1)*100}])
  }

  const[websites,setWebsites]=useState([
    {name:'amazon',user:200},
    {name:'google',user:3000}
  ])

  function addWebsite(){
    setWebsites(prevState=>[...prevState,{name:'web'+(prevState.length+1),user:(prevState.length+1)*100}])
  }




  return (
    <div className="app">
      <h1 style={{color:'blue', border:'1px'}}>das</h1>
      <ul>
        {products.map((item,index) => (
          <li key={index}>{item.name}- {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>add produt</button>

      <h1 style={{color:'red'}}>split lane</h1>

      <ul>
        {websites.map((item,index)=>(
          <li key={index}>{item.name} -{item.user} </li>
        ))}
      </ul>

      <button onClick={addWebsite}>click it </button>
    </div>















  );
}

export default App;
