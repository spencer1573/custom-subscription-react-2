import React, { Fragment, useContext } from 'react'
import BigSelect from '../BigSelect'
// import { string } from 'prop-types';
import { UserContext } from '../../App.js'
import { textures } from '../../constants/constants'

const Texture = (props) => {
  const {
    setSelectedTextureId,
    selectedTextureId,
    selectedIdFlag,
    setSelectedIdFlag,
  } = useContext(UserContext)

  const handleTextureSelection = (id) => {
    setSelectedTextureId(id)
    setSelectedIdFlag(!selectedIdFlag)
  }

  return (
    <Fragment>
      <div className="tw-w-full">
        <div className="tw-flex tw-justify-center tw-w-full tw-mb-2">
          <div className="text-highlight-500 tw-py-4">
            SELECT COFFEE TEXTURE
          </div>
        </div>
        <div className="tw-flex tw-justify-center tw-w-full tw-px-4">
          <div className="tw-grid tw-grid-cols-1 tw-gap-y-4 md:tw-grid-cols-2 md:tw-gap-x-4 ">
            {textures.map((texture) => (
              <BigSelect
                key={texture.id}
                id={texture.id}
                selected={texture.id === selectedTextureId}
                handleSelection={(id) => handleTextureSelection(id)}
                label={texture.label}
                imgSrc={texture.imgSrc}
              ></BigSelect>
            ))}
            {/* <BigSelect
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
            /> */}
            {/* TODO #rm */}
            {/* <button onClick={() => setSelectedTextureId(2)}>set to 2</button> */}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Texture
