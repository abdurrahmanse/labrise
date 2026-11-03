import type { UniversityEntry } from "../types";
import type { Region } from "@/shared/types/region";

// Further public universities per country. Funding routes and timing are typical for the country;
// each programme sets its own rules, so confirm on the university's official admissions page.
type Site = [name: string, site: string];

const group = (country: string, region: Region, funding: string, deadline: string, list: Site[]): UniversityEntry[] =>
  list.map(([name, site]) => ({ name, country, region, funding, deadline, site }));

const POST = "Per advertised post";

export const moreUniversities: UniversityEntry[] = [
  ...group("Germany", "Europe", "Salaried position or fellowship", "Rolling per post", [
    ["LMU Munich", "https://www.lmu.de"],
    ["Humboldt University of Berlin", "https://www.hu-berlin.de"],
    ["Freie Universität Berlin", "https://www.fu-berlin.de"],
    ["University of Bonn", "https://www.uni-bonn.de"],
    ["University of Freiburg", "https://uni-freiburg.de"],
    ["University of Stuttgart", "https://www.uni-stuttgart.de"],
    ["TU Dresden", "https://tu-dresden.de"],
    ["University of Göttingen", "https://www.uni-goettingen.de"],
    ["University of Hamburg", "https://www.uni-hamburg.de"],
    ["University of Mannheim", "https://www.uni-mannheim.de"],
    ["Goethe University Frankfurt", "https://www.uni-frankfurt.de"],
    ["University of Konstanz", "https://www.uni-konstanz.de"],
    ["Technical University of Darmstadt", "https://www.tu-darmstadt.de"]
  ]),
  ...group("Switzerland", "Europe", "Salaried PhD contract", POST, [
    ["University of Zurich", "https://www.uzh.ch"],
    ["University of Basel", "https://www.unibas.ch"],
    ["University of Bern", "https://www.unibe.ch"],
    ["University of Geneva", "https://www.unige.ch"],
    ["University of Lausanne", "https://www.unil.ch"],
    ["Università della Svizzera italiana", "https://www.usi.ch"],
    ["University of St. Gallen", "https://www.unisg.ch"],
    ["University of Fribourg", "https://www.unifr.ch"]
  ]),
  ...group("Sweden", "Europe", "Salaried PhD employment", POST, [
    ["Stockholm University", "https://www.su.se"],
    ["Linköping University", "https://liu.se"],
    ["Umeå University", "https://www.umu.se"],
    ["University of Gothenburg", "https://www.gu.se"],
    ["Karolinska Institutet", "https://ki.se"],
    ["Luleå University of Technology", "https://www.ltu.se"],
    ["Swedish University of Agricultural Sciences", "https://www.slu.se"]
  ]),
  ...group("Netherlands", "Europe", "Salaried PhD contract", POST, [
    ["Leiden University", "https://www.universiteitleiden.nl"],
    ["Utrecht University", "https://www.uu.nl"],
    ["Wageningen University & Research", "https://www.wur.nl"],
    ["University of Groningen", "https://www.rug.nl"],
    ["Radboud University", "https://www.ru.nl"],
    ["Vrije Universiteit Amsterdam", "https://vu.nl"],
    ["Erasmus University Rotterdam", "https://www.eur.nl"],
    ["Tilburg University", "https://www.tilburguniversity.edu"],
    ["University of Twente", "https://www.utwente.nl"],
    ["Maastricht University", "https://www.maastrichtuniversity.nl"]
  ]),
  ...group("Denmark", "Europe", "Salaried PhD", POST, [
    ["Aalborg University", "https://www.aau.dk"],
    ["University of Southern Denmark", "https://www.sdu.dk"],
    ["Roskilde University", "https://ruc.dk"],
    ["Copenhagen Business School", "https://www.cbs.dk"],
    ["IT University of Copenhagen", "https://www.itu.dk"]
  ]),
  ...group("Norway", "Europe", "Salaried PhD", POST, [
    ["University of Bergen", "https://www.uib.no"],
    ["UiT The Arctic University of Norway", "https://uit.no"],
    ["Norwegian University of Life Sciences", "https://www.nmbu.no"],
    ["University of Stavanger", "https://www.uis.no"],
    ["University of Agder", "https://www.uia.no"],
    ["OsloMet", "https://www.oslomet.no"]
  ]),
  ...group("Finland", "Europe", "Salaried doctoral researcher", POST, [
    ["Tampere University", "https://www.tuni.fi"],
    ["University of Oulu", "https://www.oulu.fi"],
    ["University of Turku", "https://www.utu.fi"],
    ["University of Jyväskylä", "https://www.jyu.fi"],
    ["Lappeenranta-Lahti University of Technology", "https://www.lut.fi"],
    ["Åbo Akademi University", "https://www.abo.fi"],
    ["University of Eastern Finland", "https://www.uef.fi"]
  ]),
  ...group("Belgium", "Europe", "Salaried or scholarship PhD", POST, [
    ["UCLouvain", "https://uclouvain.be"],
    ["Université libre de Bruxelles", "https://www.ulb.be"],
    ["Vrije Universiteit Brussel", "https://www.vub.be"],
    ["University of Antwerp", "https://www.uantwerpen.be"],
    ["Hasselt University", "https://www.uhasselt.be"],
    ["University of Liège", "https://www.uliege.be"],
    ["University of Namur", "https://www.unamur.be"]
  ]),
  ...group("Austria", "Europe", "Salaried PhD or stipend", POST, [
    ["University of Vienna", "https://www.univie.ac.at"],
    ["Graz University of Technology", "https://www.tugraz.at"],
    ["University of Innsbruck", "https://www.uibk.ac.at"],
    ["Johannes Kepler University Linz", "https://www.jku.at"],
    ["University of Graz", "https://www.uni-graz.at"],
    ["University of Natural Resources and Life Sciences, Vienna", "https://boku.ac.at"],
    ["Medical University of Vienna", "https://www.meduniwien.ac.at"],
    ["University of Salzburg", "https://www.plus.ac.at"]
  ]),
  ...group("France", "Europe", "Doctoral contract", POST, [
    ["ENS Paris", "https://www.ens.psl.eu"],
    ["Université Paris-Saclay", "https://www.universite-paris-saclay.fr"],
    ["Sciences Po", "https://www.sciencespo.fr"],
    ["Université Grenoble Alpes", "https://www.univ-grenoble-alpes.fr"],
    ["Université Claude Bernard Lyon 1", "https://www.univ-lyon1.fr"],
    ["Aix-Marseille Université", "https://www.univ-amu.fr"],
    ["University of Strasbourg", "https://www.unistra.fr"],
    ["University of Bordeaux", "https://www.u-bordeaux.fr"],
    ["Université Toulouse III – Paul Sabatier", "https://www.univ-tlse3.fr"],
    ["Université de Montpellier", "https://www.umontpellier.fr"],
    ["CentraleSupélec", "https://www.centralesupelec.fr"]
  ]),
  ...group("Italy", "Europe", "Funded doctoral scholarship", "Per call; many close in spring or summer", [
    ["University of Bologna", "https://www.unibo.it"],
    ["University of Milan", "https://www.unimi.it"],
    ["University of Padua", "https://www.unipd.it"],
    ["University of Turin", "https://www.unito.it"],
    ["University of Pisa", "https://www.unipi.it"],
    ["Scuola Normale Superiore", "https://www.sns.it"],
    ["Sant'Anna School of Advanced Studies", "https://www.santannapisa.it"],
    ["University of Naples Federico II", "https://www.unina.it"],
    ["University of Trento", "https://www.unitn.it"],
    ["Politecnico di Torino", "https://www.polito.it"],
    ["SISSA", "https://www.sissa.it"],
    ["University of Florence", "https://www.unifi.it"]
  ]),
  ...group("Spain", "Europe", "Funded PhD contract", POST, [
    ["Universitat de Barcelona", "https://www.ub.edu"],
    ["Universidad Autónoma de Madrid", "https://www.uam.es"],
    ["Universidad Complutense de Madrid", "https://www.ucm.es"],
    ["Universitat Pompeu Fabra", "https://www.upf.edu"],
    ["Universitat Autònoma de Barcelona", "https://www.uab.cat"],
    ["Universidad Politécnica de Madrid", "https://www.upm.es"],
    ["Universitat de València", "https://www.uv.es"],
    ["Universitat Politècnica de València", "https://www.upv.es"],
    ["University of Granada", "https://www.ugr.es"],
    ["Universidad Carlos III de Madrid", "https://www.uc3m.es"]
  ]),
  ...group("United Kingdom", "Europe", "Scholarships / studentships", "Dec–Jan (priority)", [
    ["University of Manchester", "https://www.manchester.ac.uk"],
    ["King's College London", "https://www.kcl.ac.uk"],
    ["University of Bristol", "https://www.bristol.ac.uk"],
    ["University of Warwick", "https://warwick.ac.uk"],
    ["University of Leeds", "https://www.leeds.ac.uk"],
    ["University of Southampton", "https://www.southampton.ac.uk"],
    ["University of Birmingham", "https://www.birmingham.ac.uk"],
    ["University of Sheffield", "https://www.sheffield.ac.uk"],
    ["University of Nottingham", "https://www.nottingham.ac.uk"],
    ["Durham University", "https://www.durham.ac.uk"],
    ["London School of Economics", "https://www.lse.ac.uk"]
  ]),
  ...group("Scotland", "Europe", "Scholarships / studentships", "Dec–Jan (priority)", [
    ["University of Glasgow", "https://www.gla.ac.uk"],
    ["University of St Andrews", "https://www.st-andrews.ac.uk"],
    ["University of Strathclyde", "https://www.strath.ac.uk"],
    ["Heriot-Watt University", "https://www.hw.ac.uk"],
    ["University of Aberdeen", "https://www.abdn.ac.uk"],
    ["University of Dundee", "https://www.dundee.ac.uk"],
    ["University of Stirling", "https://www.stir.ac.uk"]
  ]),
  ...group("Ireland", "Europe", "Funded PhD posts", POST, [
    ["University of Galway", "https://www.universityofgalway.ie"],
    ["University College Cork", "https://www.ucc.ie"],
    ["Dublin City University", "https://www.dcu.ie"],
    ["University of Limerick", "https://www.ul.ie"],
    ["Maynooth University", "https://www.maynoothuniversity.ie"]
  ]),
  ...group("United States", "North America", "RA/TA stipend + tuition", "Dec (most programs)", [
    ["Harvard University", "https://www.harvard.edu"],
    ["Princeton University", "https://www.princeton.edu"],
    ["Yale University", "https://www.yale.edu"],
    ["Caltech", "https://www.caltech.edu"],
    ["Cornell University", "https://www.cornell.edu"],
    ["University of Pennsylvania", "https://www.upenn.edu"],
    ["Johns Hopkins University", "https://www.jhu.edu"],
    ["UCLA", "https://www.ucla.edu"],
    ["UC San Diego", "https://ucsd.edu"],
    ["University of Wisconsin–Madison", "https://www.wisc.edu"],
    ["Northwestern University", "https://www.northwestern.edu"],
    ["University of Maryland", "https://umd.edu"],
    ["New York University", "https://www.nyu.edu"],
    ["Duke University", "https://www.duke.edu"]
  ]),
  ...group("Canada", "North America", "Research assistantship / funding package", "Dec–Jan", [
    ["McMaster University", "https://www.mcmaster.ca"],
    ["University of Ottawa", "https://www.uottawa.ca"],
    ["Queen's University", "https://www.queensu.ca"],
    ["University of Calgary", "https://www.ucalgary.ca"],
    ["Western University", "https://www.uwo.ca"],
    ["Dalhousie University", "https://www.dal.ca"],
    ["Université de Montréal", "https://www.umontreal.ca"],
    ["Université Laval", "https://www.ulaval.ca"]
  ]),
  ...group("Japan", "Asia", "MEXT and other scholarships", "See the official admissions page", [
    ["Osaka University", "https://www.osaka-u.ac.jp"],
    ["Tohoku University", "https://www.tohoku.ac.jp"],
    ["Nagoya University", "https://www.nagoya-u.ac.jp"],
    ["Kyushu University", "https://www.kyushu-u.ac.jp"],
    ["Hokkaido University", "https://www.hokudai.ac.jp"],
    ["Waseda University", "https://www.waseda.jp"],
    ["Keio University", "https://www.keio.ac.jp"],
    ["University of Tsukuba", "https://www.tsukuba.ac.jp"],
    ["Okinawa Institute of Science and Technology", "https://www.oist.jp"]
  ]),
  ...group("South Korea", "Asia", "GKS / lab-funded", "See the official admissions page", [
    ["POSTECH", "https://www.postech.ac.kr"],
    ["Yonsei University", "https://www.yonsei.ac.kr"],
    ["Korea University", "https://www.korea.ac.kr"],
    ["UNIST", "https://www.unist.ac.kr"],
    ["GIST", "https://www.gist.ac.kr"],
    ["DGIST", "https://www.dgist.ac.kr"],
    ["Sungkyunkwan University", "https://www.skku.edu"],
    ["Hanyang University", "https://www.hanyang.ac.kr"]
  ]),
  ...group("China", "Asia", "CSC / university scholarship", "See the official admissions page", [
    ["Peking University", "https://www.pku.edu.cn"],
    ["Fudan University", "https://www.fudan.edu.cn"],
    ["Zhejiang University", "https://www.zju.edu.cn"],
    ["Shanghai Jiao Tong University", "https://www.sjtu.edu.cn"],
    ["University of Science and Technology of China", "https://www.ustc.edu.cn"],
    ["Nanjing University", "https://www.nju.edu.cn"],
    ["Wuhan University", "https://www.whu.edu.cn"],
    ["Harbin Institute of Technology", "https://www.hit.edu.cn"],
    ["Beijing Institute of Technology", "https://www.bit.edu.cn"],
    ["Xi'an Jiaotong University", "https://www.xjtu.edu.cn"],
    ["Sun Yat-sen University", "https://www.sysu.edu.cn"],
    ["Tongji University", "https://www.tongji.edu.cn"]
  ]),
  ...group("Singapore", "Asia", "Research scholarship (stipend + fees)", "See the graduate admissions page", [
    ["Singapore University of Technology and Design", "https://www.sutd.edu.sg"],
    ["Singapore Management University", "https://www.smu.edu.sg"]
  ]),
  ...group("Hong Kong", "Asia", "HKPFS / RPg studentship", "Dec 1 (HKPFS)", [
    ["Chinese University of Hong Kong", "https://www.cuhk.edu.hk"],
    ["City University of Hong Kong", "https://www.cityu.edu.hk"],
    ["Hong Kong Polytechnic University", "https://www.polyu.edu.hk"],
    ["Hong Kong Baptist University", "https://www.hkbu.edu.hk"],
    ["Lingnan University", "https://www.ln.edu.hk"],
    ["Education University of Hong Kong", "https://www.eduhk.hk"]
  ]),
  ...group("Taiwan", "Asia", "Taiwan Scholarship / university assistantship", "See the official admissions page", [
    ["National Taiwan University", "https://www.ntu.edu.tw"],
    ["National Tsing Hua University", "https://www.nthu.edu.tw"],
    ["National Yang Ming Chiao Tung University", "https://www.nycu.edu.tw"],
    ["National Cheng Kung University", "https://www.ncku.edu.tw"],
    ["National Central University", "https://www.ncu.edu.tw"],
    ["National Sun Yat-sen University", "https://www.nsysu.edu.tw"],
    ["National Taiwan University of Science and Technology", "https://www.ntust.edu.tw"],
    ["National Chengchi University", "https://www.nccu.edu.tw"],
    ["National Taiwan Normal University", "https://www.ntnu.edu.tw"]
  ]),
  ...group("Australia", "Oceania", "RTP-type scholarship", "Varies by round", [
    ["UNSW Sydney", "https://www.unsw.edu.au"],
    ["University of Queensland", "https://www.uq.edu.au"],
    ["University of Adelaide", "https://www.adelaide.edu.au"],
    ["University of Western Australia", "https://www.uwa.edu.au"],
    ["University of Technology Sydney", "https://www.uts.edu.au"],
    ["Macquarie University", "https://www.mq.edu.au"],
    ["Curtin University", "https://www.curtin.edu.au"],
    ["RMIT University", "https://www.rmit.edu.au"],
    ["Deakin University", "https://www.deakin.edu.au"]
  ]),
  ...group("New Zealand", "Oceania", "Doctoral scholarship", "Varies by university", [
    ["Victoria University of Wellington", "https://www.wgtn.ac.nz"],
    ["University of Otago", "https://www.otago.ac.nz"],
    ["University of Canterbury", "https://www.canterbury.ac.nz"],
    ["Massey University", "https://www.massey.ac.nz"],
    ["University of Waikato", "https://www.waikato.ac.nz"],
    ["Auckland University of Technology", "https://www.aut.ac.nz"]
  ]),
  ...group("Turkey", "Middle East", "Türkiye Scholarships / university assistantship", "See the official admissions page", [
    ["Middle East Technical University", "https://www.metu.edu.tr"],
    ["Boğaziçi University", "https://www.bogazici.edu.tr"],
    ["Istanbul Technical University", "https://www.itu.edu.tr"],
    ["Bilkent University", "https://www.bilkent.edu.tr"],
    ["Koç University", "https://www.ku.edu.tr"],
    ["Sabancı University", "https://www.sabanciuniv.edu"],
    ["Hacettepe University", "https://www.hacettepe.edu.tr"],
    ["Ankara University", "https://www.ankara.edu.tr"],
    ["Istanbul University", "https://www.istanbul.edu.tr"],
    ["Ege University", "https://www.ege.edu.tr"]
  ]),
  ...group("Saudi Arabia", "Middle East", "University scholarship / stipend", "See the official admissions page", [
    ["King Fahd University of Petroleum and Minerals", "https://www.kfupm.edu.sa"],
    ["King Saud University", "https://ksu.edu.sa"],
    ["King Abdulaziz University", "https://www.kau.edu.sa"],
    ["Umm Al-Qura University", "https://uqu.edu.sa"],
    ["Islamic University of Madinah", "https://www.iu.edu.sa"]
  ]),
  ...group("Hungary", "Europe", "Stipendium Hungaricum", "Per the Tempus call", [
    ["Eötvös Loránd University", "https://www.elte.hu"],
    ["Budapest University of Technology and Economics", "https://www.bme.hu"],
    ["University of Szeged", "https://u-szeged.hu"],
    ["University of Debrecen", "https://unideb.hu"],
    ["University of Pécs", "https://pte.hu"],
    ["Semmelweis University", "https://semmelweis.hu"],
    ["Corvinus University of Budapest", "https://www.uni-corvinus.hu"]
  ]),
  ...group("Czech Republic", "Europe", "Doctoral stipend; Czech Government scholarships (limited)", "Spring (entrance exams); varies by faculty", [
    ["Charles University", "https://cuni.cz/UKEN-1.html"],
    ["Czech Technical University in Prague", "https://www.cvut.cz/en"],
    ["Masaryk University", "https://www.muni.cz/en"],
    ["Brno University of Technology", "https://www.vut.cz/en"],
    ["Palacký University Olomouc", "https://www.upol.cz/en"]
  ]),
  ...group("Poland", "Europe", "Doctoral school stipend; NAWA scholarships", "Spring–summer (doctoral school recruitment)", [
    ["University of Warsaw", "https://www.uw.edu.pl/en"],
    ["Jagiellonian University", "https://en.uj.edu.pl"],
    ["Warsaw University of Technology", "https://www.pw.edu.pl/engpw"],
    ["AGH University of Krakow", "https://www.agh.edu.pl/en"],
    ["Adam Mickiewicz University", "https://amu.edu.pl/en"],
    ["Poznań University of Technology", "https://put.poznan.pl/en"],
    ["Wrocław University of Science and Technology", "https://pwr.edu.pl/en"]
  ]),
  ...group("Portugal", "Europe", "FCT doctoral fellowships; university calls", "Per FCT call and programme", [
    ["University of Lisbon", "https://www.ulisboa.pt/en"],
    ["University of Porto", "https://www.up.pt/portal/en"],
    ["University of Coimbra", "https://www.uc.pt/en"],
    ["NOVA University Lisbon", "https://www.unl.pt/en"],
    ["University of Minho", "https://www.uminho.pt/EN"]
  ]),
  ...group("Estonia", "Europe", "Doctoral stipend or employment; Estonian Research Council funding", "Per programme; often spring", [
    ["University of Tartu", "https://ut.ee/en"],
    ["Tallinn University of Technology", "https://taltech.ee/en"],
    ["Tallinn University", "https://www.tlu.ee/en"]
  ]),
  ...group("Luxembourg", "Europe", "Salaried PhD (FNR AFR / university contract)", POST, [
    ["University of Luxembourg", "https://www.uni.lu/en"]
  ]),
  ...group("Iceland", "Europe", "Doctoral grants; project-funded posts", POST, [
    ["University of Iceland", "https://english.hi.is"],
    ["Reykjavik University", "https://en.ru.is"]
  ]),
  ...group("Qatar", "Middle East", "Fully funded graduate scholarship (stipend + tuition + housing)", "See the official admissions page", [
    ["Hamad Bin Khalifa University", "https://www.hbku.edu.qa"],
    ["Qatar University", "https://www.qu.edu.qa"]
  ]),
  ...group("United Arab Emirates", "Middle East", "Fully funded scholarship (stipend + tuition)", "See the official admissions page", [
    ["MBZUAI", "https://mbzuai.ac.ae"],
    ["Khalifa University", "https://www.ku.ac.ae"],
    ["NYU Abu Dhabi", "https://nyuad.nyu.edu"],
    ["United Arab Emirates University", "https://www.uaeu.ac.ae"]
  ]),
  ...group("Malaysia", "Asia", "Malaysia International Scholarship; university fellowships", "Per intake; see the official admissions page", [
    ["Universiti Malaya", "https://www.um.edu.my"],
    ["Universiti Putra Malaysia", "https://www.upm.edu.my"],
    ["Universiti Kebangsaan Malaysia", "https://www.ukm.my"],
    ["Universiti Sains Malaysia", "https://www.usm.my"],
    ["Universiti Teknologi Malaysia", "https://www.utm.my"]
  ])
];
