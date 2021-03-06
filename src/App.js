import React, { useEffect, useState, useMemo } from 'react'
/* STEPS (SELECTING) */
import Texture from './components/steps/Texture'
import Roast from './components/steps/Roast'
import Quantity from './components/steps/Quantity'
import Frequency from './components/steps/Frequency'
import Review from './components/steps/Review'

/* SUMMARY OF STEPS */
import StepsSummary from './components/steps-summary/StepsSummary'

import { BrowserRouter } from 'react-router-dom'

import {
  textures,
  roasts,
  quantities,
  frequencies,
  chevronRightImgSrc,
  chevronLeftImgSrc,
} from './constants/constants'

export const UserContext = React.createContext()

const App = () => {
  /* IDS FOR STEPS */
  const [selectedTextureId, setSelectedTextureId] = useState(0)
  const [selectedRoastId, setSelectedRoastId] = useState(0)
  const [selectedQuantityId, setSelectedQuantityId] = useState(0)
  const [selectedFrequencyId, setSelectedFrequencyId] = useState(0)

  const [selectedIdFlag, setSelectedIdFlag] = useState(false)

  const [pageId, setPageId] = useState(1)
  const [selectedStepsInfo, setSelectedStepsInfo] = useState({})
  const [currentNextUnselectedPage, setCurrentNextUnselectedPage] = useState(0)

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

  const selectedFrequencyObject = useMemo(
    () => frequencies.find((frequency) => frequency.id === selectedFrequencyId),
    [selectedFrequencyId]
  )

  // IMPORTANT must change if you adjust summarySteps
  const lastStepPageId = 5

  const currentNextUnselectedPageMemo = useMemo(() => {
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
    if (currentNextUnselectedPageMemo !== currentNextUnselectedPage) {
      setCurrentNextUnselectedPage(currentNextUnselectedPageMemo)
    }
  }, [currentNextUnselectedPageMemo])

  console.log('some leak?')

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
    if (selectedFrequencyObject) {
      setSelectedStepsInfo({ ...selectedStepsInfo, 4: selectedFrequencyObject })
    }
  }, [selectedFrequencyObject])

  useEffect(() => {
    console.log('selected id ', selectedIdFlag)
  }, [selectedIdFlag])

  // TODO #rm automatic change of page id
  useEffect(() => {
    console.log('selected id ', selectedIdFlag)
    if (
      selectedTextureId ||
      selectedRoastId ||
      selectedQuantityId ||
      selectedFrequencyId ||
      selectedIdFlag
    ) {
      setPageId(currentNextUnselectedPage)
    }
  }, [
    currentNextUnselectedPage,
    selectedTextureId,
    selectedRoastId,
    selectedQuantityId,
    selectedFrequencyId,
    selectedIdFlag,
  ])

  // useEffect(() => {
  //   // console.log('selected texture id ', selectedTextureId)
  //   // console.log('page id', pageId)
  //   console.log('selected steps info ', selectedStepsInfo)
  // })

  const handlePageLeft = () => {
    console.log('page left handle')
    if (pageId > 1) {
      setPageId(pageId - 1)
    }
  }

  const handlePageRight = () => {
    console.log('page right handle')
    if (currentNextUnselectedPage > pageId) {
      setPageId(pageId + 1)
    }
  }

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          selectedTextureId,
          setSelectedTextureId,
          selectedRoastId,
          setSelectedRoastId,
          selectedQuantityId,
          setSelectedQuantityId,
          selectedFrequencyId,
          setSelectedFrequencyId,
          selectedIdFlag,
          setSelectedIdFlag,
          pageId,
          setPageId,
          selectedStepsInfo,
          setSelectedStepsInfo,
          currentNextUnselectedPage,
          setCurrentNextUnselectedPage,
        }}
      >
        <div id="csw">
          {/* <div className="tw-w-full h-min-64 bg-dark-700 tw-pt-4 tw-pb-8"> */}
          {/* <div className="tw-w-full h-min-64 bg-dark-700 tw-pt-4 tw-pb-32"></div> */}
          <div className="tw-w-full h-min-64 bg-dark-700 tw-pt-4 tw-pb-32 min-w-mobile">
            <div className="tw-block md:tw-hidden tw-flex tw-justify-between tw-w-full tw-px-4">
              <img
                onClick={() => handlePageLeft()}
                alt="Chevron or Arrow Left"
                className="tw-text-white"
                src={chevronLeftImgSrc}
              />
              <div className="tw-text-white">
                STEP {pageId} / {lastStepPageId}
              </div>
              <img
                onClick={() => handlePageRight()}
                alt="Chevron or Arrow Right"
                className="tw-text-white"
                src={chevronRightImgSrc}
              />
            </div>
            <div className="tw-mb-8">
              {pageId === 1 && <Texture />}
              {pageId === 2 && <Roast />}
              {pageId === 3 && <Quantity />}
              {pageId === 4 && <Frequency />}
              {pageId === 5 && <Review />}
            </div>
            {pageId !== 5 && (
              <div className="tw-hidden md:tw-block">
                <StepsSummary />
              </div>
            )}
          </div>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
