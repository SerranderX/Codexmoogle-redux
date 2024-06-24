import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import { setFilter } from '../slices/characters.slice'

export const Searcher = () => {
  const dispatch = useDispatch()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value))
  }

  return <Input.Search placeholder='Buscar...' onChange={handleOnChange} style={{ marginBottom: 50 }} />
}
