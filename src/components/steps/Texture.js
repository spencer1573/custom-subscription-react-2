import React, { Fragment, useContext } from 'react'
import BigSelect from '../BigSelect'
// import { string } from 'prop-types';
import { UserContext } from '../../App.js'

const Texture = (props) => {
  const { setSelectedTextureId } = useContext(UserContext)

  return (
    <Fragment>
      <div className="tw-w-full">
        <div className="tw-flex tw-justify-center tw-w-full">
          <div className="text-highlight-500 tw-py-4">
            SELECT COFFEE TEXTURE
          </div>
        </div>
        <div className="tw-flex tw-justify-center tw-w-full">
          <div className="tw-grid tw-gap-x-4 tw-grid-cols-3">
            <BigSelect
              label="GROUND"
              imgSrc="//cdn.shopify.com/s/files/1/0594/0848/2477/t/3/assets/Blank_Bag_Ground_V2_400x400.png?v=2151126767448975124"
            />
            <BigSelect
              label="WHOLE BEAN"
              imgSrc="//cdn.shopify.com/s/files/1/0594/0848/2477/t/3/assets/Blank_Bag_Whole_Bean_V1_400x400.png?v=7523416550851258749"
            />
            <BigSelect
              label="ROUNDS"
              imgSrc="//cdn.shopify.com/s/files/1/0594/0848/2477/t/3/assets/subscription-slider_rounds_400x400.png?v=1128720733247166019"
            />
            <button onClick={() => setSelectedTextureId(2)}>set to 2</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Texture
