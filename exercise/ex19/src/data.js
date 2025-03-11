const animals = [
    {
      name: 'Lion',
      scientificName: 'Panthera leo',
      size: 140,
      diet: ['meat'],
      image: '/images/lion.jpg',
    },
    {
      name: 'Gorilla',
      scientificName: 'Gorilla beringei',
      size: 205,
      diet: ['plants', 'insects'],
      additional: {
        notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.',
      },
      image: './images/gorila.jpg',
    },
    {
      name: 'Zebra',
      scientificName: 'Equus quagga',
      size: 322,
      diet: ['plants'],
      additional: {
        notes: 'There are three different species of zebra.',
        link: 'https://en.wikipedia.org/wiki/Zebra',
      },
      image: '/images/zebra.jpg',
    },
  ];
  
  export default animals;
  