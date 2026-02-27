export const SITE_DATA = {
  coupleName: "Dhruvi & Krutarth",
  weddingMonth: "January 2026",
  
  // Entry Screen Scattered Polaroids
 scatteredPolaroids : [
  { 
    src: "https://i.postimg.cc/Fsq3LJYJ/D-K-Wedding-After-Party-208.jpg", 
    delay: 1.2, 
    className: "w-44 h-60 top-[2%] left-[2%] md:left-[6%] -rotate-6" 
  },
  { 
    src: "https://i.postimg.cc/28JhZB16/D-K-Wedding-After-Party-232.jpg", 
    delay: 1.4, 
    className: "w-44 h-60 top-[2%] right-[2%] md:right-[6%] rotate-12" 
  },
  { 
    src: "https://i.postimg.cc/MK4VQjnR/D-K-Wedding-After-Party-47.jpg", 
    delay: 1.6, 
    className: "w-44 h-60 bottom-[20%] left-[-2%] md:left-[15%] rotate-3" 
  },
  { 
    src: "https://i.postimg.cc/Fsq3LJYJ/D-K-Wedding-After-Party-208.jpg", 
    delay: 1.8, 
    className: "w-44 h-60 bottom-[15%] right-[2%] md:right-[10%] -rotate-12" 
  },
  { 
    src: "https://i.postimg.cc/28JhZB16/D-K-Wedding-After-Party-232.jpg", 
    delay: 2.0, 
    className: "w-44 h-60 top-[40%] left-[2%] rotate-12 hidden xl:block" 
  },
  { 
    src: "https://i.postimg.cc/MK4VQjnR/D-K-Wedding-After-Party-47.jpg", 
    delay: 2.2, 
    className: "w-44 h-60 top-[50%] right-[2%] -rotate-6 hidden xl:block" 
  },
],

  // Quote Section
  quote: {
    text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    author: "Maya Angelou"
  },

  // Bubble Archive Section
 bubbles: [
  {
    url: "https://i.postimg.cc/SN5CMznj/D-K-Desert-Party-25.jpg",
    size: 480,
    x: "15%",
    y: "30%",
    range: [0, 0.45] as [number, number],
    drift: { x: 40, y: -60 },
  },
  {
    url: "https://i.postimg.cc/283nyx8t/D-K-Highlights-Surat-143.jpg",
    size: 360,
    x: "70%",
    y: "25%",
    range: [0.1, 0.55] as [number, number],
    drift: { x: -35, y: -50 },
  },
  {
    url: "https://i.postimg.cc/8P3M6r7G/D-K-Pool-Party-30.jpg",
    size: 420,
    x: "30%",
    y: "60%",
    range: [0.25, 0.75] as [number, number],
    drift: { x: 50, y: -70 },
  },
  {
    url: "https://i.postimg.cc/28JhZB1y/D-K-Sangeet-After-Party-76.jpg",
    size: 300,
    x: "80%",
    y: "45%",
    range: [0.4, 0.85] as [number, number],
    drift: { x: -60, y: -60 },
  },
  {
    url: "https://i.postimg.cc/3JW2NZxr/D-K-Wedding-After-Party-156.jpg",
    size: 460,
    x: "10%",
    y: "55%",
    range: [0.55, 1] as [number, number],
    drift: { x: 70, y: -80 },
  },
],

  // Polaroid Camera Section
  polaroidCamera: {
    photoUrl: "https://i.postimg.cc/kMtZkWWf/D-K-Highlights-Surat-18.jpg",
    dateText: "Jan 2026",
    links: [
      { label: "Photo Gallery", url: "https://photos.ivoryfilms.in/dhruvi-krutarth-jan-2026/gallery/media" },
      { label: "Wedding Reels", url: "https://drive.google.com/drive/folders/1JNxMb9xH2RBjqeS3zdIOg5jK7NIRxSIF?usp=sharing" },
    ]
  },

  // Footer
  footer: {
    initials: "D & K",
    copyright: "Designed with Love • 2026"
  }
};
