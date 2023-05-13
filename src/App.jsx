import './App.css'

function App() {

  return (
    <>
      <div className='navbar__div'>
        <div className='navbar__div-links'>
          <img src='../images/logo.svg' />
          <ul>
            <li>Features <img src='../images/icon-arrow-down.svg' /></li>
            <li>Company <img src='../images/icon-arrow-down.svg' /></li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
        <div className='navbar__div-buttons'>
          <p>Login</p>
          <button type='button'>Register</button>
        </div>
      </div>

      <div className='main__div'>
        <div className='main__div-content'>
          <h1>Make <br /> remote work</h1>
          <p>
            Get your team in sync, no matter your location.<br /> Streamline processes, 
            create team rituals, and<br /> watch productivity soar.
          </p>
          <button type='button'>Learn more</button>
          <div className='main__div-content-clients'>
            <img src='../images/client-databiz.svg' width={80} />
            <img src='../images/client-audiophile.svg' width={50} />
            <img src='../images/client-meet.svg' width={60} />
            <img src='../images/client-maker.svg' width={55} />
          </div>
        </div>
        <img src='../images/image-hero-desktop.png' width={380} height={470} />
      </div>
    </>
  )
}

export default App
