export interface FacultyMember {
  name: string;
  title: string;
  subject: string;
  qualification: string;
  years: number;
  photo?: string;
}

export const facultyList: FacultyMember[] = [
  { name: "Ravi Keshre",      title: "Sir",   subject: "Physics",   qualification: "MSc",                years: 16 },
  // TODO: The organisation behind "Ex-Scientist" is unknown and should be added by the owner. Do NOT guess one.
  { name: "Dilip Wani",       title: "Sir",   subject: "Chemistry", qualification: "MSc · Ex-Scientist", years: 16 },
  { name: "Prabha Tiwari",    title: "Sir",   subject: "Chemistry", qualification: "B.Tech, IIT Bombay", years: 16 },
  { name: "Sunil Pathak",     title: "Sir",   subject: "Maths",     qualification: "MSc",                years: 18 },
  { name: "Sharvan Pandiyar", title: "Sir",   subject: "Maths",     qualification: "B.Tech, NIT Jaipur", years: 15 },
  { name: "Siddhi Pawar",     title: "Ma'am", subject: "Biology",   qualification: "MSc",                years: 8  },
];
