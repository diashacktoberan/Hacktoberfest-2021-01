function countWords(str) {
  console.log(str,"length: " + str.length)
  let temp = '', count = 0
  str = str.trim()
  if(!str)return 0
  for(const i of str) {
    if(i.match(/[A-z]/) || i.match(/[0-9]/) || "-`'".includes(i)){
      temp += i
    }else {
      if(temp) {
        console.log(temp)
        temp = ''
        count++
      }
    }
  }
  return count+Number(Boolean(str[str.length-1].match(/[A-z]/g) || str[str.length-1].match(/[0-9]/)))
}
