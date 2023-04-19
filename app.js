const reviews = [
    {
        id: 1,
        name: 'Cristiano Ronaldo',
        job: 'Footbal Player',
        img: 'https://i.fanatik.com.tr/i/fanatik/75/0x410/6422374780a03323686c49f3.jpg',
        text: 'Cristiano Ronaldo dos santos Aveiro was born 5 February in 1985. Cristiano Ronaldo has 2 older sisters Liliana Catia and Elma, and an older brother Hugo. He is a Portuguese football player who plays for Spanish football club Real Madrid and he also play Portuguese national football team. His playing position is forward and he is captain for Portugal football team. He awarded for FIFA World Player of the Year in 2013 and also awarded for The Most Expensive Football Player Award in 2009.'
    },
    {
        id: 2,
        name: 'Roberto Carlos',
        job: 'Footbal Player',
        img: 'https://www.gazetekadikoy.com.tr/Uploads/gazetekadikoy.com.tr/haberler/200495576247760-img.jpg',
        text: 'Roberto Carlos da Silva Rocha (born 10 April 1973), known as Roberto Carlos, is a Brazilian former professional footballer who now works as a football ambassador.[2] He started his career in Brazil as a forward but spent most of his career as a left-back and has been described as the "most offensive-minded left-back in the history of the game".[3] A free kick specialist throughout his career, his bending shots have measured at over 105 miles per hour (169 km/h).[4][5] In 1997, he was runner-up in the FIFA World Player of the Year. Widely considered one of the greatest left backs in history, in 2004 he was named by Pelé in the FIFA 100 list of the world',
    },
    {
        id: 3,
        name: 'Sergio Ramos',
        job: 'Footbal Player',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Sergio_Ramos_Interview_2021.jpg/330px-Sergio_Ramos_Interview_2021.jpg',
        text: 'Sergio Ramos García (Spanish pronunciation: [ˈseɾxjo ˈramoz ɣaɾˈθi.a];[A] born 30 March 1986) is a Spanish professional footballer who plays as a centre-back or right-back for Ligue 1 club Paris Saint-Germain. Known for his aggressive play, he is widely regarded as one of the greatest defenders of all time, having formerly played for Real Madrid for sixteen seasons, winning four UEFA Champions League titles along with two UEFA European Championships and the 2010 FIFA World Cup with the Spain national team'
    },
    {
        id: 4,
        name: 'Karim Benzema',
        job: 'Footbal Player',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg/330px-Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg',
        text: 'Karim Mostafa Benzema (born 19 December 1987) is a French professional footballer who plays as a striker for and captains La Liga club Real Madrid. Widely regarded as one of the greatest strikers of his generation, he is a creative and prolific forward renowned for his incredible goal-scoring ability, as well as his technical skills, vision, and versatility on the field.'
    },

];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Set starting item

let currentItem = 0;

// Load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson();
});

// Show person based on item

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}

// Show next person

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();

});

// Show prev person

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();

});

// Show random person

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();

});