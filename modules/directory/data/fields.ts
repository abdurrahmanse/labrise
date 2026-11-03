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
  }
};

export function fieldOf(group: string): FieldInfo {
  const g = group.toLowerCase();
  if (g.includes("vision")) return FIELDS.vision;
  if (g.includes("nlp") || g.includes("information retrieval")) return FIELDS.nlp;
  if (g.includes("robot")) return FIELDS.robotics;
  if (g.includes("reinforcement")) return FIELDS.rl;
  if (g.includes("theory") || g.includes("optimization")) return FIELDS.theory;
  if (g.includes("deep") || g.includes("geometric")) return FIELDS.dl;
  return FIELDS.ml;
}
