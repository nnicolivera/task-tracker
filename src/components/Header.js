import Button from '../components/Button'
import { useSelector } from 'react-redux'

export default function Header({ title, onAdd, showAdd }) {
  const themeColor = useSelector(state => state.color)

  return (
    <header className='header' style={{ color: themeColor }}>
      <h1>{title}</h1>
      <Button color={showAdd ? 'grey' : 'green'} text={showAdd ? 'Close' : 'Add'} onAdd={onAdd}></Button>
    </header>
  )
}