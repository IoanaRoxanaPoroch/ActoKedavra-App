import { useState } from 'react'

import { Field } from 'components/field/Field'
import { TextArea } from 'components/textarea/TextArea'
import { Button } from 'components/button/Button'

import './AddEditActor.css'
import { Modal } from 'components/modal/Modal'

export const AddEditActor = ({ actorDetails, openModal, updates, btnPrimaryText }) => {
  const defaultActor = {
    id: actorDetails ? actorDetails.id : '',
    name: actorDetails ? actorDetails.name : '',
    occupation: actorDetails ? actorDetails.occupation : '',
    hobbies: actorDetails ? actorDetails.hobbies : '',
    description: actorDetails ? actorDetails.description : '',
    characters: actorDetails ? actorDetails.description.length : 0,
  }
  const [actor, setActor] = useState(defaultActor)

  const [errorMessage, setErrorMessage] = useState({})

  const validate = () => {
    const errorMessage = 'Field required'
    let errors = {}

    if (!actor.name) {
      errors.nameError = errorMessage
    }

    if (!actor.occupation) {
      errors.occupationError = errorMessage
    }

    if (!actor.hobbies) {
      errors.hobbiesError = errorMessage
    }

    if (!actor.description) {
      errors.descriptionError = errorMessage
    }

    if (errors.nameError || errors.occupationError || errors.hobbiesError || errors.descriptionError) {
      setErrorMessage({ ...errors })
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e?.preventDefault()
    const isValid = validate()

    if (validate()) {
      openModal(false)
      updates(actor.id, actor)
    }
  }

  return (
    <Modal title={actorDetails ? 'Edit Actor' : 'Add new actor'} openModal={(isOpenModal) => openModal(isOpenModal)}>
      <form className='add-edit-actor'>
        <div className='add-edit-actor-name-occupation'>
          <Field
            type='text'
            className='add-edit-actor-group'
            value={actor.name}
            onChange={(e) => {
              setActor({ ...actor, name: e.target.value })
            }}
            spanText={errorMessage?.nameError}>
            Name
          </Field>

          <Field
            type='text'
            className='add-edit-actor-group'
            value={actor.occupation}
            onChange={(e) => setActor({ ...actor, occupation: e.target.value })}
            spanText={errorMessage?.occupationError}>
            Occupation besides acting
          </Field>
        </div>

        <Field
          type='text'
          className='add-edit-actor-group'
          value={actor.hobbies}
          onChange={(e) => setActor({ ...actor, hobbies: e.target.value })}
          spanText={errorMessage?.hobbiesError}>
          Hobbies
        </Field>

        <TextArea
          className='add-edit-actor-group'
          name='description'
          maxLength='180'
          labelText='Description'
          value={actor.description}
          characters={actor?.characters}
          onChange={(e) =>
            setActor({
              ...actor,
              description: e.target.value,
              characters: e.target.value.length,
            })
          }
          spanText={errorMessage?.descriptionError}
        />

        <Button type='btn-primary' onClick={handleSubmit} className='add-edit-actor-update-btn'>
          {btnPrimaryText}
        </Button>

        <Button
          className='changed-mind-btn add-edit-actor-changed-mind-btn'
          onClick={() => {
            openModal(false)
          }}>
          I changed my mind
        </Button>
      </form>
    </Modal>
  )
}
