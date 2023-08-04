const namesListEn = [
  "Grandma",
  "Teenager",
  "Professor",
  "Valley Girl",
  "Captain",
  "Newscaster",
  "Timid Character",
  "Villain",
  "Robotic AI",
  "Child",
  "Chivalrous Knight",
  "Valley Grandma",
  "Nerdy Scientist",
  "British Butler",
  "Cowboy",
  "Alien",
  "Southern Belle",
  "No-nonsense Cop",
  "Adventurous Space Explorer",
  "Wacky Inventor",
  "Cheerful TV Host",
  "Wise Sage",
  "Laid-back Surfer",
  "Strict Headmistress",
  "Bumbling Sidekick",
  "Mysterious Oracle",
  "Energetic Fitness Instructor",
  "Posh Socialite",
  "Swashbuckling Pirate",
  "Chatty Parrot",
  "Anxious Nervous Nellie",
  "Artistic Bohemian",
  "Mad Scientist",
  "Streetwise Urban Teen",
  "Eccentric Ecclesiastic",
  "Playful Fairy",
  "Stoic Samurai",
  "Bubbly Party Host",
  "Cynical Comedian",
  "Adventurous Archaeologist",
  "Romantic Poet",
  "Timid Librarian",
  "Stoic Mountain Guide",
  "Flirty Barista",
  "Determined Detective",
  "Grumpy Shopkeeper",
  "Inventive Tinkerer",
  "Curious Explorer",
  "Regal Monarch",
  "Bookish Historian",
  "Inquisitive Journalist",
  "Mysterious Psychic",
  "Brooding Anti-hero",
  "Kindergarten Teacher",
  "Eccentric Beekeeper",
  "Street Magician",
  "World-weary Nomad",
  "Whimsical Storyteller",
  "Tech-savvy Hacker",
  "Passionate Chef",
];

const feelingsListEn = [
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
  "Nostalgia",
];

const actionsListEn = [
  "Running",
  "Swimming",
  "Dancing",
  "Singing",
  "Reading",
  "Painting",
  "Cooking",
  "Jumping",
  "Sleepy",
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
  "waight lifting",
  "Gardening",
  "Watching",
  "Riding",
  "Exercising",
  "Flying",
  "Studying",
  "Building",
];

const actionsListFa = [
  "دویدن",
  "شنا",
  "رقصیدن",
  "خواندن",
  "نقاشی",
  "آشپزی",
  "پریدن",
  "خوابیدن",
  "خندیدن",
  "گریه کردن",
  "نوشتن",
  "بازی کردن",
  "بالا رفتن",
  "آغوش گرفتن",
  "صحبت کردن",
  "گوش دادن",
  "خوردن",
  "طراحی",
  "دوچرخه سواری",
  "تامل",
  "خرید",
  "تایپ کردن",
  "باغبانی",
  "تماشا کردن",
  "سوار شدن",
  "ورزش کردن",
  "پرواز",
  "تحصیل کردن",
  "ساختن",
];

const feelingsListFa = [
  "خوشحالی",
  "غم",
  "عصبانیت",
  "تعجب",
  "ترس",
  "اشمز",
  "هیجان",
  "شادی",
  "سوگ",
  "عشق",
  "اضطراب",
  "رضایت",
  "گیجی",
  "کنجکاوی",
  "ناامیدی",
  "غرور",
  "شرم",
  "امید",
  "حسادت",
  "شهوت",
  "تنهایی",
  "همدردی",
  "خوشبختی فراوان",
  "تحلیل",
  "تعجب",
  "خستگی",
  "آرامش",
  "سرگرمی",
  "رضایت",
  "نوستالجی",
];

const namesListFa = [
  "مادربزرگ",
  "نوجوان",
  "استاد",
  "دختر دره",
  "کاپیتان",
  "خبرنگار حرفه‌ای",
  "گرگ خسته",
  "شرور",
  "هوش مصنوعی",
  "کودک",
  "شوالیه مهربان",
  "مادربزرگ دره",
  "دانشمند علمی",
  "خدمتکار بریتانیایی",
  "کابوی",
  "بیگانه",
  "زن جنوبی",
  "پلیس",
  "جستجوگر فضای ماجراجو",
  "مخترع دیوانه",
  "مجری تلویزیونی پرانرژی",
  "حکیم دانا",
  "اسکی بازه خجسته",
  "مدیر مدرسه سختگیر",
  "همکار قهرمان",
  "پیشگوی مرموز",
  "مربی تناسب اندام پرانرژی",
  "خره جامعه‌ستیز",
  "دزد دریایی پرجنب و جوش",
  "تمساح پر حرف",
  "هنرمند بومی",
  "دانشمند دیوانه",
  "نوجوان شهری با تجربه",
  "کشیش خارق‌العاده",
  "پری بازیگوش",
  "سامورایی پایدار",
  "میزبان پرانرژی مهمانی‌ها",
  "کمدی‌گوی سینیک",
  "جستجوگر باستان‌شناسی ماجراجو",
  "شاعر عاشقانه",
  "کتابدار خجالتی",
  "راهنمای کوهستان سختگیر",
  "باریستا با مزه",
  "کارآگاه مصمم",
  "فروشنده بدجنس",
  "مخترع مبتکر",
  "جستجوگر کنجکاو",
  "پادشاه شاهنشاهی",
  "تاریخ‌نگار علمی",
  "خبرنگار فضول",
  "معلم گروه‌کودکانه",
  "عسل‌خوار عجیب و غریب",
  "جادوگر خیابانی",
  "گردباد خسته‌کننده",
  "داستان‌گوی شگفت‌انگیز",
  "هکر ماهر",
  "آشپز مشتاق",
];
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
const nameElement = document.getElementById("name");
const titlElement = document.getElementById("title");
const emotionElement = document.getElementById("emotion");
const actionElement = document.getElementById("action");
const generateButtons = document.getElementById("generate");
const langSwitchButton = document.getElementById("lang-switch");

langSwitchButton.addEventListener("click", toggleLanguage);
generateButtons.addEventListener("click", generateRandom);

function generateRandom() {
  const lang = document.querySelector("html").getAttribute("lang");
  const randomElement1 =
    namesListEn[Math.floor(Math.random() * namesListEn.length)];
  const randomElement2 =
    feelingsListEn[Math.floor(Math.random() * feelingsListEn.length)];
  const randomElement3 =
    actionsListEn[Math.floor(Math.random() * actionsListEn.length)];

  const randomElement1Fa =
    namesListFa[Math.floor(Math.random() * namesListFa.length)];
  const randomElemt2Fa =
    feelingsListFa[Math.floor(Math.random() * feelingsListFa.length)];
  const randomElement3Fa =
    actionsListFa[Math.floor(Math.random() * actionsListFa.length)];

  nameElement.textContent =
    lang === "fa" ? `نام: ${randomElement1Fa}` : `Name: ${randomElement1}`;
  emotionElement.textContent =
    lang === "fa" ? `احساس: ${randomElemt2Fa}` : `Emotion: ${randomElement2}`;
  actionElement.textContent =
    lang === "fa" ? `عمل: ${randomElement3Fa}` : `Action: ${randomElement3}`;
}

function toggleLanguage() {
  const htmlElement = document.querySelector("html");
  const lang = htmlElement.getAttribute("lang");

  if (lang === "fa") {
    htmlElement.setAttribute("lang", "en");
    langSwitchButton.textContent = "Persian";
    generateButtons.textContent = "Generate";
    title.textContent = "Random Generator";
  } else {
    htmlElement.setAttribute("lang", "fa");
    langSwitchButton.textContent = "انگلیسی";
    generateButtons.textContent = "ایجاد";
    title.textContent = "ایجاد کننده شانسی";
  }
  generateRandom();
}

window.addEventListener("load", toggleLanguage);
