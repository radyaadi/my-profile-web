let service = [
  {
    name: 'web-design',
    title: 'Web Design',
    available: true,
    icon: 'bx bx-code-alt',
  },
  {
    name: 'react-js',
    title: 'React Js',
    available: true,
    icon: 'bx bxl-react',
  },
  {
    name: 'vue-js',
    title: 'Vue Js',
    available: false,
    icon: 'bx bxl-vuejs',
  },
  {
    name: 'machine-learning',
    title: 'Machine Learning',
    available: false,
    icon: 'bx bx-brain',
  },
  // {
  //   name: 'flutter',
  //   title: 'Flutter',
  //   available: false,
  //   icon: 'bx bxl-flutter',
  // },
];

const getAllService = () => {
  return service;
};

// function getSkill(id) {
//   const foundedSkill = skills.find((skill) => skill.id === id);
//   return foundedSkill;
// }

export { getAllService };
