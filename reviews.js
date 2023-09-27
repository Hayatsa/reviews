
const reviews = [
    {
      id: 1,
      name: 'susan sarandon',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I got a pair of boots from store X and I'm very satisfied. They are high-quality and worth the money. The store also offered free shipping at that price so that's a plus!",
    },
    {
      id: 2,
      name: 'anna smith',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: "I recently purchased a [product] from [Store Name], and I couldn't be happier with my online shopping experience. Their website was user-friendly, making it easy to find the perfect item. The checkout process was smooth, and I received my order promptly. The [product] arrived in excellent condition, exactly as described on their website. I'm thrilled with the quality and will definitely shop at [Store Name] again in the future. Highly recommended!",
    },
    {
      id: 3,
      name: 'peter pan',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: "I got a pair of boots from store X and I'm very satisfied. They are high-quality and worth the money. The store also offered free shipping at that price so that's a plus!",
    },
    {
      id: 4,
      name: 'bill collins',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: "I recently purchased a [product] from [Store Name], and I couldn't be happier with my online shopping experience. Their website was user-friendly, making it easy to find the perfect item. The checkout process was smooth, and I received my order promptly. The [product] arrived in excellent condition, exactly as described on their website. I'm thrilled with the quality and will definitely shop at [Store Name] again in the future. Highly recommended!",
    },
  ];

  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set first review
  let currentItem = 0;
  
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });

  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });