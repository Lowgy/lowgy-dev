export const experienceData = [
  {
    position: 'Full Stack Developer',
    company: 'Moonlite Media',
    date: 'May. 2024 - Present',
    description: 'Classified',
    tags: ['Next.js', 'Typescript', 'Tailwind'],
    link: 'https://moonlitelabs.com/',
    imageUrl: '/moonlitemedia.png',
    alt: 'Moonlite Media Logo',
  },
  {
    position: 'Software Developer',
    company: 'ConstructionClock (RoofBundle)',
    date: 'May. 2021 - Jun. 2022',
    description:
      'Helped pilot previously RoofBundle, now ConstructionClock, a software company aimed to help roofing companies / contractors generate roofing quotes.',
    tags: ['React', 'NodeJS', 'MongoDB'],
    link: 'https://constructionclock.com/',
    imageUrl: '/constructionclock.png',
    alt: 'Construction Clock Logo',
  },
  {
    position: 'Frontend Developer (Intern)',
    company: 'Arctic Research Foundation',
    date: 'Oct. 2020 - Apr. 2021',
    description:
      'Began development of a Research Database Platform for global Arctic data and research.',
    tags: ['React', 'NodeJS', 'MongoDB'],
    link: 'https://www.arcticfocus.org/',
    imageUrl: '/arf.png',
    alt: 'Construction Clock Logo',
  },
] as const;

export const projectsData = [
  {
    title: 'Pin Seekers',
    description: 'Review site centered around Manitoba Golf Courses.',
    tags: [
      'React',
      'PostgreSQL',
      'Node.js',
      'Express.js',
      'Google Maps API',
      'Prisma',
    ],
    imageUrl: '/pinseekers.png',
    link: 'https://pin-seekers.onrender.com/',
    isLink: true,
    alt: 'Pin Seekers Image',
  },
  // {
  //   title: 'ChatCaseBot',
  //   description:
  //     'Twitch Chat Bot allowing for CSGO Streamers to increase chat engagement',
  //   tags: [
  //     'React',
  //     'PostgreSQL',
  //     'Node.js',
  //     'Express.js',
  //     'Prisma',
  //     'Twitch OAuth',
  //   ],
  //   imageUrl: '/chatcasebot.png',
  //   link: 'https://chatcasebot.com',
  //   isLink: true,
  //   alt: 'ChatCaseBot Image',
  // },
  {
    title: 'MCSR Ranked',
    description:
      'Home of all things for competitve Minecraft Speedruning. View the stats and rankings of current + past seasons.',
    tags: ['Next.js', 'Typescript', 'Tailwind', 'ShadCN UI'],
    imageUrl: '/rankedsite.png',
    link: 'https://github.com/Lowgy/ranked-site',
    isLink: true,
    alt: 'MCSR Ranked Image',
  },
  {
    title: 'FF Trade Generator',
    description:
      'A tool to help generate fair trades in Fantasy Football leagues based on player values.',
    tags: ['Next.js', 'Typescript', 'Tailwind', 'PostgreSQL', 'Prisma'],
    imageUrl: '/fantasytrade.png',
    link: 'https://github.com/Lowgy/fantasy-trade-generator',
    isLink: true,
    alt: 'Fantasy Football Trade Generator Project Image',
  },
  {
    title: 'D1 Atlas',
    description:
      'An interactive map to view D1 Colleges / Universities across the US',
    tags: ['Next.js', 'Typescript', 'Tailwind', 'ShadCN UI', 'Google Maps API'],
    imageUrl: '/d1atlas.png',
    link: 'https://github.com/Lowgy/d1-atlas',
    isLink: true,
    alt: 'D1 Atlas Image',
  },
  {
    title: 'ShoCoffee Bar Site',
    description:
      'A site for a local coffee shop in Winnipeg, MB. Was built to help them with their online presence.',
    tags: ['Next.js', 'Typescript', 'Tailwind', 'ShadCN UI', 'UploadThing'],
    imageUrl: '/shocoffee.png',
    link: 'https://www.shocoffeebar.ca/',
    isLink: true,
    alt: 'ShoCoffee Site Image',
  },
] as const;
