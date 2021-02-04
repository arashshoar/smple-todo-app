import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faWindowClose, faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'

const changeStatus = ({ id, todoData, setTodoData }) => {
  const todoDataCp = [...todoData]
  const selectedTask = todoDataCp.find(task => task.id === id)
  selectedTask.status = !selectedTask.status
  setTodoData(todoDataCp)
}

const deleteTask = ({ id, todoData, setTodoData }) => {
  const todoDataCp = [...todoData]
  const taskIndex = todoDataCp.findIndex(task => task.id === id)
  todoDataCp.splice(taskIndex, 1)
  setTodoData(todoDataCp)
}

const editTask = ({ id, setTitle, setContent, setSelectedId, todoData, setIsEditMode }) => {
  const todoDataCp = [...todoData]
  const selectedTask = todoDataCp.find(task => task.id === id)
  setTitle(selectedTask.title)
  setContent(selectedTask.content)
  setSelectedId(id)
  setIsEditMode(true)
}

const TodoList = ({ todoData, setTodoData, setIsEditMode, setTitle, setContent, setSelectedId }) => {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="alert-dark col-8 mb-2">Tasks List</div>
      </div>

      {
        todoData.map( task => (
          <div key={task.id} className="row justify-content-center">
            <div className='col-8'>
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex justify-content-between alert-dark">
                    <div>{task.title}</div>
                    <div className="d-flex" style={{ cursor: 'pointer' }}>
                      <div>
                        <FontAwesomeIcon
                          onClick={() => editTask({ id: task.id, setTitle, setContent, setSelectedId, todoData, setIsEditMode })}
                          icon={faEdit}
                        />
                      </div>
                      <div>
                        <span>&nbsp;&nbsp;</span>
                        <FontAwesomeIcon
                          onClick={() => deleteTask({ id: task.id, todoData, setTodoData })}
                          icon={faWindowClose}
                        />
                      </div>
                      <div>
                        <span>&nbsp;&nbsp;</span>
                        <FontAwesomeIcon
                          onClick={() => changeStatus({ id: task.id, todoData, setTodoData })}
                          icon={task.status ? faCheckSquare :faSquare}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>{task.content}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TodoList
