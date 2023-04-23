let projects = [
  {
    id: '001-uuid',
    name: 'GoFarm',
    createdAt: '2021-12-20',
    category: 'machine learning',
    description:
      'GoFarm is a machine learning-based website which is intended to predict suitable plants for planting based on user environmental conditions. GoFarms here to help you determine plants based on the soil structure data and rainfall. We created this application to increase the success rate of farming for people who are less skilled in agriculture.',
    siteUrl: 'https://app-gofarm.herokuapp.com/',
    repoUrl: 'https://github.com/radyaadi/GoFarm',
    imgUrl: 'https://drive.google.com/uc?id=1jciGVMtwPRw08nkFaS9yoZwnYO9Ew_Kh',
    tags: [
      '#machine-learning',
      '#reggression',
      '#python',
      '#predictive',
      '#flask',
    ],
  },
  {
    id: '002-uuid',
    name: 'Si Valorant',
    createdAt: '2021-10-16',
    category: 'web',
    description:
      'SiValorant is a web created to accommodate information about Valorant game. On this web you can see some list of items in this game such as weapons, maps, ect',
    siteUrl: 'https://radya-valorant.netlify.app',
    repoUrl: 'https://github.com/radyaadi/SiValorant',
    imgUrl: 'https://drive.google.com/uc?id=1_la_SbCvgMsouC4PDs_0ta_XGwxPhi2B',
    tags: ['#front-end', '#npm', '#webpack', '#jquery', '#fetch-api'],
  },
  // {
  //   id: '003-uuid',
  //   name: 'GitHub Seach',
  //   createdAt: '2022-05-18',
  //   category: 'mobile',
  //   description: '',
  //   siteUrl: 'https://github.com/radyaadi/github_search',
  //   repoUrl: 'https://github.com/radyaadi/github_search',
  //   imgUrl:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyY9kDDP9giXf15xDKQx9xqqVsiBVdZUe-Pw&usqp=CAU',
  //   tags: ['#front-end', '#flutter', '#dart', '#fecth-api', '#nosql'],
  // },
  {
    id: '004-uuid',
    name: 'Restaurant',
    createdAt: '2022-11-13',
    category: 'web',
    description:
      'Restaurant is a web that utilizes web optimization also progressive web on its development. On this web you can see an example of a restaurant list along with the details. Moreover, you can also add a list of restaurants to your favorites list',
    siteUrl: 'https://radya-restaurant-apps.netlify.app/',
    repoUrl: 'https://github.com/radyaadi/radya-restaurant-apps',
    imgUrl: 'https://drive.google.com/uc?id=1BJRAKyFqoMEYPAldTDT7damN30wt8CzC',
    tags: [
      '#mobile-first',
      '#progressive-app',
      '#web-optimizer',
      '#npm',
      '#webpack',
    ],
  },
  {
    id: '005-uuid',
    name: 'Sai Store',
    createdAt: '2022-12-13',
    category: 'web',
    description:
      'SAI Store is one of the UMKM engaged in clothing and food. The store provides some daily necessities such as rice, oil, onions, etc. Not limited to food needs, SAI Store also provides items such as sandals and furniture.',
    siteUrl: 'https://github.com/radyaadi/SAI-Project',
    repoUrl: 'https://github.com/radyaadi/SAI-Project',
    imgUrl: 'https://drive.google.com/uc?id=15Q2bcDLe_P0kNz_gRa0i8C_nshZTCz0C',
    tags: ['#front-end', '#back-end', '#nodejs', '#mysql', '#expressjs'],
  },
  {
    id: '006-uuid',
    name: 'Note Apps',
    createdAt: '2023-02-16',
    category: 'web',
    description:
      'Note Apps is a web that used to store a user notes. To use this web, you must create an account first and log in using its. This web is built using React Js which implements component, context, and custom hooks',
    siteUrl: 'https://radya-notes-app.netlify.app',
    repoUrl: 'https://github.com/radyaadi/note-app-2',
    imgUrl: 'https://drive.google.com/uc?id=1Es24Zjj-fNUvl7X0OY8H3EclT6iyoAFd',
    tags: [
      '#react-js',
      '#react-hooks',
      '#react-context',
      '#react-router',
      '#single-page',
    ],
  },
  {
    id: '007-uuid',
    name: 'Radya Portfolio',
    createdAt: '2023-03-08',
    category: 'web',
    description:
      'This is my own profile web. Radya Portfolio contains my bio and some of my project portfolio. This website created using React Js. This website utilizes React Component, Context, and Custom Hooks',
    siteUrl: 'https://radya-profile-web.netlify.app',
    repoUrl: 'https://github.com/radyaadi/my-profile-web',
    imgUrl: 'https://drive.google.com/uc?id=114chE9US6TPq6JWjpoPxztgpRYc-egrc',
    tags: [
      '#react-js',
      '#react-hooks',
      '#react-context',
      '#react-router',
      '#single-page',
    ],
  },
  {
    id: '008-uuid',
    name: 'TvMaze Movie',
    createdAt: '2023-04-23',
    category: 'web',
    description:
      'TvMaze Movie is a Vue project that displays data from tv maze api. The focus of this project is Vue for creating web components to display a list of movies from TV Maze. The data taken is limited to the girl category',
    siteUrl: 'https://github.com/radyaadi/jobhun-frontend-test',
    repoUrl: 'https://github.com/radyaadi/jobhun-frontend-test',
    imgUrl: 'https://drive.google.com/uc?id=1ujnikdnmgKScYd6vLzzOk7rfcu9W0Iou',
    tags: [
      '#vue-js',
      '#vue-router',
      '#single-file-component',
      '#fetch-api',
      '#single-page',
    ],
  },
];

const getAllProject = () => {
  return projects;
};

const getProject = (id) => {
  const foundedProject = projects.find((project) => project.id === id);
  return foundedProject;
};

const getFilteredProject = (filter) => {
  const filteredProject = projects.filter(
    (project) => project.category === filter
  );
  return filteredProject;
};

export { getAllProject, getProject, getFilteredProject };
