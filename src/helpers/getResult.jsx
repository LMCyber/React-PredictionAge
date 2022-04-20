export const getResult = async (name) => {
  const url = `https://api.agify.io/?name=${name}`
  const result = await window.fetch(url)
  const data = await result.json()

  return data
}
