const colors = [
  'black', '#8e8e8e', '#438b97', '#d90d0d', '#0b8927', '#d3966e', '#3e45e3', '#903ee3', '#0868ff', '#ff9308', '#3ee353', '#4e4e4e', 'black', '#8e8e8e', '#438b97', '#d90d0d', '#0b8927', '#d3966e', '#3e45e3', '#903ee3', '#0868ff', '#ff9308', '#3ee353', '#4e4e4e',
]

const createItems = (length = 12) => Array
  .from({ length }, (_, i) => i + 1)
  .map((num, i) => ({ name: num, bg: colors[i] }));

export default createItems;