import { useState } from 'react'
import { HiOutlineEmojiSad } from 'react-icons/hi'

import { Header } from 'components/header/Header'
import { Button } from 'components/button/Button'
import { Modal } from 'components/modal/Modal'
import { AddEditActor } from 'components/addEditActor/AddEditActor'
import { Footer } from 'components/footer/Footer'

import './NoActors.css'

export const NoActors = ({ mainText, updates }) => {
  const [openAdd, setOpenAdd] = useState(false)

  return (
    <div className='no-actors'>
      <Header />
      <div className='no-actors-content-wrapper'>
        <HiOutlineEmojiSad className='no-actors-sad-icon' />

        <p>{mainText}</p>

        <div className='no-actors-btn-wrapper'>
          <Button
            type='btn-primary'
            className='no-actors-add-actor-btn'
            onClick={() => {
              setOpenAdd(true)
            }}>
            Add new actor
          </Button>

          {openAdd && (
            <Modal
              className='modal-overlay add-edit-actor-type'
              openModal={(open) => setOpenAdd(open)}
              title='Add new actor'>
              <AddEditActor
                btnPrimaryText='Add new actor'
                openModal={(openAdd) => setOpenAdd(openAdd)}
                actorDetails={false}
                updates={updates}
              />
            </Modal>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
