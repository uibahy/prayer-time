function prayerTime(country, city){
    axios.get(`https://api.aladhan.com/v1/timingsByCity/:date_or_timestamp?country=${country}&city=${city}`)
    .then((response) => {
        document.getElementById("times").innerHTML = ``
        document.getElementById("times").innerHTML = `<h2 style="color: white"> ${country}, ${city}, <span style="color: #9a9eb3">${response.data.data.date.readable}</span></h2>`
        // console.log(response.data.data.date.timestamp)
        document.getElementById("times").innerHTML += `
        <div class="post">
        <h2>Fajr</h2>
        <p>${response.data.data.timings.Fajr}</p>
        </div>
        `
        document.getElementById("times").innerHTML += `
        <div class="post">
        <h2>Dhuhr</h2>
        <p>${response.data.data.timings.Dhuhr}</p>
        </div>
        `
        document.getElementById("times").innerHTML += `
        <div class="post">
        <h2>Asr</h2>
        <p>${response.data.data.timings.Asr}</p>
        </div>
        `
        document.getElementById("times").innerHTML += `
        <div class="post">
        <h2>Maghrib</h2>
        <p>${response.data.data.timings.Maghrib}</p>
        </div>
        `
        document.getElementById("times").innerHTML += `
        <div class="post">
        <h2>Isha</h2>
        <p>${response.data.data.timings.Isha}</p>
        </div>
        `
    })
    // .catch((error) => {
    //     document.getElementById("times").innerHTML += `
    //     <div class="post">
    //     <h2>opps</h2>
    //     <p>${response.status}</p>
    //     </div>
    //     `
    // })
}

prayerTime(`UK`, `London`)

