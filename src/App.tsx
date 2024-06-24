import { useEffect, useRef } from 'react'
import { Searcher } from './components/Searcher'
import { CardList } from './components/CardList'
import { Col, Spin } from 'antd'
import './App.css'
import { fetchCharacters } from './slices/characters.slice'
import { useAppDispatch, useAppSelector } from './reduxConfig/config'

function App() {
  const loading = useAppSelector((state) => state.ui.loading)
  const initRender = useRef(true)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (initRender.current) {
      initRender.current = false
      dispatch(fetchCharacters())
    }
  }, [])

  return (
    <div className='App'>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <CardList />
      )}
    </div>
  )
}

export default App
