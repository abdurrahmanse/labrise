import type { GuideDetail } from "../../types";

export const researchAreaGuide: GuideDetail = {
  id: "research-area",
  summary: "Your research area decides which professors you email, which universities you shortlist and what your SOP says. Choose it early and narrow it down.",
  why: "Funded PhD positions are given to people who fit a specific lab. A clear area shows you know what you want and lets a professor see a match in seconds.",
  timeline: "Spend 3–4 weeks on this before anything else. You can refine it later, but you need a first draft before emailing anyone.",
  sections: [
    {
      heading: "Find your direction",
      items: [
        { title: "List what you enjoyed", detail: "Write down the 3–5 courses, projects or thesis parts you enjoyed most, and why. Look for the common thread: data, theory, systems, language, images, robots." },
        { title: "Read widely, then narrow", detail: "Skim 15–20 recent papers on arXiv or from top venues (NeurIPS, ICML, ICLR, CVPR, ACL). Mark the ones you could explain to a friend. Those point to your area." },
        { title: "Move from area to sub-topic", detail: "'Machine learning' is too broad. 'Efficient fine-tuning of language models' or 'uncertainty estimation for medical images' is a direction a professor can respond to." },
        { title: "Check the supply", detail: "Search 10 professors who work on it. If you find fewer than 10, widen slightly. If hundreds, narrow it." }
      ]
    },
    {
      heading: "Test your choice",
      items: [
        { title: "Two-sentence test", detail: "Write what you want to research and why in two sentences. If you cannot, you are not ready to email professors." },
        { title: "Reproduce one paper", detail: "Re-run code from one paper in your area. If you enjoy fighting with the details, it is a good sign." },
        { title: "Talk to a mentor", detail: "Ask a senior student or your thesis supervisor to challenge your choice. Fix weak points before applying." }
      ]
    }
  ],
  example: { label: "Good vs weak", text: "Weak: 'I am interested in AI.'\nBetter: 'I work on making vision models robust to distribution shift in medical imaging, and I want to study test-time adaptation.'" },
  mistakes: ["Choosing a trending topic with no background in it.", "Listing five unrelated interests.", "Copying a professor's abstract as your own interest.", "Changing area completely after emailing."],
  checklist: ["One area and one sub-topic written down", "Two-sentence summary ready", "10+ professors found", "3 key papers read in detail"],
  related: ["cv", "sop", "cold-email"]
};
