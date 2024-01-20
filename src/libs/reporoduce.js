export const reproduce = (data, gap) => {
    const first = Math.floor(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = { data: data.slice(first, last) }
    return response
}