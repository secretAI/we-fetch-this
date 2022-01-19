import getData from './components/getdata';
const defaultRegion = "Moscow"
const celsium = document.getElementById("celsium");
const lastUpd = document.getElementById("lastUpd");
const curRegion = document.getElementById("curRegion");

async function start(){
  let response = await getData(`https://api.weatherapi.com/v1/current.json?q=${defaultRegion}`);
  celsium.innerHTML = response.current?.temp_c;
  lastUpd.innerHTML = response.current?.last_updated;
  curRegion.innerHTML = response.location?.name;
  console.log(response);
}

export { start };
