import React from 'react'
import { string } from 'prop-types'

const SmallSelect = (props) => {
  const { initImgSrc, label, centerLabel } = props
  return (
    <div className="tw-h-full">
      <div className="tw-h-full tw-relative bg-dark-400 tw-rounded tw-border tw-border-solid tw-border-light-300 hover:border-highlight-400 ">
        <div className="tw-flex tw-justify-center tw-place-items-center tw-w-full tw-h-full">
          <img
            alt={label}
            className="tw-h-16 tw-object-contain"
            src={initImgSrc}
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
