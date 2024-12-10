export function changeToLocaleTime(time: Date) {
  const changed = new Date(time.toString()).toLocaleString('ko').split('. ').slice(0, 3).join('. ')
  return changed
}
