import './App.css';
import Photo from './components/Photo';
import ExperienceWrapper from './components/ExperienceWrapper';
import PageButton from './components/PageButton';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(3);

  return (
    <div className="App">
      <main>
        <div className='home'>
        <div className='intro-wrapper'>
          <div className='intro-text'>
            <h1 className='intro-name'>Senem Dilli</h1>
            <h2>Frontend Developer</h2>
            <p>I build to learn React!</p>
        <div className='page-change'>
          <PageButton page={page} setPage={setPage} />
        </div>
        <section className='page-wrapper'>
          {page === 1 && <Page1 />}
          {page === 2 && <Page2 />}
          {page === 3 && <ExperienceWrapper />}
        </section>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
