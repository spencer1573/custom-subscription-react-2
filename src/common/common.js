export const filterRoasts = (roastsRaw, selectedTextureId) => {
  let filteredRoasts = []

  if (selectedTextureId === 1) {
    // GROUND ROAST = typeId<1>
    filteredRoasts = roastsRaw.filter((roast) => {
      return roast.typeId === 1
    })
  } else if (selectedTextureId === 2) {
    // WHOLE ROAST = typeId<2>
    filteredRoasts = roastsRaw.filter((roast) => {
      return roast.type === 2
    })
  } else if (selectedTextureId === 3) {
    // ROUNDS ROAST = typeId<3>
    filteredRoasts = roastsRaw.filter((roast) => {
      return roast.type === 3
    })
  }

  return filteredRoasts
}
