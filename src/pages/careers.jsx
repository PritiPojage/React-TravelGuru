const jobs = [
{
    title: "Travel Consultant",
    type: "Full-time",
    description: "Help Customers plan their dream holidays.",
},

{
    title: "Content Writer",
    type: "Part-time",
    description: "Create inspiring travel guides and stories.",
},

{
    title: "Marketing Executives",
    type: "Full-time",
    description: "Promote destinations and travel experiences.",
},
]



function Careers(){
    return (
        <div>
            <div className="careers-banner">
                <p>GROW WITH US.</p>
                <h1><b>Buid your career.</b></h1>
                <p>Join a team that inspires people to explore the world.</p>
            </div>
        
           <div className="section-heading">
                <h2>Current Opportunities</h2>
                <p>Find a role that matches your skills and interests.</p>
           </div>

            <div className="job-list">
                {
                    jobs.map((job) => (
                        <article className="job-card" key={job.title}>
                            <div>
                                <h3>{job.title}</h3>
                                <span className="trip-type">{job.type}</span>
                                <p>{job.description}</p>
                            </div>

                            <a href="mailto:careers@travelvista.example?subject=Job%20Application">
                                <button className="primary-button" type="button">Apply Now</button>
                            </a>
                        </article>
                    ))}  
            </div>
        </div>
    )
}
export default Careers;