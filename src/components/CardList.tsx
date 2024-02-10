import { memo } from 'react'
import { Card } from './Card'
import './CardList.css'
import { Character } from '../shared/types/character.type'
import { shallowEqual, useSelector } from 'react-redux'

const CardList = memo(() => {
  const characters = useSelector((state: any) => state.getIn(['characters', 'characters'], shallowEqual)).toJS()

  return (
    <div className='CardList'>
      {characters &&
        characters.map((character: Character, i: number) => (
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
