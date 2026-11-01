import statsData from '../data/stats.json';
import coursesData from '../data/courses.json';
import facultyData from '../data/faculty.json';
import resultsData from '../data/results.json';
import reviewsData from '../data/reviews.json';
import centresData from '../data/centres.json';

export interface StatItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
  isPlaceholder?: boolean;
}

export interface CourseItem {
  id: string;
  name: string;
  targetExam: string;
  eligibility: string;
  duration: string;
  timings: string;
  mode: string;
  features: string[];
  fees?: number | null;
  feeDisplay?: "public" | "contact_us";
  isPlaceholder?: boolean;
}

export interface FacultyItem {
  id: string;
  name: string;
  subject: string;
  qualification: string;
  experienceYears: number;
  bio: string;
  photoUrl: string | null;
  centres: string[];
  isPlaceholder?: boolean;
}

export interface ResultItem {
  id: string;
  year: number;
  exam: string;
  studentName: string;
  photoUrl: string | null;
  rank: string | number;
  score: string;
  category?: string;
  consent: boolean;
  isPlaceholder?: boolean;
}

export interface ReviewItem {
  id: string;
  authorName: string;
  role: "Parent" | "Student";
  batchYear: string;
  course: string;
  reviewText: string;
  rating: number;
  consent: boolean;
  isPlaceholder?: boolean;
}

export interface CentreItem {
  id: string;
  city: string;
  name: string;
  addressLine1: string;
  addressLine2: string;
  landmark: string;
  pinCode: string;
  phoneNumbers: string[];
  whatsappNumber: string;
  email: string;
  timings: string;
  mapUrl: string;
  isPlaceholder?: boolean;
}

const isProd = import.meta.env.PROD;

/**
 * Filter stats for production display.
 * Placeholders are hidden in production builds until replaced.
 */
export function getStats(): StatItem[] {
  if (isProd) {
    return (statsData as StatItem[]).filter((item) => !item.isPlaceholder && !item.value.includes("PLACEHOLDER"));
  }
  return statsData as StatItem[];
}

export function getCourses(): CourseItem[] {
  return coursesData as CourseItem[];
}

export function getFaculty(): FacultyItem[] {
  return facultyData as FacultyItem[];
}

/**
 * Get results with strict consent verification.
 * Names and photos appear ONLY if consent is true.
 */
export function getResults(): ResultItem[] {
  const list = resultsData as ResultItem[];
  return list.map((item) => {
    if (!item.consent) {
      return {
        ...item,
        studentName: "Student",
        photoUrl: null,
      };
    }
    return item;
  });
}

/**
 * Get reviews with strict consent verification.
 */
export function getReviews(): ReviewItem[] {
  const list = reviewsData as ReviewItem[];
  return list.map((item) => {
    if (!item.consent) {
      return {
        ...item,
        authorName: item.role === "Parent" ? "Parent" : "Student",
      };
    }
    return item;
  });
}

export function getCentres(): CentreItem[] {
  return centresData as CentreItem[];
}
