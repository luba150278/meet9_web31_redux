import { useEffect, useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.css';

import Context from './share/context';
import Tasks from './components/Tasks/Tasks';
import { Button, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAuth } from './share/reducers/auth.reducer';

function App() {
  const username = useSelector((state) => state.auth.username);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const [lang, setLang] = useState(localStorage.getItem('lang') || 'ua');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const title = 'Meet 8. Routing. Redux Toolkit';
  const titleHeader = 'Header';
  const color = 'green';

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const changeLang = () => {
    lang === 'ua' ? setLang('en') : setLang('ua');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <Context.Provider value={{ lang, changeLang, theme }}>
      <Header
        titleHeader={titleHeader}
        color={color}
        theme={theme}
        changeTheme={changeTheme}
      />
      {loading ? (
        <div className='container my-5'>
          <Spinner animation='grow' variant='success' />
        </div>
      ) : (
        <section className={styles.section} data-theme={theme}>
          <div className='container'>
            <h1 className={styles.title}>{title}</h1>
            {username === '' && (
              <Button
                variant='primary'
                className='my-5'
                onClick={() => dispatch(fetchAuth())}
              >
                Login
              </Button>
            )}
            <Tasks />
          </div>
        </section>
      )}

      <Footer theme={theme} a={1} b={2} c={5} />
    </Context.Provider>
  );
}

export default App;
