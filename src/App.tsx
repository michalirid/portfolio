import { useEffect, useState } from 'react';
import './App.css';

const projects = [
  { id: 1, title: 'Ľadolezenie', image: '/ladolezenie/1.jpg', landscape: true, blocks: [
    { type: 'single', size: 'sz-65', src: '/ladolezenie/1.jpg' },
    { type: 'single', size: 'sz-85', src: '/ladolezenie/2.jpg' },
    { type: 'split', src1: '/ladolezenie/3.jpg', src2: '/ladolezenie/4.jpg' },
    { type: 'single', size: 'sz-85', src: '/ladolezenie/5.jpg' },
    { type: 'split', src1: '/ladolezenie/6.jpg', src2: '/ladolezenie/7.jpg' },
    { type: 'single', size: 'sz-65', src: '/ladolezenie/8.jpg' },
    { type: 'single', size: 'sz-65', src: '/ladolezenie/9.jpg' }
  ] },
  { id: 2, title: 'Umelecká výstava', image: '/a_v/1.jpg', landscape: false, blocks: [
    { type: 'single', size: 'sz-85', src: '/a_v/1.jpg' },
    { type: 'single', size: 'sz-65', src: '/a_v/2.jpg' },
    { type: 'single', size: 'sz-85', src: '/a_v/3.jpg' },
    { type: 'split', src1: '/a_v/4.jpg', src2: '/a_v/5.jpg' },
    { type: 'single', size: 'sz-85', src: '/a_v/6.jpg' },
    { type: 'single', size: 'sz-65', src: '/a_v/7.jpg' },
    { type: 'single', size: 'sz-85', src: '/a_v/8.jpg' },
    { type: 'single', size: 'sz-65', src: '/a_v/9.jpg' },
    { type: 'single', size: 'sz-85', src: '/a_v/10.jpg' }
  ] },
  { id: 3, title: 'Tatry', image: '/tatry/1.jpg', landscape: false, blocks: [
    { type: 'single', size: 'sz-85', src: '/tatry/1.jpg' },
    { type: 'single', size: 'sz-75', src: '/tatry/2.jpg' },
    { type: 'single', size: 'sz-85', src: '/tatry/3.jpg' },
    { type: 'split', src1: '/tatry/4.jpg', src2: '/tatry/5.jpg' },
    { type: 'split', src1: '/tatry/6.jpg', src2: '/tatry/7.jpg' },
    { type: 'single', size: 'sz-85', src: '/tatry/8.jpg' }
  ] },
  { id: 4, title: 'Makro príroda', image: '/macro_priroda/1.jpg', landscape: true, blocks: [
    { type: 'single', size: 'sz-85', src: '/macro_priroda/1.jpg' },
    { type: 'single', size: 'sz-85', src: '/macro_priroda/2.jpg' },
    { type: 'single', size: 'sz-85', src: '/macro_priroda/3.jpg' },
    { type: 'single', size: 'sz-85', src: '/macro_priroda/4.jpg' },
    { type: 'single', size: 'sz-85', src: '/macro_priroda/5.jpg' }
  ] },
  { id: 5, title: 'Minerály na Spiši', image: '/mns/1.jpg', landscape: true, blocks: [
    { type: 'single', size: 'sz-85', src: '/mns/1.jpg' },
    { type: 'single', size: 'sz-75', src: '/mns/2.jpg' },
    { type: 'single', size: 'sz-85', src: '/mns/3.jpg' },
    { type: 'single', size: 'sz-75', src: '/mns/4.jpg' },
    { type: 'single', size: 'sz-85', src: '/mns/5.jpg' },
    { type: 'single', size: 'sz-75', src: '/mns/6.jpg' },
    { type: 'single', size: 'sz-85', src: '/mns/7.jpg' }
  ] },
  { id: 6, title: 'River Crossing', image: '/hero.jpg', landscape: false, blocks: [
    { type: 'single', size: 'boxed', src: '/hero.jpg' },
    { type: 'single', size: 'full', src: '/project1.jpg' },
    { type: 'split', src1: '/project2.jpg', src2: '/project3.jpg' },
    { type: 'single', size: 'full', src: '/project4.jpg' }
  ] }
];

const getImgUrl = (path: string) => {
  if (!path) return '';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

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
        {project.blocks.map((block: any, idx: number) => {
          if (block.type === 'single') {
            return (
              <div key={idx} className={`pd-row ${block.size}`}>
                <img src={getImgUrl(block.src)} alt={`${project.title} block ${idx}`} />
              </div>
            );
          } else if (block.type === 'split') {
            return (
              <div key={idx} className="pd-row split">
                <img src={getImgUrl(block.src1)} alt={`${project.title} block ${idx} left`} />
                <img src={getImgUrl(block.src2)} alt={`${project.title} block ${idx} right`} />
              </div>
            );
          }
          return null;
        })}
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
        <div className="about-grid">
          {/* Box 1: First Photo */}
          <div className="about-grid-item">
            <img src={getImgUrl('/O_MNE/about-1.jpg')} alt="Michal Petrík 1" className="about-photo" />
          </div>

          {/* Box 2: Text */}
          <div className="about-grid-item about-text-box">
            <h2 className="about-heading">
              Volám sa Michal Petrík a fotografii sa venujem viac ako 7 rokov.<br /><br />
              Zameriavam sa na zachytávanie momentov zo spoločenských podujatí, prírody aj makro sveta.<br /><br />
              Špecializujem sa tiež na fotografiu minerálov a venujem sa aj digitálnej tvorbe.
            </h2>
          </div>

          {/* Box 3: Contact */}
          <div className="about-grid-item about-contact-block">
            <span className="footer-label">Kontakt</span>
            <div className="footer-links-col">
              <a href="mailto:michalpetrik93@gmail.com" className="footer-link">michalpetrik93@gmail.com</a>
              <a href="tel:+421918019968" className="footer-link">+421 918 019 968</a>
              <a href="https://www.instagram.com/michalpetrik_/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            </div>
          </div>

          {/* Box 4: Second Photo */}
          <div className="about-grid-item">
            <img src={getImgUrl('/O_MNE/about-2.jpg')} alt="Michal Petrík 2" className="about-photo" />
          </div>
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
          <img src={getImgUrl('/hero-new.jpg')} alt="Hero Background" className="hero-image" />
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
              <img src={getImgUrl(project.image)} alt={project.title} className="project-image" />
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
