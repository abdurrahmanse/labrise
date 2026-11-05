export interface FieldInfo {
  title: string;
  about: string;
  topics: string[];
  skills: string[];
  reading: string[];
}

const FIELDS: Record<string, FieldInfo> = {
  vision: {
    title: "Computer Vision",
    about: "Teaching machines to understand images and video, from recognition and segmentation to 3D reconstruction.",
    topics: ["Object detection and segmentation", "3D vision and SLAM", "Self-supervised and foundation models", "Video understanding"],
    skills: ["PyTorch", "Linear algebra and geometry", "Dataset handling and evaluation"],
    reading: ["Recent CVPR, ICCV and ECCV papers", "Vision transformer papers", "Stanford CS231n notes"]
  },
  nlp: {
    title: "Natural Language Processing",
    about: "Models that read, write and reason with human language, including large language models.",
    topics: ["Language model training and evaluation", "Machine translation and multilinguality", "Reasoning and alignment", "Retrieval and question answering"],
    skills: ["PyTorch and Hugging Face", "Probability and statistics", "Evaluation design"],
    reading: ["ACL, EMNLP and NeurIPS papers", "Transformer and scaling papers", "Stanford CS224n"]
  },
  robotics: {
    title: "Robotics",
    about: "Machines that sense and act in the physical world, combining perception, control and learning.",
    topics: ["Robot learning", "Motion planning and control", "SLAM and perception", "Sim-to-real"],
    skills: ["Python and C++", "Control theory basics", "ROS and simulators"],
    reading: ["CoRL, ICRA and RSS papers", "Reinforcement learning surveys"]
  },
  rl: {
    title: "Reinforcement Learning",
    about: "Agents that learn to act by trial and feedback, from games to control and decision making.",
    topics: ["Policy optimisation", "Offline and model-based RL", "Exploration", "Multi-agent learning"],
    skills: ["Probability and optimisation", "PyTorch", "Careful experiment design"],
    reading: ["Sutton and Barto textbook", "ICML and NeurIPS RL papers"]
  },
  theory: {
    title: "ML Theory and Optimization",
    about: "Mathematical understanding of why and when learning algorithms work.",
    topics: ["Generalisation bounds", "Convex and non-convex optimisation", "Statistical learning", "Kernel methods"],
    skills: ["Strong calculus, linear algebra, probability", "Proof writing", "Python for experiments"],
    reading: ["COLT and NeurIPS theory papers", "Textbooks on statistical learning and optimisation"]
  },
  dl: {
    title: "Deep Learning",
    about: "Neural network models and training methods that power modern AI.",
    topics: ["Architectures and training dynamics", "Representation learning", "Generative models", "Efficiency"],
    skills: ["PyTorch or JAX", "Linear algebra and probability", "Reproducible experiments"],
    reading: ["ICLR and NeurIPS papers", "Deep Learning (Goodfellow et al.)"]
  },
  ml: {
    title: "Machine Learning",
    about: "Methods that learn from data, from probabilistic models to large-scale learning systems.",
    topics: ["Probabilistic and Bayesian methods", "Representation and generative learning", "Causality and robustness", "Applications in science and health"],
    skills: ["Python and PyTorch", "Probability and statistics", "Careful baselines"],
    reading: ["NeurIPS, ICML and ICLR papers", "Pattern Recognition and Machine Learning"]
  },
  mechanical: {
    title: "Mechanical Engineering",
    about: "Design, analysis and testing of machines, structures, fluids and heat, from experiments to simulation.",
    topics: ["Solid mechanics and fracture", "Fluid mechanics and heat transfer", "Design and additive manufacturing", "Dynamics, vibration and acoustics"],
    skills: ["Mechanics, thermodynamics and fluid mechanics", "CAD and finite element or CFD tools", "Experimental methods and uncertainty"],
    reading: ["Journals such as the Journal of Fluid Mechanics and the Journal of the Mechanics and Physics of Solids", "Standard textbooks in your sub-area", "Recent papers from the target group"]
  },
  aerospace: {
    title: "Aerospace Engineering",
    about: "Flight vehicles, propulsion, space systems and the aerodynamics, structures and control behind them.",
    topics: ["Aerodynamics and propulsion", "Spacecraft dynamics and control", "Lightweight structures and composites", "Autonomous and unmanned systems"],
    skills: ["Fluid mechanics and dynamics", "Numerical simulation", "Control basics and system modelling"],
    reading: ["AIAA journals and conference papers", "Textbooks on flight dynamics and orbital mechanics", "Recent papers from the target group"]
  },
  electrical: {
    title: "Electrical & Electronic Engineering",
    about: "Circuits, devices, power electronics, photonics and electromagnetics, from components to complete systems.",
    topics: ["Analog, digital and mixed-signal circuits", "Power electronics and drives", "Photonics and optoelectronics", "Antennas and electromagnetics"],
    skills: ["Circuit analysis and electromagnetics", "Simulation tools such as SPICE or MATLAB", "Laboratory measurement"],
    reading: ["IEEE journals and conference papers in your area", "Standard circuits and electromagnetics textbooks", "Recent papers from the target group"]
  },
  comms: {
    title: "Communications & Signal Processing",
    about: "Sending, sensing and processing information: wireless systems, networks, information theory and signal and image processing.",
    topics: ["Wireless and mobile communications", "Information and coding theory", "Signal and image processing", "Sensing and estimation"],
    skills: ["Probability, linear algebra and Fourier analysis", "MATLAB or Python for signals", "Understanding of standards and protocols"],
    reading: ["IEEE Transactions on Signal Processing and on Communications", "Elements of Information Theory (Cover and Thomas)", "Recent papers from the target group"]
  },
  control: {
    title: "Control & Automation",
    about: "Making systems behave as intended, from feedback design and estimation to automation of machines and processes.",
    topics: ["Linear and nonlinear control", "State estimation and filtering", "Optimisation-based and robust control", "Automation and mechatronics"],
    skills: ["Differential equations and linear algebra", "MATLAB or Python control tools", "Modelling of physical systems"],
    reading: ["Automatica and IEEE Transactions on Automatic Control", "Textbooks on feedback systems and optimal control", "Recent papers from the target group"]
  },
  civil: {
    title: "Civil & Structural Engineering",
    about: "Buildings, bridges, infrastructure and the ground and water around them, with a focus on safety, durability and sustainability.",
    topics: ["Structural analysis and resilience", "Geotechnical and earthquake engineering", "Transport and infrastructure systems", "Construction materials and sustainability"],
    skills: ["Structural mechanics and soil mechanics", "Finite element tools", "Field and laboratory testing"],
    reading: ["Journals such as Engineering Structures and Geotechnique", "Design codes and standards of your region", "Recent papers from the target group"]
  },
  chemical: {
    title: "Chemical & Process Engineering",
    about: "Processes that turn raw materials into products, with reaction engineering, separation, transport and process control.",
    topics: ["Reaction engineering and catalysis", "Separation and membrane processes", "Process systems and optimisation", "Transport phenomena"],
    skills: ["Thermodynamics and transport", "Process simulation tools", "Laboratory methods"],
    reading: ["Chemical Engineering Science and AIChE Journal", "Textbooks on reaction engineering and transport phenomena", "Recent papers from the target group"]
  },
  materials: {
    title: "Materials Science & Nanotechnology",
    about: "How structure at small scales sets the properties of metals, polymers, ceramics, semiconductors and nanomaterials.",
    topics: ["Metals, alloys and composites", "Functional and electronic materials", "Nanomaterials and thin films", "Characterisation and modelling"],
    skills: ["Physics and chemistry of solids", "Characterisation methods such as microscopy and diffraction", "Data analysis and modelling"],
    reading: ["Acta Materialia, Advanced Materials and similar journals", "Standard textbooks in materials science", "Recent papers from the target group"]
  },
  energy: {
    title: "Energy & Sustainability",
    about: "Producing, storing and using energy cleanly: batteries, solar, power systems, nuclear and environmental engineering.",
    topics: ["Batteries and energy storage", "Solar and renewable energy conversion", "Power systems and grids", "Environmental and process sustainability"],
    skills: ["Thermodynamics and electrochemistry", "Modelling and simulation", "Experimental methods"],
    reading: ["Journal of Power Sources and Energy & Environmental Science", "Textbooks on energy systems and electrochemistry", "Recent papers from the target group"]
  },
  biomedical: {
    title: "Biomedical Engineering",
    about: "Engineering tools for health: devices, imaging, biomaterials and computational models of the body.",
    topics: ["Medical devices and instrumentation", "Biomedical imaging and signals", "Biomaterials and tissue engineering", "Biomechanics and computational models"],
    skills: ["Engineering fundamentals with biology basics", "Signal and image analysis", "Regulatory awareness for devices"],
    reading: ["IEEE Transactions on Biomedical Engineering and similar journals", "Textbooks on physiology for engineers", "Recent papers from the target group"]
  },
  industrial: {
    title: "Industrial & Manufacturing Engineering",
    about: "Designing efficient production and service systems: manufacturing processes, operations research, quality and reliability.",
    topics: ["Manufacturing processes and automation", "Operations research and scheduling", "Quality, reliability and safety", "Supply chain and logistics"],
    skills: ["Optimisation and statistics", "Simulation and data analysis", "Process and systems thinking"],
    reading: ["Journal of Manufacturing Systems and Operations Research", "Textbooks on operations research and quality engineering", "Recent papers from the target group"]
  },
  general: {
    title: "Engineering Research (general)",
    about: "Research across engineering disciplines, often between fields such as mechanics, materials, electronics and computing.",
    topics: ["Modelling and simulation", "Experimental methods", "Design and optimisation", "Measurement and data analysis"],
    skills: ["Strong mathematics for your discipline", "Programming for analysis", "Careful experiment design and documentation"],
    reading: ["The leading journals of your sub-field", "Recent papers from the target group", "Standard textbooks in your area"]
  },
  computing: {
    title: "Computer Engineering & Software",
    about: "Computing systems, software, hardware, data and human-computer interaction, treated as engineering research.",
    topics: ["Computer architecture and embedded systems", "Software engineering and verification", "Data management and information systems", "Human-computer interaction and graphics"],
    skills: ["Programming in several languages", "Algorithms and systems fundamentals", "Careful experimental evaluation"],
    reading: ["ACM and IEEE journals in your area", "Standard textbooks on systems and algorithms", "Recent papers from the target group"]
  }
};

/** Which research field a professor's group label belongs to. The first matching rule wins, so specific engineering words come first. */
const RULES: [RegExp, keyof typeof FIELDS][] = [
  [/biomedical/, "biomedical"],
  [/aerospace|aeronaut|aircraft|spacecraft/, "aerospace"],
  [/civil|structural|construction|geotechn|transport/, "civil"],
  [/communication|signal processing|wireless|network|information theory/, "comms"],
  [/material|nano|polymer|metal|ceramic|composite/, "materials"],
  [/energy|power|renewable|nuclear|batter|environment|sustainab/, "energy"],
  [/chemical|process engineering|catalys/, "chemical"],
  [/industrial|manufactur|operations|reliability/, "industrial"],
  [/control|automation|mechatron/, "control"],
  [/mechanical|fluid|thermal|mechanics|automotive/, "mechanical"],
  [/electrical|electronic|photonic|optic|circuit|semiconductor/, "electrical"],
  [/vision/, "vision"],
  [/nlp|language|information retrieval|speech/, "nlp"],
  [/robot/, "robotics"],
  [/reinforcement/, "rl"],
  [/theory|optimization/, "theory"],
  [/deep|geometric/, "dl"],
  [/learning|artificial|\bai\b|data mining|cognitive|evolutionary|recommender|knowledge|explainable|causal/, "ml"],
  [/software|computer|hardware|system|security|human-computer|interaction|information|database|data management|graphics|computing|algorithm/, "computing"]
];

export function fieldOf(group: string): FieldInfo {
  const g = group.toLowerCase();
  const hit = RULES.find(([pattern]) => pattern.test(g));
  return FIELDS[hit ? hit[1] : "general"];
}
