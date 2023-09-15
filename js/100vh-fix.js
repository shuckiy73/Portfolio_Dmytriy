const documentHeight = () => {
    const doc = (document.documentElement / 9) * 10;
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};

window.addEventListener('resize', documentHeight);
documentHeight();