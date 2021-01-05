const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "baran ayaş",
    job: "sowtware developer",
    img:
      "/1.png",
    text:
      "Çanakkale Onsekiz Mart Üniversitesi Bilgisayar Mühendisliği bölümü öğrencisiyim. 1997'de Diyarbakır'da doğdum. Front-end Developer olmak istiyorum. ",
  },
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const randomBtn = document.getElementById('random-btn')

let currentItem = 0

window.addEventListener('DOMContentLoaded', function() {
  showPerson()
})

const showPerson = () => {
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

nextBtn.addEventListener('click', function() {
  if(currentItem < reviews.length-1)
    currentItem++;
  showPerson(currentItem)
})

prevBtn.addEventListener('click', function() {
  if(currentItem > 0)
    currentItem--;
  showPerson(currentItem)
})

randomBtn.addEventListener('click', function() {
  var rand = currentItem
  while(rand == currentItem){
    rand = Math.floor(Math.random()*reviews.length)
  }
  currentItem = rand
  showPerson(currentItem)
})
