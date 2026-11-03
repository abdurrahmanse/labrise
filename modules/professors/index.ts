/**
 * Public API of the professors module. Other code imports from "@/modules/professors", never from inner files.
 */
export { useOutreachProgress } from "./store/useOutreachProgress";
export { FindProfessors } from "./components/FindProfessors";
export { OutreachProgressBadge } from "./components/OutreachProgressBadge";
export { OutreachStepper } from "./components/OutreachStepper";
export { ProfessorStats } from "./components/ProfessorStats";
export { SupervisorNeed } from "./components/SupervisorNeed";
export { TemplatePicker } from "./components/TemplatePicker";
export { ProfessorOutreachView } from "./components/ProfessorOutreachView";
export { PROFESSOR_TABS } from "./components/professorTabs";
export type { OutreachEmailBlueprint, OutreachStep, SupervisorNecessityRule } from "./types/outreach";
