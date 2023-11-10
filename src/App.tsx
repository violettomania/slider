import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

export default function App() {
  return (
    <section className='section'>
      <article style={{ transform: 'translateX(0%); opacity: 1;' }}>
        <img
          src='https://www.course-api.com/images/people/person-1.jpeg'
          alt='maria ferguson'
          className='person-img'
        ></img>
        <h5>maria ferguson</h5>
        <p className='title'>office manager</p>
        <p className='text'>
          Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid
          viral kombucha gentrify fanny pack raclette pok pok mustache.
        </p>
        <FaQuoteRight className='icon' />
      </article>
      <button className='prev'>
        <FiChevronLeft />
      </button>
      <button className='next'>
        <FiChevronRight />
      </button>
    </section>
  );
}
