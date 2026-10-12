function About() {
    return (
<section>
    <div>

        <div className="Aboutbanner">
            <h2 className="about-title"><b>Get To Know Us</b></h2>
            <h1>About TravelGuru</h1>
            <h3>We turn your travel dreams into memorable journeys.</h3>
         </div>

        < div className="about-description">
           <div className="left-content">
               <h3>Our Story</h3>
               <h1>Travel more. Worry less.</h1>
               <p>TravelVista is a travel website created to help explorers discover amazing places around the world.
                  We make it easy to find inspiration for your next trip.
                 From relaxing beach holidays to exciting mountain adventures, our goal is to make every journey
                 special.
                </p>
            </div>

            <div className="right-content">
               <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80"
               alt="Travel" />    
            </div>
        </div>

        <div className="about-mission">
            <div>
                <h3>🌍Explore</h3>
                <p>Discover wonderful places.</p>
            </div>
            <div>
                 <h3>💙Experience</h3>
                 <p>Create unforgettable moments.</p>
            </div>
            <div>
                <h3>📸Capture</h3>
                <p>Make memories that last a lifetime.</p>
            </div>
        </div>
    </div>
   

    
</section>
    );
}
export default About;