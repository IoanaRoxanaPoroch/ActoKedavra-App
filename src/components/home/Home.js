import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { getActors, deleteActor, addNewActor, updateActor } from '../../api/actors'

import { Header } from '../header/Header'
import { Button } from '../button/Button'
import { Card } from '../card/Card'
import { Modal } from '../modal/Modal'
import { AddEditActor } from '../addEditActor/AddEditActor'
import { NoActors } from '../noActors/NoActors'
import { SortActors } from '../sortActors/SortActors'
import { SelectActors } from '../selectActors/SelectActors'
import { NotificationWindow } from '../notificationWindow/NotificationWindow'
import { Footer } from '../footer/Footer'
import { screenWidthResize } from 'features/windowWidth/WindowWidthSlice'

import './Home.css'
import DeleteModal from 'components/deleteModal/DeleteModal'
import { BsConeStriped } from 'react-icons/bs'

const Home = () => {
  const countRef = useRef(0)

  const [actors, setActors] = useState(null)
  const [actorsToDelete, setActorsToDelete] = useState([])
  let [arrActors, setArrActors] = useState([])

  const [openAdd, setOpenAdd] = useState(false)
  const [openSort, setIsOpenSort] = useState(false)
  const [openSelect, setOpenSelect] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const [selectAll, setSelectAll] = useState(false)
  const [selectTitle, setSelectTitle] = useState('')

  const [number, setNumber] = useState(0)

  const [visibleSuccesWindow, setIsVisibleSuccesWindow] = useState(false)
  const [visibleWarningWindow, setIsVisibleWarningWindow] = useState(false)
  const [visibleDangerWindow, setIsVisibleDangerWindow] = useState(false)

  const [error, setError] = useState('')

  const screenWidth = useSelector((state) => state.screen.width)

  const dispatch = useDispatch()

  useEffect(() => {
    const onResize = () => {
      dispatch(screenWidthResize(window.innerWidth))
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [dispatch])

  useEffect(() => {
    const getResponse = async () => {
      await getActors()
        .then((response) => {
          setActors(response.data)
          setError('')
        })

        .catch((err) => {
          setError(err.message)
          setActors(null)
        })
    }

    getResponse()
  }, [error])

  // add functionality
  const addActor = async (id, newActor) => {
    delete newActor.characters

    const actorToAdd = {
      ...newActor,
      hobbies: newActor.hobbies.split(','),
    }

    const response = await addNewActor(actorToAdd)

    if (response.status === 201) {
      countRef.current++

      setActors((prevActors) => [...prevActors, response.data])
      setIsVisibleSuccesWindow(true)
    }
  }

  // edit & remove functionality
  const getUpdates = async (id, actorEdited) => {
    if (actorEdited) {
      let actor = await getActors(id)

      if (actor.data) {
        let actorToEdit = { ...actor.data, ...actorEdited }
        delete actorToEdit.characters
        const response = await updateActor(actorToEdit)

        if (response.status === 200) {
          setActors(actors.map((actor) => (actor.id === id ? actorToEdit : actor)))
        } else {
          setIsVisibleDangerWindow(true)
        }
      }
    } else {
      let actorToDelete = actors.find((actor) => actor.id === id)
      const resp = await deleteActor(actorToDelete)

      if (resp.status === 200) {
        setActors(actors.filter((actor) => actor.id !== id))
      }
    }
  }

  const onClickOpenSortModal = () => {
    setIsOpenSort(true)
  }

  const changeSort = (order) => {
    if (order === 'ascending') {
      setActors(
        actors.sort((a, b) => {
          return a.score - b.score
        }),
      )
    } else {
      setActors(
        actors.sort((a, b) => {
          return b.score - a.score
        }),
      )
    }
  }

  const numberOfActorsSelected = (param, id) => {
    let actorSelected = actors.find((actor) => actor.id === parseInt(id))

    if (param) {
      setArrActors([...arrActors, actorSelected])
    } else {
      arrActors = actorsToDelete.filter((actor) => actor.id !== parseInt(id))

      setArrActors(arrActors)
    }
  }

  useEffect(() => {
    setActorsToDelete(arrActors)
    setNumber(arrActors.length)
  }, [arrActors])

  const setTitle = (title) => {
    if (title !== 'All Selected') {
      return `${number} Selected`
    } else {
      return title
    }
  }

  const onClickOpenModal = () => {
    if (countRef.current === 2) {
      setOpenAdd(false)
      setIsVisibleWarningWindow(true)

      countRef.current = 0
    } else {
      setOpenAdd(true)
    }
  }

  return (
    <>
      {actors?.length > 0 && (
        <div>
          {visibleSuccesWindow && (
            <NotificationWindow
              isVisible={(visibleSuccesWindow) => {
                setIsVisibleSuccesWindow(visibleSuccesWindow)
              }}
              className='success'
              text='Actor added successfully.'
            />
          )}

          {visibleWarningWindow && (
            <NotificationWindow
              isVisible={(visibleWarningWindow) => {
                setIsVisibleWarningWindow(visibleWarningWindow)
              }}
              className='warning'
              text='You can add max. 7 actors.'
            />
          )}

          {visibleDangerWindow && (
            <NotificationWindow
              isVisible={(visibleDangerWindow) => {
                setIsVisibleDangerWindow(visibleDangerWindow)
              }}
              className='danger'
              text='Your changes were not saved.'
            />
          )}

          <Header />
          <div className='top-btns-container'>
            {screenWidth < 1025 && (
              <Button type={'btn-type-1'} onClick={onClickOpenSortModal}>
                Sort
              </Button>
            )}
            {openSort && (
              <Modal
                className='sort-type'
                openModal={(openSort) => {
                  setIsOpenSort(openSort)
                }}
                title='Select type of sort'>
                <SortActors
                  openSortModal={(openSort) => {
                    setIsOpenSort(openSort)
                  }}
                  actorsToSort={actors}
                />
              </Modal>
            )}

            {screenWidth > 1024 && (
              <SortActors
                actorsToSort={actors}
                sortedActors={(actors) => setActors(actors)}
                className={openSelect ? 'none' : ''}
                onChangeSort={changeSort}
              />
            )}

            <Button
              type={screenWidth > 1024 ? 'btn-type-4' : 'btn-type-1'}
              className={openSelect ? 'none' : ''}
              onClick={() => {
                setOpenSelect(true)
                setArrActors([])
              }}>
              Select
            </Button>

            {openSelect && (
              <Modal
                className='modal-overlay select-type'
                openModal={(openSelect) => setOpenSelect(openSelect)}
                title={setTitle(selectTitle)}>
                <SelectActors
                  openSelectModal={(openSelect) => setOpenSelect(openSelect)}
                  allChecked={(selectAll) => {
                    setSelectAll(selectAll)
                  }}
                  textTitle={(selectTitle) => {
                    setSelectTitle(selectTitle)
                  }}
                  number={number}
                  actorsToDelete={selectTitle === 'All Selected' ? actors : actorsToDelete}
                  isOpenDeleteModal={setOpenDeleteModal}
                />
              </Modal>
            )}

            {openDeleteModal && <DeleteModal isOpenDeleteModal={setOpenDeleteModal} />}
          </div>

          <div className={openSelect || openSort ? 'cards-container home-cards-container-down' : 'cards-container'}>
            {actors?.map((actor, index) => (
              <Card
                key={index}
                id={actor.id}
                name={actor.name}
                sourceImage={actor.picture}
                textImage={actor.name}
                occupation={actor.occupation}
                likes={actor.score}
                hobbies={actor.hobbies}
                description={actor.description}
                updates={getUpdates}
                openCheckBox={openSelect}
                allActorsSelected={selectAll}
                actorsSelected={numberOfActorsSelected}
              />
            ))}
          </div>

          <Button className='home-btn-primary' type='btn-primary' onClick={onClickOpenModal}>
            Add new actor
          </Button>

          {openAdd && (
            // <Modal
            //   className='modal-overlay add-edit-actor-type'
            //   openModal={(open) => setOpenAdd(open)}
            //   title='Add new actor'>
            //   <AddEditActor
            //     btnPrimaryText='Add new actor'
            //     openModal={(openAdd) => setOpenAdd(openAdd)}
            //     actorDetails={false}
            //     updates={addActor}
            //   />
            // </Modal>
            <AddEditActor
              openModal={setOpenAdd}
              actorDetails={false}
              updates={addActor}
              btnPrimaryText='Add new actor'
            />
          )}

          <Footer />
        </div>
      )}

      {error && <h1 className='home-error'>{error}</h1>}

      {actors?.length === 0 && !error && <NoActors mainText='There are no actors here. Consider adding one.' />}
    </>
  )
}

export default Home
