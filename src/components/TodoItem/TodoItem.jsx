import { TaskCardStyle } from "./styles"

const TodoItem =({arrayObj})=>{
  console.log(arrayObj)
    return arrayObj.map((element) => 
       <TaskCardStyle>
            <input type="checkbox" defaultChecked={element.checked}/>
            <label htmlFor={element.id}>{element.task}</label>
            <img src="/images/icon-cross.svg" alt="" />
        </TaskCardStyle>
        
    )
}

export default TodoItem