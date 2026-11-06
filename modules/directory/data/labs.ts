import type { LabEntry } from "../types";
import { countries } from "./countries";

// Research labs, groups, institutes and communities that take students, with what each one offers.
// Every lab belongs to a country. Most sit under a university (the exact university name), and some name the listed
// professors who lead or work in them. Each link is checked by `npm run check:data`, so a lab never points at nothing.
// Labs change their pages and funding often: every entry links to the official page, so confirm there.
const regionOf = (country: string) => {
  const c = countries.find((x) => x.country === country);
  if (!c) throw new Error(`Lab country is not in the directory: ${country}`);
  return c.region;
};

const RG = "Research group";
const LAB = "Research lab";
const INST = "Institute";
const CENTRE = "Research centre";
const NET = "Community / network";

const lab = (
  name: string,
  kind: string,
  country: string,
  university: string | null,
  focus: string,
  offers: string,
  professors: string[],
  site: string
): LabEntry => ({ name, kind, country, region: regionOf(country), ...(university ? { university } : {}), focus, offers, professors, site });

export const labs: LabEntry[] = [
  // ---- Germany ----
  lab("Max Planck Institute for Intelligent Systems", INST, "Germany", "University of Tübingen", "Machine learning, robotics and computer vision", "Funded PhD places through the IMPRS-IS doctoral school, plus postdoctoral posts.", ["Bernhard Schölkopf"], "https://is.mpg.de"),
  lab("Tübingen AI Center", CENTRE, "Germany", "University of Tübingen", "Machine learning, vision and language, with several professors in one centre", "Doctoral posts in the member groups and joint ELLIS programmes.", ["Matthias Bethge", "Andreas Geiger", "Ulrike von Luxburg", "Matthias Hein", "Philipp Hennig", "Georg Martius"], "https://tuebingen.ai"),
  lab("Autonomous Vision Group", RG, "Germany", "University of Tübingen", "3D vision, self-driving and generative models", "Funded PhD and research assistant posts, advertised on the group page.", ["Andreas Geiger"], "https://www.cvlibs.net"),
  lab("Bethge Lab", RG, "Germany", "University of Tübingen", "Machine learning and neural networks that see like people", "Funded PhD posts and ELLIS co-supervision.", ["Matthias Bethge"], "https://bethgelab.org"),
  lab("CISPA Helmholtz Center for Information Security", INST, "Germany", "Saarland University / CISPA", "Trustworthy machine learning, security and privacy", "Salaried PhD posts and the CISPA research fellowship.", ["Dietrich Klakow"], "https://cispa.de/en"),
  lab("Max Planck Institute for Informatics", INST, "Germany", "Saarland University / CISPA", "Computer vision, graphics and the foundations of computing", "Funded PhD posts through the Saarbrücken graduate school.", ["Bernt Schiele"], "https://www.mpi-inf.mpg.de"),
  lab("Munich Center for Machine Learning (MCML)", CENTRE, "Germany", "TU Munich", "Machine learning across TU Munich and LMU Munich", "Salaried PhD posts in member groups and a joint research programme.", ["Daniel Cremers", "Stephan Günnemann"], "https://mcml.ai"),
  lab("Computer Vision Group (TU Munich)", RG, "Germany", "TU Munich", "3D vision, optimisation and deep learning for geometry", "Salaried PhD posts in the group.", ["Daniel Cremers"], "https://cvg.cit.tum.de"),
  lab("Computer Aided Medical Procedures (CAMP)", LAB, "Germany", "TU Munich", "Medical imaging and surgical computer vision", "Salaried PhD posts in the lab.", ["Nassir Navab"], "https://www.cs.cit.tum.de/camp"),
  lab("Machine Vision and Learning Group (LMU Munich)", RG, "Germany", "LMU Munich", "Generative models and visual synthesis", "PhD posts in the group.", ["Björn Ommer"], "https://ommer-lab.com"),
  lab("Center for Information and Language Processing (LMU Munich)", CENTRE, "Germany", "LMU Munich", "Language models and multilingual NLP", "PhD posts in the group.", ["Hinrich Schütze"], "https://www.cis.uni-muenchen.de"),
  lab("Machine Learning Lab (University of Freiburg)", LAB, "Germany", "University of Freiburg", "AutoML, deep learning and tabular foundation models", "Funded PhD posts and ELLIS co-supervision.", ["Frank Hutter"], "https://ml.informatik.uni-freiburg.de"),
  lab("Pattern Recognition and Image Processing Lab (Freiburg)", LAB, "Germany", "University of Freiburg", "Computer vision and robotics perception", "Funded PhD posts.", ["Thomas Brox"], "https://lmb.informatik.uni-freiburg.de"),
  lab("Ubiquitous Knowledge Processing Lab (UKP)", LAB, "Germany", "Technical University of Darmstadt", "NLP, scientific text and trustworthy language models", "Funded PhD posts.", ["Iryna Gurevych"], "https://www.informatik.tu-darmstadt.de/ukp"),
  lab("Helmholtz AI", NET, "Germany", null, "Applied AI across the Helmholtz research centres", "Research posts and a community of AI researchers across Germany.", [], "https://www.helmholtz.ai"),
  lab("German Research Center for Artificial Intelligence (DFKI)", INST, "Germany", null, "Applied AI, language technology and robotics", "Research assistant and doctoral posts, often with a partner university.", [], "https://www.dfki.de/en"),

  // ---- Switzerland ----
  lab("ETH AI Center", CENTRE, "Switzerland", "ETH Zurich", "Machine learning across ETH Zurich", "Doctoral fellowships with two supervisors from different groups.", [], "https://ai.ethz.ch"),
  lab("Max Planck ETH Center for Learning Systems", CENTRE, "Switzerland", "ETH Zurich", "Learning systems, with co-supervision between ETH Zurich and Max Planck institutes", "Funded PhD fellowships for joint projects.", ["Andreas Krause"], "https://learning-systems.org"),
  lab("Computer Vision and Geometry Group (ETH)", RG, "Switzerland", "ETH Zurich", "3D vision, SLAM and mixed reality", "Salaried PhD posts in the group.", ["Marc Pollefeys"], "https://cvg.ethz.ch"),
  lab("Autonomous Systems Lab (ETH)", LAB, "Switzerland", "ETH Zurich", "Mobile robots and perception", "Salaried PhD posts in the lab.", ["Roland Siegwart"], "https://asl.ethz.ch"),
  lab("Learning and Adaptive Systems Group (ETH)", RG, "Switzerland", "ETH Zurich", "Machine learning, active learning and safe decision-making", "Salaried PhD posts.", ["Andreas Krause"], "https://las.inf.ethz.ch"),
  lab("Data Analytics Lab (ETH)", LAB, "Switzerland", "ETH Zurich", "Machine learning and natural language", "Salaried PhD posts.", ["Thomas Hofmann"], "https://da.inf.ethz.ch"),
  lab("Robotics and Perception Group (University of Zurich)", RG, "Switzerland", "University of Zurich", "Drones, event cameras and agile robot navigation", "Salaried PhD posts.", ["Davide Scaramuzza"], "https://rpg.ifi.uzh.ch"),
  lab("Computer Vision Laboratory (EPFL CVLab)", LAB, "Switzerland", "EPFL", "Computer vision and 3D reconstruction", "Salaried PhD posts.", ["Pascal Fua"], "https://www.epfl.ch/labs/cvlab"),
  lab("Machine Learning and Optimization Laboratory (EPFL)", LAB, "Switzerland", "EPFL", "Optimisation, distributed learning and language models", "Salaried PhD posts.", ["Martin Jaggi"], "https://www.epfl.ch/labs/mlo"),
  lab("Laboratory for Information and Inference Systems (EPFL LIONS)", LAB, "Switzerland", "EPFL", "Optimisation and the theory of deep learning", "Salaried PhD posts.", ["Volkan Cevher"], "https://www.epfl.ch/labs/lions"),
  lab("Learning Algorithms and Systems Laboratory (EPFL LASA)", LAB, "Switzerland", "EPFL", "Robot learning and human-robot interaction", "Salaried PhD posts.", ["Aude Billard"], "https://www.epfl.ch/labs/lasa"),
  lab("Visual Intelligence for Transportation (EPFL VITA)", LAB, "Switzerland", "EPFL", "Perception and prediction of human motion", "Salaried PhD posts.", ["Alexandre Alahi"], "https://www.epfl.ch/labs/vita"),
  lab("Natural Language Processing Lab (EPFL)", LAB, "Switzerland", "EPFL", "Language models and knowledge", "Salaried PhD posts.", ["Antoine Bosselut"], "https://nlp.epfl.ch"),
  lab("Data Science Lab (EPFL dlab)", LAB, "Switzerland", "EPFL", "Computational social science and language", "Salaried PhD posts.", ["Robert West"], "https://dlab.epfl.ch"),
  lab("Idiap Research Institute", INST, "Switzerland", "Idiap Research Institute", "Speech, vision and machine learning", "Salaried PhD posts with EPFL doctoral schools.", [], "https://www.idiap.ch/en"),

  // ---- Sweden, Norway, Denmark, Finland ----
  lab("Robotics, Perception and Learning (KTH RPL)", RG, "Sweden", "KTH Royal Institute of Technology", "Robot perception, manipulation and learning", "Salaried PhD posts, including WASP positions.", ["Danica Kragic"], "https://www.kth.se/rpl"),
  lab("Chalmers AI Research Centre (CHAIR)", CENTRE, "Sweden", "Chalmers University", "Machine learning across Chalmers", "Salaried PhD posts in member groups.", ["Fredrik Kahl", "Devdatt Dubhashi"], "https://www.chalmers.se/en/centres/chair"),
  lab("Wallenberg AI, Autonomous Systems and Software Program (WASP)", NET, "Sweden", null, "AI, autonomous systems and software, across Swedish universities", "Funded PhD posts and a national graduate school.", [], "https://wasp-sweden.org"),
  lab("Norwegian Open AI Lab (NTNU)", CENTRE, "Norway", "NTNU", "Applied AI in industry and health", "PhD posts and partnerships with industry.", [], "https://www.ntnu.edu/ailab"),
  lab("Pioneer Centre for Artificial Intelligence", CENTRE, "Denmark", "University of Copenhagen", "Machine learning with six partner universities", "Salaried PhD and postdoctoral posts.", [], "https://www.aicentre.dk"),
  lab("Finnish Center for Artificial Intelligence (FCAI)", CENTRE, "Finland", "Aalto University", "Machine learning and probabilistic AI, with Aalto and the University of Helsinki", "Doctoral posts in member groups.", [], "https://fcai.fi"),

  // ---- Netherlands, Belgium, Ireland, United Kingdom, Scotland ----
  lab("Amsterdam Machine Learning Lab (AMLab)", LAB, "Netherlands", "University of Amsterdam", "Probabilistic and deep learning", "Salaried PhD posts.", ["Jan-Willem van de Meent"], "https://amlab.science.uva.nl"),
  lab("Language Technology Lab (University of Amsterdam)", LAB, "Netherlands", "University of Amsterdam", "NLP and machine translation", "Salaried PhD posts.", ["Christof Monz"], "https://ltl.science.uva.nl"),
  lab("Computer Vision Lab (TU Delft)", LAB, "Netherlands", "TU Delft", "Computer vision and deep learning", "Salaried PhD posts.", ["Jan van Gemert"], "https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/intelligent-systems/pattern-recognition-bioinformatics/computer-vision-lab"),
  lab("Declarative Languages and Artificial Intelligence (KU Leuven DTAI)", RG, "Belgium", "KU Leuven", "Machine learning and logic-based AI", "Salaried or scholarship PhD posts.", [], "https://dtai.cs.kuleuven.be"),
  lab("Oxford Robotics Institute", INST, "United Kingdom", "University of Oxford", "Robot perception, planning and learning", "Studentships and Clarendon scholarship applicants.", [], "https://ori.ox.ac.uk"),
  lab("Machine Learning Group (Cambridge)", RG, "United Kingdom", "University of Cambridge", "Probabilistic machine learning", "Studentships and Gates Cambridge applicants.", [], "https://mlg.eng.cam.ac.uk"),
  lab("UCL Centre for Artificial Intelligence", CENTRE, "United Kingdom", "UCL", "Machine learning, vision and language", "Studentships and CDT places.", [], "https://www.ucl.ac.uk/ai-centre"),
  lab("The Alan Turing Institute", NET, "United Kingdom", null, "Data science and AI, with partner universities across the UK", "Doctoral enrichment and studentships through partner universities.", [], "https://www.turing.ac.uk"),
  lab("Institute for Language, Cognition and Computation (Edinburgh ILCC)", INST, "Scotland", "University of Edinburgh", "NLP, speech and cognitive science", "Studentships and CDT places.", [], "https://www.ilcc.inf.ed.ac.uk"),
  lab("Edinburgh Centre for Robotics", CENTRE, "Scotland", "University of Edinburgh", "Robotics, shared with Heriot-Watt University", "CDT studentships and PhD posts.", [], "https://www.edinburgh-robotics.org"),

  // ---- France, Italy, Spain, Austria, Portugal ----
  lab("LIX (Laboratoire d'informatique de l'École Polytechnique)", LAB, "France", "École Polytechnique", "Computer science, AI and data", "Doctoral contracts in the lab.", [], "https://www.lix.polytechnique.fr"),
  lab("LIP6 (Sorbonne Université)", LAB, "France", "Sorbonne Université", "Computer science, AI and networks", "Doctoral contracts.", [], "https://www.lip6.fr"),
  lab("Bruno Kessler Foundation (FBK)", INST, "Italy", "University of Trento", "Language technologies, AI and security", "PhD scholarships with the University of Trento.", [], "https://www.fbk.eu"),
  lab("Artificial Intelligence and Robotics Lab (Politecnico di Milano)", LAB, "Italy", "Politecnico di Milano", "Robotics and reinforcement learning", "PhD scholarships.", [], "https://airlab.deib.polimi.it"),
  lab("Computer Vision Center (CVC)", INST, "Spain", "Universitat Autònoma de Barcelona", "Computer vision and document analysis", "PhD contracts with the Autonomous University of Barcelona.", [], "https://www.cvc.uab.es"),
  lab("Barcelona Supercomputing Center", INST, "Spain", "Universitat Politècnica de Catalunya", "High-performance computing, AI and computer architecture", "PhD contracts with Polytechnic University of Catalonia.", [], "https://www.bsc.es"),
  lab("Institute for Machine Learning (JKU Linz)", INST, "Austria", "Johannes Kepler University Linz", "Deep learning and recurrent models", "Salaried PhD posts; ELLIS unit Linz.", [], "https://www.jku.at/en/institute-for-machine-learning"),

  // ---- Czech Republic, Poland, Hungary, Greece, Croatia, Slovakia, Bulgaria, Serbia, Cyprus, Latvia ----
  lab("Czech Institute of Informatics, Robotics and Cybernetics (CIIRC)", INST, "Czech Republic", "Czech Technical University in Prague", "Robotics, AI and industrial automation", "PhD stipend and project posts.", [], "https://www.ciirc.cvut.cz"),
  lab("Visual Recognition Group (Czech Technical University)", RG, "Czech Republic", "Czech Technical University in Prague", "Computer vision and image retrieval", "PhD stipend and project posts.", [], "https://cmp.felk.cvut.cz"),
  lab("Institute of Formal and Applied Linguistics (ÚFAL)", INST, "Czech Republic", "Charles University", "NLP and machine translation", "PhD stipends and project posts.", [], "https://ufal.mff.cuni.cz/home-page"),
  lab("Group of Machine Learning Research (GMUM)", RG, "Poland", "Jagiellonian University", "Machine learning, generative models and drug design", "Doctoral school stipend and project posts.", [], "https://gmum.net"),
  lab("Athena Research Center", INST, "Greece", null, "Information technologies, language and data", "Research posts and doctoral fellowships with Greek universities.", [], "https://www.athenarc.gr/en"),
  lab("Institute of Computer Science (FORTH-ICS)", INST, "Greece", "Foundation for Research and Technology – Hellas", "Computer vision, robotics and networks", "Doctoral posts and project grants.", ["Antonis Argyros"], "https://www.ics.forth.gr"),
  lab("Text Analysis and Knowledge Engineering Lab (TakeLab)", LAB, "Croatia", "University of Zagreb", "NLP and text mining", "PhD posts on funded projects.", ["Jan Šnajder"], "https://takelab.fer.hr"),
  lab("Kempelen Institute of Intelligent Technologies (KInIT)", INST, "Slovakia", null, "Trustworthy AI, language and data science", "PhD and research posts with Slovak universities.", ["Mária Bieliková"], "https://kinit.sk"),
  lab("INSAIT (Institute for Computer Science, Artificial Intelligence and Technology)", INST, "Bulgaria", "Sofia University St. Kliment Ohridski", "Computer science and AI, in partnership with ETH Zurich and EPFL", "Funded PhD and research posts.", [], "https://insait.ai"),
  lab("Institute for Artificial Intelligence Research and Development of Serbia", INST, "Serbia", null, "Applied AI and research projects", "Research posts and PhD co-supervision with Serbian universities.", [], "https://ivi.ac.rs"),
  lab("KIOS Research and Innovation Center of Excellence", CENTRE, "Cyprus", "University of Cyprus", "Intelligent systems, control and critical infrastructure", "PhD posts on funded projects.", ["Christos Panayiotou"], "https://www.kios.ucy.ac.cy"),
  lab("CYENS Centre of Excellence", CENTRE, "Cyprus", null, "Computer science, graphics and interactive technologies", "PhD and research posts with Cypriot universities.", [], "https://www.cyens.org.cy"),
  lab("Institute of Electronics and Computer Science (EDI)", INST, "Latvia", null, "Computer science, AI and embedded systems", "PhD and research posts, with Latvian universities.", [], "https://www.edi.lv/en"),

  // ---- Japan ----
  lab("RIKEN Center for Advanced Intelligence Project (AIP)", CENTRE, "Japan", null, "Machine learning, language and applied AI", "Research posts, student trainee programmes and joint graduate schools.", [], "https://aip.riken.jp"),
  lab("Matsuo Lab", LAB, "Japan", "Waseda University", "Deep learning and foundation models", "Graduate places with MEXT and university scholarships.", [], "https://weblab.t.u-tokyo.ac.jp/en"),
  lab("Tohoku NLP Group", RG, "Japan", "Tohoku University", "Natural language processing", "Graduate places with MEXT and university scholarships.", [], "https://www.nlp.ecei.tohoku.ac.jp"),
  lab("Computational Linguistics Laboratory (NAIST)", LAB, "Japan", "Nara Institute of Science and Technology", "NLP and machine translation", "Graduate places with MEXT and NAIST scholarships.", ["Yuji Matsumoto", "Taro Watanabe"], "https://cl.naist.jp/en"),
  lab("Neural Computation Unit (OIST)", RG, "Japan", "Okinawa Institute of Science and Technology", "Reinforcement learning and computational neuroscience", "Fully funded PhD places through the OIST graduate school.", ["Kenji Doya"], "https://groups.oist.jp/ncu"),
  lab("Cognitive Neurorobotics Research Unit (OIST)", RG, "Japan", "Okinawa Institute of Science and Technology", "Robotics and cognitive neuroscience", "Fully funded PhD places through the OIST graduate school.", ["Jun Tani"], "https://groups.oist.jp/cnru"),
  lab("National Institute of Informatics (NII)", INST, "Japan", "SOKENDAI (The Graduate University for Advanced Studies)", "Informatics, AI and data", "Graduate places with SOKENDAI, with scholarships for students.", [], "https://www.nii.ac.jp/en"),

  // ---- South Korea ----
  lab("KAIST Graduate School of AI", CENTRE, "South Korea", "KAIST", "Machine learning, language and vision", "Graduate places with full scholarship and stipend.", [], "https://gsai.kaist.ac.kr"),
  lab("UNIST Artificial Intelligence Graduate School", CENTRE, "South Korea", "UNIST", "AI and data science", "Graduate places with scholarship and stipend.", [], "https://aigs.unist.ac.kr"),
  lab("GIST AI Graduate School", CENTRE, "South Korea", "GIST", "AI and its applications", "Graduate places with scholarship and stipend.", [], "https://ai.gist.ac.kr"),

  // ---- China, Hong Kong, Taiwan ----
  lab("LAMDA Group (Nanjing University)", RG, "China", "Nanjing University", "Machine learning and data mining", "Graduate places with CSC and university scholarships.", [], "https://www.lamda.nju.edu.cn"),
  lab("Conversational AI Group (Tsinghua University)", RG, "China", "Tsinghua University", "Dialogue and language models", "Graduate places with CSC and university scholarships.", [], "http://coai.cs.tsinghua.edu.cn"),
  lab("Fudan NLP Group", RG, "China", "Fudan University", "Natural language processing", "Graduate places with CSC and university scholarships.", [], "https://nlp.fudan.edu.cn"),
  lab("APEX Data and Knowledge Management Lab (Shanghai Jiao Tong University)", LAB, "China", "Shanghai Jiao Tong University", "Data mining and knowledge systems", "Graduate places with CSC and university scholarships.", [], "https://apex.sjtu.edu.cn"),
  lab("Institute for Artificial Intelligence (Peking University)", INST, "China", "Peking University", "Machine learning, vision and language", "Graduate places with CSC and Peking University scholarships.", [], "https://ai.pku.edu.cn"),
  lab("Beijing Academy of Artificial Intelligence (BAAI)", INST, "China", null, "Foundation models and open research", "Research posts and joint training with Beijing universities.", [], "https://www.baai.ac.cn/en"),
  lab("Shanghai AI Laboratory", INST, "China", null, "Foundation models and AI for science", "Research posts and joint training with Shanghai universities.", [], "https://www.shlab.org.cn"),
  lab("Institute of Automation, Chinese Academy of Sciences", INST, "China", "University of Chinese Academy of Sciences", "Pattern recognition, robotics and AI", "Graduate places with CAS-ANSO and UCAS scholarships.", [], "https://english.ia.cas.cn"),
  lab("HKUST Robotics Institute", INST, "Hong Kong", "HKUST", "Robotics, perception and control", "HKPFS and studentship PhD places.", [], "https://ri.hkust.edu.hk"),
  lab("HKU Musketeers Foundation Institute of Data Science", INST, "Hong Kong", "University of Hong Kong", "Data science and AI", "HKPFS, HKU Presidential PhD Scholar and studentship places.", [], "https://datascience.hku.hk"),
  lab("Institute of Information Science (Academia Sinica)", INST, "Taiwan", "Academia Sinica (TIGP)", "Computer science, language and AI", "PhD places with the Taiwan International Graduate Program stipend.", [], "https://www.iis.sinica.edu.tw/en"),

  // ---- Singapore, India, Thailand, Kazakhstan ----
  lab("NUS AI Institute", INST, "Singapore", "National University of Singapore", "AI across NUS", "NUS research scholarships and SINGA places.", [], "https://ai.nus.edu.sg"),
  lab("A*STAR Institute for Infocomm Research (I²R)", INST, "Singapore", null, "AI, language and data analytics", "A*STAR and SINGA graduate scholarships.", [], "https://www.a-star.edu.sg/i2r"),
  lab("Centre for Visual Information Technology (IIIT Hyderabad CVIT)", CENTRE, "India", "IIIT Hyderabad", "Computer vision and graphics", "Institute fellowships for MS by research and PhD.", ["C. V. Jawahar"], "https://cvit.iiit.ac.in"),
  lab("Language Technologies Research Centre (IIIT Hyderabad LTRC)", CENTRE, "India", "IIIT Hyderabad", "NLP and speech for Indian languages", "Institute fellowships for MS by research and PhD.", ["Manish Shrivastava"], "https://ltrc.iiit.ac.in"),
  lab("Center for Indian Language Technology (IIT Bombay CFILT)", CENTRE, "India", "IIT Bombay", "NLP for Indian languages", "Institute fellowships.", ["Pushpak Bhattacharyya"], "https://www.cfilt.iitb.ac.in"),
  lab("Yardi School of Artificial Intelligence (IIT Delhi)", CENTRE, "India", "IIT Delhi", "AI across IIT Delhi", "Institute fellowships.", ["Mausam"], "https://scai.iitd.ac.in"),
  lab("Robert Bosch Centre for Data Science and AI (IIT Madras)", CENTRE, "India", "IIT Madras", "Data science and AI", "Institute fellowships.", ["Balaraman Ravindran", "Mitesh Khapra"], "https://rbcdsai.iitm.ac.in"),
  lab("Institute of Smart Systems and Artificial Intelligence (ISSAI)", INST, "Kazakhstan", "Nazarbayev University", "AI and language technology for Central Asia", "Funded graduate places at Nazarbayev University.", ["Huseyin Atakan Varol"], "https://issai.nu.edu.kz"),

  // ---- North America ----
  lab("MIT CSAIL", INST, "United States", "MIT", "Computer science and AI", "Fully funded PhD places through the departments.", [], "https://www.csail.mit.edu"),
  lab("Berkeley Artificial Intelligence Research (BAIR)", NET, "United States", "UC Berkeley", "Vision, learning, language and robotics", "Fully funded PhD places through the departments.", ["Pieter Abbeel", "Dan Klein", "Jitendra Malik"], "https://bair.berkeley.edu"),
  lab("Stanford Artificial Intelligence Laboratory (SAIL)", LAB, "United States", "Stanford University", "AI, learning, vision and language", "Fully funded PhD places through the departments.", ["Percy Liang", "Chelsea Finn", "Yejin Choi"], "https://ai.stanford.edu"),
  lab("Robotics Institute (Carnegie Mellon University)", INST, "United States", "Carnegie Mellon University", "Robotics, perception and learning", "Fully funded PhD places.", [], "https://www.ri.cmu.edu"),
  lab("Language Technologies Institute (Carnegie Mellon University)", INST, "United States", "Carnegie Mellon University", "NLP, speech and multimodal learning", "Fully funded PhD places.", ["Graham Neubig"], "https://lti.cs.cmu.edu"),
  lab("Mila (Quebec Artificial Intelligence Institute)", INST, "Canada", "McGill University / Mila", "Deep learning and reinforcement learning", "Research assistantships and fellowships through partner universities.", [], "https://mila.quebec/en"),
  lab("Vector Institute", INST, "Canada", "University of Toronto", "Machine learning and AI", "Vector Scholarship in AI and research posts.", [], "https://vectorinstitute.ai"),

  // ---- Middle East and Oceania ----
  lab("KAUST Visual Computing Center", CENTRE, "Saudi Arabia", "KAUST", "Computer vision, graphics and geometry", "KAUST fellowship covers tuition, stipend and housing.", [], "https://vcc.kaust.edu.sa"),
  lab("Qatar Computing Research Institute (QCRI)", INST, "Qatar", "Hamad Bin Khalifa University", "Language, data and AI", "HBKU scholarship covers tuition, stipend and housing.", [], "https://www.hbku.edu.qa/en/qcri"),
  lab("Australian Institute for Machine Learning (AIML)", INST, "Australia", "University of Adelaide", "Machine learning, vision and language", "RTP and university PhD scholarships.", [], "https://www.adelaide.edu.au/aiml")
];
