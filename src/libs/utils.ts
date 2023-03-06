export function formatLongDate(input: string | number): string {
  console.log(input)
  const date = new Date(input)
  return date.toLocaleDateString('pt-br', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
