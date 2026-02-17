const observer = new MutationObserver(() => {
    document.querySelectorAll('[data-ad]').forEach((ad) => (ad.style.display = 'none'));
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});
