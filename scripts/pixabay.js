const observer = new MutationObserver(() => {
    document.querySelectorAll('[class^=gettySponsoredImagesContainer]').forEach((ad) => {
        ad.style.display = 'none';
    });
    document
        .querySelectorAll('[href*="sponsored_image"]')
        .forEach((ad) => (ad.parentElement.parentElement.style.display = 'none'));
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});
