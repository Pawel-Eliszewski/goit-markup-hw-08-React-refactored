import { useState } from 'react';
import { Button } from 'components/Buttons/Button/Button';
import { Modal } from 'components/Modal/Modal';
import './Hero.css';

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = e => {
    setIsOpen(current => !current);
    isOpen === false
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  };

  const handleIsOpen = () => (isOpen === true ? 'isOpen' : '');

  return (
    <section className="hero section">
      <div className="hero-container container">
        <h1 className="hero__title">effective solution for your business</h1>
        <Button
          name="
            Request our Service
          "
          onClick={handleClick}
          styles="--hero"
          type="button"
        />
      </div>
      <Modal onClick={handleClick} styles={handleIsOpen()} />
    </section>
  );
};
