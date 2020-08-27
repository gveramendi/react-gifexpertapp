
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gScgAHKxBh9Xz9zbmi9g3ma3Z1EWBf9E&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    });

    return gifs
}