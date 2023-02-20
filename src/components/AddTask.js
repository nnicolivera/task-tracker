import { useState } from 'react'
import { useField } from './hooks/useField';

export default function AddTask({ onAdd }) {
  const text = useField('text');
  const date = useField('text');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text.value) {
      alert('Please add a task');
      return;
    }

    onAdd({ text: text.value, date: date.value, reminder });
    text.setValue('');
    date.setValue('');
    setReminder(false);
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type={text.type} value={text.value} onChange={text.onChange} placeholder='Add Task' />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type={date.type} value={date.value} onChange={date.onChange} placeholder='Add Date' />
      </div>
      <div className='form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}