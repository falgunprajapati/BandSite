let shows = [
    {
      date: "Mon Sept 06 2022",
      venue: "Ronald Lane",
      location: "San Francisco, CA",
    },
    {
      date: "Tue Sept 21 2022",
      venue: "Pier 3 East",
      location: "San Francisco, CA",
    },
    {
      date: "Fri Oct 15 2022",
      venue: "View Lounge",
      location: "San Francisco, CA",
    },
    {
      date: "Sat Nov 06 2022",
      venue: "Hyatt Agency",
      location: "San Francisco, CA",
    },
    {
      date: "Fri Nov 26 2022",
      venue: "Moscow Center",
      location: "San Francisco, CA",
    },
    {
      date: "Wed Dec 15 2022",
      venue: "Press Club",
      location: "San Francisco, CA",
    },
    
  ];


const showsListMobile = document.getElementById('showsListMobile');

///for mobile view
function displayShowsMob(show) {
    // created div inside the comment list container

    const showsDiv = document.createElement('div');
    showsDiv.className = 'shows__container--mobile';

    showsDiv.innerHTML = `
      <div class="shows__container--item">
        <p class="title">Date</p>
        <p class="property-date">${show.date}</p>
      </div>
      <div class="shows__container--item">
        <p class="title">Venue</p>
        <p class="property">${show.venue}</p>
      </div>
      <div class="shows__container--item">
        <p class="title">Location</p>
        <p class="property">${show.location}</p>
      </div>
      <button class="btn shows__btn">BUY TICKET</button>
    </div>
    `;
    showsListMobile.appendChild(showsDiv)
}

shows.map(displayShowsMob);
// shows.map(displayShowsTabDesk);