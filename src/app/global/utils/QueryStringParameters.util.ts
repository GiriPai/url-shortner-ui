
export const prepareQueryString = (qs: string) => {
  if (!qs) return
  let paramsAndValues = []
  for (const [key, value] of Object.entries(qs)) {
    paramsAndValues.push([key, value].join('='))

  }
  return paramsAndValues.join('&')
}