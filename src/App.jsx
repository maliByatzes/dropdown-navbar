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
    </>
  )
}

export default App
