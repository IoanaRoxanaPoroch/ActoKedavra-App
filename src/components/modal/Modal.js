import ReactDom from 'react-dom'
import { useSelector } from 'react-redux'
import { VscClose } from 'react-icons/vsc'

import { Title } from 'components/title/Title'
import { Button } from 'components/button/Button'

import './Modal.css'

export const Modal = ({ className, openModal, title, children }) => {
  const screenWidth = useSelector((state) => state.screen.width)

  return ReactDom.createPortal(
    <div className={`modal ${className}`}>
      <div className={title !== '0 Selected' ? 'modal-close-btn-wrapper' : 'select-modal-close-btn-wrapper '}>
        <Button type='close-btn' className={title === '0 Selected' ? 'select-actors-close-btn' : 'modal-close-btn'}>
          <VscClose onClick={() => openModal(false)} />
        </Button>
      </div>
      <Title className={screenWidth > 1024 && title === '0 Selected' ? 'select-title' : 'modal-title'}>{title}</Title>
      {children}
    </div>,
    document.getElementById('portal'),
  )
}
