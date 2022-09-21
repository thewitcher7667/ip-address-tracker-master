
let lon;
let lng;

const IP = document.getElementById('iptxt');
document.getElementById('butt').addEventListener('click', () => {
    const ipval = IP.value;
    getData(`/apiFetch/${ipval}`);
  
});


async function getData(url = '') {
    const get = await fetch(url)
    console.log('this is get' + get);
    try {
        const getDataf = await get.json();
        console.log('this is getdata' + getDataf);
        document.getElementById('IPAddress').innerHTML = getDataf.ip; 
        document.getElementById('Location').innerHTML = getDataf.location.country + getDataf.location.region + getDataf.location.city; 
        document.getElementById('Timezone').innerHTML = getDataf.location.timezone; 
        document.getElementById('ISP').innerHTML = getDataf.isp; 
        lon = getDataf.location.lat;
        lng = getDataf.location.lng;
        console.log(lon, lng)
        let map = L.map('map').setView([lon, lng], 13);
        var marker = L.marker([lon, lng]).addTo(map);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '© OpenStreetMap'
        }).addTo(map);
    } catch (err) {
        console.log(err);
    }
}


