export const getTotalPage = (total, unit) => Math.ceil(total / unit);

export const getRangedArray = (array, currentPage, unit) => {
  const startIndex = (currentPage - 1) * unit;
  return array.slice(startIndex, startIndex + unit);
}
