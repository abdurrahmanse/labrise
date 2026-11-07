import { mkdirSync } from "node:fs";
import { chromium } from "playwright";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { StudentPortrait } from "../modules/case-study/components/StudentPortrait";
import { student } from "../modules/case-study/data/profile";
import { applicationPackage } from "../modules/case-study/data/package";
import { scholarship } from "../modules/case-study/data/scholarship";

// Builds the sample PDFs for the case study with Chrome's own PDF engine. Run: npm run generate:case-study
// Every document is made up. Each page carries a SAMPLE watermark and a footer saying so.
const OUT = "public/case-study/documents";
const portrait = renderToStaticMarkup(createElement(StudentPortrait, { size: 110 }));
const NOTE = "SAMPLE · Made up for the Labrise case study · Not a real document";

const css = `
  @page { size: A4; margin: 18mm 16mm 20mm; }
  * { box-sizing: border-box; }
  body { font-family: Helvetica, Arial, sans-serif; color: #111; font-size: 10.5pt; line-height: 1.5; margin: 0; }
  h1 { font-size: 20pt; margin: 0 0 2mm; }
  h2 { font-size: 11pt; text-transform: uppercase; letter-spacing: .08em; border-bottom: 1.5px solid #111; padding-bottom: 1mm; margin: 7mm 0 3mm; }
  h3 { font-size: 10.5pt; margin: 3mm 0 0; }
  p { margin: 0 0 3mm; } ul { margin: 0 0 3mm; padding-left: 5mm; } li { margin-bottom: 1mm; }
  table { width: 100%; border-collapse: collapse; margin: 2mm 0 4mm; font-size: 9.5pt; }
  th, td { border: 1px solid #999; padding: 1.6mm 2.4mm; text-align: left; vertical-align: top; }
  th { background: #eee; }
  .muted { color: #555; } .small { font-size: 9pt; }
  .head { display: flex; justify-content: space-between; gap: 8mm; align-items: flex-start; border-bottom: 3px solid #111; padding-bottom: 4mm; margin-bottom: 4mm; }
  .box { border: 1.5px solid #111; padding: 4mm; }
  .wm { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; z-index: -1; }
  .wm span { font-size: 90pt; font-weight: 700; letter-spacing: .1em; color: rgba(0,0,0,.06); transform: rotate(-30deg); }
  .foot { position: fixed; bottom: 0; left: 0; right: 0; text-align: center; font-size: 8pt; color: #777; }
  .sig { margin-top: 10mm; }
`;

const doc = (title: string, body: string) =>
  `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><style>${css}</style></head><body><div class="wm"><span>SAMPLE</span></div><div class="foot">${NOTE}</div>${body}</body></html>`;

const who = `<div><h1>Tania Rahman</h1><p class="muted">MSc Computer Science · Computer vision for medical imaging<br>Dhaka, Bangladesh · tania.rahman@sample.invalid · github.com/sample-tania</p></div>`;

const brief = applicationPackage.refereeBrief;

const docs: Record<string, string> = {
  "scholarship-essay": doc("Scholarship essay (sample)", `
    <h1>Scholarship essay</h1><p class="muted">Tania Rahman · Fully funded PhD · Sample draft, 300 words</p>
    <p>${scholarship.essay}</p>
    <h2>Notes on the draft</h2><ul><li>One story with a result: a useful model from only a few hundred labelled images.</li><li>A clear plan for the PhD and for the years after the award.</li><li>Tied to the funder's goal of lasting benefit, in her own words.</li></ul>`),

  "referee-brief": doc("Referee request email (sample)", `
    <h1>${brief.subject}</h1><p class="muted">To: ${brief.to} · Sent: ${brief.sent}</p>
    ${brief.body.map((l) => `<p>${l}</p>`).join("")}
    <h2>Attachments</h2><ul><li>Academic CV (PDF)</li><li>Statement of purpose draft</li><li>Transcript</li><li>Deadline table: programme, date, how to submit the letter</li></ul>`),

  "academic-cv": doc("Academic CV, Tania Rahman (sample)", `
    <div class="head">${who}${portrait}</div>
    <h2>Education</h2>
    <p><b>MSc, Computer Science</b>, Sample University (fictional), 2023–2025. CGPA 3.72/4.00 (scale 4.00; rank 3 of 60). Thesis distinction.<br>
    <b>BSc, Computer Science and Engineering</b>, Sample Institute of Technology (fictional), 2018–2022. CGPA 3.58/4.00, top 8% of 140.</p>
    <h2>Research</h2>
    <h3>Label-efficient segmentation of retina images (MSc thesis, 2024–2025)</h3>
    <ul><li>Trained a segmentation model on 400 labelled images; contrastive pre-training raised Dice from 0.78 to 0.86.</li>
    <li>Found a drop on images from a second clinic and designed a cross-site test.</li><li>Released code, data splits and a project page.</li></ul>
    <h3>Research assistant, vision lab (2024–present, remote mentor)</h3>
    <ul><li>Reproduced three published methods and documented where they failed on small data.</li><li>Tutored two junior students on PyTorch.</li></ul>
    <h2>Publications</h2>
    <ul><li>Rahman, T., and mentor. <i>Contrastive pre-training for small retina datasets</i>. Preprint, 2025. (sample)</li><li>Poster, national student conference on AI, 2025. (sample)</li></ul>
    <h2>Skills</h2>
    <p>Python, PyTorch, scikit-learn, Git, LaTeX. Evidence: public repository with tests and a reproducible pipeline.</p>
    <h2>Languages</h2><p>Bangla (native), English (IELTS 7.5), German (A1, in progress).</p>`),

  "statement-of-purpose": doc("Statement of purpose, Tania Rahman (sample)", `
    <h1>Statement of purpose</h1><p class="muted">PhD application · Computer vision for medical imaging · Tania Rahman</p>
    <p>In my MSc thesis I trained a model to find signs of diabetic eye disease using only 400 labelled images. Contrastive pre-training lifted the score from 0.78 to 0.86, but the model failed on images from a second clinic. That gap is the question I want to spend my PhD on: how to make label-efficient models stay reliable across hospitals.</p>
    <p>My path to this question was practical. During my BSc I learned that the hardest part of medical AI is not the model but the data: labels are expensive, and every hospital images patients differently. I started a small project on public retina data, then joined a remote research assistantship where I reproduced three published methods and recorded exactly where each one broke. That work became a preprint and a poster, and taught me to report negative results honestly.</p>
    <p>Your group's work on robust self-supervised pre-training for small medical datasets is the best place I know to study this. I have read your 2025 paper closely. Its open question on scanner shift is the one my experiments point to, and I propose to extend it with a cross-site evaluation using pooled unlabelled images, as outlined in my attached proposal.</p>
    <p>I bring tested skills in PyTorch, careful experiment design and open, reproducible code, and I learn quickly: I began German this year to prepare for life and work in your lab's city. During my PhD I aim to publish a robust pre-training method and a benchmark of cross-site failures, and later to work with clinicians so that the models are used responsibly.</p>
    <p>I would be grateful for the chance to discuss how my work could contribute to your group.</p>
    <p class="sig">Tania Rahman<br>Dhaka, Bangladesh</p>`),

  "research-proposal": doc("Research proposal, Tania Rahman (sample)", `
    <h1>Robust self-supervised learning across clinics</h1><p class="muted">Research proposal, 3-year PhD · Tania Rahman · Sample draft</p>
    <h2>1. Question</h2><p>How can self-supervised models trained on small medical image sets stay accurate when images come from new scanners and clinics?</p>
    <h2>2. Background</h2><p>Contrastive pre-training helps when labels are scarce, yet reported gains are usually measured within one site. Three strands matter: (a) label-efficient pre-training; (b) domain shift in medical imaging; (c) evaluation that separates site effects from disease signal. The host group's recent paper names scanner shift as an open question.</p>
    <h2>3. Method</h2><ul><li>Pool unlabelled images from several public sources and pre-train with a contrastive objective plus a site-invariance term.</li><li>Evaluate on held-out sites with fixed splits, reporting per-site scores, not only averages.</li><li>Ablate each component and report negative results.</li></ul>
    <h2>4. Plan</h2><table><tr><th>Year</th><th>Work</th><th>Output</th></tr>
    <tr><td>1</td><td>Reproduce baselines; build the cross-site benchmark</td><td>Benchmark and workshop paper</td></tr>
    <tr><td>2</td><td>Develop and test the robustness method</td><td>Conference paper</td></tr>
    <tr><td>3</td><td>Clinical collaboration study; write thesis</td><td>Journal paper and thesis</td></tr></table>
    <h2>5. Why this group</h2><p>Access to multi-site data, prior work on exactly this problem and a record of supervising students to publication.</p>
    <h2>6. Risks</h2><p>Public data may lack enough site variety. Mitigation: use the group's partner data once agreed, and publish the benchmark either way.</p>`),

  "transcript": doc("Academic transcript, Tania Rahman (sample)", `
    <div class="head"><div><h1>Official transcript (sample)</h1><p class="muted">Sample University (fictional) · MSc, Computer Science · 2023–2025</p></div>${portrait}</div>
    <p><b>Student:</b> Tania Rahman · <b>ID:</b> SAMPLE-0000 · <b>Scale:</b> 4.00 · <b>Final CGPA:</b> 3.72 · <b>Rank:</b> 3 of 60</p>
    <table><tr><th>Course</th><th>Credits</th><th>Grade</th><th>Points</th></tr>
    <tr><td>Advanced Machine Learning</td><td>3</td><td>A+</td><td>4.00</td></tr>
    <tr><td>Computer Vision</td><td>3</td><td>A+</td><td>4.00</td></tr>
    <tr><td>Deep Learning for Medical Images</td><td>3</td><td>A</td><td>3.75</td></tr>
    <tr><td>Probabilistic Methods</td><td>3</td><td>A-</td><td>3.50</td></tr>
    <tr><td>Research Methods</td><td>2</td><td>A</td><td>3.75</td></tr>
    <tr><td>Optimization</td><td>3</td><td>B+</td><td>3.25</td></tr>
    <tr><td>MSc Thesis</td><td>12</td><td>A+ (distinction)</td><td>4.00</td></tr></table>
    <h2>Grading key</h2><table><tr><th>Grade</th><th>A+</th><th>A</th><th>A-</th><th>B+</th><th>B</th></tr><tr><td>Points</td><td>4.00</td><td>3.75</td><td>3.50</td><td>3.25</td><td>3.00</td></tr></table>
    <p class="small muted">Sample document. A real transcript is issued and sealed by the university; never alter one.</p>`),

  "grade-context-letter": doc("Grade context letter (sample)", `
    <h1>Grade context letter</h1><p class="muted">Sample University (fictional) · Department of Computer Science</p>
    <p>To whom it may concern,</p>
    <p>This letter explains the grading system used for <b>Tania Rahman</b>, who completed the MSc in Computer Science in 2025.</p>
    <ul><li>The university uses a 4.00 scale. A CGPA of 3.72 is in the top 5% of the cohort.</li><li>Her class rank is 3 of 60.</li><li>A grade of A+ equals 4.00 and is awarded for 80% and above; there is no higher grade.</li><li>Grades are not directly equivalent to those of other countries. We ask readers to use the university's rules and not to convert them by formula.</li></ul>
    <p>Please contact the department office for verification.</p>
    <p class="sig">Head of Department (fictional)<br>Sample University</p>`),

  "reference-letter": doc("Reference letter (sample)", `
    <h1>Letter of recommendation</h1><p class="muted">Dr. A. Sample (fictional) · Thesis supervisor · Sample University</p>
    <p>I have known Tania Rahman for three years, first as a student in my computer vision course and then as the author of an MSc thesis I supervised. She is among the best five students I have taught.</p>
    <p><b>Research ability.</b> Tania chose a hard problem, learning from very few labelled medical images, and carried it from idea to result largely on her own. When her model failed on images from a second clinic, she did not hide it. She designed a test to isolate the cause and reported it in her thesis.</p>
    <p><b>Work habits.</b> Her code is clear and tested, her experiments are reproducible, and she meets deadlines. She tutored two juniors patiently.</p>
    <p><b>Recommendation.</b> I recommend her without reservation for a funded PhD place. She will need guidance on writing speed for journals, which she is already working on, and she will repay it with independence and rigour. Please contact me for any further detail.</p>
    <p class="sig">Dr. A. Sample (fictional)<br>Associate Professor, Sample University</p>`),

  "ielts-report": doc("IELTS score report (sample)", `
    <h1>Test score report (sample)</h1><p class="muted">Modelled on a typical academic English test report. Not an official certificate.</p>
    <div class="head"><div><p><b>Candidate:</b> Tania Rahman<br><b>Nationality:</b> Bangladeshi<br><b>Test:</b> Academic<br><b>Date:</b> 12 March 2026 (sample)<br><b>Report no.:</b> SAMPLE-0000</p></div>${portrait}</div>
    <table><tr><th>Listening</th><th>Reading</th><th>Writing</th><th>Speaking</th><th>Overall</th></tr><tr><td>8.0</td><td>8.0</td><td>7.0</td><td>7.0</td><td><b>7.5</b></td></tr></table>
    <p class="small muted">Universities normally receive scores electronically from the test centre. A real report can be checked online by the receiving institution.</p>`),

  "passport-specimen": doc("Passport specimen page (sample)", `
    <h1>Passport photo page: specimen</h1><p class="muted">A drawn specimen. It is not a real passport, has no real numbers, and cannot be used for any purpose.</p>
    <div class="box" style="display:flex;gap:8mm;margin-top:6mm">${portrait}
      <table style="margin:0"><tr><th>Surname</th><td>${student.passport.surname}</td></tr><tr><th>Given name</th><td>${student.passport.given}</td></tr><tr><th>Nationality</th><td>${student.passport.nationality}</td></tr><tr><th>Date of birth</th><td>${student.passport.born}</td></tr><tr><th>Issued</th><td>${student.passport.issued}</td></tr><tr><th>Expires</th><td>${student.passport.expires}</td></tr><tr><th>Passport no.</th><td>${student.passport.number}</td></tr></table></div>
    <p style="margin-top:6mm" class="small">${student.passport.note}</p>`),

  "offer-letter": doc("Offer letter (sample)", `
    <h1>Offer of a funded doctoral position</h1><p class="muted">A German university of technology (fictional letterhead) · Faculty of Computer Science</p>
    <p>Dear Ms Rahman,</p>
    <p>Following your interviews, we are pleased to offer you a doctoral position in the group of Prof. M. Keller (fictional), starting <b>1 September 2027</b>.</p>
    <ul><li><b>Contract:</b> 36 months, salaried, with social insurance contributions.</li><li><b>Tuition:</b> none.</li><li><b>Topic:</b> robust self-supervised learning for medical images, as in your proposal.</li><li><b>Conditions:</b> degree certificates and a valid visa. Please reply in writing by 15 April 2027.</li></ul>
    <p>We look forward to welcoming you.</p>
    <p class="sig">Prof. M. Keller (fictional)<br>Faculty of Computer Science</p>
    <p class="small muted">Sample document. Always get a real offer in writing and confirm the terms with the university's own office.</p>`)
};

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ channel: process.env.CHANNEL ?? "chrome" });
const page = await browser.newPage();
for (const [name, html] of Object.entries(docs)) {
  await page.setContent(html, { waitUntil: "load" });
  await page.pdf({ path: `${OUT}/${name}.pdf`, format: "A4", printBackground: true, displayHeaderFooter: false, preferCSSPageSize: true });
  console.log("wrote", `${OUT}/${name}.pdf`);
}
await browser.close();
