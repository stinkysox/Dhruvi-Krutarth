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
text: "Every love story is beautiful, but ours is my favorite.",
  },

  // Bubble Archive Section
 bubbles: [
  {
    url: "https://i.postimg.cc/k4k4MJkd/Whats-App-Image-2026-02-28-at-11-17-55-AM.jpg",
    size: 480,
    x: "15%",
    y: "30%",
    range: [0, 0.45] as [number, number],
    drift: { x: 40, y: -60 },
  },
  {
    url: "https://i.postimg.cc/PxLJkpFf/Whats-App-Image-2026-02-28-at-11-17-55-AM-(1).jpg",
    size: 360,
    x: "70%",
    y: "25%",
    range: [0.1, 0.55] as [number, number],
    drift: { x: -35, y: -50 },
  },
  {
    url: "https://i.postimg.cc/tTLTRqLb/Whats-App-Image-2026-02-28-at-11-17-56-AM.jpg",
    size: 420,
    x: "30%",
    y: "60%",
    range: [0.25, 0.75] as [number, number],
    drift: { x: 50, y: -70 },
  },
  {
    url: "https://i.postimg.cc/gJfJczfd/Whats-App-Image-2026-02-28-at-11-17-57-AM.jpg",
    size: 300,
    x: "80%",
    y: "45%",
    range: [0.4, 0.85] as [number, number],
    drift: { x: -60, y: -60 },
  },
  {
    url: "https://i.postimg.cc/fL6LWz6N/Whats-App-Image-2026-02-28-at-11-17-57-AM-(1).jpg",
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
    {
      label: "Photo Gallery",
      url: "https://photos.ivoryfilms.in/dhruvi-krutarth-jan-2026/gallery/media"
    },
    {
      label: "Reels",
      url: "https://drive.google.com/drive/folders/1JNxMb9xH2RBjqeS3zdIOg5jK7NIRxSIF?usp=sharing"
    },
    {
      label: "Wedding Film",
      url: "https://app.streamefy.com/view/KoB731jIxt"
    },
    {
      label: "Performances",
      url: "https://app.streamefy.com/view/KoB731jIxt"
    }
  ]
},
  // Footer
  footer: {
    initials: "D & K",
    copyright: "Designed with Love • 2026"
  }
};
