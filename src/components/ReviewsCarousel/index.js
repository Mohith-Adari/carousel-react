// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  changeCarouselLeft = () => {
    const {activeId} = this.state
    if (activeId > 0) {
      const newActiveId = activeId - 1
      this.setState({activeId: newActiveId})
    }
  }

  changeCarouselRight = () => {
    const {activeId} = this.state
    const {reviewsList} = this.props

    if (activeId < reviewsList.length - 1) {
      const newActiveId = activeId + 1
      this.setState({activeId: newActiveId})
    }
  }

  render() {
    const {activeId} = this.state
    const {reviewsList} = this.props
    const reviewItem = reviewsList[activeId]
    const {imgUrl, username, companyName, description} = reviewItem
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="main-heading">Reviews</h1>
          <div className="carousel-container">
            <button type="button" data-testId="leftArrow" className="btn-style">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
                onClick={this.changeCarouselLeft}
              />
            </button>

            <div className="review-container">
              <img src={imgUrl} alt="username" className="user-pic" />
              <p className="username">{username}</p>
              <p className="company-name">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              type="button"
              data-testId="rightArrow"
              className="btn-style"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
                onClick={this.changeCarouselRight}
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
