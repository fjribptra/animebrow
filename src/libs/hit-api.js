export const getApiResource = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${resource}?${query}`)
    const anime = response.json()
    return anime
}

export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const response = await getApiResource(resource)
    return response.data.flatMap(result => result[objectProperty])
}