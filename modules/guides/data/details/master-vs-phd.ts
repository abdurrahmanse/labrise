import type { GuideDetail } from "../../types";

export const masterVsPhdGuide: GuideDetail = {
  id: "master-vs-phd",
  summary: "Decide whether a master's, a PhD, or master's first then PhD fits your goals and your chances of full funding.",
  why: "Funding works very differently by degree. PhD positions are usually paid jobs, while master's funding is rarer and more competitive.",
  timeline: "Decide 12 months before applying, because the choice changes which universities, tests and documents you need.",
  sections: [
    {
      heading: "How they differ",
      items: [
        { title: "PhD", detail: "3–6 years of research. In many countries you are employed or receive a stipend with tuition waived. Best if you want a research career." },
        { title: "Research master's", detail: "1–2 years with a thesis. Sometimes funded through a lab, and a strong stepping stone to a PhD." },
        { title: "Taught master's", detail: "1–2 years of courses. Funding usually comes from competitive scholarships such as DAAD, Chevening or Erasmus Mundus." }
      ]
    },
    {
      heading: "Choose using these questions",
      items: [
        { title: "Do you want research as a career?", detail: "If yes and you already have research experience, apply directly to PhD programs." },
        { title: "Is your research profile thin?", detail: "A funded research master's can build papers and recommenders before a PhD." },
        { title: "Do you have a bachelor's only?", detail: "Many European PhD posts require a master's. The US and some other systems accept a bachelor's into a PhD." },
        { title: "How important is funding certainty?", detail: "PhD posts that list salary in the advert are the most certain. Master's funding usually depends on winning a scholarship." }
      ]
    }
  ],
  mistakes: ["Applying for a taught master's expecting a stipend.", "Skipping a master's when the country requires one.", "Choosing a PhD only to avoid the job market."],
  checklist: ["Career goal written down", "Entry requirements checked per country", "Funding route identified for the chosen degree"],
  related: ["funding-types", "research-area", "deadlines-timeline"]
};
