import React, { useContext, useEffect, useState } from 'react'
import BigSelectTypeTwo from '../BigSelectTypeTwo'
import { UserContext } from '../../App'
import { roasts } from '../../constants/constants'
import {
  chevronRightImgSrc,
  chevronLeftImgSrc,
  chevronUpImgSrc,
  chevronDownImgSrc,
} from '../../constants/constants'

// TODO possibply could remove with optimization
import { withRouter } from 'react-router-dom'

// import { filterRoasts } from '../../common/common'

const Roast = (props) => {
  const {
    selectedRoastId,
    setSelectedRoastId,
    selectedFlagId,
    setSelectedIdFlag,
  } = useContext(UserContext)

  const { history, location } = props

  let filteredRoasts = []

  // if (selectedTextureId === 1) {
  //   filteredRoasts = roasts.filter((roast) => {
  //     return roast.type === 'ground-roast'
  //   })
  // } else if (selectedTextureId === 2) {
  //   filteredRoasts = roasts.filter((roast) => {
  //     return roast.type === 'whole-roast'
  //   })
  // } else if (selectedTextureId === 3) {
  //   filteredRoasts = roasts.filter((roast) => {
  //     return roast.type === 'rounds-roast'
  //   })
  // }

  const [visibleHorizontalRoastId, setVisibleHorizontalRoastId] = useState(1)
  const [visibleVerticalRoastId, setVisibleVerticalRoastId] = useState(1)

  filteredRoasts = roasts

  filteredRoasts.map((roast, index) => {
    roast.hrefId = index + 1
    return roast
  })

  console.log('filtered roasts ', filteredRoasts)

  const filteredRoastsCount = roasts.length

  const middleRoastNumber = parseInt(filteredRoastsCount / 2, 10)

  const handleSelectedRoastId = (roastId) => {
    setSelectedRoastId(roastId)
    setSelectedIdFlag(selectedFlagId)
  }

  // useEffect(() => {
  //   visibleHorizontalRoastId
  // })

  const scrollRight = async () => {
    if (visibleHorizontalRoastId === 1 && filteredRoasts.length > 2) {
      await setVisibleHorizontalRoastId(visibleHorizontalRoastId + 2)
    } else if (filteredRoasts.length > visibleHorizontalRoastId) {
      await setVisibleHorizontalRoastId(visibleHorizontalRoastId + 1)
    }
  }

  const scrollLeft = async () => {
    if (
      visibleHorizontalRoastId === filteredRoasts.length &&
      filteredRoasts.length > 2
    ) {
      await setVisibleHorizontalRoastId(visibleHorizontalRoastId - 2)
    } else if (1 < visibleHorizontalRoastId) {
      await setVisibleHorizontalRoastId(visibleHorizontalRoastId - 1)
    }
  }

  const scrollDown = async () => {
    if (filteredRoasts.length > visibleVerticalRoastId) {
      await setVisibleVerticalRoastId(visibleVerticalRoastId + 1)
    }
  }

  const scrollUp = async () => {
    if (1 < visibleVerticalRoastId) {
      await setVisibleVerticalRoastId(visibleVerticalRoastId - 1)
    }
  }

  // history.push({ pathname: `/#roast-h-1` })

  useEffect(() => {
    // const hrefHorizontalButton = document.getElementById(
    //   `roast-h-href-${visibleHorizontalRoastId}`
    // )
    // hrefHorizontalButton &&
    //   document
    //     .getElementById(`roast-h-href-${visibleHorizontalRoastId}`)
    //     .click()
    // TODO this needs to be done better and tested with shopify
    // TODO put in react history
    window.location.href = `http://localhost:3000/#roast-h-${visibleHorizontalRoastId}`
    // history.push({ pathname: `/#roast-h-${visibleHorizontalRoastId}` })
  }, [visibleHorizontalRoastId])

  useEffect(() => {
    // document.getElementById(`roast-v-href-${visibleVerticalRoastId}`).click()
    // TODO this needs to be done better and tested with shopify
    window.location.href = `http://localhost:3000/#roast-v-${visibleVerticalRoastId}`
  }, [visibleVerticalRoastId])

  const horizontalScroll = () => {
    return (
      <div>
        <div className="tw-flex tw-justify-center tw-w-full">
          <img
            onClick={() => scrollLeft()}
            alt="Chevron or Arrow Left"
            className="tw-text-white tw-mr-8"
            src={chevronLeftImgSrc}
          />
          <div
            id="scrollElement"
            className="tw-flex tw-justify-between tw-space-x-4 tw-overflow-scroll tw-max-w-xl scrollbar-hide scroll-smooth"
          >
            {filteredRoasts.map((roast) => (
              <div
                id={`roast-h-${roast.hrefId}`}
                key={roast.hrefId}
                className="tw-w-64"
              >
                <BigSelectTypeTwo
                  isCarousel
                  id={roast.id}
                  label={roast.label}
                  handleSelection={(roastId) => handleSelectedRoastId(roastId)}
                  selected={roast.id === selectedRoastId}
                  subLabel={roast.subLabel}
                  description={roast.description}
                  imgSrc={roast.imgSrc}
                />
              </div>
            ))}
          </div>

          <img
            onClick={() => scrollRight()}
            alt="Chevron or Arrowstart over issue Right"
            className="tw-text-white tw-ml-8"
            src={chevronRightImgSrc}
          />
        </div>
        <div className="tw-flex tw-justify-center tw-place-items-center tw-w-full tw-pt-8">
          <input
            type="range"
            min="1"
            max={filteredRoastsCount}
            value={visibleHorizontalRoastId}
            onChange={(e) => setVisibleHorizontalRoastId(e.target.value)}
            className="slider tw-max-w-xl tw-w-full"
            id="myRange"
          ></input>
        </div>
      </div>
    )
  }

  const mobileVerticalScroll = () => {
    return (
      <div className="tw-flex tw-w-full">
        <div className="tw-flex tw-justify-center tw-w-full">
          <div className="tw-invisible tw-flex tw-bg-red-200 tw-justify-center tw-place-items-center ">
            <div className="tw-flex-col">
              <div className="tw-w-full ">
                <img
                  alt="Space holder"
                  className="tw-text-white tw-ml-8"
                  src={chevronUpImgSrc}
                />
              </div>
              <div className="tw-w-full">
                <img
                  alt="Space holder"
                  className="tw-text-white tw-ml-8"
                  src={chevronDownImgSrc}
                />
              </div>
            </div>
          </div>
          <div
            id="scrollElement"
            className="tw-flex tw-flex-col tw-space-y-4 tw-overflow-scroll tw-h-96 scrollbar-hide scroll-smooth"
          >
            {filteredRoasts.map((roast) => (
              // TODO decide to keep or not className="tw-w-64"
              <div
                id={`roast-v-${roast.hrefId}`}
                key={roast.hrefId}
                className="max-w-64 min-w-48  tw-w-full"
              >
                <BigSelectTypeTwo
                  isCarousel
                  id={roast.id}
                  label={roast.label}
                  handleSelection={(roastId) => handleSelectedRoastId(roastId)}
                  selected={roast.id === selectedRoastId}
                  subLabel={roast.subLabel}
                  description={roast.description}
                  imgSrc={roast.imgSrc}
                />
              </div>
            ))}
          </div>

          <div className="tw-flex tw-justify-center tw-place-items-center ">
            <div className="tw-flex-col">
              <div className="tw-w-full">
                <img
                  onClick={() => scrollUp()}
                  alt="Chevron or Arrow Down"
                  className="tw-text-white tw-ml-8 tw-mb-8"
                  src={chevronUpImgSrc}
                />
              </div>
              <div className="tw-w-full">
                <img
                  onClick={() => scrollDown()}
                  alt="Chevron or Arrow Down"
                  className="tw-text-white tw-ml-8"
                  src={chevronDownImgSrc}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="tw-w-full tw-relative">
      {filteredRoasts.map((roast) => (
        <a
          className="tw-text-white tw-absolute tw-top-0 tw-hidden"
          id={`roast-h-href-${roast.hrefId}`}
          key={roast.hrefId}
          href={`#roast-h-${roast.hrefId}`}
        >
          roast href {roast.hrefId}
        </a>
      ))}
      {filteredRoasts.map((roast) => (
        <a
          className="tw-text-white tw-absolute tw-top-0 tw-hidden"
          id={`roast-v-href-${roast.hrefId}`}
          key={roast.hrefId}
          href={`#roast-v-${roast.hrefId}`}
        >
          roast href {roast.hrefId}
        </a>
      ))}
      <div className="tw-flex tw-justify-center tw-w-full">
        <div className="text-highlight-500 tw-py-4">SELECT YOUR ROAST</div>
      </div>

      <div className="tw-hidden md:tw-block ">{horizontalScroll()}</div>

      <div className="tw-block md:tw-hidden">{mobileVerticalScroll()}</div>
    </div>
  )
}

export default withRouter(Roast)
