import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { screenWidthResize } from './WindowWidthSlice'

export const WindowWidth = () => {
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

  return <span>{screenWidth}</span>
}
