import React, { useEffect, useState } from 'react'
/* STEPS (SELECTING) */
import Texture from './components/steps/Texture'

/* SUMMARY OF STEPS */
import StepsSummary from './components/steps-summary/StepsSummary'

export const UserContext = React.createContext()

const App = () => {
  const [selectedTextureId, setSelectedTextureId] = useState(1)

  useEffect(() => {
    console.log('selected texture id ', selectedTextureId)
  })

  return (
    <UserContext.Provider value={{ selectedTextureId, setSelectedTextureId }}>
      <div id="csw">
        {/* <div className="tw-w-full h-min-64 bg-dark-700 tw-pt-4 tw-pb-8"> */}
        <div className="tw-w-full h-min-64 bg-dark-700 tw-pt-4 tw-pb-32">
          <div className="tw-flex tw-justify-between tw-w-full tw-px-4">
            <img
              alt="Chevron or Arrow Left"
              className="tw-text-white"
              src="//cdn.shopify.com/s/files/1/0594/0848/2477/t/3/assets/chevron_left_white_24dp.svg?v=5235765449716174328"
            />
            <div className="tw-text-white">STEP 1 / 5</div>
            <img
              alt="Chevron or Arrow Right"
              className="tw-text-white"
              src="//cdn.shopify.com/s/files/1/0594/0848/2477/t/3/assets/chevron_right_white_24dp.svg?v=3352481093988545584"
            />
          </div>
          <div className="tw-mb-8">
            <Texture />
          </div>
          <StepsSummary />
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App
