export class ScrollService {
  _getElementRect(element) {
    return element ? element.getBoundingClientRect() : null;
  }

  _isElementInView(elementRect) {
    return elementRect
      ? elementRect.top >= 0 &&
          elementRect.left >= 0 &&
          elementRect.bottom <= (window.innerHeight || window.document.documentElement.clientHeight) &&
          elementRect.right <= (window.innerWidth || window.document.documentElement.clientWidth)
      : false;
  }

  scrollElementIntoView(element, scrollIfInView) {
    const elementRect = this._getElementRect(element);

    if (!elementRect) {
      return;
    }

    scrollIfInView = typeof scrollIfInView === 'boolean' ? scrollIfInView : true;

    if (!scrollIfInView && this._isElementInView(elementRect)) {
      return;
    }

    element.scrollIntoView();
  }
}
