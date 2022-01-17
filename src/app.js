import getData from './components/getdata';
const celsium = document.getElementById("celsium");
const lastUpd = document.getElementById("lastUpd");
const region = document.getElementById("region")


console.log(region);

async function start(){
  let response = await getData("https://api.weatherapi.com/v1/current.json?q=Moscow");
  celsium.innerHTML = response.current?.temp_c;
  lastUpd.innerHTML = response.current?.last_updated;
  region.innerHTML = response.location?.name;
  console.log(response);
}

export {start};
