import axios from "axios";

const BASE_URI = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '1f36270b9dmsh4cf1c81431584d2p1e225fjsne2ad3c1a6d89',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const ApiService = {
    async fetching (url) {
      const getCategory = await axios.get(`${BASE_URI}/${url}`, options)
      return getCategory
    }
}