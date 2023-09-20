import { useContext } from 'react';
import Context from '../../share/context';

const fruits = [
  { en: 'Apple', ua: 'Яблуко' },
  { en: 'Banana', ua: 'Банан' },
  { en: 'Grape', ua: 'Виноград' },
  { en: 'Orange', ua: 'Апельсин' },
];

function List() {
  const { lang } = useContext(Context);

  return (
    <ul>
      {fruits.map((item, i) => {
        return <li key={`${item}-${i}`}>{item[lang]}</li>;
      })}
    </ul>
  );
}

export default List;
