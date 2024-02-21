const axios = require("axios");

const options = {
  method: "GET",
  url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
  params: { model: "corolla" },
  headers: {
    "X-RapidAPI-Key": "603bd22496msh73c4363424a8b5bp155f92jsn03a971d66758",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
export async function fetchcars() {
  const headers = {
    "X-RapidAPI-Key": "603bd22496msh73c4363424a8b5bp155f92jsn03a971d66758",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
