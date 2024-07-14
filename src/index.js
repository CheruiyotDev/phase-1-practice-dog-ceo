console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      const imageContainer = document.getElementById('dog-image-container');

      // Iterate over each image URL and create <img> elements
      data.message.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Random dog image';
        imageContainer.appendChild(img);
      });
    });