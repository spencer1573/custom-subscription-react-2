// import React, { Fragment } from 'react'
import React, { useContext } from 'react'
import SmallSelect from '../SmallSelect'
import { summarySteps } from '../../constants/constants'
import { UserContext } from '../../App'

const StepsSummary = (props) => {
  const { selectedStepsInfo, setSelectedTextureId } = useContext(UserContext)

  return (
    <div className="tw-w-full bg-dark-900">
      {/* <div>value: {value}</div> */}

      <div className="tw-flex tw-justify-center tw-w-full tw-pt-4 tw-pb-8 ">
        <div className="tw-grid tw-gap-x-8 tw-grid-cols-6 ">
          {/* <SmallSelect /> */}
          {summarySteps.map((step) => (
            <SmallSelect
              key={step.id}
              pageId={step.id}
              label={step.label}
              initImgSrc={step.initImgSrc}
              centerLabel={step.centerLabel}
            />
          ))}
          <div className=" tw-px-4 tw-flex tw-place-items-center ">
            <div className="tw-grid tw-gap-x-8 tw-grid-cols-2">
              <img
                alt="Chevron or Arrow Left"
                className="tw-text-white"
                src="//cdn.shopify.com/s/files/1/0594/0848/2477/t/3/assets/chevron_left_white_24dp.svg?v=5235765449716174328"
              />
              <img
                alt="Chevron or Arrow Right"
                className="tw-text-white"
                src="//cdn.shopify.com/s/files/1/0594/0848/2477/t/3/assets/chevron_right_white_24dp.svg?v=3352481093988545584"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepsSummary
