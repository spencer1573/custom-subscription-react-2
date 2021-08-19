import React from 'react'
import { string } from 'prop-types'

const BigSelect = (props) => {
  const { imgSrc, label } = props
  console.log('image src ', imgSrc)
  return (
    <div className="bg-dark-400 tw-rounded tw-border tw-border-solid tw-border-light-300 hover:border-highlight-400 tw-p-4">
      <div className="tw-flex tw-justify-center tw-w-full">
        <div className="tw-text-white">{label}</div>
      </div>
      <div className="tw-flex tw-justify-center tw-w-full">
        <img alt={label} className="tw-w-40 tw-object-contain" src={imgSrc} />
      </div>
    </div>
  )
}

BigSelect.propTypes = {
  imgSrc: string,
}

export default BigSelect
