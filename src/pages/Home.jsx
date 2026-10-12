import { Link } from "react-router-dom";
function Home() {
return (
<div>
<section className="hero">
         <h3>Dream.Explore.Discover.</h3>
         <h1>Your Next Adventure Starts Here!</h1>
         <p>The world is yours to explore.</p>
        
   

    <Link to="/destinations">
      <button>Explore Destinations → </button>
    </Link>
    
</section>



<section className="destinations">
    <h2>Popular Destinations</h2>
     <p className="description">
     Discover breathtaking destinations, create unforgettable memories,
     and turn your travel dreams into reality.
    </p>
    <div className="cards">
        <div className="card">
            <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500"
                alt="Bali" className="bounce-image" />
            <h3>Bali</h3>
            <p>Experience tropical beaches and nature</p>
        </div>

       <div className="card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500"
                alt="Paris" className="bounce-image" />
            <h3>Paris</h3>
        <p>Explore famous landmarks and culture.</p>
        </div>

        <div className="card">
            <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500"
             alt="Goa" className="bounce-image"/>
            <h3>Goa</h3>
            <p>Enjoy sunny beaches and relaxing holidays.</p>
        </div>
    </div>
   </section> 
<section className="cta">
   <div>
       <h2>Ready to Explore the World?</h2>
       <p>Your next memorable adventure is just a click away!</p>

        <Link to="/contact">
           <button>Plan your trip</button>
        </Link>
     
   </div>
   </section>
</div>
);
}
export default Home;