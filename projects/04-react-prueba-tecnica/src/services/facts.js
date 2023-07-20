import { CAT_RANDOM_FACT, CAT_PREFIX_IMAGE_URL } from '../utils/constants'

export const getRandomFact = () => {
  return fetch(CAT_RANDOM_FACT)
    .then((res) => {
      if (!res.ok) throw new Error('Error fetching random fact')
      return res.json()
    })
    .then((data) => {
      const { fact } = data
      return fact
    })
    .catch((err) => {
      // Handle error
    })
}

export const getCatImageFromFact = (fact) => {
  const firstWord = fact.split(' ')[0]

  return fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${firstWord}?json=true`)
    .then((res) => res.json())
    .then((data) => data.url)
}
