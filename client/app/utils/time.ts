export function changeToLocaleTime(time: Date) {
  const changed = new Date(time.toString()).toLocaleString('ko')
  return changed
}
