// Define arrays
const list1 = [
    "grandma",
    "baby",
    "Gardener",
    "Sculptor",
    "Juggler",
    "Detective",
    "Nomad",
    "Fashionista",
    "Baker",
    "Philosopher",
    "Dancer",
    "Trainer",
    "Comedian",
    "Philanthropist",
    "Astronaut",
    "Choreographer",
    "Singer",
    "Counselor",
    "Explorer",
    "Architect",
    "Historian",
    "Animal Trainer",
    "Teacher",
    "Doctor",
    "Firefighter",
    "Chef",
    "Artist",
    "Pilot",
    "Scientist",
    "Engineer",
    "Police officer",
    "Musician"
];

const list2 = [
    "Happiness",
    "Sadness",
    "Anger",
    "Surprise",
    "Fear",
    "Disgust",
    "Excitement",
    "Joy",
    "Grief",
    "Love",
    "Anxiety",
    "Contentment",
    "Confusion",
    "Curiosity",
    "Frustration",
    "Pride",
    "Shame",
    "Hope",
    "Jealousy",
    "Lust",
    "Loneliness",
    "Sympathy",
    "Elation",
    "Embarrassment",
    "Awe",
    "Boredom",
    "Calm",
    "Amusement",
    "Satisfaction",
    "Nostalgia"
];

const list3 = [
    "Running",
    "Swimming",
    "Dancing",
    "Singing",
    "Reading",
    "Painting",
    "Cooking",
    "Jumping",
    "Sleeping",
    "Laughing",
    "Crying",
    "Writing",
    "Playing",
    "Climbing",
    "Hugging",
    "Talking",
    "Listening",
    "Eating",
    "Drawing",
    "Cycling",
    "Meditating",
    "Shopping",
    "Typing",
    "Gardening",
    "Watching",
    "Riding",
    "Exercising",
    "Flying",
    "Studying",
    "Building"
];

const nameElement = document.getElementById('name');
const emotionElement = document.getElementById('emotion');
const actionElement = document.getElementById('action');
const generateButton = document.getElementById('generate');

generateButton.addEventListener('click', generateRandom);

function generateRandom() {
    const randomElement1 = list1[Math.floor(Math.random() * list1.length)];
    const randomElement2 = list2[Math.floor(Math.random() * list2.length)];
    const randomElement3 = list3[Math.floor(Math.random() * list3.length)];

    nameElement.textContent = randomElement1;
    emotionElement.textContent = randomElement2;
    actionElement.textContent = randomElement3;
}

generateRandom();
