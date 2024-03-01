// Add your javascript here

document.addEventListener('DOMContentLoaded', function () {
    const artworks = document.querySelectorAll('#click-me,#click-me-2');
    const artworkInfos = document.querySelectorAll('.artwork-info, .artwork-info-2');

  artworks.forEach(function (artwork, index) {
    artwork.addEventListener('click', function () {
        const artworkInfo = artworkInfos[index];
      
        if (artworkInfo.style.opacity == '0' || artworkInfo.style.opacity == '') {
            artworkInfo.style.opacity = '1';
        } else {
            artworkInfo.style.opacity = '0';
        }
    });
  });
});