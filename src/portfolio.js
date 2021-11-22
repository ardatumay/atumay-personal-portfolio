/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Arda Tumay",
  title: "Hi all, I'm Arda",
  subTitle: emoji(
    "A passionate computer scientist who loves solving real life problems by converting coffee into code. Skilled at full stack software development and machine learning."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ardatumay",
  linkedin: "https://www.linkedin.com/in/arda-tumay/",
  gmail: "ardatm15@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: " with an  Also digging deep in machine learning with PyTorch.",
  subTitle: "A former game developer with unity. Fell in love with tailoring full stack web / mobile applications. Currently exploring the power of deep learning.",
  skills: [
    emoji("⚡ Solid knowledge on full stack software development 🚀"),
    emoji("⚡ Very experienced about building Web and Mobile applications with JavaScript / React / React Native and some other cool libraries and frameworks."),
    emoji("⚡ Experienced about building backend applications with Java / C# / Spring Boot / Vert.x / .Net with microservices."),
    emoji("⚡ Developed small-sized applications with websockets with Socket.io and Express.js as a webserver. "),
    emoji("⚡ Experience of building web services with  C# / .Net / Java / Vert.x / Spring Boot / Hibernate / Oracle / Postgre / Firebase."),
    emoji("⚡ Formerly developed numerous casual / hyper casual games with unity."),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"),
    emoji("⚡ Learning machine learning / deep learning with PyTorch / Python for Master Thesis."),
    emoji("⚡ Worked on small projects about  parallel programming with mpi/openmp/cuda."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    ,
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "TED University",
      logo: require("./assets/images/TEDUlogoEn.gif"),
      subHeader: "Bachelor of Science in Computer Engineering.",
      duration: "September 2014 - July 2019",
      desc: "Ranked first among department with the GPA of 3.72",
      descBullets: ["Favorite courses: Software Engineering, Operating Systems, Computer Organization.", "Gained 100% full scholarship", "Language: 100% English"]
    },
    {
      schoolName: "Bilkent University",
      logo: require("./assets/images/bilkent-amblem.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2020 - Continuning",
      desc: "Master Thesis: Context Aware Object Detection in Remote Sensing Imagery",
      descBullets: ["Trying to detect small objects in aerial imagery with deep learning using modified faster-rcnn to be specific. ",
        "Favorite courses: Deep Learning, Computer Vision and Parallel Programming."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Application Developer",
      company: "TED University",
      companylogo: require("./assets/images/TEDUlogoEn.gif"),
      date: "June 2018 – April 2019",
      desc: "Developed official mobile application of university. Available in stores and named TeduApp.",
      descBullets: [
        "Tech stack: React-Native, Firebase.",
        "Moodle integration",
        "Student council page with announcements and votings",
        "University's official web page integration for fetching news and announcements"
      ]
    },
    {
      role: "Part-Time Software Engineer",
      company: "Olympos",
      companylogo: require("./assets/images/olimpos.jpg"),
      date: "September 2018 – July 2019",
      desc: "Developed a mobile applicaiton of main erp software. Available in google play store with name OliMobile",
      descBullets: [
        "Tech stack: React-Native, Asp.Net, Firebase, Oracle",
        "Developed webservice with Asp.Net and Oracle DB.",
        "Firebase Real-Time database for user analytics.",
        "Implemented sub-package of requirement set of main erp software",
        "Olimpos is a software company with one of the most effective ERP software in retail sector of Turkey."
      ]
    },
    {
      role: "Full Stack Software Engineer",
      company: "MilSOFT",
      companylogo: require("./assets/images/milsoft.jpg"),
      date: "November 2019 – September 2021",
      desc: "Developed a full stack web application based on international integrated logistic support specifications.",
      descBullets: [
        "Tech stack: React, TypeScript, Webpack, Java, Vert.x, Jersey (An implementation of JAX-RS web service specification), Hibernate, PostgreSql, Cypress for functional tests, JUnit for unit tests",
        "Jenkins for CI/CD pipelines.",
        "Architecture: Micro Frontends - Micro Services (Reactive Programming with Vert.x).",
        "Prepare detailed documentation to comply with CMMI-5 requirements",
        "Scrum-SAFe for development methodology",
        "Integrated Logistic Support application",
        "Based on global S-Series integrated logistic support specifications",
        "MilSOFT is a big software company working in defense industry of Turkey. Certified with CMMI-5."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal and Freelance Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/anatomy-platform.jpg"),
      projectName: "Anatomy Platform",
      projectDesc: "A desktop application where medical students use for the anatomy classes to display 3D anatomy objects, solve quizzes and analyze teaching materials. Teachers manage system from a web application. Tech Stack: Unity, React, Spring Boot, Firebase. ",
      footerLink: [
        {
          name: "Source Code",
          url: "https://bitbucket.org/arda_tumay/anatomygame/src/master/Assets/Images/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/safebuslogo.png"),
      projectName: "SafeBus",
      projectDesc: "A Mobile application for students and their parents. Parents can monitor location of their children while they are going to shool or anywhere outside home. Tech Stack: Native Android application with java for frontend, Firabase Real-Time Database and Firebase Cloud Functions.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/ardatumay/SafeBus"
        }
      ]
    },
    {
      image: require("./assets/images/bodrumextra.png"),
      projectName: "Bodrum Extra",
      projectDesc: "A hybrid Mobile application that presents events, concerts, parties, restaurants and clubs of one of the biggest touristic cities of Turkey that is Bodrum. Tech Stack: React for admin panel, React Native for mobile application(IOS, Android), Firebase Real-Time Database Firebase Cloud Functions for backend.  ",
      footerLink: [
        {
          name: "See App",
          url: "https://play.google.com/store/apps/details?id=com.visitbodrum&hl=tr&gl=US"
        }
      ]
    },
    {
      image: require("./assets/images/cagdas.png"),
      projectName: "Çağdaş",
      projectDesc: "A hybrid Mobile application for customer relationship management of Çağdaş which is one of the biggest local supermarkets in Turkey. Create customer card, earn bonus, analyze products and brochures, examine statistics for old shoppings. Tech Stack: React Native for ios and android mobile application. ",
      footerLink: [
        {
          name: "See App",
          url: "https://apps.apple.com/tr/app/%C3%A7a%C4%9Fda%C5%9F/id1566011323"
        }
      ]
    },
    {
      image: require("./assets/images/teduapp.png"),
      projectName: "TeduApp",
      projectDesc: "Official mobile application of TED University. Students can reach moodle and see classes. Unviersity news, events and announcements. Important links for students and personnels. Student council voting page for students. Tech Stack: React Native for ios and android mobile application, Firebase Real-Time Database for storage. ",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/TEDUniversity/TEDUAPP"
        }
      ]
    },
    {
      image: require("./assets/images/olimobile.png"),
      projectName: "Olimobile",
      projectDesc: "A mobile branch of main ERP software of Olimpos A.Ş. It realizes subset of requirements of ERP software and used in handheld terminals. Tech Stack: React Native for android mobile application.",
      footerLink: [
        {
          name: "See App",
          url: "https://play.google.com/store/apps/details?id=com.olimobile&hl=tr"
        }
      ]
    },
    {
      image: require("./assets/images/visualern.png"),
      projectName: "Visual Learn",
      projectDesc: "A mobile application for children to learn objects, colors and texts fast and easy! Open app, show some objects to the camera and it tells about the object.  Tech Stack: Native Android with java. Google ML api for image classification and optical text recognition.",
      footerLink: [
        {
          name: "See App",
          url: "https://play.google.com/store/apps/details?id=tr.edu.tedu.visualearn&hl=tr"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CEOx1Day Finalist",
      subtitle:
        "Among 20 finalist from 2000 students from all around the Turkey. Had chance to have 2 consecutive days with CEO of Cisco, Turkey.",
      image: require("./assets/images/logo-ceo-cube.png"),
      footerLink: [
        {
          name: "Finalists",
          url: "https://www.odgersberndtson.com/tr-tr/ceox1day/ceolar-ve-finalistler/2018-2019-program%C4%B1"
        },
        {
          name: "CEOx1Day Global Page",
          url: "https://www.odgersberndtson.com/en-tr/about-us/ceox1day"
        },
        {
          name: "Letter Published in HBR Turkey. In turkish.",
          url: "https://hbrturkiye.com/sponsorlu-icerik/kendini-kesfet"
        }
      ]

    },
    {
      title: "3rd in the Bilkent University Mobile Software Development Marathon",
      subtitle:
        "Proposed a business model to make education for children more equal and more democratic and we transformed our business model into a mobile application in 30 hours.",
      image: require("./assets/images/cyberparklogo.png"),
      footerLink: [
        {
          name: "News about event in Turkish",
          url: "https://w3.bilkent.edu.tr/www/mobil-uygulama-gelistirme-maratonu-2019/"
        },
        {
          name: "News about event in Turkish",
          url: "https://www.tedu.edu.tr/tr/main/gundem/haberler/bilgisayar-muh-bolumu-ogrencilerimiz-mobil-uygulama-gelistirme-yarismasinda-3"
        }
      ]
    },
    {
      title: "Graduated with highest GPA from computer engineering at Ted University.",
      subtitle: "Completed bachelors degree with the GPA of 3.72.",
      image: require("./assets/images/TEDUlogoEn.gif"),
      footerLink: [

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+90-5342800526",
  email_address: "ardatm15@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
