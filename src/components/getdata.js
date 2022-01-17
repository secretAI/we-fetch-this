async function getData(url){
  let response = await fetch(url + "&key=57bbf82b93cf4ee8931152036221701");
  return response.json();
}

export default getData;
