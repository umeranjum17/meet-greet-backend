// Any Arg used to make it reusable for different type of objects
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sortObjectByKey = (notSorted: any) => {
  const sorted = Object.keys(notSorted)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: notSorted[key]
      }),
      {}
    )
  return sorted
}
export default sortObjectByKey
