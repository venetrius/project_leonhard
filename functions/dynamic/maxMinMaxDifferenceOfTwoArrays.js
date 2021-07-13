function cost(B) {
  const solution = [[0,0]]
  for(let i = 1; i < B.length; i++) {
      const[min, max] = solution[i-1]
      const subSolution = [Math.max(min, max + B[i-1] -1)]
      subSolution.push(Math.max(min + B[i]-1, Math.abs(B[i]-B[i-1])))
      solution.push(subSolution)
  }
  const finalSolutions = solution[solution.length-1]
  return Math.max(finalSolutions[0],finalSolutions[1])
}
