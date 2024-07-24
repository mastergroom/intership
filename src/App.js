//import React,{Component} from 'react';
//import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import { Table } from 'react-bootstrap'
//import Child from './Child';
//import Student from './St'udent';'


function App() {


  const data = [
    {
      name: 'dhruv', email: 'rathidhruv@gmail.com', address: [{ city: 'surat', flatno: '204', area: 'adajan' },
      { city: 'czxc', flatno: '206', area: 'zsczs' },
      { city: 'sgsg', flatno: '204', area: 'adajan' },
      { city: 'asuduas', flatno: '204', area: 'adajan' },

      ]
    },
    {
      name: 'chandar', email: 'rathichandar@gmail.com', address: [{ city: 'modasa', flatno: '234', area: 'kata' },
      { city: 'afds', flatno: '2034', area: 'wads' },
      { city: 'sert', flatno: '2044', area: 'dasdaw' },
      { city: 'ser', flatno: '2045', area: 'agqeg' },

      ]
    },
    {
      name: 'rohit', email: 'rathirohit@gmail.com', address: [{ city: 'wadawd', flatno: '254', area: 'var' },
      { city: 'surat', flatno: '204', area: 'adajan' },
      { city: 'surat', flatno: '204', area: 'adajan' },
      { city: 'surat', flatno: '204', area: 'adajan' }]
    }
  ];

  return (
    <div className="App">
     <h1>TABEL</h1>
     <Table  striped bordered hover size="sm" >
       <tbody>
         <tr>
           <td>name</td>
           <td>email</td>
           <td>address</td>
         </tr>
         
       </tbody>
       {
         data.map((item)=>
         <tr>
           <td>{item.name}</td>
           <td>{item.email}</td>
           <td><Table>
            {
              item.address.map((ch)=>
              <tr>
                <td>{ch.city}</td>
                <td>{ch.flatno}</td>
                <td>{ch.area}</td>
              </tr>)
            }
            </Table>
           </td>
         </tr>

         )
       }
     </Table>
    </div>
  );
}


export default App;






















/*
function App() {
  function wowow(){
    alert("thank you for calling  through child class")
    
  }

  
  return (
    <div className="App">
      
       <Child data={wowow} />
      
     
    </div>
  );
}

export default App;





















/*
function App() {
  const[name,setname]=useState('')
  const[intrest,setintrest]=useState('')
  const[check , setcheck]=useState(false)
  const[test , settest]=useState(false)
 function prevent(e) {
    e.preventDefault()
    console.log({name})
    console.log({intrest})
    console.log({check})
  }
  return (
    <div className="App">
        <h1>HtML FORM </h1>
        <form onSubmit={prevent}>
          <input type="text" placeholder='enter the name'onChange={(e)=>setname(e.target.value)}/> <br /><br/>
          <select onChange={(e)=>setintrest(e.target.value)}>
            <option>selct the opdtion</option>
            <option>dc</option>
            <option>marvel</option>
          </select><br /><br/>
         <input type="checkbox" onChange={(e)=>setcheck(e.target.checked)}/><span>terms and condition apply</span> <br/> <br/>          
        <button type="submit" onClick={()=>settest(true)}>submit</button>
          </form> 
          {
            test?
          <h1>{intrest}</h1>
            :null
          }  
    </div>
  );
}
export default App;





























/*function App() {
  const [status , setstatus] = useState(true)
  
  return (
    <div className="App">
      {
        status?  <h1>pops in react</h1> :null
      }
     <button onClick={()=> setstatus(true)}>show</button>
     <button onClick={()=> setstatus(false)}>hide</button>
     <button onClick={()=> setstatus(!status)}>toleog</button>
    </div>
  );
}

export default App;






















/*function App() {
  const[data,setdata]= useState(null)
  const[data2,setdata2]= useState(false)
  function getvalue(val)
  {
    setdata(val.target.value)
    console.log(val.target.value)
    setdata2(false)
  }
  
  return (
    <div className = "App">
      {
        data2?
        <h1>{data}</h1>
        :null

      }
     <center><input type = "text" onChange={getvalue}/> </center>
      <button onClick={()=> setdata2(true)}>print</button>
    </div>
  );
}

export default App;












/*function App() {
  const [name , setname] = useState("dhruv")
  const [name2 , setname2] = useState(" chandar is in usa")
  
  return (
    <div className="App">
      <h1>pops in react</h1> 
     <Student name ={{s1: name, s2: name2}} email = {"rathidhruv@sf"}   />
     <Student name ={{s1:"rohit", s2:"varun"}} email = {"rathidhruv@fafsf"}   />
     <button onClick={()=>(setname("dhruv is god"), setname2("yes"))}>Click me</button>
    </div>
  );
}

export default App;





















/*function App() {
  const [color , setcolor] = useState('chandar')
  //function update(){
    //setcolor(color+1)
  //}
  return (
    <div className="App">
      <h1>{color}</h1> 
       
      <button onClick={()=>setcolor("dhruv")}>vlick me</button>
    </div>
  );
}

export default App;

















function App() {
  
  return (
    <div className="App">
      <h1>pops in react</h1> 
     <Student name ={{s1:"dhruv", s2:"chandar"}} email = {"rathidhruv@sf"}   />
     <Student name ={{s1:"rohit", s2:"varun"}} email = {"rathidhruv@fafsf"}   />
    </div>
  );
}

export default App;















/*class App extends Component{

constructor(){
  super();
  this.state={
  data:"anil"
  }
}
update(){
  this.setState({data:"dhruv"})
}

render(){
  return (
    <div className="App">
      <h1>{this.state.data}</h1> 
       
      <button onClick={()=> this.update()}>vlick me</button>
    </div>
  );
  }


}
export default App;
/*function App() {
  const [color , setcolor] = useState(0)
  function update(){
    setcolor(color+1)
  }
  return (
    <div className="App">
      <h1>{color}</h1> 
       
      <button onClick={update}>vlick me</button>
    </div>
  );
}

export default App;*/
