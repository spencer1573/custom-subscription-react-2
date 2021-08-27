import React, { Fragment, useContext, useEffect, useState } from 'react'
import BigSelectTypeTwo from '../BigSelectTypeTwo'
import { UserContext } from '../../App'
import { roasts } from '../../constants/constants'
import {
  chevronRightImgSrc,
  chevronLeftImgSrc,
} from '../../constants/constants'

const Roast = (props) => {
  const { selectedTextureId, selectedRoastId, setSelectedRoastId } =
    useContext(UserContext)

  let filteredRoasts = []

  if (selectedTextureId === 1) {
    filteredRoasts = roasts.filter((roast) => {
      return roast.type === 'ground-roast'
    })
  } else if (selectedTextureId === 2) {
    filteredRoasts = roasts.filter((roast) => {
      return roast.type === 'whole-roast'
    })
  } else if (selectedTextureId === 3) {
    filteredRoasts = roasts.filter((roast) => {
      return roast.type === 'rounds-roast'
    })
  }

  const [visibleRoastId, setVisibleRoastId] = useState(1)

  //TODO adjust later for testing
  filteredRoasts = roasts

  filteredRoasts.map((roast, index) => {
    roast.hrefId = index + 1
    return roast
  })

  console.log('filtered roasts ', filteredRoasts)

  const filteredRoastsCount = roasts.length

  const middleRoastNumber = roasts

  const handleSelectedRoastId = (roastId) => {
    console.log('roast id ', roastId)
    setSelectedRoastId(roastId)
  }

  // const scrollElement =

  const scrollRight = async () => {
    console.log('1 ** ', filteredRoasts.length)
    console.log('2 ** ', visibleRoastId)
    console.log('1 ** ', filteredRoasts.length + 1 === visibleRoastId)
    if (visibleRoastId === 1 && filteredRoasts.length > 2) {
      await setVisibleRoastId(visibleRoastId + 2)
    } else if (filteredRoasts.length > visibleRoastId) {
      await setVisibleRoastId(visibleRoastId + 1)
      // console.log('visible roast id ', visibleRoastId)
      // document.getElementById(`roast-href-${visibleRoastId}`).click()
    }
    // document.getElementById('scrollElement').scrollLeft += 100
    // document.getElementById('href-9').click()
    // window.location.href('#roast-8')
  }

  const scrollLeft = async () => {
    if (visibleRoastId === filteredRoasts.length && filteredRoasts.length > 2) {
      await setVisibleRoastId(visibleRoastId - 2)
    } else if (1 < visibleRoastId) {
      await setVisibleRoastId(visibleRoastId - 1)
      // console.log('visible roast id ', visibleRoastId)
      // document.getElementById(`roast-href-${visibleRoastId}`).click()
    }
  }

  useEffect(() => {
    console.log('visible roast id ', visibleRoastId)
    document.getElementById(`roast-href-${visibleRoastId}`).click()
  }, [visibleRoastId])

  const horizontalScroll = () => {
    return (
      <div className="tw-flex tw-justify-center tw-w-full">
        <img
          onClick={() => scrollLeft()}
          alt="Chevron or Arrow Left"
          className="tw-text-white tw-mr-8"
          src={chevronLeftImgSrc}
        />
        {/* <div className="tw-grid tw-gap-x-4 tw-grid-cols-3"> */}
        <div
          id="scrollElement"
          className="tw-flex tw-justify-between tw-space-x-4 tw-overflow-scroll tw-max-w-xl scrollbar-hide scroll-smooth"
        >
          {filteredRoasts.map((roast) => (
            <div
              id={`roast-${roast.hrefId}`}
              key={roast.id}
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
          {/* TODO #rm */}
          {/* <BigSelect
              label="WHOLE BEAN"
              imgSrc="//cdn.shopify.com/s/files/1/0594/0848/2477/t/3/assets/Blank_Bag_Whole_Bean_V1_400x400.png?v=7523416550851258749"
            />
            <BigSelect
              label="ROUNDS"
              imgSrc="//cdn.shopify.com/s/files/1/0594/0848/2477/t/3/assets/subscription-slider_rounds_400x400.png?v=1128720733247166019"
            /> */}
        </div>

        <img
          onClick={() => scrollRight()}
          alt="Chevron or Arrow Right"
          className="tw-text-white tw-ml-8"
          src={chevronRightImgSrc}
        />
      </div>
    )
  }

  return (
    <div className="tw-w-full tw-relative">
      {filteredRoasts.map((roast) => (
        <a
          className="tw-text-white tw-absolute tw-top-0 tw-hidden"
          id={`roast-href-${roast.hrefId}`}
          href={`#roast-${roast.hrefId}`}
        >
          roast href {roast.hrefId}
        </a>
      ))}
      <div className="tw-flex tw-justify-center tw-w-full">
        <div className="text-highlight-500 tw-py-4">SELECT YOUR ROAST</div>
      </div>

      {horizontalScroll}

      <input
        type="range"
        min="1"
        max={filteredRoastsCount}
        value="50"
        class="slider"
        id="myRange"
      ></input>
    </div>
  )
}

export default Roast
