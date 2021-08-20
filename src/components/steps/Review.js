import React, { Fragment, useContext } from 'react'
import BigSelect from '../BigSelect'
import BigSelectTypeTwo from '../BigSelectTypeTwo'
// import { string } from 'prop-types';
import { UserContext } from '../../App.js'
import $ from 'jquery'

const Review = (props) => {
  const { selectedStepsInfo } = useContext(UserContext)

  /* EXIT EARLY - if there's a problem with the steps */
  if (Object.keys(selectedStepsInfo).length > 3) {
  } else {
    return (
      <div className="tw-h-full tw-w-full tw-flex tw-justify-center tw-place-items-center">
        <div>Error in steps</div>
      </div>
    )
  }

  const texture = selectedStepsInfo['1'] ?? {}
  const roast = selectedStepsInfo['2'] ?? {}
  const quantity = selectedStepsInfo['3'] ?? {}
  const frequency = selectedStepsInfo['4'] ?? {}

  // const handleFrequencySelection = (id) => {
  //   setSelectedFrequencyId(id)
  // }

  const addSubscriptionToCart = async () => {
    const quantityValue = quantity.value
    const roastValue = roast.value
    const frequencyValue = frequency.value

    const data = {
      id: roastValue,
      quantity: quantityValue,
      selling_plan: frequencyValue,
    }

    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: data,
      dataType: 'json',
      success: function () {
        window.location.href = '/cart'
      },
    })
  }

  return (
    <Fragment>
      <div className="tw-w-full">
        <div className="tw-flex tw-justify-center tw-w-full">
          <div className="text-highlight-500 tw-py-4">
            YOUR SUBSCRIPTION SUMMARY
          </div>
        </div>
        <div className="tw-flex tw-justify-center tw-w-full">
          <div className="tw-grid tw-gap-x-4 tw-grid-cols-4">
            <BigSelect
              key={1}
              id={texture.id}
              selected={true}
              label={texture.label}
              imgSrc={texture.imgSrc}
            ></BigSelect>
            <BigSelectTypeTwo
              id={roast.id}
              key={2}
              label={roast.label}
              selected={true}
              subLabel={roast.subLabel}
              description={roast.description}
              imgSrc={roast.imgSrc}
            ></BigSelectTypeTwo>
            <BigSelect
              key={3}
              id={quantity.id}
              selected={true}
              label={quantity.label}
              imgSrc={quantity.imgSrc}
              description={quantity.description}
              descriptionLabel={quantity.descriptionLabel}
            ></BigSelect>
            <BigSelect
              key={4}
              id={frequency.id}
              selected={true}
              label={frequency.label}
              centerLabel={frequency.centerLabel}
              centerLabelSub={frequency.centerLabelSub}
            ></BigSelect>
          </div>
        </div>
        <div className="tw-flex tw-justify-center tw-place-items-center tw-pt-24 tw-w-full">
          <button
            type="button"
            className="tw-inline-flex tw-items-center tw-px-3 tw-py-2 tw-border tw-border-transparent tw-text-sm tw-leading-4 tw-font-medium tw-rounded-md tw-shadow-sm tw-text-black tw-bg-yellow-300 hover:tw-bg-yellow-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-yellow-400"
            onClick={() => addSubscriptionToCart()}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Review
