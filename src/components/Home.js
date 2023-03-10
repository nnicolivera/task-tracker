import { useState, useEffect } from 'react'
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import taskService from '../services/tasks'
import Header from '../components/Header'
import ChangeColor from './ChangeColor'

export default function Home() {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        taskService
            .getAll()
            .then(initialTasks => {
                setTasks(initialTasks)
            })
    }, [])

    // Add Task
    const addTask = (task) => {
        taskService
            .add(task)
            .then(newTask => {
                setTasks(tasks.concat(newTask))
            })
    }

    // Delete tasks
    const deleteTask = (id) => {
        taskService
            .remove(id, tasks)
            .then(() => {
                setTasks(tasks.filter((task) => task.id !== id))
            })
    }

    // Toggle reminder
    const toggleReminder = (id) => {
        taskService
            .get(id)
            .then((taskToToggle) => {
                const updTask = {
                    ...taskToToggle,
                    reminder: !taskToToggle.reminder
                }
                taskService
                    .update(id, updTask)
                    .then(() => {
                        setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
                    })
            })
    }

    return (
        <>
            <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : 'No tasks to show'}
            <ChangeColor />
        </>
    )
}