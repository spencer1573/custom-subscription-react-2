import React, { useContext, useEffect, useMemo } from 'react'
import { string } from 'prop-types'
import { UserContext } from '../App'

const SmallSelect = (props) => {
  const { initImgSrc, label, centerLabel, pageId } = props
  const { selectedStepsInfo, setPageId } = useContext(UserContext)

  // console.log(
  //   'selectedSteps info ',
  //   selectedStepsInfo[pageId].imgSrc
  // )

  const selectedStepInfo = useMemo(
    () => selectedStepsInfo[pageId] ?? {},
    [selectedStepsInfo, pageId]
  )

  const selectedImage = useMemo(
    () => selectedStepInfo.imgSrc ?? undefined,
    [selectedStepInfo]
  )

  useEffect(() => {
    // console.log('selectedStepInfo', selectedStepInfo.imgSrc)
    // console.log('selectedStepInfo json', { ...selectedStepInfo })
    console.log('selected image ', selectedImage)
  }, [selectedImage])
  // const selectedImage={selectedStepsInfo[step.id]?.imgSrc ?? undefined}

  const handleSetPageId = (pageId) => {
    // console.log('page id ', pageId)
    setPageId(pageId)
  }

  return (
    <div onClick={() => handleSetPageId(pageId)} className="tw-h-full">
      <div className="tw-h-full tw-relative bg-dark-400 tw-rounded tw-border tw-border-solid tw-border-light-300 hover:border-highlight-400 ">
        <div className="tw-flex tw-justify-center tw-place-items-center tw-w-full tw-h-full">
          <img
            alt={label}
            className="tw-h-16 tw-object-contain"
            // src={selectedImage ? selectedImage : initImgSrc}
            src={selectedImage ? selectedImage : initImgSrc}
          />
        </div>
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-justify-center tw-place-items-center tw-text-white">
          <div className="tw-text-3xl tw-text-white">{centerLabel}</div>
        </div>
      </div>
      <div className="tw-flex tw-justify-center tw-w-full">
        <div className="tw-text-white">{label}</div>
      </div>
    </div>
  )
}

SmallSelect.propTypes = {
  initImgSrc: string,
}

export default SmallSelect
