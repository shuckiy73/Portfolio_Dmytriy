const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};

window.addEventListener('resize', documentHeight);
documentHeight();

let dir;
function scrollDirecrionChecker(offset) {
  if (!lastOffset) {
    lastOffset = offset;
    return;
  }
  if (offset.y < lastOffset.y) {
    dir = 'up';
  } else if (offset.y > lastOffset.y) {
    dir = 'down';
  } else {
    dir = 'still';
  }

  lastOffset = offset;

  switch (dir) {
    case 'up':
    case 'down':
    case 'still':
  }
}

scrollbar.addListener(function (status) {
    let offset = status.offset;
    scrollDirecrionChecker(offset);
    if (dir == 'down') {
      let nViewH = window.outerHeight;
      nViewH -= 250;
      $('body').css('height', nViewH + 'px');
      window.scrollTo(0, 1);
    } else if (dir == 'up') {
      window.scrollTo(0, 0);
    }
  });