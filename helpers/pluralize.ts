export const pluralize = (count: number, variants: string[]): string => {
  let chosenIndex: number

  const teen = count > 10 && count < 20
  const endsWithOne = count % 10 === 1
  const choicesLength = variants.length

  if (count === 0) {
    chosenIndex = 0
  }
  else if (choicesLength < 4) {
    chosenIndex = (!teen && endsWithOne) ? 1 : 2
  }
  else if (!teen && endsWithOne) {
    chosenIndex = 1
  }
  else if (!teen && count % 10 >= 2 && count % 10 <= 4) {
    chosenIndex = 2
  }
  else {
    chosenIndex = (choicesLength < 4) ? 2 : 3
  }

  return variants[chosenIndex]
}

export const pluralizeWithCount = (count: number, variants: string[]): string => {
  return `${count} ${pluralize(count, variants)}`
}
