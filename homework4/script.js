// Add your javascript here

document.addEventListener('DOMContentLoaded', function () {
  const artworks = document.querySelectorAll('#click-me, #click-me-2');
  const artworkInfos = document.querySelectorAll('.artwork-info, .artwork-info-2');

  artworks.forEach(function (button, index) {
    button.addEventListener('click', function () {
      const artwork = document.querySelectorAll('.artwork')[index];
      const artworkInfo = artwork.querySelector('.artwork-info, .artwork-info-2');

          console.log("artworks: ", artwork);
          console.log("artworkInfo: ", artworkInfo);

          if (artworkInfo.style.opacity == '0' || artworkInfo.style.opacity == '') {
              artworkInfo.style.opacity = '1';
          } else {
              artworkInfo.style.opacity = '0';
          }
      
      });
  });
});
