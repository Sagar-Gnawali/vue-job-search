export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const parseForm = (form) => JSON.parse(JSON.stringify(form))