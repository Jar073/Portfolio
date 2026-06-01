import './App.css';

function App() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="">Contact</a>
        </div>
      </nav>

      <header id="home">
        <h1>James Rousseau</h1>
        <p>
          Hello I'm James, a software engineer at the university of Ottawa! I
          AM currently taking a UI analysis and design course at the University
          of Ottawa to broaden my horizons and get better at UI.
        </p>
      </header>

      <main className="projects-container" id="projects">
        <h2>Featured Projects:</h2>
        <div className="grid">
          <a href="servicesite.html" target="_blank" rel="noreferrer" className="project-card">
            <img src="/images/dentist_image.png" alt="Service Site Image" className="project-image"/>
            <div className="project-content">
              <h3>Service Site</h3>
              <p>Assignment 2 TBA</p>
            </div>
          </a>

          <a href="memorygame.html" target="_blank" rel="noreferrer" className="project-card">
            <img src="/images/memorygame_image.png" alt="Memory Game Image" className="project-image" />
            <div className="project-content">
              <h3>Memory Game</h3>
              <p>Assignment 3 TBA</p>
            </div>
          </a>

          <a href="ecommercesite.html" target="_blank" rel="noreferrer" className="project-card">
            <img src="/images/econsite_image.png" alt="E-Commerce Site Image" className="project-image" />
            <div className="project-content">
              <h3>E-Commerce Site</h3>
              <p>Assignment 4 TBA</p>
            </div>
          </a>

          <a href="analyticalsite" target="_blank" rel="noreferrer" className="project-card">
            <img src="/images/analyticalsite_image.png" alt="Analytical Site Image" className="project-image" />
            <div className="project-content">
              <h3>Analytical Site</h3>
              <p>Assignment 5 TBA</p>
            </div>
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
