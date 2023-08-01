async function load() {
    // fetch events from google scripts API
    const response = await fetch('https://script.google.com/macros/s/AKfycbxJGxSLfusUoGHrGEsqWLqZ8mVMo7VOXdhiMU9naYOBuIuBAOxNaAaeytjAdD3Oaokj/exec');

    const events = await response.json();

    console.log({events});

    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';

    // looping through the events and placing them on page
    for (let event of events) {
        eventsContainer.innerHTML += `
            <div class="card w-96 bg-base-100 shadow-xl hover:grow-[0.07] hover:h-[490px]">
                <figure><img src="${event.Image}" alt="${event.Name}" /></figure>
                <div class="card-body">
                <h2 class="card-title">${event.Name}</h2>
                <p>${event.Location}</p><br/><p>${event.Date}</p>
                <div class="card-actions justify-end">
                <a class="btn btn-primary capitalize" href='${event.Link}'>Register</a>
                </div>
                </div>
            </div>`
    }
}

load();

x