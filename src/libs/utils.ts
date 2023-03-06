export function formatLongDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('pt-br', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
