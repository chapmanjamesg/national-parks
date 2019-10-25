console.log("might as well face it you're addicted to love....")

const parksFactory = (parks) => {
    return `
    <article id='${parksComponent}'>
        <h3 class='parkNames'>${parks.name}<h3>
        <p class='parkStates'>State the park in located in ${parks.state}</p>
    </article>
    `
}


fetch("http://localhost:8088/parks")
    .then(parks => parks.json())
    .then(parsedParks=> {
        console.table(parsedParks)
        parsedParks.forEach(parks => {
            if(parks.visited === true){
                console.log(parks.name)
                parksComponent = 'visited'
                // document.getElementById('parks').classList.add('visited')
            }else if(parks.visited === false) {
                parksComponent = 'notVisited'
                // document.getElementById('parks').classList.add('notVisited')
            }
            const parksAsHTML = parksFactory(parks)
            const addParksToDom = document.querySelector('.parksList')
            addParksToDom.innerHTML += parksAsHTML
        });
    })