const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}; 

const projects = [
    {
        'name': 'LinkedIn Clone',
        'img' : 'https://cdn-insights.statusbrew.com/images/2021/08/the_ultimate_guide_to_linkedin_ads.png',
        'type' : "React",
        'technologies' : ["React","Redux","React Router","FireBase","Tailwind",],
        'projectLink' : 'https://linked-in-4d8cd.web.app/home',
        'key' : 1,
    },
    {
        'name': 'Bazar Ecommerce',
        'img' : 'bazar-ecommerce.png',
        'type' : "React",
        'technologies' : ["React","Redux","React Router","Tailwind","Axios"],
        'projectLink' : 'https://complete-bazar-ecom-website.vercel.app/',
        'key' : 2,
    },
    {
        'name': 'Portfolio',
        'img' : 'portfolio.png',
        'type' : "React",
        'technologies' : ["React","React Router","Tailwind","Frame Motion"],
        'projectLink' : 'https://omarjbair.netlify.app/',
        'key' : 3,
    },
    {
        'name': 'CRUD App',
        'img' : 'crudApp.png',
        'type' : "React",
        'technologies' : ["React","Redux","React Router","jsonServer","Formik & Yup"],
        'projectLink' : 'https://github.com/Omarjbair/CRUD_App',
        'key' : 4,
    },
    {
        'name': 'Book Store',
        'img' : 'bookStore.png',
        'type' : "React",
        'technologies' : ["React","Redux","jsonServer"],
        'projectLink' : 'https://github.com/Omarjbair/Book_Store_App',
        'key' : 5,
    },
    {
        'name': 'Weather App',
        'img' : 'weather.png',
        'type' : "JavaScript",
        'technologies' : ["HTML","Css","TypeScript"],
        'projectLink' : 'https://omarjbair.github.io/Weather-App-With-JavaScript/',
        'key' : 6,
    },
    {
        'name': 'Todo List',
        'img' : 'todoList.png',
        'type' : "JavaScript",
        'technologies' : ["HTML","Css","JavaScript"],
        'projectLink' : 'https://omarjbair.github.io/To_Do_List_With_JavaScript/',
        'key' : 7,
    },
    {
        'name': 'Timer',
        'img' : 'timer.png',
        'type' : "JavaScript",
        'technologies' : ["HTML","Css","JavaScript"],
        'projectLink' : 'https://omarjbair.github.io/Timer-With-JavaScript/',
        'key' : 8,
    },
    {
        'name': 'Tale',
        'img' : 'tale.png',
        'type' : "HTML&CSS",
        'technologies' : ["HTML","Css"],
        'projectLink' : 'https://omarjbair.github.io/Html-And-Css-Project-5/',
        'key' : 9,
    },
    {
        'name': 'Intot',
        'img' : 'intot.png',
        'type' : "HTML&CSS",
        'technologies' : ["HTML","Css"],
        'projectLink' : 'https://omarjbair.github.io/Html-And-Css-Project-4/',
        'key' : 10,
    },
    {
        'name': 'World Cup',
        'img' : 'worldCup.png',
        'type' : "HTML&CSS",
        'technologies' : ["HTML","Css"],
        'projectLink' : 'https://omarjbair.github.io/World_Cup_Qatar_2022_Web_Design/',
        'key' : 11,
    },
    {
        'name': 'Blog App',
        'img' : 'blogApp.png',
        'type' : "Next",
        'technologies' : ["Next","Tailwind","NextAuth","Firebase"],
        'projectLink' : 'https://omarblog.vercel.app/',
        'key' : 12,
    },
    {
        'name': 'Shoes Ecommerce',
        'img' : 'Ecommerce.png',
        'type' : "Next",
        'technologies' : ["Next","Tailwind","Prisma","Neon","Kinde-Auth","UploadThing","TypeScript","Stripe"],
        'projectLink' : 'https://omarshoe.vercel.app/',
        'key' : 13,
    },
];

export const projectData = shuffle(projects);