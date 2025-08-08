export const servicesData = [
  {
    title: "Full Stack Development",
    description:
      "I build scalable, secure, and interactive full-stack web applications using modern frameworks. From dynamic UIs to API integrations and database designs, I deliver seamless digital experiences tailored to real-world use cases.",
    items: [
      {
        title: "Frontend Engineering",
        description: "(React.js, Tailwind CSS, GSAP, Responsive UI/UX)",
      },
      {
        title: "Backend Development",
        description: "(Node.js, Express.js, RESTful APIs, GraphQL)",
      },
      {
        title: "Database Management",
        description: "(MongoDB, MySQL, Data Modeling, Query Optimization)",
      },
    ],
  },
  {
    title: "IoT & Embedded Systems",
    description:
      "I specialize in building real-time, sensor-based IoT solutions using microcontrollers and wireless protocols. With experience in field deployments and sensor integration, I help bridge physical environments with digital intelligence.",
    items: [
      {
        title: "Hardware Integration",
        description: "(Arduino, Microcontrollers, Sensors, GSM/GPS Modules)",
      },
      {
        title: "Connectivity & Protocols",
        description: "(LoRa, ESP-NOW, Bluetooth, RESTful IoT APIs)",
      },
      {
        title: "Smart Systems",
        description: "(Edge AI, Real-Time Monitoring, Embedded Programming)",
      },
    ],
  },
  {
    title: "IoT Security & Optimization",
    description:
      "Security and performance are critical in connected environments. I design secure communication protocols and optimize code for power and latency to ensure reliable long-term performance in IoT deployments.",
    items: [
      {
        title: "Secure Communication",
        description: "(OAuth2, CORS, HTTPS, XSS/SQLi Protection)",
      },
      {
        title: "Performance Tuning",
        description: "(Memory Efficiency, Power Saving, Low-Latency Processing)",
      },
      {
        title: "System Audits",
        description: "(Firmware Review, Refactoring, Failure Analysis)",
      },
    ],
  },
  {
    title: "GIS & Smart Infrastructure",
    description:
      "With a passion for smart cities and location intelligence, I create GIS-driven apps for navigation, tracking, and infrastructure mapping—combining geospatial data with IoT for better real-world impact.",
    items: [
      {
        title: "Spatial Data Visualization",
        description: "(Leaflet, Mapbox, Google Maps, GeoJSON)",
      },
      {
        title: "Smart Navigation Systems",
        description: "(Bluetooth Beacons, Lidar Mapping, Real-Time Routes)",
      },
      {
        title: "Urban Intelligence",
        description: "(Station Mapping, Environmental Monitoring, ML Integration)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Klarvick Helm",
    description:
      "Designed a real-time underground mining safety system using IoT sensors, Edge AI, and LoRa/ESP-NOW for predictive hazard detection and health monitoring. Achieved 85% accuracy and 40% faster response time.",
    href: "",
    image: "/assets/projects/klarvick-helm.jpg",
    bgImage: "/assets/backgrounds/mining.jpg",
    frameworks: [
      { id: 1, name: "ESP32" },
      { id: 2, name: "Edge AI" },
      { id: 3, name: "LoRa" },
      { id: 4, name: "ESP-NOW" },
    ],
  },
  {
    id: 2,
    name: "RoamRide",
    description:
      "Built a full-stack car rental system with real-time vehicle tracking using Arduino, GPS (Neo-6M), and GSM (SIM900A), enabling ~2.5m accuracy and 80% operational efficiency boost.",
    href: "",
    image: "/assets/projects/roamride.jpg",
    bgImage: "/assets/backgrounds/roads.jpg",
    frameworks: [
      { id: 1, name: "Arduino UNO" },
      { id: 2, name: "Neo-6M GPS" },
      { id: 3, name: "SIM900A GSM" },
      { id: 4, name: "MERN" },
    ],
  },
  {
    id: 3,
    name: "StationWay",
    description:
      "Developed a smart railway navigation solution using real-time sensor data and Bluetooth beacons. Included LIDAR mapping, IoT integration, and route optimization algorithms.",
    href: "",
    image: "/assets/projects/stationway.jpg",
    bgImage: "/assets/backgrounds/station.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "LIDAR" },
      { id: 3, name: "Bluetooth Beacons" },
      { id: 4, name: "IoT Sensors" },
    ],
  },
  {
    id: 4,
    name: "SwiftPrint 3D",
    description:
      "Engineered a custom 3D printer from scratch with Arduino-based firmware, precision stepper motors, and high-temp extruder. Enabled rapid prototyping for in-house projects.",
    href: "",
    image: "/assets/projects/swiftprint.jpg",
    bgImage: "/assets/backgrounds/3dprinter.jpg",
    frameworks: [
      { id: 1, name: "Arduino Mega" },
      { id: 2, name: "Marlin Firmware" },
      { id: 3, name: "Stepper Motors" },
      { id: 4, name: "Fusion 360" },
    ],
  },
  {
    id: 5,
    name: "Arca Nova",
    description:
      "An intelligent cold storage rental system (AgriVault) for farmers—solar-powered, sensor-driven, and IoT-enabled to minimize post-harvest loss in remote regions.",
    href: "",
    image: "/assets/projects/arca-nova.jpg",
    bgImage: "/assets/backgrounds/farm.jpg",
    frameworks: [
      { id: 1, name: "ESP32" },
      { id: 2, name: "Solar IoT" },
      { id: 3, name: "Sensor Suite" },
      { id: 4, name: "MongoDB" },
    ],
  },
  {
    id: 6,
    name: "Portfolio Website",
    description:
      "A modern, interactive portfolio website built using Vite, Tailwind CSS, GSAP animations, and Three.js loaders. Includes project showcases, smooth UX, and dynamic effects.",
    href: "",
    image: "/assets/projects/portfolio.jpg",
    bgImage: "/assets/backgrounds/gradient.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Vite" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "GSAP" },
    ],
  },
];

export const achievements = [
  {
    id: 1,
    title: "Shining Star Award",
    description:
      "Awarded by college for outstanding innovation in IoT, embedded systems, and software solutions throughout the academic year.",
    image: "/assets/achievements/shining-star.png",
    bgImage: "/assets/backgrounds/star-bg.jpg",
  },
  {
    id: 2,
    title: "3rd Place – HackFest IIIT BBSR",
    description:
      "Recognized for developing a real-time prototype under pressure that addressed a social issue using IoT and AI during HackFest 2024.",
    image: "/assets/achievements/hackfest.png",
    bgImage: "/assets/backgrounds/hackathon-bg.jpg",
  },
  {
    id: 3,
    title: "Startup Cohort – ThingQbator",
    description:
      "Selected under NASSCOM’s startup incubation program for Klarvick Helm & Arca Nova — IoT-based solutions with strong societal impact.",
    image: "/assets/achievements/cohort.png",
    bgImage: "/assets/backgrounds/startup-bg.jpg",
  },
];

export const socials = [
  { name: "Instagram", href: "" },
  { name: "LeetCode", href: "https://leetcode.com/u/shubhangambiswal/" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shubhangam-biswal-284924283/",
  },
  {
    name: "GitHub",
    href: "https://github.com/ShubbXD",
  },
];
