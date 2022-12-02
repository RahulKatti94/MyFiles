 import "./todo.css"
 import {useState} from 'react'
import TodoList from "./TodoList"
const TodoMethod = () =>{

    const [value, setValue] = useState (" ")
    const [data, setData] = useState ([])

    const eventChange = (e) =>{
        setValue(e.target.value)
    }

     const storeData = () =>{
      
        setData((ele) =>{ 
                return [...ele , value]
               
        })
        setValue(" ");
     }
    console.log(data)
     const removeItem = (id) =>{

        setData((ele)=>{
            return ele.filter((arrElement , index) => {
                return index!== id;
            });
        });
     };


    return (
        <div className="main-div">
            <div className="second-div">
                <h1 className="text-center bg-success">To Do List</h1>
                <div className="third-div">
                <input className="text-center" type="text" placeholder="Enter a value" onChange={eventChange} value = {value}></input>
                <button type="button" onClick={storeData} className="btn-tag">+</button>
                

                <ol className="order-class">

                  

                        
                       
                    {/* <li>{value}</li> */}
                    {
                        data.map ((val , index) => {
 
                         return   <TodoList
                          text={val} 
                          key = {index}
                          id = {index}
                          onSelect = {removeItem}
                          
                           />;
                        })
                    }
                </ol>
                </div>

            </div>  
        </div>
    )
}
export default TodoMethod