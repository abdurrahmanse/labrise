import type { ProfessorEntry } from "../types";

// Further professors per country, by university and research area.
// No email is listed here: copy one only from the person's official university page (see the data policy in the README).
// People move between institutions, so confirm the current affiliation before writing to anyone.
const V = "Computer Vision";
const N = "NLP";
const M = "Machine Learning";
const R = "Robotics";
const L = "Reinforcement Learning";
const T = "ML Theory";
const D = "Deep Learning";
const IR = "Information Retrieval / NLP";
const KR = "Knowledge Representation / AI";

type Person = [name: string, group: string];

const at = (university: string, country: string, list: Person[]): ProfessorEntry[] =>
  list.map(([name, group]) => ({ name, university, country, group }));

export const moreProfessors: ProfessorEntry[] = [
  // Germany
  ...at("Technical University of Berlin", "Germany", [["Klaus-Robert Müller", M]]),
  ...at("LMU Munich", "Germany", [["Björn Ommer", V], ["Hinrich Schütze", N]]),
  ...at("RWTH Aachen", "Germany", [["Bastian Leibe", V]]),
  ...at("University of Freiburg", "Germany", [["Frank Hutter", M], ["Thomas Brox", V]]),
  ...at("University of Tübingen", "Germany", [["Matthias Hein", M], ["Philipp Hennig", M], ["Georg Martius", R]]),
  ...at("Saarland University / CISPA", "Germany", [["Bernt Schiele", V], ["Dietrich Klakow", N], ["Thorsten Holz", "Security / Systems"]]),
  ...at("Heidelberg University", "Germany", [["Carsten Rother", V], ["Ullrich Köthe", M]]),
  ...at("TU Munich", "Germany", [["Nassir Navab", "Computer Vision (medical imaging)"]]),
  ...at("University of Stuttgart", "Germany", [["Steffen Staab", KR]]),
  ...at("Technical University of Darmstadt", "Germany", [["Iryna Gurevych", N]]),

  // Switzerland
  ...at("ETH Zurich", "Switzerland", [
    ["Mrinmaya Sachan", N], ["Siyu Tang", V], ["Otmar Hilliges", V], ["Olga Sorkine-Hornung", "Computer Vision / Graphics"],
    ["Torsten Hoefler", "High-performance computing / ML"], ["Joachim Buhmann", M]
  ]),
  ...at("EPFL", "Switzerland", [
    ["Alexandre Alahi", V], ["Sabine Süsstrunk", V], ["Aude Billard", R], ["Robert West", N],
    ["Antoine Bosselut", N], ["Nicolas Flammarion", T], ["Emmanuel Abbé", T]
  ]),

  // Sweden
  ...at("Linköping University", "Sweden", [["Fredrik Heintz", KR], ["Michael Felsberg", V], ["Fredrik Lindsten", M]]),
  ...at("Uppsala University", "Sweden", [["Thomas Schön", M], ["Joakim Nivre", N]]),
  ...at("KTH Royal Institute of Technology", "Sweden", [["Danica Kragic", R], ["Hedvig Kjellström", V], ["Josephine Sullivan", V]]),
  ...at("Chalmers University", "Sweden", [["Devdatt Dubhashi", M], ["Fredrik Kahl", V], ["Fredrik D. Johansson", M], ["Lennart Svensson", M]]),
  ...at("Lund University", "Sweden", [["Kalle Åström", V], ["Pierre Nugues", N], ["Anders Robertsson", R]]),

  // Netherlands
  ...at("Leiden University", "Netherlands", [["Aske Plaat", L], ["Thomas Bäck", "Evolutionary computation / ML"]]),
  ...at("TU Delft", "Netherlands", [
    ["Cynthia Liem", "Information Retrieval / ML"], ["Frans Oliehoek", L], ["Jan van Gemert", V],
    ["Arie van Deursen", "Software engineering / ML"], ["Geert-Jan Houben", IR]
  ]),
  ...at("University of Amsterdam", "Netherlands", [["Christof Monz", N], ["Efstratios Gavves", V], ["Jan-Willem van de Meent", M]]),
  ...at("Eindhoven University of Technology", "Netherlands", [["Mykola Pechenizkiy", M], ["Joaquin Vanschoren", M]]),
  ...at("Radboud University", "Netherlands", [["Tom Heskes", M], ["Marcel van Gerven", M]]),
  ...at("Vrije Universiteit Amsterdam", "Netherlands", [["Frank van Harmelen", KR], ["Piek Vossen", N]]),
  ...at("University of Groningen", "Netherlands", [["Marco Wiering", L]]),

  // Denmark
  ...at("University of Copenhagen", "Denmark", [
    ["Anders Søgaard", N], ["Isabelle Augenstein", N], ["Serge Belongie", V], ["Christina Lioma", IR], ["Desmond Elliott", N]
  ]),
  ...at("Technical University of Denmark", "Denmark", [
    ["Aasa Feragen", "Machine Learning (medical imaging)"], ["Søren Hauberg", M], ["Ole Winther", M],
    ["Jes Frellsen", M], ["Morten Mørup", M], ["Lars Kai Hansen", M], ["Thomas Bolander", KR]
  ]),
  ...at("Aarhus University", "Denmark", [["Ira Assent", M]]),
  ...at("Aalborg University", "Denmark", [["Christian S. Jensen", "Data management / ML"], ["Kim Guldstrand Larsen", "Verification / AI"]]),
  ...at("IT University of Copenhagen", "Denmark", [["Sebastian Risi", "Machine Learning / Evolutionary AI"]]),

  // Norway
  ...at("University of Oslo", "Norway", [
    ["Lilja Øvrelid", N], ["Erik Velldal", N], ["Stephan Oepen", N], ["Jim Tørresen", R],
    ["Kyrre Glette", R], ["Anne H. Schistad Solberg", V]
  ]),
  ...at("NTNU", "Norway", [["Kerstin Bach", M], ["Heri Ramampiaro", IR], ["Frank Lindseth", V], ["Anders Kofod-Petersen", KR]]),
  ...at("UiT The Arctic University of Norway", "Norway", [["Robert Jenssen", M], ["Michael Kampffmeyer", D]]),
  ...at("University of Bergen", "Norway", [["Pinar Heggernes", "Algorithms / ML Theory"]]),
  ...at("Norwegian University of Life Sciences", "Norway", [["Kristian Hovde Liland", M]]),

  // Finland
  ...at("Aalto University", "Finland", [
    ["Samuel Kaski", M], ["Arno Solin", M], ["Juho Kannala", V], ["Pekka Marttinen", M], ["Alexander Ilin", D], ["Mikko Kurimo", "Speech / NLP"]
  ]),
  ...at("University of Helsinki", "Finland", [["Teemu Roos", M], ["Hannu Toivonen", M], ["Jörg Tiedemann", N]]),
  ...at("Tampere University", "Finland", [["Joni-Kristian Kämäräinen", V], ["Moncef Gabbouj", D], ["Heikki Huttunen", D]]),
  ...at("University of Oulu", "Finland", [["Matti Pietikäinen", V], ["Janne Heikkilä", V]]),

  // Belgium
  ...at("KU Leuven", "Belgium", [
    ["Luc De Raedt", KR], ["Tinne Tuytelaars", V], ["Marie-Francine Moens", N], ["Jesse Davis", M],
    ["Hendrik Blockeel", M], ["Johan Suykens", T]
  ]),
  ...at("Ghent University", "Belgium", [["Tijl De Bie", M], ["Véronique Hoste", N], ["Chris Develder", M]]),
  ...at("Vrije Universiteit Brussel", "Belgium", [["Ann Nowé", L]]),
  ...at("UCLouvain", "Belgium", [["Siegfried Nijssen", M]]),
  ...at("University of Antwerp", "Belgium", [["Walter Daelemans", N], ["Toon Calders", M]]),
  ...at("Université libre de Bruxelles", "Belgium", [["Gianluca Bontempi", M]]),
  ...at("University of Liège", "Belgium", [["Pierre Geurts", M], ["Louis Wehenkel", M]]),

  // Austria
  ...at("Johannes Kepler University Linz", "Austria", [["Sepp Hochreiter", D], ["Günter Klambauer", M], ["Johannes Brandstetter", D]]),
  ...at("TU Wien", "Austria", [["Thomas Eiter", KR], ["Allan Hanbury", IR], ["Ezio Bartocci", "Verification / ML"]]),
  ...at("Graz University of Technology", "Austria", [["Horst Bischof", V], ["Thomas Pock", V]]),
  ...at("Institute of Science and Technology Austria", "Austria", [
    ["Christoph Lampert", M], ["Dan Alistarh", "ML Theory / Systems"], ["Krishnendu Chatterjee", "Verification / AI"], ["Thomas Henzinger", "Verification / AI"]
  ]),
  ...at("University of Vienna", "Austria", [["Benjamin Roth", N], ["Sebastian Tschiatschek", M]]),
  ...at("University of Innsbruck", "Austria", [["Justus Piater", R]]),

  // France
  ...at("Inria / ENS Paris", "France", [["Jean Ponce", V], ["Gabriel Peyré", T], ["Marc Lelarge", M]]),
  ...at("Université Grenoble Alpes", "France", [["Julien Mairal", M], ["Karteek Alahari", V], ["Massih-Reza Amini", M]]),
  ...at("Sorbonne Université", "France", [["Patrick Gallinari", M], ["Nicolas Thome", V], ["Matthieu Cord", V], ["Benjamin Piwowarski", IR]]),
  ...at("École Polytechnique", "France", [["Éric Moulines", T], ["Michalis Vazirgiannis", M]]),
  ...at("Université Paris-Saclay", "France", [["Michèle Sebag", M], ["Gaël Varoquaux", M], ["Guillaume Charpiat", M]]),

  // Italy
  ...at("University of Trento", "Italy", [["Nicu Sebe", V], ["Elisa Ricci", V], ["Andrea Passerini", M]]),
  ...at("Sapienza University of Rome", "Italy", [["Roberto Navigli", N], ["Emanuele Rodolà", V], ["Fabrizio Silvestri", IR], ["Fabio Galasso", V]]),
  ...at("Politecnico di Milano", "Italy", [["Marcello Restelli", L], ["Matteo Matteucci", R], ["Paolo Cremonesi", "Recommender systems / ML"]]),
  ...at("University of Pisa", "Italy", [["Davide Bacciu", M], ["Alessio Micheli", M]]),
  ...at("University of Milan", "Italy", [["Nicolò Cesa-Bianchi", T], ["Giorgio Valentini", M]]),
  ...at("Politecnico di Torino", "Italy", [["Barbara Caputo", V], ["Tatiana Tommasi", V]]),
  ...at("University of Bologna", "Italy", [["Luigi Di Stefano", V], ["Paolo Torroni", KR]]),

  // Spain
  ...at("Universitat Pompeu Fabra", "Spain", [["Horacio Saggion", N], ["Gemma Boleda", N], ["Anders Jonsson", L], ["Vicenç Gómez", M]]),
  ...at("Universitat Politècnica de Catalunya", "Spain", [["Xavier Giró-i-Nieto", V]]),
  ...at("Universitat de Barcelona", "Spain", [["Sergio Escalera", V], ["Petia Radeva", V]]),
  ...at("Universitat Autònoma de Barcelona", "Spain", [["Josep Lladós", V], ["Dimosthenis Karatzas", V], ["Joost van de Weijer", V], ["Antonio López", V]]),
  ...at("Universidad Politécnica de Madrid", "Spain", [["Pedro Larrañaga", M], ["Concha Bielza", M]]),
  ...at("University of Granada", "Spain", [["Francisco Herrera", M]]),
  ...at("Universitat Politècnica de València", "Spain", [["Paolo Rosso", N], ["Roberto Paredes", D]]),
  ...at("Universidad Carlos III de Madrid", "Spain", [["Daniel Borrajo", KR]]),

  // United Kingdom
  ...at("University of Oxford", "United Kingdom", [["Philip Torr", V], ["Shimon Whiteson", L], ["Yarin Gal", M], ["Jakob Foerster", L]]),
  ...at("University of Cambridge", "United Kingdom", [["Carl Rasmussen", M], ["Anna Korhonen", N], ["Andreas Vlachos", N]]),
  ...at("University of Edinburgh", "Scotland", [
    ["Ivan Titov", N], ["Sharon Goldwater", N], ["Subramanian Ramamoorthy", R], ["Sethu Vijayakumar", R], ["Amos Storkey", M]
  ]),
  ...at("Imperial College London", "United Kingdom", [["Stefanos Zafeiriou", V], ["Ben Glocker", "Computer Vision (medical imaging)"]]),
  ...at("UCL", "United Kingdom", [["Marc Deisenroth", M], ["Tim Rocktäschel", L], ["Lourdes Agapito", V]]),
  ...at("University of Manchester", "United Kingdom", [["Sophia Ananiadou", N], ["Gavin Brown", M]]),
  ...at("University of Bristol", "United Kingdom", [["Peter Flach", M], ["Majid Mirmehdi", V]]),
  ...at("University of Sheffield", "United Kingdom", [["Nikolaos Aletras", N]]),
  ...at("University of Southampton", "United Kingdom", [["Mahesan Niranjan", M]]),

  // Ireland
  ...at("University College Cork", "Ireland", [["Barry O'Sullivan", KR]]),
  ...at("Dublin City University", "Ireland", [["Alan Smeaton", IR], ["Noel O'Connor", V], ["Andy Way", N], ["Gareth Jones", IR]]),
  ...at("University College Dublin", "Ireland", [["Pádraig Cunningham", M], ["Derek Greene", M], ["Barry Smyth", "Recommender systems / ML"], ["Michael O'Neill", "Evolutionary computation / ML"]]),
  ...at("University of Galway", "Ireland", [["John Breslin", KR], ["Paul Buitelaar", N], ["Michael Madden", M]]),
  ...at("Maynooth University", "Ireland", [["Rozenn Dahyot", V]]),
  ...at("University of Limerick", "Ireland", [["Conor Ryan", "Evolutionary computation / ML"]]),

  // United States
  ...at("Carnegie Mellon University", "United States", [
    ["Ruslan Salakhutdinov", D], ["Louis-Philippe Morency", M], ["Deva Ramanan", V], ["Abhinav Gupta", V], ["Jun-Yan Zhu", V],
    ["Zico Kolter", M], ["Emma Strubell", N], ["Maarten Sap", N], ["Tuomas Sandholm", "Game theory / AI"]
  ]),
  ...at("MIT", "United States", [
    ["Regina Barzilay", N], ["Leslie Kaelbling", R], ["Russ Tedrake", R], ["Daniela Rus", R], ["Phillip Isola", V],
    ["Pulkit Agrawal", R], ["Song Han", D], ["Aleksander Madry", T], ["Polina Golland", V], ["William Freeman", V]
  ]),
  ...at("Stanford University", "United States", [
    ["Andrew Ng", M], ["Dorsa Sadigh", R], ["Jure Leskovec", M], ["Stefano Ermon", M], ["Tengyu Ma", T], ["Christopher Ré", M],
    ["Emma Brunskill", L], ["Silvio Savarese", V], ["Jiajun Wu", V], ["C. Karen Liu", R], ["Diyi Yang", N], ["Dan Jurafsky", N]
  ]),
  ...at("UC Berkeley", "United States", [
    ["Trevor Darrell", V], ["Alexei Efros", V], ["Stuart Russell", KR], ["Michael Jordan", T], ["Dawn Song", M],
    ["Jacob Steinhardt", M], ["Anca Dragan", R], ["Ken Goldberg", R], ["Angjoo Kanazawa", V]
  ]),
  ...at("Harvard University", "United States", [["Finale Doshi-Velez", M], ["Sham Kakade", T], ["Boaz Barak", T], ["Hanspeter Pfister", V]]),
  ...at("Princeton University", "United States", [
    ["Sanjeev Arora", T], ["Danqi Chen", N], ["Karthik Narasimhan", N], ["Olga Russakovsky", V], ["Jia Deng", V], ["Elad Hazan", T], ["Tom Griffiths", "Cognitive AI"]
  ]),
  ...at("Yale University", "United States", [["Dragomir Radev", N], ["Smita Krishnaswamy", M]]),
  ...at("Caltech", "United States", [["Yisong Yue", M], ["Anima Anandkumar", D], ["Pietro Perona", V]]),
  ...at("Cornell University", "United States", [
    ["Kilian Weinberger", M], ["Thorsten Joachims", M], ["Claire Cardie", N], ["Bharath Hariharan", V], ["Noah Snavely", V], ["Yoav Artzi", N], ["Alexander Rush", N]
  ]),
  ...at("University of Pennsylvania", "United States", [["Dan Roth", N], ["Chris Callison-Burch", N], ["Kostas Daniilidis", V]]),
  ...at("Johns Hopkins University", "United States", [["Alan Yuille", V], ["Jason Eisner", N], ["Philipp Koehn", N], ["Mark Dredze", N], ["Rama Chellappa", V], ["Benjamin Van Durme", N]]),
  ...at("UCLA", "United States", [["Kai-Wei Chang", N], ["Nanyun Peng", N], ["Cho-Jui Hsieh", M], ["Guy Van den Broeck", KR], ["Stefano Soatto", V]]),
  ...at("UC San Diego", "United States", [["Hao Su", V], ["Xiaolong Wang", V], ["Taylor Berg-Kirkpatrick", N], ["Julian McAuley", M], ["Sanjoy Dasgupta", T], ["Kamalika Chaudhuri", T]]),
  ...at("University of Wisconsin–Madison", "United States", [["Frederic Sala", M], ["Jerry Zhu", T], ["Sharon Li", M], ["Kangwook Lee", M], ["Dimitris Papailiopoulos", M]]),
  ...at("University of Maryland", "United States", [["Hal Daumé III", N], ["Jordan Boyd-Graber", N], ["Tom Goldstein", M], ["Furong Huang", M]]),
  ...at("New York University", "United States", [["Kyunghyun Cho", D], ["Rob Fergus", V], ["He He", N], ["Saining Xie", V], ["Samuel Bowman", N]]),
  ...at("Duke University", "United States", [["Cynthia Rudin", M], ["Ronald Parr", L]]),
  ...at("UIUC", "United States", [["Heng Ji", N], ["Jiawei Han", M], ["Svetlana Lazebnik", V], ["Derek Hoiem", V], ["Tong Zhang", T]]),
  ...at("Georgia Tech", "United States", [["Zsolt Kira", V], ["Judy Hoffman", V], ["Mark Riedl", "NLP / Interactive AI"], ["Sonia Chernova", R], ["Polo Chau", M]]),
  ...at("University of Washington", "United States", [
    ["Noah Smith", N], ["Luke Zettlemoyer", N], ["Ali Farhadi", V], ["Dieter Fox", R], ["Byron Boots", R], ["Hannaneh Hajishirzi", N], ["Maya Cakmak", R]
  ]),
  ...at("UT Austin", "United States", [["Raymond Mooney", N], ["Kristen Grauman", V], ["Peter Stone", L], ["Philipp Krähenbühl", V], ["Adam Klivans", T]]),
  ...at("University of Michigan", "United States", [["Honglak Lee", D], ["Rada Mihalcea", N], ["Justin Johnson", V], ["Joyce Chai", N], ["Jenna Wiens", M]]),
  ...at("Purdue University", "United States", [["Jennifer Neville", M], ["Bruno Ribeiro", M]]),
  ...at("Northwestern University", "United States", [["Doug Downey", N]]),

  // Canada
  ...at("University of Toronto", "Canada", [
    ["Raquel Urtasun", V], ["Sanja Fidler", V], ["Roger Grosse", M], ["David Duvenaud", M], ["Jimmy Ba", D],
    ["Animesh Garg", R], ["Florian Shkurti", R], ["Chris Maddison", M], ["Gerald Penn", N], ["Amir-massoud Farahmand", L]
  ]),
  ...at("University of British Columbia", "Canada", [
    ["Kevin Leyton-Brown", "Machine Learning / Game theory"], ["Frank Wood", M], ["Mark Schmidt", M], ["Jeff Clune", D],
    ["Giuseppe Carenini", N], ["Leonid Sigal", V], ["Michiel van de Panne", R]
  ]),
  ...at("University of Waterloo", "Canada", [["Pascal Poupart", L], ["Yaoliang Yu", T], ["Jimmy Lin", IR], ["Wenhu Chen", N], ["Mark Crowley", M]]),
  ...at("McGill University / Mila", "Canada", [["Joelle Pineau", L], ["Doina Precup", L], ["Jackie Chi Kit Cheung", N], ["Siva Reddy", N], ["Gregory Dudek", R], ["David Meger", R]]),
  ...at("University of Alberta", "Canada", [["Richard Sutton", L], ["Michael Bowling", L], ["Csaba Szepesvári", T], ["Dale Schuurmans", T], ["Martha White", L], ["Alona Fyshe", N]]),
  ...at("Simon Fraser University", "Canada", [["Greg Mori", V], ["Angel Chang", V], ["Ghassan Hamarneh", V]]),
  ...at("Université de Montréal", "Canada", [["Aaron Courville", D], ["Simon Lacoste-Julien", M], ["Irina Rish", M], ["Guillaume Lajoie", M], ["Pierre-Luc Bacon", L], ["Liam Paull", R]]),

  // Japan
  ...at("University of Tokyo", "Japan", [["Yutaka Matsuo", D], ["Tatsuya Harada", V], ["Issei Sato", M], ["Taiji Suzuki", T], ["Yoshimasa Tsuruoka", N]]),
  ...at("Kyoto University", "Japan", [["Sadao Kurohashi", N], ["Tatsuya Kawahara", "Speech / NLP"], ["Hisashi Kashima", M]]),
  ...at("Osaka University", "Japan", [["Yasushi Yagi", V], ["Yuta Nakashima", V]]),
  ...at("Tohoku University", "Japan", [["Jun Suzuki", N]]),
  ...at("Tokyo Institute of Science", "Japan", [["Naoaki Okazaki", N], ["Rio Yokota", "High-performance computing / ML"]]),
  ...at("Kyushu University", "Japan", [["Seiichi Uchida", V]]),
  ...at("Waseda University", "Japan", [["Tetsuya Ogata", R]]),
  ...at("Okinawa Institute of Science and Technology", "Japan", [["Kenji Doya", L]]),
  ...at("Hokkaido University", "Japan", [["Miki Haseyama", V]]),

  // South Korea
  ...at("KAIST", "South Korea", [
    ["Jinwoo Shin", M], ["Sung Ju Hwang", M], ["Minjoon Seo", N], ["Alice Oh", N], ["Eunho Yang", M],
    ["Kee-Eung Kim", L], ["Jong Chul Ye", D], ["In So Kweon", V]
  ]),
  ...at("Seoul National University", "South Korea", [
    ["Songhwai Oh", R], ["Bohyung Han", V], ["Kyomin Jung", N], ["Gunhee Kim", V], ["Sungroh Yoon", D], ["Byoung-Tak Zhang", M]
  ]),
  ...at("POSTECH", "South Korea", [["Minsu Cho", V], ["Suha Kwak", V]]),
  ...at("Korea University", "South Korea", [["Seong-Whan Lee", M], ["Jaewoo Kang", M]]),

  // China
  ...at("Tsinghua University", "China", [["Jun Zhu", M], ["Maosong Sun", N], ["Minlie Huang", N], ["Mingsheng Long", D], ["Jiwen Lu", V]]),
  ...at("Peking University", "China", [["Liwei Wang", T], ["Zhouchen Lin", T], ["Yizhou Wang", V], ["Yuxin Peng", V], ["Xiaojun Wan", N]]),
  ...at("Zhejiang University", "China", [["Yueting Zhuang", M], ["Fei Wu", M], ["Deng Cai", V]]),
  ...at("Shanghai Jiao Tong University", "China", [["Cewu Lu", V], ["Weinan Zhang", L]]),
  ...at("Fudan University", "China", [["Xuanjing Huang", N], ["Xipeng Qiu", N], ["Yu-Gang Jiang", V]]),
  ...at("University of Science and Technology of China", "China", [["Xiangnan He", M], ["Houqiang Li", V]]),
  ...at("Nanjing University", "China", [["Zhi-Hua Zhou", M], ["Yang Yu", L], ["Han-Jia Ye", M]]),

  // Singapore
  ...at("National University of Singapore", "Singapore", [
    ["Min-Yen Kan", N], ["Tat-Seng Chua", IR], ["Bryan Hooi", M], ["Bryan Kian Hsiang Low", M], ["Jonathan Scarlett", T],
    ["Yang You", D], ["Angela Yao", V], ["Wee Sun Lee", L], ["David Hsu", R], ["Harold Soh", R], ["Kenji Kawaguchi", T]
  ]),
  ...at("Nanyang Technological University", "Singapore", [
    ["Chunyan Miao", KR], ["Bo An", L], ["Hanwang Zhang", V], ["Ziwei Liu", V], ["Chen Change Loy", V], ["Shafiq Joty", N]
  ]),
  ...at("Singapore University of Technology and Design", "Singapore", [["Soujanya Poria", N]]),
  ...at("Singapore Management University", "Singapore", [["Jing Jiang", N], ["Ee-Peng Lim", M], ["Hady Lauw", M], ["Pradeep Varakantham", L]]),

  // Hong Kong
  ...at("HKUST", "Hong Kong", [["Dit-Yan Yeung", M], ["Pascale Fung", N], ["Qifeng Chen", V], ["Junxian He", N], ["Long Chen", V]]),
  ...at("University of Hong Kong", "Hong Kong", [["Yi Ma", V], ["Ping Luo", V], ["Lingpeng Kong", N], ["Tao Yu", N], ["Kai Han", V]]),
  ...at("Chinese University of Hong Kong", "Hong Kong", [
    ["Irwin King", M], ["Michael R. Lyu", "Software engineering / ML"], ["Wai Lam", IR], ["Dahua Lin", V],
    ["Hongsheng Li", V], ["Qi Dou", "Computer Vision (medical imaging)"], ["Pheng-Ann Heng", V], ["Helen Meng", "Speech / NLP"]
  ]),
  ...at("Hong Kong Polytechnic University", "Hong Kong", [["Lei Zhang", V], ["Wenjie Li", N], ["Qing Li", M]]),

  // Taiwan
  ...at("National Taiwan University", "Taiwan", [
    ["Hsuan-Tien Lin", M], ["Shou-De Lin", M], ["Winston Hsu", V], ["Yun-Nung Chen", N],
    ["Hung-yi Lee", "Speech / NLP"], ["Chih-Jen Lin", T], ["Yu-Chiang Frank Wang", V], ["Ming-Syan Chen", M]
  ]),
  ...at("National Tsing Hua University", "Taiwan", [["Min Sun", V], ["Chun-Yi Lee", L], ["Shang-Hong Lai", V]]),
  ...at("National Yang Ming Chiao Tung University", "Taiwan", [["Wen-Chieh Lin", V], ["Ching-Chun Huang", V]]),

  // Australia
  ...at("University of Adelaide", "Australia", [["Anton van den Hengel", V], ["Javen Qinfeng Shi", M], ["Lingqiao Liu", V]]),
  ...at("Australian National University", "Australia", [["Hongdong Li", V], ["Stephen Gould", V], ["Richard Hartley", V], ["Lexing Xie", M]]),
  ...at("University of Melbourne", "Australia", [["Eduard Hovy", N], ["Jey Han Lau", N], ["Benjamin Rubinstein", T], ["Alistair Moffat", IR]]),
  ...at("Monash University", "Australia", [["Gholamreza Haffari", N], ["Yuan-Fang Li", KR], ["Hamid Rezatofighi", V]]),
  ...at("Macquarie University", "Australia", [["Mark Johnson", N], ["Diego Mollá", N]]),
  ...at("University of Sydney", "Australia", [["Chang Xu", M], ["Tongliang Liu", T]]),
  ...at("University of Western Australia", "Australia", [["Ajmal Mian", V], ["Mohammed Bennamoun", V]]),
  ...at("Deakin University", "Australia", [["Svetha Venkatesh", M], ["Truyen Tran", M]]),
  ...at("UNSW Sydney", "Australia", [["Claude Sammut", R], ["Wenjie Zhang", "Data management / ML"]]),

  // New Zealand
  ...at("University of Auckland", "New Zealand", [["Michael Witbrock", KR], ["Gill Dobbie", M], ["Yun Sing Koh", M], ["Patricia Riddle", KR]]),
  ...at("University of Waikato", "New Zealand", [["Eibe Frank", M], ["Bernhard Pfahringer", M], ["Albert Bifet", M]]),
  ...at("Victoria University of Wellington", "New Zealand", [["Mengjie Zhang", "Evolutionary computation / ML"], ["Bing Xue", M], ["Yi Mei", M], ["Marcus Frean", M]]),
  ...at("University of Otago", "New Zealand", [["Alistair Knott", N]]),
  ...at("Auckland University of Technology", "New Zealand", [["Wei Qi Yan", V]]),
  ...at("University of Canterbury", "New Zealand", [["Richard Green", V]]),

  // Turkey
  ...at("Middle East Technical University", "Turkey", [["Sinan Kalkan", V], ["Fatoş T. Yarman Vural", M]]),
  ...at("Koç University", "Turkey", [["Aykut Erdem", V], ["Deniz Yuret", N], ["Engin Erzin", "Speech / ML"], ["T. Metin Sezgin", M]]),
  ...at("Sabancı University", "Turkey", [["Berrin Yanıkoğlu", V], ["Öznur Taştan", M]]),
  ...at("Bilkent University", "Turkey", [["Selim Aksoy", V], ["Hamdi Dibeklioğlu", V], ["Fazlı Can", IR]]),
  ...at("Boğaziçi University", "Turkey", [["Tunga Güngör", N], ["Arzucan Özgür", N], ["Lale Akarun", V], ["A. Taylan Cemgil", M]]),
  ...at("Istanbul Technical University", "Turkey", [["Gülşen Eryiğit", N]]),
  ...at("Hacettepe University", "Turkey", [["Erkut Erdem", V]]),

  // Saudi Arabia
  ...at("KAUST", "Saudi Arabia", [
    ["Bernard Ghanem", V], ["Peter Richtárik", T], ["Wolfgang Heidrich", V], ["Mohamed Elhoseiny", V], ["Di Wang", T],
    ["Jürgen Schmidhuber", D], ["Panos Kalnis", "Data management / ML"], ["Marco Canini", "Systems / ML"], ["Xin Gao", M], ["Ricardo Henao", M]
  ]),

  // Scotland
  ...at("University of Glasgow", "Scotland", [["Iadh Ounis", IR], ["Roderick Murray-Smith", M], ["Joemon Jose", IR], ["Craig Macdonald", IR], ["Alessandro Vinciarelli", M]]),
  ...at("University of St Andrews", "Scotland", [["Ognjen Arandjelović", V], ["Juan Ye", M]]),
  ...at("University of Strathclyde", "Scotland", [["Leif Azzopardi", IR], ["Yashar Moshfeghi", IR]]),
  ...at("Heriot-Watt University", "Scotland", [["Oliver Lemon", N], ["Ioannis Konstas", N], ["Yvan Petillot", R], ["Ruth Aylett", "Human-Robot Interaction / AI"]]),
  ...at("University of Aberdeen", "Scotland", [["Ehud Reiter", N], ["Nir Oren", KR], ["Wamberto Vasconcelos", KR]]),
  ...at("University of Dundee", "Scotland", [["Stephen McKenna", V], ["Emanuele Trucco", "Computer Vision (medical imaging)"]]),

  // Czech Republic
  ...at("Charles University", "Czech Republic", [["Ondřej Bojar", N], ["Jan Hajič", N], ["Pavel Pecina", N], ["Ondřej Dušek", N]]),
  ...at("Czech Technical University in Prague", "Czech Republic", [["Jiří Matas", V], ["Josef Šivic", V], ["Tomáš Pajdla", V], ["Michal Pěchouček", KR], ["Karel Zimmermann", R]]),
  ...at("Brno University of Technology", "Czech Republic", [["Jan Černocký", "Speech Processing"], ["Lukáš Burget", "Speech Processing"], ["Michal Hradiš", V]]),
  ...at("Masaryk University", "Czech Republic", [["Petr Sojka", IR], ["Tomáš Brázdil", "Verification / Learning"]]),

  // Poland
  ...at("University of Warsaw", "Poland", [["Piotr Miłoś", L], ["Piotr Sankowski", T], ["Marek Cygan", M], ["Henryk Michalewski", L]]),
  ...at("Jagiellonian University", "Poland", [["Jacek Tabor", M], ["Marek Śmieja", M], ["Przemysław Spurek", M]]),
  ...at("Warsaw University of Technology", "Poland", [["Tomasz Trzciński", V], ["Przemysław Biecek", "Explainable ML"], ["Jacek Mańdziuk", M]]),
  ...at("Poznań University of Technology", "Poland", [["Krzysztof Krawiec", "Evolutionary computation / ML"], ["Jerzy Stefanowski", M]]),
  ...at("Wrocław University of Science and Technology", "Poland", [["Maciej Piasecki", N], ["Przemysław Kazienko", N], ["Jan Kocoń", N]]),

  // Portugal
  ...at("University of Lisbon", "Portugal", [
    ["Mário Figueiredo", M], ["André Martins", N], ["Alexandre Bernardino", V], ["José Santos-Victor", R], ["Pedro Lima", R], ["Francisco Melo", L], ["Luísa Coheur", N]
  ]),
  ...at("University of Porto", "Portugal", [["João Gama", M], ["Pavel Brazdil", M], ["Alípio Jorge", IR], ["Luís Paulo Reis", R]]),
  ...at("University of Coimbra", "Portugal", [["Penousal Machado", "Evolutionary computation / creative AI"], ["Bernardete Ribeiro", M], ["Jorge Dias", R]]),
  ...at("NOVA University Lisbon", "Portugal", [["João Leite", KR], ["João Magalhães", IR]]),
  ...at("University of Minho", "Portugal", [["Paulo Cortez", M], ["Paulo Novais", KR]]),

  // Estonia
  ...at("University of Tartu", "Estonia", [["Jaak Vilo", M], ["Meelis Kull", M], ["Kairit Sirts", N], ["Mark Fishel", N], ["Raul Vicente", "Computational neuroscience / ML"], ["Tambet Matiisen", L]]),
  ...at("Tallinn University of Technology", "Estonia", [["Tanel Alumäe", "Speech Processing"], ["Maarja Kruusmaa", R]]),

  // Luxembourg
  ...at("University of Luxembourg", "Luxembourg", [["Yves Le Traon", "Software testing / ML"], ["Radu State", "ML for security"], ["Jun Pang", M], ["Leon van der Torre", KR], ["Tegawendé Bissyandé", "Software engineering / ML"]]),

  // Iceland
  ...at("Reykjavik University", "Iceland", [["Yngvi Björnsson", L], ["Kristinn Thórisson", "Artificial General Intelligence"], ["Hannes Högni Vilhjálmsson", "Human-computer interaction / AI"]]),

  // Qatar
  ...at("Hamad Bin Khalifa University", "Qatar", [["Sanjay Chawla", "Data mining / ML"], ["Yin Yang", "Data management / ML"]]),
  ...at("Qatar University", "Qatar", [["Tamer Elsayed", IR], ["Somaya Al-Maadeed", V], ["Khaled Shaban", N]]),

  // United Arab Emirates
  ...at("MBZUAI", "United Arab Emirates", [
    ["Eric Xing", M], ["Preslav Nakov", N], ["Timothy Baldwin", N], ["Fahad Shahbaz Khan", V], ["Salman Khan", V], ["Kun Zhang", "Causality / ML"], ["Mohammad Yaqub", "Computer Vision (medical imaging)"]
  ]),
  ...at("Khalifa University", "United Arab Emirates", [["Lakmal Seneviratne", R], ["Naoufel Werghi", V], ["Yahya Zweiri", R]]),
  ...at("NYU Abu Dhabi", "United Arab Emirates", [["Nizar Habash", N], ["Talal Rahwan", "Multi-agent AI / computational social science"]]),

  // Malaysia
  ...at("Universiti Malaya", "Malaysia", [["Chan Chee Seng", V], ["Loo Chu Kiong", "Neural networks / robotics"], ["Sri Devi Ravana", IR]]),
  ...at("Universiti Kebangsaan Malaysia", "Malaysia", [["Siti Norul Huda Sheikh Abdullah", V], ["Azuraliza Abu Bakar", "Data mining"]]),
  ...at("Universiti Sains Malaysia", "Malaysia", [["Tan Tien Ping", "Speech / NLP"]]),
  ...at("Universiti Putra Malaysia", "Malaysia", [["Md Nasir Sulaiman", "Data mining"]]),

  // Hungary
  ...at("University of Szeged", "Hungary", [["Richárd Farkas", N], ["Márk Jelasity", M], ["Gábor Berend", N], ["András Kocsor", M]]),
  ...at("Eötvös Loránd University", "Hungary", [["András Lőrincz", M]]),
  ...at("Budapest University of Technology and Economics", "Hungary", [["Péter Antal", M], ["László Györfi", T]])
];
