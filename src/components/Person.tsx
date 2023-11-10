import { FaQuoteRight } from 'react-icons/fa';

interface PersonProps {
  image: string;
  name: string;
  title: string;
  quote: string;
  index: number;
  selectedIndex: number;
}

export default function Person({
  image,
  name,
  title,
  quote,
  index,
  selectedIndex,
}: PersonProps) {
  return (
    <>
      <article
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
    </>
  );
}
