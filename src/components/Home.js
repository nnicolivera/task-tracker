import { useState, useEffect } from 'react';
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
import taskService from '../services/tasks';
import Header from '../components/Header';
import ChangeColor from './ChangeColor';
import { useDispatch, useSelector } from 'react-redux';
import { getList, addItem, delItem, updItem } from '../store/actions';

export const Home = () => {
    const [showAddTask, setShowAddTask] = useState(false)

    const dispatch = useDispatch()
    const items = useSelector(state => state.items)

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const initialTasks = await taskService.getAll();
                dispatch(getList(initialTasks));
            } catch (error) {
                console.error(error);
            }
        }
        fetchTasks();
    }, [])

    // Add Task
    const addTask = async task => {
        try {
            const newTask = await taskService.add(task);
            dispatch(addItem(newTask));
        } catch (error) {
            console.error(error);
        }
    }

    // Delete task
    const deleteTask = async id => {
        try {
            await taskService.remove(id, items);
            dispatch(delItem(id, items));
        } catch (error) {
            console.error(error);
        }
    }

    // Update task reminder
    const toggleReminder = async (id) => {
        try {
            const taskToToggle = await taskService.get(id);
            const updTask = {
                ...taskToToggle,
                reminder: !taskToToggle.reminder
            };
            await taskService.update(id, updTask);
            dispatch(updItem(id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} />}
            {items.length > 0 ? <Tasks tasks={items} onToggle={toggleReminder} onDelete={deleteTask} /> : 'No tasks to show'}
            <ChangeColor />
        </>
    )
}