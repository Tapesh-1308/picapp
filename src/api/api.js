const baseURL = 'https://api.unsplash.com';
require('dotenv').config()
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const getTrendingImages = async () => {
    try {
        const res = await fetch(`${baseURL}/photos?per_page=40`,{
            headers: {
                Authorization :`Client-ID ${REACT_APP_API_KEY}`
            }
        });
        if(!res.ok){
            console.error('Failed ',res.status)
            return;
        }
        const json = await res.json();
        return json
    } catch (error) {
        console.log("error hai", error);
    }
}

// Adding search 

export const getSearchedImages = async (query) => {
    const url = new URL(`${baseURL}/search/photos`);
    url.search = new URLSearchParams({
        per_page : 40,
        query: query,
    })

    try {
        const res = await fetch(url,{
            headers: {
                Authorization :`Client-ID ${REACT_APP_API_KEY}`
            }
        });
        if(!res.ok){
            console.error('Failed ',res.status)
            return;
        }
        const json = await res.json();
        return json.results
    } catch (error) {
        console.log("error hai", error);
    }
    
}