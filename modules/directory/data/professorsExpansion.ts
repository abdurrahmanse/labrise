import type { ProfessorEntry } from "../types";

// Further professors for the countries and universities added in the second wave, by university and research area.
// No email is listed here: copy one only from the person's official university page (see the data policy in the README).
// People move between institutions, so confirm the current affiliation before writing to anyone.
const V = "Computer Vision";
const N = "NLP";
const M = "Machine Learning";
const R = "Robotics";
const KR = "Knowledge Representation / AI";
const D = "Data Mining / ML";
const SP = "Speech / NLP";

type Person = [name: string, group: string];

const at = (university: string, country: string, list: Person[]): ProfessorEntry[] =>
  list.map(([name, group]) => ({ name, university, country, group }));

export const expansionProfessors: ProfessorEntry[] = [
  // Greece
  ...at("National Technical University of Athens", "Greece", [["Petros Maragos", "Computer Vision / Speech"], ["Alexandros Potamianos", SP], ["Giorgos Stamou", KR]]),
  ...at("Aristotle University of Thessaloniki", "Greece", [["Ioannis Pitas", V], ["Anastasios Tefas", V]]),
  ...at("Athens University of Economics and Business", "Greece", [["Ion Androutsopoulos", N]]),
  ...at("National and Kapodistrian University of Athens", "Greece", [["Dimitrios Gunopulos", D], ["Manolis Koubarakis", KR]]),
  ...at("University of Ioannina", "Greece", [["Aristidis Likas", M]]),
  ...at("Foundation for Research and Technology – Hellas", "Greece", [["Antonis Argyros", V]]),
  ...at("NCSR Demokritos", "Greece", [["Georgios Paliouras", M]]),
  ...at("University of Crete", "Greece", [["Panos Trahanias", R]]),

  // Romania
  ...at("Politehnica University of Bucharest", "Romania", [["Traian Rebedea", N]]),
  ...at("University of Bucharest", "Romania", [["Radu Tudor Ionescu", "Computer Vision / NLP"]]),
  ...at("Technical University of Cluj-Napoca", "Romania", [["Sergiu Nedevschi", V]]),
  ...at("Alexandru Ioan Cuza University of Iași", "Romania", [["Dan Cristea", N]]),

  // Bulgaria
  ...at("Sofia University St. Kliment Ohridski", "Bulgaria", [["Ivan Koychev", M]]),
  ...at("Bulgarian Academy of Sciences", "Bulgaria", [["Galia Angelova", N]]),

  // Croatia
  ...at("University of Zagreb", "Croatia", [["Jan Šnajder", N], ["Sven Lončarić", V], ["Siniša Šegvić", V]]),
  ...at("Ruđer Bošković Institute", "Croatia", [["Tomislav Šmuc", M]]),

  // Slovakia
  ...at("Comenius University Bratislava", "Slovakia", [["Igor Farkaš", "Neural networks / Cognitive AI"]]),
  ...at("Slovak University of Technology in Bratislava", "Slovakia", [["Mária Bieliková", "Web and Data Science / AI"]]),
  ...at("Technical University of Košice", "Slovakia", [["Ján Paralič", "Data mining / AI"]]),

  // Lithuania
  ...at("Vilnius University", "Lithuania", [["Gintautas Dzemyda", D], ["Olga Kurasova", D]]),

  // Latvia
  ...at("University of Latvia", "Latvia", [["Guntis Bārzdiņš", "AI / NLP"]]),

  // Cyprus
  ...at("University of Cyprus", "Cyprus", [["Christos Panayiotou", "Intelligent systems / Control"], ["Constantinos Pattichis", "Biomedical Engineering / ML"], ["Demetris Zeinalipour-Yazti", D]]),
  ...at("Cyprus University of Technology", "Cyprus", [["Andreas Lanitis", V]]),

  // India
  ...at("Indian Institute of Science", "India", [["Chiranjib Bhattacharyya", M], ["Anirban Chakraborty", V]]),
  ...at("IIT Bombay", "India", [["Pushpak Bhattacharyya", N], ["Ganesh Ramakrishnan", M], ["Preethi Jyothi", SP]]),
  ...at("IIT Delhi", "India", [["Mausam", N], ["Parag Singla", KR], ["Tanmoy Chakraborty", N], ["Chetan Arora", V]]),
  ...at("IIT Madras", "India", [["Mitesh Khapra", N], ["Balaraman Ravindran", "Reinforcement Learning / ML"]]),
  ...at("IIT Kanpur", "India", [["Piyush Rai", M], ["Purushottam Kar", "ML Theory"]]),
  ...at("IIT Kharagpur", "India", [["Pawan Goyal", N], ["Animesh Mukherjee", N], ["Pabitra Mitra", M]]),
  ...at("IIIT Hyderabad", "India", [["C. V. Jawahar", V], ["Vasudeva Varma", "Information Retrieval / NLP"], ["K. Madhava Krishna", R], ["Manish Shrivastava", N], ["Ponnurangam Kumaraguru", "Social computing / ML"]]),
  ...at("IIT Hyderabad", "India", [["Vineeth N. Balasubramanian", M]]),

  // Thailand
  ...at("Chulalongkorn University", "Thailand", [["Ekapol Chuangsuwanich", SP], ["Proadpran Punyabukkana", "Human-Computer Interaction / NLP"]]),
  ...at("Vidyasirimedhi Institute of Science and Technology", "Thailand", [["Sarana Nutanong", "NLP / ML"], ["Theerawit Wilaiprasitporn", "Brain-computer interfaces / ML"]]),
  ...at("Asian Institute of Technology", "Thailand", [["Chaklam Silpasuwanchai", N]]),

  // Indonesia
  ...at("Universitas Indonesia", "Indonesia", [["Ruli Manurung", N]]),
  ...at("Institut Teknologi Bandung", "Indonesia", [["Ayu Purwarianti", N], ["Masayu Leylia Khodra", N]]),

  // Kazakhstan
  ...at("Nazarbayev University", "Kazakhstan", [["Huseyin Atakan Varol", R], ["Adnan Yazici", "Databases / AI"]]),

  // Poland
  ...at("Nicolaus Copernicus University in Toruń", "Poland", [["Włodzisław Duch", "Computational Intelligence"], ["Norbert Jankowski", M]]),

  // China
  ...at("Westlake University", "China", [["Yue Zhang", N], ["Stan Z. Li", "Computer Vision / AI"]]),
  ...at("ShanghaiTech University", "China", [["Xuming He", V], ["Kewei Tu", N]]),
  ...at("Renmin University of China", "China", [["Ji-Rong Wen", "Information Retrieval / NLP"], ["Wayne Xin Zhao", N]]),
  ...at("Huazhong University of Science and Technology", "China", [["Xiang Bai", V], ["Wenyu Liu", V], ["Xinggang Wang", V]]),
  ...at("Tianjin University", "China", [["Qinghua Hu", M]]),
  ...at("Dalian University of Technology", "China", [["Huchuan Lu", V]]),
  ...at("Xidian University", "China", [["Licheng Jiao", "Computational Intelligence / Remote sensing"]]),
  ...at("Beihang University", "China", [["Si Liu", V], ["Xianglong Liu", "Computer Vision / ML"]]),
  ...at("Nankai University", "China", [["Ming-Ming Cheng", V], ["Jian Yang", V]]),
  ...at("Southeast University", "China", [["Xin Geng", M]]),
  ...at("Hunan University", "China", [["Kenli Li", "High-performance computing / ML"]]),
  ...at("Northwestern Polytechnical University", "China", [["Junwei Han", V]]),

  // Japan
  ...at("Nara Institute of Science and Technology", "Japan", [["Yuji Matsumoto", N], ["Taro Watanabe", N]]),
  ...at("Okinawa Institute of Science and Technology", "Japan", [["Jun Tani", "Cognitive robotics"], ["Tomoki Fukai", "Computational neuroscience"]])
];
