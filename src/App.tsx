import { useEffect, useState } from 'react';
import './App.css';

const projects = [
  { id: 1, title: 'Mountain Expedition', image: '/m-exp-1.jpg', landscape: true, details: ['/m-exp-2.jpg', '/m-exp-3.jpg', '/m-exp-4.jpg', '/m-exp-5.jpg'] },
  { id: 2, title: 'Winter Ascent', image: '/project5.png', landscape: false, details: ['/project1.jpg', '/project3.jpg', '/hero.jpg', '/project4.jpg', '/project2.jpg'] },
  { id: 3, title: 'Wildlife Focus', image: '/project2.jpg', landscape: false, details: ['/project3.jpg', '/hero.jpg', '/project4.jpg', '/project1.jpg', '/project5.png'] },
  { id: 4, title: 'Macro Nature', image: '/project3.jpg', landscape: true, details: ['/project2.jpg', '/project4.jpg', '/project1.jpg', '/project5.png', '/hero.jpg'] },
  { id: 5, title: 'Climbing Detail', image: '/project4.jpg', landscape: false, details: ['/project5.png', '/project1.jpg', '/hero.jpg', '/project2.jpg', '/project3.jpg'] },
  { id: 6, title: 'River Crossing', image: '/hero.jpg', landscape: false, details: ['/project1.jpg', '/project2.jpg', '/project3.jpg', '/project4.jpg', '/project5.png'] },
];

function ProjectDetail({ project, onClose }: { project: any, onClose: () => void }) {
  useEffect(() => {
    // Lock body scroll when overlay is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="project-detail">
      <header className="header">
        <button className="close-btn" onClick={onClose}>Close</button>
      </header>
      <div className="project-detail-content">
        <div className="pd-row boxed">
          <img src={project.image} alt={project.title} />
        </div>
        
        {project.details[0] && (
          <div className="pd-row full">
            <img src={project.details[0]} alt="Detail 1" />
          </div>
        )}

        {project.details[1] && project.details[2] && (
          <div className="pd-row split">
            <img src={project.details[1]} alt="Detail 2" />
            <img src={project.details[2]} alt="Detail 3" />
          </div>
        )}

        {project.details[3] && (
          <div className="pd-row full">
            <img src={project.details[3]} alt="Detail 4" />
          </div>
        )}
      </div>
    </div>
  );
}

function AboutDetail({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="project-detail">
      <header className="header">
        <button className="close-btn" onClick={onClose}>Close</button>
      </header>
      <div className="project-detail-content">
        <div className="pd-row boxed about-text-box">
          <h2 className="about-heading">
            Volám sa Michal Petrík a fotografii sa venujem viac ako 7 rokov.<br /><br />
            Zameriavam sa na zachytávanie momentov zo spoločenských podujatí, prírody aj makro sveta.<br /><br />
            Špecializujem sa tiež na fotografiu minerálov a venujem sa aj digitálnej tvorbe.
          </h2>
          
          <div className="about-contact-block">
            <span className="footer-label">Kontakt</span>
            <div className="footer-links-col">
              <a href="mailto:michalpetrik93@gmail.com" className="footer-link">michalpetrik93@gmail.com</a>
              <a href="tel:+421918019968" className="footer-link">+421 918 019 968</a>
            </div>
          </div>
        </div>

        <div className="pd-row boxed">
          <img src="/about-1.jpg" alt="Michal Petrík 1" />
        </div>
        
        <div className="pd-row full">
          <img src="/about-2.jpg" alt="Michal Petrík 2" />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.scroll-observe').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {isAboutOpen && <AboutDetail onClose={() => setIsAboutOpen(false)} />}
      
      {!selectedProject && !isAboutOpen && (
        <header className="header">
          <nav className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsAboutOpen(true); }} className="nav-link">O mne</a>
            <a href="#projekty" className="nav-link">Projekty</a>
            <a href="#kontakt" className="nav-link">Kontakt</a>
          </nav>
        </header>
      )}

      <main id="home">
        {/* Hero Section */}
        <section className="hero">
          <img src="/hero-new.jpg" alt="Hero Background" className="hero-image" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Michal Petrík</h1>
            <p className="hero-subtitle">Každý moment má svoj príbeh – ja ho zachytím.</p>
          </div>
        </section>

        {/* Intro Section */}
        <section id="about" className="intro container">
          <h2 className="intro-text scroll-observe">
            „Najlepšie veci v živote sú tie, ktoré si pamätáme – fotografia nám ich pomáha uchovať."
          </h2>
        </section>

        {/* Projects Section */}
        <section id="projekty" className="projects container">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card scroll-observe delay-${(index % 3) + 1} ${project.landscape ? 'landscape' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </section>

        {/* Philosophy Section */}
        <section className="philosophy">
          <h2 className="philosophy-text scroll-observe">
            Najlepšie momenty nevznikajú, keď pózujeme – ale keď sme sami sebou.
          </h2>
        </section>
      </main>

      {/* Footer */}
      <footer id="kontakt" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info scroll-observe delay-1">
              <span className="footer-label">Kontakt</span>
              <div className="footer-links-col">
                <a href="mailto:michalpetrik93@gmail.com" className="footer-link">michalpetrik93@gmail.com</a>
                <a href="tel:+421918019968" className="footer-link">+421 918 019 968</a>
              </div>
            </div>
            
            <div className="footer-info scroll-observe delay-2">
              <span className="footer-label">Social</span>
              <div className="footer-socials">
                <a href="https://www.instagram.com/michalpetrik_/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
              </div>
            </div>
            
            <div className="footer-info scroll-observe delay-3">
              <span className="footer-label">Location</span>
              <span className="footer-link footer-location-text">
                SLOVAKIA
              </span>
            </div>
          </div>
          
          <h1 className="footer-bg-text scroll-observe">Michal Petrík</h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
