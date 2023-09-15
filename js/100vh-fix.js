const documentHeight = () => {
    const doc = document.documentElement;
    const setHeight = window.innerHeight * (1 / 10);
    doc.style.setProperty('--doc-height', `${setHeight}px`);
};

window.addEventListener('resize', documentHeight);
documentHeight();