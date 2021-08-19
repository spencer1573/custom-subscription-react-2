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
  } = props
  return (
    <div
      onClick={() => handleSelection(id)}
      className={`${
        selected
          ? 'tw-border-2 border-highlight-400'
          : 'tw-border tw-border-light-300'
      } bg-dark-400 tw-rounded  tw-border-solid  hover:border-highlight-400 tw-p-4`}
    >
      <div className="tw-flex tw-justify-center tw-w-full">
        <div className="tw-text-white">{label}</div>
      </div>
      <div className="tw-flex tw-justify-center tw-w-full">
        <img alt={label} className="tw-w-40 tw-object-contain" src={imgSrc} />
      </div>
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
