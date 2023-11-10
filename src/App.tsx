import { useState } from 'react';
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

  return (
    <main>
      <section className='section'>
        {people.map((person: Props, index) => {
          if (index === selectedIndex) {
            const { id, image, name, title, quote } = person;
            return (
              <article key={id} className=''>
                <img src={image} alt={name} className='person-img' />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon' />
              </article>
            );
          }
        })}
        <button className='prev'>
          <FiChevronLeft />
        </button>
        <button className='next'>
          <FiChevronRight />
        </button>
      </section>
    </main>
  );
}
