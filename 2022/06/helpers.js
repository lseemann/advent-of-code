const hasUniqueCharacters = (characters) => {
  const repeats = characters.filter((c, i) => characters.lastIndexOf(c) !== i);

  return repeats.length === 0;
};

const findFirstMarker = (buffer, markerLength) => {
  const characters = [...buffer];

  const firstMarkerIndex = characters.findIndex((c, index) => {
    if (index < markerLength) {
      return false;
    }

    const marker = characters.slice(index - markerLength, index);

    return hasUniqueCharacters(marker);
  });

  return firstMarkerIndex;
};

module.exports = {
  findFirstMarker,
  hasUniqueCharacters,
};
