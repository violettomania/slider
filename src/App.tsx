import { useEffect, useState, useCallback } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import people from './data';
import Person from './components/Person';

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleLeftClick = useCallback(() => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? people.length - 1 : prevIndex - 1
    );
  }, []);

  const handleRightClick = useCallback(() => {
    setSelectedIndex((prevIndex) =>
      prevIndex === people.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightClick();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleRightClick]);

  return (
    <main>
      <section className='section'>
        {people.map(({ id, ...rest }, index) => (
          <Person
            key={id}
            index={index}
            selectedIndex={selectedIndex}
            {...rest}
          />
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
