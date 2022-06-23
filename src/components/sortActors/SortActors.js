import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

import { Button } from 'components/button/Button'

import './SortActors.css'

export const SortActors = ({ openSortModal, actorsToSort, sortedActors, className, onChangeSort }) => {
  const [actorsSort, setActorsSort] = useState(actorsToSort)

  const screenWidth = useSelector((state) => state.screen.width)

  const sortAscending = () => {
    openSortModal(false)

    setActorsSort(
      actorsSort.sort((a, b) => {
        return a.score - b.score
      }),
    )
  }

  const sortDescending = () => {
    openSortModal(false)

    setActorsSort(
      actorsSort.sort((a, b) => {
        return b.score - a.score
      }),
    )
  }

  const handleChange = (e) => {
    onChangeSort(e.target.value)

    // if (e.target.value === 'ascending') {
    //   setActorsSort(
    //     actorsSort.sort((a, b) => {
    //       return a.score - b.score
    //     }),
    //   )

    //   sortedActors(actorsSort)
    // } else {
    //   setActorsSort(
    //     actorsSort.sort((a, b) => {
    //       return b.score - a.score
    //     }),
    //   )

    //   sortedActors(actorsSort)
    // }
  }

  return (
    <>
      {screenWidth > 1024 && (
        <select
          name='cards'
          id='cards'
          className={`btn-type-4 sort-actors-select-btn ${className}`}
          onChange={handleChange}>
          <option value='none'>Sort</option>
          <option value='ascending'>Ascending</option>
          <option value='descending'>Descending</option>
        </select>
      )}
      {screenWidth < 1025 && (
        <div className={`sort-actors `}>
          <Button type='btn-type-2' className='sort-actors-btn' onClick={sortAscending}>
            <AiOutlineArrowUp className='arrow-icon' />
            Ascending
          </Button>

          <Button type='btn-type-2' className='sort-actors-btn' onClick={sortDescending}>
            <AiOutlineArrowDown className='arrow-icon' />
            Descending
          </Button>
        </div>
      )}
    </>
  )
}
