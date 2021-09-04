import React from 'react'
import { string } from 'prop-types'

const BigSelect = (props) => {
  const {
    imgSrc,
    label,
    id,
    handleSelection,
    selected,
    description,
    descriptionLabel,
    centerLabel,
    centerLabelSub,
    setToFortyEight,
  } = props

  const newResponsive = true

  return (
    <div
      onClick={() => handleSelection(id)}
      className={`${
        selected
          ? 'tw-border-2 border-highlight-400'
          : 'tw-border tw-border-light-300'
      } ${!!setToFortyEight && 'tw-h-48 tw-object-fit'} ${
        newResponsive && 'tw-h-full'
      } bg-dark-400 tw-rounded  tw-border-solid  hover:border-highlight-400 tw-p-4 tw-relative`}
    >
      <div className="tw-flex tw-justify-center tw-w-full">
        <div className="tw-text-white tw-text-center">{label}</div>
      </div>
      {centerLabel && (
        <div className="tw-absolute tw-flex tw-justify-center tw-place-items-center tw-h-full tw-w-full tw-top-0 tw-right-0">
          <div>
            <div className="tw-text-white tw-text-3xl tw-w-full">
              {centerLabel}
            </div>
            {centerLabelSub && (
              <div className="tw-text-white tw-text-xs tw-w-full ">
                {centerLabelSub}
              </div>
            )}
          </div>
        </div>
      )}
      {centerLabel && <div className="bg-red-200 tw-w-40 tw-h-40" />}
      {imgSrc && (
        <div className="tw-flex tw-justify-center tw-w-full">
          <img alt={label} className="tw-w-40 tw-object-contain" src={imgSrc} />
        </div>
      )}
      {descriptionLabel && (
        <div className="tw-flex tw-justify-center tw-w-full">
          <div className="tw-text-white tw-text-xs">{descriptionLabel}</div>
        </div>
      )}
      {description && (
        <div className="tw-flex tw-justify-center tw-w-full">
          <div className="tw-text-white tw-text-xs">{description}</div>
        </div>
      )}
    </div>
  )
}

BigSelect.propTypes = {
  imgSrc: string,
}

export default BigSelect
