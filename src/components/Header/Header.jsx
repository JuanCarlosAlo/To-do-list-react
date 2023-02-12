import { useState } from "react"
import TodoItem from "../TodoItem/TodoItem"
import { FilterStyle, HeaderStyle, HeaderTopStyle, MainContainerStyle, TaskStyled } from "./styles"

const arrayObj = []

const Header = ()=>{
        const [task,setTask] = useState([arrayObj])
    return(
        <>
        <HeaderStyle>
            <HeaderTopStyle>
                <h1>TO DO</h1>
                <img src="/images/icon-moon.svg" alt="" />

            </HeaderTopStyle>
            <form onSubmit={(e)=>(e.preventDefault(),createObj(e.target[1].value,task,setTask)) 
                }>
                <button>Add</button>
                <input type="text" name="task"/>
            </form>
        </HeaderStyle>
        <main>
            <MainContainerStyle>
                <TaskStyled>
                    
                    <TodoItem   
                    arrayObj={arrayObj}
                    />
                </TaskStyled>
                <FilterStyle>
                    <div>
                        <label htmlFor="all">All</label>
                        <input type="checkbox" id="all"></input>
                    </div>
                    <div>
                        <label htmlFor="done">Done</label>
                        <input type="checkbox" id="done"></input>
                    </div>
                    <div>
                        <label htmlFor="undone">Undone</label>
                        <input type="checkbox" id="undone"></input>
                    </div>

                </FilterStyle>
            </MainContainerStyle>

        </main>
        </>

    )
}

const createObj = (value,task,setTask) => {
    const timeStamp = Date.now();
    const newObject = {
      task: value,
      id: timeStamp,
      checked: false,
    };
    arrayObj.push(newObject);
    
  };



export default Header