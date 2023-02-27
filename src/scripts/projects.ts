import medicalImg from "../images/profile/medical.png"
import codeDungeonImg from "../images/profile/code-dungeon.png"
import amigaImg from "../images/profile/amiga_screen.webp"
import bsRevistaImg from "../images/profile/bs_revista.webp"
import ubigasImg from "../images/profile/ubigas.jpg"

type projectType = {
    image: string
    altText: string
    projectName: string
    description: string
    techUsed: string[]
    link: string
    linkType: "repo" | "store" | "broken"
}

export const projects = <projectType[]> [
        {image: medicalImg,
        altText: "Medical Manager",
        projectName: 'Medical Manager', 
        description: 'A patient manager for a dentist',
        techUsed: ["Django", "Bootstrap", "Postgresql"],
        link: 'https://github.com/urielbravo/medical_records',
        linkType: 'repo'},
        {image: codeDungeonImg, 
        altText:"The code dungeon", 
        projectName:"The code dungeon", 
        description:"A blog/portfolio", 
        techUsed:["Astro", "Tailwind", "Typescript"],
        link:"https://github.com/urielbravo/code-lair",
        linkType:"repo"},
        {image:amigaImg,
      altText:"Amiga magazine", 
      projectName:"Amiga magazine",
      description:"A mobile App for a magazine, the CMS/API was made with django and the mobile app with react native", 
      techUsed:["python", "Django", "React Native", "Javascript"],
      link:"https://play.google.com/store/apps/details?id=com.inpoint.revistabs1",
      linkType:"store"},
      {image:bsRevistaImg, 
      altText:"Buena Salud Magazine", 
      projectName:"BS magazine", 
      description:"A mobile App for a medical magazine the CMS/APi was made with django and the app with react native", 
      techUsed:["python", "Django", "React Native", "Javascript"],
      link:"https://play.google.com/store/apps/details?id=com.inpoint.buenasalud2",
      linkType:"store"},
      {image:ubigasImg, 
      altText:"Ubigas image", 
      projectName:"Ubigas", 
      description:"Mobile app that shows you the location of all the gas stations close to you and their prices, the mobile app was made with React native and the CMS with django", 
      techUsed:["python", "Django", "React Native", "Javascript"],
      link:"#",
      linkType:"broken"}
]
