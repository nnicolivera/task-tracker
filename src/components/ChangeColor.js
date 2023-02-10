import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../actions'

function ChangeColor() {
    const [color, setColor] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='form-control'>
            <input type="text" onChange={(e) => setColor(e.target.value)} />
            <button className='btn-light' onClick={() => {
                dispatch(changeColor(color))
            }}>Change Color</button>
        </div>
    )
}

export default ChangeColor