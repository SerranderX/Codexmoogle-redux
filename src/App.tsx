import React, { useEffect } from 'react'
import { Searcher } from './components/Searcher'
import { CardList } from './components/CardList'
import { getCharactersAction } from './actions'
import { Col, Spin } from 'antd'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const loading = useSelector((state: any) => state.getIn(['ui', 'loading']))
  const dispatch = useDispatch()

  useEffect(() => {
    const loadCharacters = async () => {
      dispatch<any>(getCharactersAction())
    }
    if (loading) loadCharacters()
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
