import getData from "./getdata";
const openBtn = document.getElementById("setRegion");
const searchSubmit = document.getElementById("searchSubmit");
const searchPole = document.getElementById("searchPole");
const popup = document.getElementById("popup");

export default setNewRegion;

function openPopUp(){
  popup.classList.toggle("active");
}

async function setNewRegion(){
  let newRegion = String(searchPole.value);
  openPopUp();
  searchPole.value = "";
  let response = await getData(`https://api.weatherapi.com/v1/current.json?q=${newRegion}`);
  if(response.error){
    celsium.innerHTML = "-";
    lastUpd.innerHTML = "-";
    curRegion.innerHTML = "Not found"
  } else {
    if(+response.current?.temp_c > 0){
      celsium.innerHTML = `+${response.current?.temp_c}`
    } else {
      celsium.innerHTML = response.current?.temp_c;
    };
    lastUpd.innerHTML = response.current?.last_updated;
    curRegion.innerHTML = response.location?.name;
  }
  console.log(response);
}

openBtn.addEventListener("click", openPopUp);
searchSubmit.addEventListener("click", setNewRegion);
