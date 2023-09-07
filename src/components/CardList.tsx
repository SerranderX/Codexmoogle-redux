import React, { memo } from 'react'
import { Card } from './Card'
import './CardList.css'

interface CardListProps {
  characters: Array<any>
}

const CardList = memo(({ characters }: CardListProps) => {
  return (
    <div className='CardList'>
      {characters.map((character: any, i: number) => (
        <Card
          imageUrl={character?.pictures[0]?.url}
          title={character.name}
          description={character.description}
          key={`${i}-character`}
        ></Card>
      ))}
    </div>
  )
})

CardList.displayName = 'CardList'

export { CardList }
