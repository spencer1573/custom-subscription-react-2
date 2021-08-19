import React, { Fragment, useContext } from 'react'
import BigSelectTypeTwo from '../BigSelectTypeTwo'
import { UserContext } from '../../App'
import { roasts } from '../../constants/constants'

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

  const handleSelectedRoastId = (roastId) => {
    console.log('roast id ', roastId)
    setSelectedRoastId(roastId)
  }

  return (
    <Fragment>
      <div className="tw-w-full">
        <div className="tw-flex tw-justify-center tw-w-full">
          <div className="text-highlight-500 tw-py-4">SELECT YOUR ROAST</div>
        </div>
        <div className="tw-flex tw-justify-center tw-w-full">
          <div className="tw-grid tw-gap-x-4 tw-grid-cols-3">
            {filteredRoasts.map((roast) => (
              <BigSelectTypeTwo
                id={roast.id}
                key={roast.id}
                label={roast.label}
                handleSelection={(roastId) => handleSelectedRoastId(roastId)}
                selected={roast.id === selectedRoastId}
                subLabel={roast.subLabel}
                description={roast.description}
                imgSrc={roast.imgSrc}
              />
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
        </div>
      </div>
    </Fragment>
  )
}

export default Roast
