/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Avulamanda Sai Vamshi",
  description:
    "An ambitious AI & Data Science developer. I’m very passionate about building real-world solutions using AI and data..",
  og: {
    title: "Avulamanda Sai Vamshi portfolio",
    type: "website",
    url: "http://www.AvulamandaSaiVamshi.com/",
  },
};

//Home Page
const greeting = {
  title: "Avulamanda Sai Vamshi",
  logo_name: "Avulamanda Sai Vamshi",
  nickname: "SaiVamshi.Asv",
  subTitle:
    "An ambitious AI & Data Science developer. I’m very passionate about building real-world solutions using AI and data..",
  resumeLink:
    "https://drive.google.com/file/d/1e4LWvYB-7ShzvwUWGfwg_zv6riVKsD0m/view?usp=sharing",
  portfolio_repository: "https://github.com/saivamshi2024/MyPortfolio",
  githubProfile: "https://github.com/saivamshi2024",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/saivamshi2024",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/avulamanda-sai-vamshi-330a1a26b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vamshi.sai2024@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sai_vamshi_2024",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const introduction = {
  title: "What Am I Upto",

  intro:
    "I'm Avulamanda Sai Vamshi, an ambitious AI & Data Science explorer. I’m passionate about building real-world solutions using AI and data.",

  currentFocus: [
    "🔍 Exploring advanced machine learning algorithms...",
    "📊 Developing skills in data analytics and visualization.",
    "🌐 Contributing to open-source AI projects.",
    "🧠 Building a strong foundation in neural networks and deep learning.",
  ],

  currently: [
    "🤖 Working on personal projects in Agentic AI and LLMs.",
    "📚 Learning advanced statistical methods for data analysis.",
    "🤝 Collaborating with peers on innovative AI solutions.",
  ],
};

const skills = {
  data: [
    {
      title: "Data Science with GEN AI",
      fileName: "DataScienceImg",
      skills: [
        "🔍 Exploratory Data Analysis and Data Visualization using Python libraries.",
        "🧠 Developing Machine Learning and Deep Learning models.",
        "📊 Statistical analysis, feature engineering, and data preprocessing.",
        "🧪 Working with Jupyter Notebooks, Scikit-learn, Pandas, NumPy, and Matplotlib.",
        "🤖 Building AI solutions and integrating with Generative AI frameworks.",
        "🌐 Creating basic web pages using HTML and CSS.",
        "📈 Developing interactive dashboards with Streamlit & Gradio.",
        "🧠 Gaining hands-on knowledge of AI fundamentals including perception, reasoning, and autonomous decision-making.",
        "🤝 Learning to build agent-based systems that interact with environments and exhibit autonomous goal-driven behavior.",
        "💬 Understanding the architecture and capabilities of LLMs like GPT, Claude, and LLaMA for natural language processing tasks.",
        "🛠️ Practicing prompt engineering and fine-tuning to customize LLM behavior for real-world use cases.",
        "🧩 Learning how to integrate LLMs with external APIs/tools to perform complex tasks such as data analysis, report generation, or coding.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            color: "#F37626",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#14BF96",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "logos:matplotlib-icon",
          style: {
            color: "#11557C",
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "fa-solid:chart-line",
          style: {
            color: "#006699",
          },
        },
        {
          skillName: "Statistics",
          fontAwesomeClassname: "mdi:chart-bar", // generic chart icon
          style: {
            color: "#4CAF50",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
        {
          skillName: "Gradio",
          fontAwesomeClassname: "simple-icons:gradio",
          style: {
            color: "#FFB300",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "Data Analytics & Business Analytics",
      fileName: "FullStackImg",
      skills: [
        "📊 Deriving actionable insights from structured and unstructured data using analytical techniques",
        "📈 Experience in business intelligence tools like Power BI for interactive dashboards and reporting",
        "🧮 Performing data cleaning, statistical analysis, and hypothesis testing to support business decisions",
        "🕵️‍♂️ Creating predictive models and working with time series forecasting using Python and R",
        "🧠 Applying machine learning for customer segmentation, churn analysis, and sales forecasting",
        "📈 Building interactive dashboards with Tableau and Power BI",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            color: "#276DC3",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            backgroundColor: "transparent",
            color: "#217346",
          },
        },
        {
          skillName: "Scikit Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#1299F3",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/vamshi_sai2024/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/vamshi_sai2024",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/vamshi888",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/avulamandasaivamshi",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Methodist College of Engineering and Technology",
      subtitle:
        "B.E(Bachelor of Engineering) in Artificial Intelligence & Data Science",
      logo_path: "Methodist.png",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN, AI etc.",
        "⚡ Apart from this, I am currently gaining Hands-on Full Stack Data Science with GEN-AI.",
        "⚡ I have done several projects in the field of Machine Learning and AI.",
        "⚡ I Done several certifications on Data Science and AI.",
      ],
      website_link: "https://methodist.edu.in/",
    },
    {
      title: "Narayana Junior College",
      subtitle: "Intermediate in MPC",
      logo_path: "narayana_logo.png",
      alt_name: "Narayana Junior College",
      duration: "2019 - 2021",
      descriptions: [],
      website_link: "https://www.narayanagroup.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Generative-AI Virtual Internship	",
      subtitle: "- EduSkills Foundation",
      logo_path: "Eduskills_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZWNnLDJYA1Ly5ffiD74rtro4nA3Vnsnc/view",
      alt_name: "EduSkills",
      color_code: "#fffffc",
    },
    {
      title: "Programming Essentials in Python",
      subtitle: "- CISCO Networking Academy",
      logo_path: "Cisco_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1WAI4_c4Jcao601NXfJiWkE1pACtUxWPD/view",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "Data Analytics",
      subtitle: "- Forage (Accenture Virtual Experience)",
      logo_path: "Forage_accenture.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZCuKsxPUxK5UyYhDcpMLH9UFy1BOxbNT/view",
      alt_name: "Forage Accenture",
      color_code: "#00000099",
    },
    {
      title: " Switching, Routing, and Wireless Essentials",
      subtitle: "- CISCO Networking Academy",
      logo_path: "Cisco_logo.png",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/9d2f053d-3e24-42ae-81ce-4f8e08b2a6db",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "Introduction to Cybersecurity",
      subtitle: "- CISCO Networking Academy",
      logo_path: "Cisco_logo.png",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/b287c55b-78f5-4581-aeba-6fa28926f8e1",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "Cybersecurity Essentials",
      subtitle: "- CISCO Networking Academy",
      logo_path: "Cisco_logo.png",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/e027abf1-c72c-424c-965a-452b6efb2b74",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "Introduction to Packet Tracer",
      subtitle: "- CISCO Networking Academy",
      logo_path: "Cisco_logo.png",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/ff4c3196-3a3b-42ca-80f2-c6a36488b390",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Experience and Internship",
  description:
    "I have hands-on experience in AI, Data Science, Python, SQL, Machine Learning, and Generative AI through my professional experience, internships, and projects. I have worked on real-world applications involving data analysis, machine learning, computer vision, and AI-powered solutions using technologies such as Pandas, NumPy, Scikit-learn, TensorFlow, OpenCV, Streamlit, and Django. Alongside my AI and Data Science journey, I am currently expanding my software development skills by learning C# and React to build modern and scalable applications. I am passionate about combining AI, data, and software development to create practical real-world solutions while continuously improving my technical skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Information Technology Associate - INTERN",
          company: "NEWMARK.",
          company_url: "https://www.nmrk.com/",
          logo_path: "Newmark.jpg",
          duration: "June 2026 - Present",
          location: "Hyderabad, Telangana",
          description:
            "Currently working as an Intern at Newmark, gaining hands-on experience in full-stack web development using C# and React. Contributing to web application projects and developing skills in both frontend and backend technologies.",
          color: "#000000",
        },

        {
          title: "Associate - Fraud Analyst",
          company: "Wipro.",
          company_url: "https://www.wipro.com/",
          logo_path: "Wipro-logo.png",
          duration: "August 2025 - June 2026",
          location: "Hyderabad, Telangana",
          description:
            "Worked in the Payments process, handling and reviewing payment-related transactions across four operational pools: FT, ACH, PMH, and PV. Ensured accurate processing of transactions, followed defined procedures and quality standards, investigated exceptions, and maintained accuracy while meeting process requirements and turnaround times.",
          color: "#000000",
        },

        {
          title: "Trainee at Naresh IT",
          company: "Naresh i Technologies.",
          company_url: "https://nareshit.com/",
          logo_path: "Naresh_It.png",
          duration: "February 2025 - July 2025",
          location: "Hyderabad, Telangana",
          description:
            "At Naresh i Technologies, I explored Data Science and Generative AI, gaining hands-on experience with Python, ML models, data analytics, and building AI solutions using modern Gen AI frameworks.",
          color: "#000000",
        },
      ],
    },

    {
      title: "Internships",
      experiences: [
        {
          title: "Artificial Intelligence-Machine Learning Intern",
          company: "Eduskkils Foundation.",
          company_url: "https://eduskillsfoundation.org/",
          logo_path: "eduskills.png",
          duration: "April 2024 - June 2024",
          location: "Remote, Hyderabad",
          description:
            "During my remote AI-ML internship, I gained practical experience in machine learning, data preprocessing, model building, and explored Generative AI concepts while working on real-time projects and collaborative tasks.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ASV.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Telangana,Hyderabad",
    locality: "San Jose",
    country: "India",
    region: "Indian",
    postalCode: "500058",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/q2XLUVX1AiqygVgm9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  introduction,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
