const Home = () => {


const slider = (val) => {

  const sliderBtns = event.target.parentElement.children

  for (let i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].classList.remove("active");
  }
  event.target.classList.add("active");
  
  const sliderBg = document.querySelector(".slider");
  const sliderHeader = document.querySelectorAll(".sliderHeader")[0];
  const sliderText = document.querySelectorAll(".sliderText")[0];

  const firstSlider = {
    heading: "Gate One",
    text: "Example of a project that we did for a client. We achieved this with a striking look of brutal minimalism with modern touches.",
    src: "/temp_gate.jpg",
  };
  
  const secondSlider = {
    heading: "Gate Two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eius ad? Neque dolorem facere quos eligendi aliquam saepe nisi numquam.",
    src: "/temp_gate2.jpeg",
  };
  
  const thirdSlider = {
    heading: "Gate Three",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat magnam hic reiciendis, amet pariatur dolores!",
    src: "/temp_gate.jpg",
  };
  
  const fourthSlider = {
    heading: "Gate Four",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit atque odio temporibus perspiciatis excepturi, voluptas expedita aliquid nemo cum consequuntur nam iste. Molestiae, possimus.  ",
    src: "/temp_gate2.jpeg",
  };

  function displaySlider(slider) {
    sliderHeader.textContent = slider.heading;
    sliderText.textContent = slider.text;
    sliderBg.style.background = `url(${slider.src}`;
  }

  switch (val) {
    case 1:
      displaySlider(firstSlider);
      return;
    case 2:
      displaySlider(secondSlider);
      return;
    case 3:
      displaySlider(thirdSlider);
      return;
    case 4:
      displaySlider(fourthSlider);
      return;    
  }
}
  return ( 
    <main>
      <div className="home-wrapper">
        <div className="home-copy">
          <h1>Welcome to PMGates</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vitae eius nobis vel odit incidunt quidem ex dignissimos quia magnam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam accusantium hic itaque distinctio officia sit perspiciatis veritatis, voluptatem laboriosam a?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam accusantium hic itaque distinctio officia sit perspiciatis veritatis, voluptatem laboriosam a?
          </p>
        </div>
        <img
        className="welcome-image"
        src="/temp_gate.jpg"
      />
      </div>
      <section className="slider container-outer">
        <div className="container-inner">
          <div className="container-content">
            <h2 className="sliderHeader heading-small whiteText">Gate One</h2>
            <p className="sliderText whiteText">
              Example of a project that we did for a client. We achieved this with a striking look of brutal minimalism with modern touches.
            </p>
            <a className="view-portfolio" href="./services">
              <p>See Our Services</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#ffffff"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </a>
          </div>
          <div className="slider-container">
            <button onClick={() => slider(1)} className="slider-btn active" type="button">01</button>
            <button onClick={() => slider(2)} className="slider-btn" type="button">02</button>
            <button onClick={() => slider(3)} className="slider-btn" type="button">03</button>
            <button onClick={() => slider(4)} className="slider-btn" type="button">04</button>
          </div>
        </div>
      </section>     

      <section className="about container-outer">
        <div className="container-inner">
          <div className="container-content">
            <h2 className="whiteText">Small team, big ideas</h2>
            <a className="view-portfolio" href="./about">
              <p>About Us</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#ffffff"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="featured-projects-container">
        <h2>Featured</h2>
        <div className="project-container">
          <div className="project-card-outer gate-one">
            <h3 className="whiteText">Gate One</h3>
          </div>
          <div className="project-card-outer gate-two">
            <h3 className="whiteText">Gate Two</h3>
          </div>
          <div className="project-card-outer gate-three">
            <h3 className="whiteText">Gate Three</h3>
          </div>
        </div>
        
      </section>
    </main>
   );
}
export default Home;