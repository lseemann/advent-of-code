const hasUniqueCharacters = (characters) => {
  return characters.every((c, i) => characters.lastIndexOf(c) === i);
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
