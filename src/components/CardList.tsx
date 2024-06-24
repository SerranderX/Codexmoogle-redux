import { memo } from 'react'
import { Card } from './Card'
import './CardList.css'
import { Character } from '../shared/types/character.type'
import { shallowEqual } from 'react-redux'
import { RootState, useAppSelector } from '../reduxConfig/config'

const CardList = memo(() => {
  const data = useAppSelector((state: RootState) => state.data, shallowEqual)

  return (
    <div className='CardList'>
      {data.search.length === 0 &&
        data.characters.map((character: Character, i: number) => (
          <Card
            imageUrl={character.pictures[0]?.url}
            description={character.description}
            favorite={character.favorite}
            name={character.name}
            itemId={character.id}
            key={`${i}-character`}
          />
        ))}
      {data.charactersFiltered.length > 0 &&
        data.charactersFiltered.map((character: Character, i: number) => (
          <Card
            imageUrl={character.pictures[0]?.url}
            description={character.description}
            favorite={character.favorite}
            name={character.name}
            itemId={character.id}
            key={`${i}-character`}
          />
        ))}
    </div>
  )
})

CardList.displayName = 'CardList'

export { CardList }
