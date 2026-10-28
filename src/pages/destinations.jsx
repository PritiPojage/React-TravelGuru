
import { useState } from "react";

const trips = [
{
name: "Bali Escape",
title: "The Tropical Paradise",
country: "Indonesia",
type: "Beach",
days: "5 days/ 4 nights",
price: "₹35,000",
image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=80",
},

{
name: "Manali Retreat",
title:"A Mountain Paradise",
country: "India",
type: "Mountain",
days: "4 days/ 3 nights",
price: "₹35,000",
image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
},

{
name: "Rajasthan Heritage",
title: "The Land of Royalty",
country: "India",
type: "City",
days: "4 days/ 3 nights",
price: "₹35,000",
image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a",
},

{
name: "Kashmir Serenity",
title:"Alpine Paradise",
country: "India",
type: "Mountain",
days: "5 days/ 4 nights",
price: "₹45,000",
image: "https://images.unsplash.com/photo-1566837497312-7be7830ae9b1",
},

{
name: "Goa Gateway",
title: "Sand,Sun and Serenity",
country: "India",
type: "Beach",
days: "3 days/ 2 nights",
price: "₹25,000",
image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=80",
},

{
name: "Swis Adventure",
title: "Heaven on Earth",
country: "switzerland",
type: "Adventure",
days: "7 days/ 6 nights",
price: "₹95,000",
image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=700&q=80",
},

{
name: "Paris Explorer",
title: "City of Love",
country: "France",
type: "city",
days: "6 days/ 5 nights",
price: "₹85,000",
image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80",
},
];

function Destinations(){
    const [filter, setFilter] = useState("All");

  const filteredTrips =
    filter === "All"
      ? trips
      : trips.filter((trip) => trip.type === filter);


    return(
    <div>
        <div className="destinations-banner">
            <h1>Find your next adventure!</h1>
            <p>Explore the world with us!</p>
        </div>

       <div className="filters">
        {["All", "Beach", "Adventure", "City", "Mountain"].map((type) => (
          <button
            key={type}
            className={filter === type ? "filter active-filter" : "filter"}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

       <div className="destination-grid">
        {filteredTrips.map((trip) => (
          <article className="destination-card" key={trip.name}>
            <img src={trip.image} alt={trip.name} />
            <div className="card-content">
              <span className="trip-type">{trip.type}</span>
              <h3>{trip.name}</h3>
              <p>{trip.title}</p>
              <p>📍 {trip.country}</p>
              <p>🗓 {trip.days}</p>
              <div className="price-row">
                <strong>{trip.price}</strong>
                <a href="/contact" className="text-link">
                  Enquire →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
    )
}
export default Destinations;

/*

 function Destinations(){
const [filter, setFilter] = useState("All");

let filteredTrips;

if (filter === "All") {
  filteredTrips = trips;
} else {
  filteredTrips = trips.filter(
    (trip) => trip.type === filter
  );
}

return(
    <section className="section">
        
        <div className="section-heading">
        <p className="eyebrow">FIND YOUR NEXT ESCAPE</p>
        <h1>Explore Destinations</h1>
        <p>Choose a trip that matches your travel style.</p> 
      </div>


      <div className="filters">
        {["All", "Beach", "Adventure", "City", "Mountain"].map((type) => (
          <button
            key={type}
            className={filter === type ? "filter active-filter" : "filter"}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>


      <div className="destination-grid">
        { filteredTrips.map((trip) => (
            <article className="destiantions-card" key={trip.name}>
                <img src={trip.image} alt={trip.name}/>
                <div className="card-content">
                    <span className="trip-type">{trip.type}</span>
                    <h3>{trip.name}</h3>
                    <p>📍{trip.country}</p>
                    <p>🗓{trip.days}</p>
                    <div className="price-row">
                        <strong>{trip.price}</strong>
                        <a href="/contact" className="text-link">
                        Enquire →
                        </a>
                    </div>
                </div>
            </article>

        )
        )
        }
      </div>
    </section>
);
 }
*/
