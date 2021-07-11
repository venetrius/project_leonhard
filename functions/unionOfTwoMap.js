const unionOfTwoMap = (a,b) => {
  const res = {}
  Object.keys(a).forEach(key => {
    res[key] = Math.max(a[key], b[key] || 0)
  })
  Object.keys(b).forEach(key => {
    if(!res[key]) {
      res[key] = b[key]
    }
  })
  return res
}

console.log(unionOfTwoMap({1:2, 2:2, 3:1}, {1: 1, 2:3}))
