export interface FacultyMember {
  name: string;
  title: string;
  subject: string;
  qualification: string;
  years: number;
  photo?: string;
}

export const faculty: FacultyMember[] = [
  { name: "Ravi Keshre",      title: "Sir",   subject: "Physics",   qualification: "MSc",                years: 16 },
  // TODO: organisation behind "Ex-Scientist" is unknown, don't guess.
  { name: "Dilip Wani",       title: "Sir",   subject: "Chemistry", qualification: "MSc · Ex-Scientist", years: 16 },
  { name: "Prabha Tiwari",    title: "Sir",   subject: "Chemistry", qualification: "B.Tech, IIT Bombay", years: 16 },
  { name: "Sunil Pathak",     title: "Sir",   subject: "Maths",     qualification: "MSc",                years: 18 },
  { name: "Sharvan Pandiyar", title: "Sir",   subject: "Maths",     qualification: "B.Tech, NIT Jaipur", years: 15 },
  { name: "Siddhi Pawar",     title: "Ma'am", subject: "Biology",   qualification: "MSc",                years: 8  },
];

export const facultyList = faculty;
export default faculty;
