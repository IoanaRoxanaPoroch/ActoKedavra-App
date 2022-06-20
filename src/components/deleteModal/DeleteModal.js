import { Button } from 'components/button/Button'
import { Modal } from 'components/modal/Modal'

import { deleteActor } from 'api/actors'

import './DeleteModal.css'

const DeleteModal = ({ isOpenDeleteModal, actorsToDelete, openModal }) => {
  const handleDelete = () => {
    actorsToDelete?.forEach(async (actor) => {
      if (actor) {
        await deleteActor(actor)
      }
    })

    isOpenDeleteModal(false)
  }
  return (
    <Modal
      title='Are you sure you want to delete
        all the actors of the list?'
      openModal={(isOpenModal) => {
        isOpenDeleteModal(isOpenModal)
      }}>
      <div className='delete__modal'>
        <Button className='delete-modal-btn-primary' type='btn-primary' onClick={handleDelete}>
          Yes, delete all
        </Button>

        <Button
          className='changed-mind-btn delete-modal-changed-mind-btn'
          onClick={() => {
            isOpenDeleteModal(false)
          }}>
          I changed my mind
        </Button>
      </div>
    </Modal>
  )
}

export default DeleteModal
