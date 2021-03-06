// import React, { Fragment } from 'react'
import React, { useContext } from 'react'
import SmallSelect from '../SmallSelect'
import { summarySteps } from '../../constants/constants'
import { UserContext } from '../../App'
import {
  chevronRightImgSrc,
  chevronLeftImgSrc,
} from '../../constants/constants'

const StepsSummary = (props) => {
  const {
    selectedStepsInfo,
    setSelectedTextureId,
    currentNextUnselectedPage,
    pageId,
    setPageId,
  } = useContext(UserContext)

  const handlePageLeft = () => {
    if (pageId > 1) {
      setPageId(pageId - 1)
    }
  }

  const handlePageRight = () => {
    if (currentNextUnselectedPage > pageId) {
      setPageId(pageId + 1)
    }
  }

  const stepSelectionComplete = (stepId) => {
    const selectedObject = selectedStepsInfo[stepId]
    console.log('selected Object ', selectedObject)
    console.log('selected Object ', !!selectedObject)
    return !!selectedObject
  }

  const onThisCurrentStep = (stepId) => {
    console.log('step id ', stepId)
    console.log('page id ', pageId)
    return pageId === stepId
  }

  return (
    <div className="tw-w-full bg-dark-900">
      <div className="tw-flex tw-justify-center tw-w-full tw-pt-4 tw-pb-8 ">
        <div className="tw-grid tw-gap-x-4 lg:tw-gap-x-8 tw-grid-cols-6 ">
          {/* <SmallSelect /> */}
          {summarySteps.map((step) => (
            <SmallSelect
              key={step.id}
              pageId={step.id}
              label={step.label}
              initImgSrc={step.initImgSrc}
              centerLabel={step.centerLabel}
              stepSelectionComplete={stepSelectionComplete(step.id)}
              onThisCurrentStep={onThisCurrentStep(step.id)}
            />
          ))}
          <div className=" tw-px-4 tw-flex tw-place-items-center ">
            <div className="tw-grid tw-gap-x-8 tw-grid-cols-2">
              <img
                onClick={() => handlePageLeft()}
                alt="Chevron or Arrow Left"
                className="tw-text-white"
                src={chevronLeftImgSrc}
              />
              <img
                onClick={() => handlePageRight()}
                alt="Chevron or Arrow Right"
                className="tw-text-white"
                src={chevronRightImgSrc}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepsSummary
