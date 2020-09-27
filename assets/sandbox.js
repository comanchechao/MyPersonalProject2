smoothScroll = function(target) {
  let scrollContainer = target;
  do {
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return scrollContainer.scrollTop += 1;
  }
  while (scrollContainer.scrollTop == 0);

  let targetY = 0;
  do {
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while (target == target.offsetParent);
  scroll = function(c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + (b - a) / 30 * i;
    setTimeout(function() {
      scroll(c, a, b, i);
    }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
