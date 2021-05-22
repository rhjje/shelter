function slide() {
  const items = document.querySelector('.slider__visible-area');
  const prev = document.querySelector('.slide-left');
  const next = document.querySelector('.slide-right');
  let posInitial;
  const slides = items.getElementsByClassName('cards');
  const slidesLength = slides.length;
  const slideSize = items.getElementsByClassName('cards')[0].offsetWidth;
  const firstSlide = slides[0];
  const lastSlide = slides[slidesLength - 1];
  const cloneFirst = firstSlide.cloneNode(true);
  const cloneLast = lastSlide.cloneNode(true);
  let index = 0;
  let allowShift = true;

  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);

  function shiftSlide(dir, action) {
    items.classList.add('shifting');

    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft; }
      if (dir === 1) {
        items.style.left = `${posInitial - slideSize}px`;
        index += 1;
      } else if (dir === -1) {
        items.style.left = `${posInitial + slideSize}px`;
        index -= 1;
      }
    }

    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove('shifting');
    if (index === -1) {
      items.style.left = `${-(slidesLength * slideSize)}px`;
      index = slidesLength - 1;
    }

    if (index === slidesLength) {
      items.style.left = `${-(1 * slideSize)}px`;
      index = 0;
    }

    allowShift = true;
  }

  prev.addEventListener('click', () => shiftSlide(-1));
  next.addEventListener('click', () => shiftSlide(1));
  items.addEventListener('transitionend', checkIndex);
}

slide();
