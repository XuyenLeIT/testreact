import './App.css';
import { useEffect, useState } from 'react';
import DemoComponent from './DemoComponent';

function App() {
  const [show ,setShow] = useState(false)
  const [title,setTitle] = useState("home page")
  const [data,setData] = useState([])
  const [url,setUrl] = useState("posts")
  const [product,setProduct] = useState({})
  // 1.UseEffect duoc goi sau khi component duoc mount vao dom va render
  // ra UI
  // 2.UseEffect de xu ly cac 
  // side Effect(lam viec voi API,cap nhat lai DOM,settimeout,setInterval)
  // 3. voi dependence [] thi useEffect chi goi 1 lan duy nhat 
  // sau khi component mount vao dom
  // 4. Effect duoc goi moi khi dependence thay doi
  useEffect(()=>{
    console.log("goi useEffect");
    document.title = title
  },[title])
useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/${url}`)
    .then(res=>res.json())
    .then(result=>setData(result))
    .catch(error=>console.log(error))
},[url])
  console.log("data: ",data);
  
  return (
    <div className="App">
      <h1>Demo useEffect </h1>
      <input placeholder='Enter title' onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={()=>setShow(!show)}>Show</button>
      {show && <DemoComponent/>}
    <div>
    <button onClick={()=>setUrl("posts")}
       style={url=="posts"?{background:"black",color:"white"}:{}}>Post</button>
    <button onClick={()=>setUrl("albums")} 
      style={url=="albums"?{background:"black",color:"white"}:{}}>Albums</button>
    </div>
      <ul>
        {data.length > 0 && data.map((item,index)=>{
          return (<li key={index}>{item.title}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
