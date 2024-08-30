import React from "react";

function Home() {
  return (
    <main className="intro-section">
      <div className="intro-text">
        <h2>Hi <span role="img" aria-label="wave">👋</span>,<br />I'm Nagasai, <br />Here is my React.Js Project</h2>
        <p>
          <b>The Weather & Recipe Finder</b> is a React-based web app that helps users stay informed about the weather while offering personalized recipe suggestions tailored to the current conditions. <br/>
          The project demonstrates the seamless integration of multiple APIs to enhance the user experience. The app fetches real-time weather updates via a Weather API, and based on the conditions, it suggests recipes through a Recipe Finder API. Axios is used for efficient data fetching, while CSS and Styled-Components give the app its clean, responsive design.<br/>
          <b>Technologies Used: React.Js, Bootstarp, Javascript, HTML, CSS, Axios, API's.</b>
        </p>
      </div>
      <div className="intro-image">
        <img src="https://cdn-icons-png.flaticon.com/512/4661/4661320.png" alt="Charles" />
      </div>
    </main>
  )
}

export default Home
