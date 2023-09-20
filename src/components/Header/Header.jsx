import { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from './Header.module.css';
import Context from '../../share/context';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { logout } from '../../share/reducers/auth.reducer';

const Header = ({ titleHeader, theme, changeTheme, color = 'default' }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const { lang, changeLang } = useContext(Context);
  const username = useSelector((state) => state.auth.username);

  return (
    <header className={styles.header} data-theme={theme}>
      <div className='container d-flex align-items-center justify-content-between'>
        <h2 className={`${styles[color]}`}>{titleHeader}</h2>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='posts'>Posts</Link>
            </li>
            <li>
              <Link to='calc'>Calc</Link>
            </li>
          </ul>
        </nav>
        <div className='d-flex align-items-center gap-4'>
          <button
            className='btn btn-primary'
            onClick={() => setCount((prev) => (prev === 0 ? prev : prev - 1))}
          >
            -
          </button>
          <p className='mb-0'>{count}</p>
          <button
            className='btn btn-primary'
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <div className='d-flex align-items-center gap-2'>
          Dark
          <Form.Check // prettier-ignore
            type='switch'
            id='custom-switch'
            checked={theme === 'light'}
            onChange={changeTheme}
          />
          Light
        </div>

        <div className='d-flex align-items-center gap-2'>
          en
          <Form.Check // prettier-ignore
            type='switch'
            id='custom-switch'
            checked={lang === 'ua'}
            onChange={changeLang}
          />
          ua
        </div>
        {username !== '' && (
          <Button
            variant='outline-success'
            className='d-flex align-items-center'
            onClick={() => dispatch(logout())}
          >
            {username}
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
