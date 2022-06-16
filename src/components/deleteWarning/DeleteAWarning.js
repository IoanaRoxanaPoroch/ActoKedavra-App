import { Button } from 'components/button/Button'
import { deleteActor } from 'api/actors'

import './DeleteWarning.css'

const DeleteWarning = ({ isOpenDeleteWarning, actorsToDelete }) => {
  const handleDelete = () => {
    actorsToDelete?.forEach(async (actor) => {
      if (actor) {
        await deleteActor(actor)
      }
    })
    isOpenDeleteWarning(false)
  }
  return (
    <div className='delete-warning'>
      <Button className='delete-warning-btn-primary' type='btn-primary' onClick={handleDelete}>
        Yes, delete all
      </Button>
      <Button
        className='changed-mind-btn delete-warning-changed-mind-btn'
        onClick={() => {
          isOpenDeleteWarning(false)
        }}>
        I changed my mind
      </Button>
    </div>
  )
}

export default DeleteWarning