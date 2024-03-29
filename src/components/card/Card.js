import PropTypes from 'prop-types'
import { useState } from 'react'
import { VscClose } from 'react-icons/vsc'
import { MdOutlineModeEdit } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'

import { Title } from 'components/title/Title'
import { Button } from 'components/button/Button'
import { Tag } from 'components/tag/Tag'
import Content from 'components/readMoreLess/ReadMore'
import { Modal } from 'components/modal/Modal'
import { AddEditActor } from 'components/addEditActor/AddEditActor'
import { Field } from 'components/field/Field'

import './Card.css'

export const Card = ({
  id,
  name,
  sourceImage,
  textImage,
  occupation,
  likes,
  hobbies,
  description,
  updates,
  openCheckBox,
  allActorsSelected,
  actorsSelected,
}) => {
  const [open, setIsOpen] = useState(false)
  const hobbiesReceived = { hobbies }
  const details = { id, name, occupation, hobbies, description }

  const onClickOpen = () => {
    setIsOpen(true)
  }

  return (
    <div className='card'>
      {openCheckBox ? (
        <Field
          id={id}
          type='checkbox'
          className='card-checkbox'
          valueOfChecked={allActorsSelected}
          actorsSelected={actorsSelected}
        />
      ) : (
        <Button
          type='close-btn'
          className='card-close-btn'
          onClick={() => {
            updates(id)
          }}>
          <VscClose />
        </Button>
      )}

      <img src={sourceImage} alt={textImage} className='card-actor-img' />

      <Title className='card-title'>{name}</Title>

      <div className='card-job-likes-wrapper'>
        <p className='card-jobs'>{occupation}</p>
        <p className='card-likes'>
          {likes}
          <AiOutlineLike />
        </p>
      </div>

      <div className='card-tags'>
        {hobbiesReceived.hobbies?.map((hobbie, index) => (
          <Tag key={index}>{hobbie}</Tag>
        ))}
      </div>

      <div className='card-description'>
        <Content text={description} />
      </div>

      <Button type='btn-type-2' className='card-edit-btn' onClick={onClickOpen}>
        Edit
        <MdOutlineModeEdit className='edit-icon' />
      </Button>

      {open && (
        <Modal className='modal-overlay' openModal={(open) => setIsOpen(open)} title='Edit actor'>
          <AddEditActor
            btnPrimaryText='Update'
            openModal={(open) => setIsOpen(open)}
            actorDetails={details}
            updates={updates}
          />
        </Modal>
        //  <AddEditActor openModal={setOpenAdd} actorDetails={false} updates={addActor}  btnPrimaryText='Add new actor'/>
      )}
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  sourceImage: PropTypes.string,
  jobs: PropTypes.string,
  likes: PropTypes.number,
  hobbies: PropTypes.array,
  description: PropTypes.string,
}
