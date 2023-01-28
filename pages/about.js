const About = () => {
    return ( 
    <main>
      <section className="intro">
        <div className="intro-img">
          <div className="intro-img-overlay">
            <h2 className="heading-small">About</h2>
          </div>
        </div>
        <div className="intro-text">
          <h2>Your team of Professionals</h2>
          <p>
            Our small team of professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extend to the relationship our projects have with their
            surroundings
          </p>
        </div>
      </section>
      <section className="our-heritage">
        <h2>
          Our
          History
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus veniam sunt accusamus nesciunt reiciendis quis, exercitationem laboriosam repellendus praesentium dolorum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, harum. Consequatur possimus voluptate, nemo quaerat ullam illum quia mollitia qui?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, ad.
        </p>
      </section>

      <section className="leader-section">
        <h2>The leaders</h2>
        <div className="leader-card-container">
          <div className="leader-card">
            <img src="/avatar-jake.jpg" />
            <h3>John Doe</h3>
            <p>Owner</p>
          </div>

          <div className="leader-card">
            <img src="/avatar-jake.jpg" />
            <h3>John Doe</h3>
            <p>Owner</p>
          </div>
        </div>
      </section>
    </main>
     )
}
 
export default About;