import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RiDeleteBinLine } from 'react-icons/ri'

import { deleteActor } from 'api/actors'

import { Field } from 'components/field/Field'
import { Button } from 'components/button/Button'

import './SelectActors.css'

export const SelectActors = ({ openSelectModal, isOpenDeleteModal, allChecked, textTitle, number, actorsToDelete }) => {
  const [isActive, setActive] = useState(false)

  const [allSelected, setAllSelected] = useState(false)

  const screenWidth = useSelector((state) => state.width)

  const toggleType = () => {
    setActive(!isActive)
  }

  useEffect(() => {
    allChecked(isActive)
    setAllSelected(isActive)

    if (isActive) {
      textTitle('All Selected')
    } else {
      textTitle('0 Selected')
    }
  }, [isActive, allChecked, textTitle])

  const deleteActors = async () => {
    actorsToDelete.forEach(async (actor) => {
      if (actor) {
        await deleteActor(actor)
      }
    })
  }

  return (
    <div className='select-actors'>
      <div className={screenWidth > 1024 ? 'select-actors-large' : ''}>
        <Field type='checkbox' value='all' className='select-actors-field' onClick={toggleType}>
          Select all
        </Field>
      </div>

      <div className='select-actors-delete-btn-wrapper'>
        <Button
          type={
            screenWidth < 1025 && (isActive || number > 0)
              ? 'btn-type-2'
              : screenWidth < 1025 && (!isActive || number === 0)
              ? 'btn-type-2 btn-opacity'
              : screenWidth > 1025 && (isActive || number > 0)
              ? 'btn-primary select-actors-delete-btn'
              : 'btn-primary btn-opacity select-actors-delete-btn'
          }
          className='select-actors-btn'
          onClick={() => {
            if (isActive && allSelected) {
              isOpenDeleteModal(true)
            } else {
              deleteActors()
            }
            openSelectModal(false)
          }}>
          <RiDeleteBinLine className='delete-icon' />
          Delete
        </Button>
      </div>
    </div>
  )
}
