// BEGIN
export default function buildDefinitionList(definitions) {
  if (definitions.length === 0) {
    return '';
  }
  
  let result = '<dl>';
  
  for (let i = 0; i < definitions.length; i++) {
    result += `<dt>${definitions[i][0]}</dt><dd>${definitions[i][1]}</dd>`;
  }
  
  result += '</dl>';
  return result;
}
// END