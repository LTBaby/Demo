document.addEventListener("DOMContentLoaded", function(){
  sendApiRequest()
})
//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
    let apiKEY = "IctxZaQRuKITCYGgNzcVWNVrtBJyp80KCpuV0aJv"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKEY}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
    document.querySelector("#content").innerHTML += `<img src="${data.url}">`
}

