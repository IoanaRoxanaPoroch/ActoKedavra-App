import { MdOutlineModeEdit } from 'react-icons/md'

import { Header } from 'components/header/Header'
import { Button } from 'components/button/Button'
import { SelectActors } from 'components/selectActors/SelectActors'
import { SortActors } from 'components/sortActors/SortActors'
import { AddEditActor } from 'components/addEditActor/AddEditActor'
import { Card } from 'components/card/Card'
import { Tag } from 'components/tag/Tag'
import { Modal } from 'components/modal/Modal'
import { NotificationWindow } from 'components/notificationWindow/NotificationWindow'
import { NoActors } from 'components/noActors/NoActors'
import { Footer } from 'components/footer/Footer'

import './StyleGuidePage.css'

const StyleGuidepage = () => {
  return (
    <div>
      <Header />
      <div className='top-btns-container'>
        <Button type='btn-type-1'>Sort</Button>
        <Button type='btn-type-1'>Select</Button>
      </div>

      <div className='cards-container'>
        <Card
          key={1}
          id={1}
          name={'Brad Pitt'}
          sourceImage={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/220px-Brad_Pitt_2019_by_Glenn_Francis.jpg'
          }
          textImage={'Brad Pitt'}
          occupation={'Actor & Producer'}
          likes={82}
          hobbies={['Reading', 'Swimming']}
          description={
            'Pitt was born on December 18, 1963, in Shawnee, Oklahoma, to William Alvin Pitt, the proprietor of a trucking company.'
          }
          updates={(id, actorEdited) => {
            console.log(id)
            console.log(actorEdited)
          }}
        />
      </div>

      <br />
      <br />

      <Button type='btn-type-2'>
        Edit
        <MdOutlineModeEdit className='edit-icon' />
      </Button>

      <br />
      <br />

      <Tag>Dancing</Tag>

      <br />

      <Tag>Modeling</Tag>

      <br />
      <br />

      <Button type='btn-primary'>Add new actor</Button>

      <br />
      <br />

      <Modal openModal={true} className='sort-type' title='Select type of sort'>
        <SortActors />
      </Modal>

      <br />
      <br />

      <Modal openModal={true} className='select-type' title='Number of items selected'>
        <SelectActors />
      </Modal>

      <br />
      <br />

      <Modal openModal={true} className='add-edit-actor-type' title='Add new actor'>
        <AddEditActor btnPrimaryText='Add new actor' />
      </Modal>

      <br />
      <br />

      <Modal openModal={true} className='add-edit-actor-type' title='Edit actor'>
        <AddEditActor btnPrimaryText='Update' />
      </Modal>

      <br />
      <br />

      <NoActors mainText='There are no actors here. Consider adding one.' />

      <br />
      <br />

      <NotificationWindow isVisible={true} className='success' text='Actor added successfully.' />

      <br />
      <br />

      <NotificationWindow isVisible={true} className='warning' text='You can add max. 7 actors.' />

      <br />
      <br />

      <NotificationWindow isVisible={true} className='danger' text='Your changes were not saved.' />

      <br />
      <br />

      <Footer />
    </div>
  )
}

export default StyleGuidepage
