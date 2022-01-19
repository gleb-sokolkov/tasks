const dlerpSpeed = 0.07;
/* eslint-disable no-param-reassign */
export default class Slider {
  constructor(root, lerpSpeed) {
    this.root = root;
    this.lerpSpeed = lerpSpeed || dlerpSpeed;

    this.current = 0;

    this.contentArea = root.querySelector('#scrolling-area');
    // eslint-disable-next-line no-new-object
    this.items = Slider.queryToArray('#scrolling-area > *').map((t) => new Object({ t, x: 0 }));

    this.bindToggles();
    this.bindScrollButtons();

    this.updateItemPositions(true);
    this.updateToggleButtons(this.current, 0);
  }

  // eslint-disable-next-line class-methods-use-this
  changeCurrentIndex(index) {
    if (this.current === index || this.blocked) return;
    this.updateToggleButtons(this.current, index);
    this.current = index;
    this.updateItemPositions(false);
  }

  nextIndex() {
    this.changeCurrentIndex((this.current + 1) % this.items.length);
  }

  previousIndex() {
    this.changeCurrentIndex((this.current - 1 + this.items.length) % this.items.length);
  }

  bindToggles() {
    this.toggleArea = this.root.querySelector('#toggle-area');
    this.toggles = this.items.map((t, i) => {
      const button = document.createElement('button');
      button.classList.add('slider__toggle-element', 'btn');
      button.onclick = this.changeCurrentIndex.bind(this, i);
      this.toggleArea.appendChild(button);
      return button;
    });
  }

  bindScrollButtons() {
    this.next = this.root.querySelector('#next-item');
    this.next.onclick = this.nextIndex.bind(this);
    this.previous = this.root.querySelector('#previous-item');
    this.previous.onclick = this.previousIndex.bind(this);
  }

  updateToggleButtons(oldIndex, newIndex) {
    this.toggles[oldIndex].classList.toggle('slider__toggle-element_actived', false);
    this.toggles[newIndex].classList.toggle('slider__toggle-element_actived', true);
  }

  updateItemPositions(immediately) {
    const areaHalfWidth = this.contentArea.offsetWidth * 0.5;
    const areaHalfHeight = this.contentArea.offsetHeight * 0.5;
    this.fullWidth = this.items.reduce((s, item) => s + item.t.offsetWidth, 0);
    const halfFullWidth = this.fullWidth * 0.5;
    this.items
      .map((t, i) => (i + this.current) % this.items.length)
      .reduce((sum, i) => {
        const offsetX = areaHalfWidth - this.items[this.current].t.offsetWidth * 0.5;
        const offsetY = areaHalfHeight - this.items[i].t.offsetHeight * 0.5;
        const x = ((sum + halfFullWidth) % this.fullWidth) - halfFullWidth + offsetX;
        const y = offsetY;

        if (immediately) {
          Slider.moveItemImmediately(this.items[i], x, y);
        } else {
          this.moveItemSmooth(this.items[i], x, y);
        }
        return sum + this.items[i].t.offsetWidth;
      }, 0);
  }

  static moveItemImmediately(item, newX, newY) {
    item.t.style.transform = `translate(${newX}px, ${newY}px)`;
    item.x = newX;
  }

  // eslint-disable-next-line class-methods-use-this
  moveItemSmooth(item, newX, y) {
    this.blocked = true;
    if (item.i) clearInterval(item.i);
    const bias = 0.01;
    let lerp = this.lerpSpeed;
    // a little funny random numbers
    lerp -= this.lerpSpeed * (Math.random() * 0.5 + 0.1);
    // eslint-disable-next-line prefer-destructuring
    let x = item.x;
    // gives immediately transition when animation was interrupted by next iteration
    item.x = newX;

    if (Math.abs(x - newX) + item.t.offsetWidth === this.fullWidth) {
      item.t.style.zIndex = '0';
    } else {
      item.t.style.zIndex = '1';
    }
    const lerpFunc = (() => {
      if (Math.abs(x - newX) < bias) {
        this.blocked = false;
        clearInterval(item.i);
        return;
      }
      // eslint-disable-next-line no-plusplus
      x += lerp * (newX - x);
      item.t.style.transform = `translate(${x}px, ${y}px)`;
      // eslint-disable-next-line no-extra-bind
    }).bind(this);

    item.i = setInterval(lerpFunc, 0);
  }

  static queryToArray(queryStr) {
    return Array.prototype.slice.call(document.querySelectorAll(queryStr));
  }

  static findAllSliders() {
    const sliders = Slider.queryToArray("[data-widget='slider']");
    return sliders.map((t) => new Slider(t));
  }
}
