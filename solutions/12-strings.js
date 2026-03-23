// BEGIN
export default function makeCensored(text, stopWords) {
  const words = text.split(' ');
  const result = [];
  
  for (let i = 0; i < words.length; i++) {
    if (stopWords.includes(words[i])) {
      result.push('$#%!');
    } else {
      result.push(words[i]);
    }
  }
  
  return result.join(' ');
}
// END