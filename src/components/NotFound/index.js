import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NotFoundContainer,
  NotFoundVideosHeading,
  NotFoundVideosNote,
  NotFoundVideosImage,
  NotFoundVideosView,
} from './styledComponent'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkThem} = value
      const bgColor = isDarkThem ? '#181818' : '#f9f9f9'
      const headingColor = isDarkThem ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkThem ? '#e2e8f0' : '#475569'

      const notFindImageUrl = isDarkThem
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundVideosView>
              <NotFoundVideosImage src={notFindImageUrl} alt="not found" />
              <NotFoundVideosHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundVideosHeading>
              <NotFoundVideosNote noteColor={noteColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundVideosNote>
            </NotFoundVideosView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
