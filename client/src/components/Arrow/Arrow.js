import React from 'react';
import './Arrow.scss';

export const Arrow = () => {
  const goTo = () => {
    window.scrollBy(0, 10000000000);
  };

  return (
    <button
      className="arrow"
      onClick={goTo}
      onKeyDown={goTo}
      type="button"
      title="scrolling to the last comment"
    />
  );
};
