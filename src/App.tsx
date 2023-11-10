import { useEffect, useState, useCallback, useRef } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import people from './data';
import Person from './components/Person';

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);
  const restartTimeout = useRef<NodeJS.Timeout | null>(null);

  const updateIndex = useCallback(() => {
    setSelectedIndex((prevIndex) =>
      prevIndex === people.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  /*
    The Person components are scrolled right automatically every 3 seconds.
    If the user clicks on the left or right button, the auto scroll is stopped, and restarted after 6 seconds of inactivity.
  */
  const startAutoScroll = useCallback(() => {
    autoScrollInterval.current = setInterval(() => {
      updateIndex();
    }, 3000);
  }, [updateIndex]);

  const handleRightClick = useCallback(() => {
    updateIndex();
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    if (restartTimeout.current) clearTimeout(restartTimeout.current);
    restartTimeout.current = setTimeout(startAutoScroll, 6000);
  }, [startAutoScroll, updateIndex]);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
      if (restartTimeout.current) clearTimeout(restartTimeout.current);
    };
  }, [startAutoScroll]);

  const handleLeftClick = useCallback(() => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? people.length - 1 : prevIndex - 1
    );
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    if (restartTimeout.current) clearTimeout(restartTimeout.current);
    restartTimeout.current = setTimeout(startAutoScroll, 6000);
  }, [startAutoScroll]);

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
