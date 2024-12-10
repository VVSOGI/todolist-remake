export function changeToLocaleTime(time: Date, change: (data: Date) => string = changeToDate) {
  return change(time)
}

export function changeToDate(time: Date): string {
  return new Date(time.toString()).toLocaleString('ko').split('. ').slice(0, 3).join('. ')
}

export function changeToTime(time: Date): string {
  return new Date(time.toString()).toLocaleString('ko')
}
