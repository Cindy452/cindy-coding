import nestful from '../assets/nestful.png';
import exercises from '../assets/exercises.png';
import face from '../assets/Face-Detection.png';

export const projects = [
    {
      id: 1,
      title:  'Nestful',
      content: 'This is a MERN Stack based web app, the app has three main features: help user to check their retirment on track or off track, create an account and download the financial and goal setting templates',
      image: `${nestful}`,
      url: 'https://nestful.netlify.app/',
      source: 'https://github.com/Cindy452/Nestful'
     
      
    
    },
    {
      id: 2,
      title:  'Exercises Tracker',
      content: 'This project is using React, React-Router, Bootstrap, Node.js, Express & MongoDB, It is a simple exercises tracker MERN application that allows users to create, read, update and delete exercises record.',
      image: `${exercises}`,
      url: 'https://cindy-exercise.herokuapp.com/',
      source: 'https://github.com/Cindy452/ExerciseApp'
     
    },

    {
      id: 3,
      title:  'Face Detection App',
      content: 'This is a full stack project which I used the clarifai api to recognize faces from submitted images, set up a server and database with Express, PostgreSQL and Knex.js. Passwords were hashed and kept secure using bcrypt.',
      image: `${face}`,
      url: 'https://face-detections-app.herokuapp.com/',
      source: 'https://github.com/Cindy452/Face-Detection-App'
     
    },
    
    {
      id: 4,
      title:  'Meme Generator',
      content: 'This project is using React, HTML, CSS, Meme API, It is a simple meme generator that allows users to add texts to images.',
      image:  'https://i.imgflip.com/3i7p.jpg',
      url: 'https://cindysmeme.netlify.app',
      source: 'https://github.com/Cindy452/meme-generator'
    },

    {
      id: 5,
      title:  'Movie Search App',
      content: 'This project is using React, HTML, CSS, TMDB API, It is a simple movie search app that allows users to get information of their favorite movies.',
      image:  'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=740&q=80',
      url: 'https://cindysmoviesearchapp.netlify.app',
      source: 'https://github.com/Cindy452/movie-search-app'
    },

    {
      id: 6,
      title:  'Kanban Board',
      content: 'This project is using vanilla Javascript, HTML, CSS, It is a simple workflow management application that allows users to organize their works. ',
      image:  'https://github.com/Cindy452/Kanban-Board/blob/master/Anime.jpg?raw=true',
      url: 'https://cindy452.github.io/Kanban-Board/',
      source: 'https://github.com/Cindy452/Kanban-Board'
    },


    ]
    