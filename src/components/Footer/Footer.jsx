import { useCallback, useMemo } from 'react';

function calc(a) {
  return a * 2;
}
const Footer = ({ theme, a, b, c }) => {
  const sum = useMemo(() => a + b, [a, b]);
  //const res = useCallback(() => calc(c), [c]);
  return (
    <footer data-theme={theme}>
      <div className='container'>
        <h2>Footer {sum} </h2>
      </div>
    </footer>
  );
};

export default Footer;
