
import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  // params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key":'93e6d1408emshc1e3c019c4edaefp14c2bejsn589542d53ccd' ,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
    
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        // console.log(data); // Log the entire data object
        return data;
      
};