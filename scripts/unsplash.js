const observer = new MutationObserver(() => {
    document.querySelectorAll('[data-ad]').forEach((ad) => ad.remove());
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});
