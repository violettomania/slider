import { useEffect, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

import people from './data';

interface Props {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleLeftClick = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? people.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === people.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightClick();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className='section'>
        {people.map(({ id, image, name, title, quote }: Props, index) => (
          <article
            key={id}
            style={{
              transform: `translateX(${(index - selectedIndex) * 100}%)`,
              opacity: index === selectedIndex ? 1 : 0,
            }}
          >
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        ))}
        <button onClick={handleLeftClick} className='prev'>
          <FiChevronLeft />
        </button>
        <button onClick={handleRightClick} className='next'>
          <FiChevronRight />
        </button>
      </section>
    </main>
  );
}
