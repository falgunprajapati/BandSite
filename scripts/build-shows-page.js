// list of shows array

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

//DOM Element Selectors

const showsListMobile = document.getElementById('showsListMobile');

function displayShows(shows) {
  for ( let i=0; i < shows.length; i++ ) {

    const showsDiv = document.createElement('div');
    showsDiv.classList.add = 'shows__container--mobile';
    
    const showsContainerItem = document.createElement('div');
    showsContainerItem.classList.add('shows__container--item')

    const showsContainerDate = document.createElement('div');
    showsContainerDate.classList.add('shows__container--date');

    const showsContainerVenue = document.createElement('div');
    showsContainerVenue.classList.add('shows__container--venue');

    const showsContainerLocation = document.createElement('div');
    showsContainerLocation.classList.add('shows__container--location');

    const titleDate = document.createElement('p');
    titleDate.classList.add('title-date', 'title');
    titleDate.innerText = 'Date';

    const titleVenue = document.createElement('p');
    titleVenue.classList.add('title-venue','title');
    titleVenue.innerText ='Venue';

    const titleLoction = document.createElement('p');
    titleLoction.classList.add('title-location','title');
    titleLoction.innerText = 'Location';

    const propertyDate = document.createElement('p');
    propertyDate.classList.add('property-date');
    propertyDate.innerText = shows[i].date;
    
    const propertyVenue = document.createElement('p');
    propertyVenue.classList.add('property-venue');
    propertyVenue.innerText =  shows[i].venue;

    const propertyLocation = document.createElement('p');
    propertyLocation.classList.add('property-location');
    propertyLocation.innerText =  shows[i].location;

    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = 'BUY TICKET';

    showsContainerDate.appendChild(titleDate)
    showsContainerDate.appendChild(propertyDate)

    showsContainerVenue.appendChild(titleVenue)
    showsContainerVenue.appendChild(propertyVenue)

    showsContainerLocation.appendChild(titleLoction)
    showsContainerLocation.appendChild(propertyLocation)

  

    showsContainerItem.appendChild(showsContainerDate)
    showsContainerItem.appendChild(showsContainerVenue)
    showsContainerItem.appendChild(showsContainerLocation)
    showsContainerItem.appendChild(button)
    
    showsListMobile.appendChild(showsContainerItem)

  }
 }

 displayShows(shows)
