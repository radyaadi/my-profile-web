let achive = [
  {
    name: 'experience',
    title: 'Experiences',
    desc: '1 Year Intership',
    icon: 'bx bx-notepad achive__icon',
  },
  {
    name: 'project',
    title: 'Project',
    desc: '3+ Project',
    icon: 'bx bx-briefcase-alt achive__icon',
  },
  {
    name: 'certificate',
    title: 'Certificates',
    desc: '10+ Certificates',
    icon: 'bx bx-medal achive__icon',
  },
];

const getAllAchive = () => {
  return achive;
};

// function getSkill(id) {
//   const foundedSkill = skills.find((skill) => skill.id === id);
//   return foundedSkill;
// }

export { getAllAchive };
