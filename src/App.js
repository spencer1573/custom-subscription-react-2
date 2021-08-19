import React, { useEffect, useState, useMemo } from 'react'
/* STEPS (SELECTING) */
import Texture from './components/steps/Texture'
import Roast from './components/steps/Roast'
import Quantity from './components/steps/Quantity'

/* SUMMARY OF STEPS */
import StepsSummary from './components/steps-summary/StepsSummary'

import { textures, roasts, quantities } from './constants/constants'

export const UserContext = React.createContext()

const App = () => {
  /* IDS FOR STEPS */
  const [selectedTextureId, setSelectedTextureId] = useState(0)
  const [selectedRoastId, setSelectedRoastId] = useState(0)
  const [selectedQuantityId, setSelectedQuantityId] = useState(0)

  const [pageId, setPageId] = useState(1)
  const [selectedStepsInfo, setSelectedStepsInfo] = useState({})

  const selectedTextureObject = useMemo(
    () => textures.find((texture) => texture.id === selectedTextureId),
    [selectedTextureId]
  )

  const selectedRoastObject = useMemo(
    () => roasts.find((roast) => roast.id === selectedRoastId),
    [selectedRoastId]
  )

  const selectedQuantityObject = useMemo(
    () => quantities.find((quantity) => quantity.id === selectedQuantityId),
    [selectedQuantityId]
  )

  // IMPORTANT must change if you adjust summarySteps
  const lastStepPageId = 5

  const currentNextUnselectedPage = useMemo(() => {
    const setKeys = Object.keys(selectedStepsInfo)
    if (setKeys.length > 0) {
      setKeys.map((key) => {
        return parseInt(key, 10)
      })
      console.log('set keys ', setKeys)

      let nextPageId = Math.max(...setKeys) + 1
      if (nextPageId > lastStepPageId) {
        nextPageId = 5
      }
      return nextPageId
    } else {
      return 1
    }
  }, [selectedStepsInfo])

  useEffect(() => {
    if (selectedTextureObject) {
      setSelectedStepsInfo({ ...selectedStepsInfo, 1: selectedTextureObject })
    }
  }, [selectedTextureObject])

  useEffect(() => {
    if (selectedRoastObject) {
      setSelectedStepsInfo({ ...selectedStepsInfo, 2: selectedRoastObject })
    }
  }, [selectedRoastObject])

  useEffect(() => {
    if (selectedQuantityObject) {
      setSelectedStepsInfo({ ...selectedStepsInfo, 3: selectedQuantityObject })
    }
  }, [selectedQuantityObject])

  useEffect(() => {
    if (selectedTextureId || selectedRoastId || selectedQuantityId) {
      setPageId(currentNextUnselectedPage)
    }
  }, [
    currentNextUnselectedPage,
    selectedTextureId,
    selectedRoastId,
    selectedQuantityId,
  ])

  // useEffect(() => {
  //   // console.log('selected texture id ', selectedTextureId)
  //   // console.log('page id', pageId)
  //   console.log('selected steps info ', selectedStepsInfo)
  // })

  return (
    <UserContext.Provider
      value={{
        selectedTextureId,
        setSelectedTextureId,
        selectedRoastId,
        setSelectedRoastId,
        selectedQuantityId,
        setSelectedQuantityId,
        pageId,
        setPageId,
        selectedStepsInfo,
        setSelectedStepsInfo,
      }}
    >
      <div id="csw">
        {/* <div className="tw-w-full h-min-64 bg-dark-700 tw-pt-4 tw-pb-8"> */}
        <div className="tw-w-full h-min-64 bg-dark-700 tw-pt-4 tw-pb-32">
          <div className="tw-flex tw-justify-between tw-w-full tw-px-4">
            <img
              alt="Chevron or Arrow Left"
              className="tw-text-white"
              src="//cdn.shopify.com/s/files/1/0594/0848/2477/t/3/assets/chevron_left_white_24dp.svg?v=5235765449716174328"
            />
            <div className="tw-text-white">
              STEP {pageId} / {lastStepPageId}
            </div>
            <img
              alt="Chevron or Arrow Right"
              className="tw-text-white"
              src="//cdn.shopify.com/s/files/1/0594/0848/2477/t/3/assets/chevron_right_white_24dp.svg?v=3352481093988545584"
            />
          </div>
          <div className="tw-mb-8">
            {pageId === 1 && <Texture />}
            {pageId === 2 && <Roast />}
            {pageId === 3 && <Quantity />}
          </div>
          <StepsSummary />
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App
