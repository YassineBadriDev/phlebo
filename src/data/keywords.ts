export type KeywordCluster = "Core / Head Term" | "Local Intent (Near Me)" | "Employment Type" | "Geo: State-Level" | "Geo: City-Level" | "Employer-Branded";

export interface OutlineItem {
  level: "h2" | "h3";
  text: string;
}

export interface KeywordPage {
  keyword: string;
  volume: number;
  cluster: KeywordCluster;
  subcluster: string;
  slug: string;
  pageTitle: string;
  metaDescription: string;
  h1: string;
  outline: OutlineItem[];
  intro: string;
  difficulty: number;
  cpc: number;
  primaryIntent: string;
  isLocal: boolean;
  isBranded: boolean;
  primaryEntityType: string;
  priorityScore: number;
}

export const keywords: KeywordPage[] = [
  {
    "keyword": "phlebotomist jobs",
    "volume": 24000,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "phlebotomist-jobs",
    "pageTitle": "Phlebotomist Jobs | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on phlebotomist jobs: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find phlebotomist jobs that match your experience level.",
    "difficulty": 0,
    "cpc": 0.2,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 28800
  },
  {
    "keyword": "phlebotomist jobs hiring",
    "volume": 200,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "phlebotomist-jobs-hiring",
    "pageTitle": "Phlebotomist Jobs Hiring | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on phlebotomist jobs hiring: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Phlebotomist Jobs Hiring",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find phlebotomist jobs hiring that match your experience level.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 290
  },
  {
    "keyword": "jobs for phlebotomist",
    "volume": 200,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "jobs-for-phlebotomist",
    "pageTitle": "Jobs for Phlebotomist | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on jobs for phlebotomist: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Jobs for Phlebotomist",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find jobs for phlebotomist that match your experience level.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 230
  },
  {
    "keyword": "phlebotomist technician jobs",
    "volume": 150,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "phlebotomist-technician-jobs",
    "pageTitle": "Phlebotomist Technician Jobs | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on phlebotomist technician jobs: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Phlebotomist Technician Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find phlebotomist technician jobs that match your experience level.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 217.5
  },
  {
    "keyword": "jobs phlebotomist",
    "volume": 150,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "jobs-phlebotomist",
    "pageTitle": "Jobs Phlebotomist | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on jobs phlebotomist: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Jobs Phlebotomist",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find jobs phlebotomist that match your experience level.",
    "difficulty": 0,
    "cpc": 0.2,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 180
  },
  {
    "keyword": "forensic phlebotomist jobs",
    "volume": 150,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "forensic-phlebotomist-jobs",
    "pageTitle": "Forensic Phlebotomist Jobs | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on forensic phlebotomist jobs: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Forensic Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find forensic phlebotomist jobs that match your experience level.",
    "difficulty": 0,
    "cpc": 0.03,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 154.5
  },
  {
    "keyword": "jobs hiring phlebotomist",
    "volume": 60,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "jobs-hiring-phlebotomist",
    "pageTitle": "Jobs Hiring Phlebotomist | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on jobs hiring phlebotomist: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Jobs Hiring Phlebotomist",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find jobs hiring phlebotomist that match your experience level.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 90
  },
  {
    "keyword": "jobs as a phlebotomist",
    "volume": 70,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "jobs-as-a-phlebotomist",
    "pageTitle": "Jobs as a Phlebotomist | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on jobs as a phlebotomist: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Jobs as a Phlebotomist",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find jobs as a phlebotomist that match your experience level.",
    "difficulty": 2,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 68.6
  },
  {
    "keyword": "jobs as phlebotomist",
    "volume": 60,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "jobs-as-phlebotomist",
    "pageTitle": "Jobs as Phlebotomist | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on jobs as phlebotomist: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Jobs as Phlebotomist",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find jobs as phlebotomist that match your experience level.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 60
  },
  {
    "keyword": "phlebotomist jobs birmingham al",
    "volume": 40,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "phlebotomist-jobs-birmingham-al",
    "pageTitle": "Phlebotomist Jobs Birmingham AL | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on phlebotomist jobs birmingham AL: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Phlebotomist Jobs Birmingham AL",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find phlebotomist jobs birmingham AL that match your experience level.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 58
  },
  {
    "keyword": "phlebotomist jobs new york",
    "volume": 30,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "phlebotomist-jobs-new-york",
    "pageTitle": "Phlebotomist Jobs New York | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on phlebotomist jobs new york: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Phlebotomist Jobs New York",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find phlebotomist jobs new york that match your experience level.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 45
  },
  {
    "keyword": "jobs for a phlebotomist",
    "volume": 20,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "jobs-for-a-phlebotomist",
    "pageTitle": "Jobs for a Phlebotomist | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on jobs for a phlebotomist: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Jobs for a Phlebotomist",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find jobs for a phlebotomist that match your experience level.",
    "difficulty": 5,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 19
  },
  {
    "keyword": "phlebotomist jobs madison wi",
    "volume": 10,
    "cluster": "Core / Head Term",
    "subcluster": "Core",
    "slug": "phlebotomist-jobs-madison-wi",
    "pageTitle": "Phlebotomist Jobs Madison WI | Guide & Openings | [SiteName]",
    "metaDescription": "Everything on phlebotomist jobs madison WI: pay ranges, requirements, certification paths, and how to get hired.",
    "h1": "Phlebotomist Jobs Madison WI",
    "outline": [
      {
        "level": "h2",
        "text": "What Does a Phlebotomist Do"
      },
      {
        "level": "h2",
        "text": "Salary and Job Outlook"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Where Phlebotomists Work"
      },
      {
        "level": "h2",
        "text": "How to Find Openings"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomy is one of the fastest ways into healthcare without a long degree. This guide covers pay, certification, and how to find phlebotomist jobs madison WI that match your experience level.",
    "difficulty": 0,
    "cpc": 0.2,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Occupation",
    "priorityScore": 12
  },
  {
    "keyword": "labcorp phlebotomist jobs",
    "volume": 60,
    "cluster": "Employer-Branded",
    "subcluster": "Labcorp",
    "slug": "labcorp-phlebotomist-jobs",
    "pageTitle": "Labcorp Phlebotomist Jobs | Hiring & How to Apply | [SiteName]",
    "metaDescription": "See current labcorp phlebotomist jobs openings, typical pay, and how to apply. Independent guide, not an official page.",
    "h1": "Labcorp Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What It's Like to Work as a Labcorp Phlebotomist"
      },
      {
        "level": "h2",
        "text": "Typical Pay and Benefits"
      },
      {
        "level": "h2",
        "text": "Application Requirements"
      },
      {
        "level": "h3",
        "text": "Certification Needed"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Considering labcorp phlebotomist jobs? Here's what to expect from pay and shift structure to certification requirements before you apply, based on publicly available job postings.",
    "difficulty": 0,
    "cpc": 0.09,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": true,
    "primaryEntityType": "Organization",
    "priorityScore": 65.4
  },
  {
    "keyword": "american red cross phlebotomist jobs",
    "volume": 40,
    "cluster": "Employer-Branded",
    "subcluster": "American Red Cross",
    "slug": "american-red-cross-phlebotomist-jobs",
    "pageTitle": "American Red Cross Phlebotomist Jobs | Hiring & How to Apply | [SiteName]",
    "metaDescription": "See current american red cross phlebotomist jobs openings, typical pay, and how to apply. Independent guide, not an official page.",
    "h1": "American Red Cross Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What It's Like to Work as a American Red Cross Phlebotomist"
      },
      {
        "level": "h2",
        "text": "Typical Pay and Benefits"
      },
      {
        "level": "h2",
        "text": "Application Requirements"
      },
      {
        "level": "h3",
        "text": "Certification Needed"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Considering american red cross phlebotomist jobs? Here's what to expect from pay and shift structure to certification requirements before you apply, based on publicly available job postings.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": true,
    "primaryEntityType": "Organization",
    "priorityScore": 50
  },
  {
    "keyword": "kaiser phlebotomist jobs",
    "volume": 40,
    "cluster": "Employer-Branded",
    "subcluster": "Kaiser",
    "slug": "kaiser-phlebotomist-jobs",
    "pageTitle": "Kaiser Phlebotomist Jobs | Hiring & How to Apply | [SiteName]",
    "metaDescription": "See current kaiser phlebotomist jobs openings, typical pay, and how to apply. Independent guide, not an official page.",
    "h1": "Kaiser Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What It's Like to Work as a Kaiser Phlebotomist"
      },
      {
        "level": "h2",
        "text": "Typical Pay and Benefits"
      },
      {
        "level": "h2",
        "text": "Application Requirements"
      },
      {
        "level": "h3",
        "text": "Certification Needed"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Considering kaiser phlebotomist jobs? Here's what to expect from pay and shift structure to certification requirements before you apply, based on publicly available job postings.",
    "difficulty": 0,
    "cpc": 0.09,
    "primaryIntent": "Transactional",
    "isLocal": false,
    "isBranded": true,
    "primaryEntityType": "Organization",
    "priorityScore": 43.6
  },
  {
    "keyword": "phlebotomist jobs kaiser",
    "volume": 20,
    "cluster": "Employer-Branded",
    "subcluster": "Kaiser",
    "slug": "phlebotomist-jobs-kaiser",
    "pageTitle": "Phlebotomist Jobs Kaiser | Hiring & How to Apply | [SiteName]",
    "metaDescription": "See current phlebotomist jobs kaiser openings, typical pay, and how to apply. Independent guide, not an official page.",
    "h1": "Phlebotomist Jobs Kaiser",
    "outline": [
      {
        "level": "h2",
        "text": "What It's Like to Work as a Kaiser Phlebotomist"
      },
      {
        "level": "h2",
        "text": "Typical Pay and Benefits"
      },
      {
        "level": "h2",
        "text": "Application Requirements"
      },
      {
        "level": "h3",
        "text": "Certification Needed"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Considering phlebotomist jobs kaiser? Here's what to expect from pay and shift structure to certification requirements before you apply, based on publicly available job postings.",
    "difficulty": 0,
    "cpc": 0.09,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": true,
    "primaryEntityType": "Organization",
    "priorityScore": 21.8
  },
  {
    "keyword": "phlebotomist kaiser jobs",
    "volume": 10,
    "cluster": "Employer-Branded",
    "subcluster": "Kaiser",
    "slug": "phlebotomist-kaiser-jobs",
    "pageTitle": "Phlebotomist Kaiser Jobs | Hiring & How to Apply | [SiteName]",
    "metaDescription": "See current phlebotomist kaiser jobs openings, typical pay, and how to apply. Independent guide, not an official page.",
    "h1": "Phlebotomist Kaiser Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What It's Like to Work as a Kaiser Phlebotomist"
      },
      {
        "level": "h2",
        "text": "Typical Pay and Benefits"
      },
      {
        "level": "h2",
        "text": "Application Requirements"
      },
      {
        "level": "h3",
        "text": "Certification Needed"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Considering phlebotomist kaiser jobs? Here's what to expect from pay and shift structure to certification requirements before you apply, based on publicly available job postings.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": true,
    "primaryEntityType": "Organization",
    "priorityScore": 15
  },
  {
    "keyword": "quest phlebotomist jobs",
    "volume": 10,
    "cluster": "Employer-Branded",
    "subcluster": "Quest",
    "slug": "quest-phlebotomist-jobs",
    "pageTitle": "Quest Phlebotomist Jobs | Hiring & How to Apply | [SiteName]",
    "metaDescription": "See current quest phlebotomist jobs openings, typical pay, and how to apply. Independent guide, not an official page.",
    "h1": "Quest Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What It's Like to Work as a Quest Phlebotomist"
      },
      {
        "level": "h2",
        "text": "Typical Pay and Benefits"
      },
      {
        "level": "h2",
        "text": "Application Requirements"
      },
      {
        "level": "h3",
        "text": "Certification Needed"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Considering quest phlebotomist jobs? Here's what to expect from pay and shift structure to certification requirements before you apply, based on publicly available job postings.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": true,
    "primaryEntityType": "Organization",
    "priorityScore": 12.5
  },
  {
    "keyword": "american red cross jobs phlebotomist",
    "volume": 10,
    "cluster": "Employer-Branded",
    "subcluster": "American Red Cross",
    "slug": "american-red-cross-jobs-phlebotomist",
    "pageTitle": "American Red Cross Jobs Phlebotomist | Hiring & How to Apply | [SiteName]",
    "metaDescription": "See current american red cross jobs phlebotomist openings, typical pay, and how to apply. Independent guide, not an official page.",
    "h1": "American Red Cross Jobs Phlebotomist",
    "outline": [
      {
        "level": "h2",
        "text": "What It's Like to Work as a American Red Cross Phlebotomist"
      },
      {
        "level": "h2",
        "text": "Typical Pay and Benefits"
      },
      {
        "level": "h2",
        "text": "Application Requirements"
      },
      {
        "level": "h3",
        "text": "Certification Needed"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Considering american red cross jobs phlebotomist? Here's what to expect from pay and shift structure to certification requirements before you apply, based on publicly available job postings.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": true,
    "primaryEntityType": "Organization",
    "priorityScore": 11.5
  },
  {
    "keyword": "quest diagnostics jobs phlebotomist",
    "volume": 10,
    "cluster": "Employer-Branded",
    "subcluster": "Quest Diagnostics",
    "slug": "quest-diagnostics-jobs-phlebotomist",
    "pageTitle": "Quest Diagnostics Jobs Phlebotomist | Hiring & How to Apply | [SiteName]",
    "metaDescription": "See current quest diagnostics jobs phlebotomist openings, typical pay, and how to apply. Independent guide, not an official page.",
    "h1": "Quest Diagnostics Jobs Phlebotomist",
    "outline": [
      {
        "level": "h2",
        "text": "What It's Like to Work as a Quest Diagnostics Phlebotomist"
      },
      {
        "level": "h2",
        "text": "Typical Pay and Benefits"
      },
      {
        "level": "h2",
        "text": "Application Requirements"
      },
      {
        "level": "h3",
        "text": "Certification Needed"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Considering quest diagnostics jobs phlebotomist? Here's what to expect from pay and shift structure to certification requirements before you apply, based on publicly available job postings.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": true,
    "primaryEntityType": "Organization",
    "priorityScore": 10
  },
  {
    "keyword": "kaiser jobs phlebotomist",
    "volume": 0,
    "cluster": "Employer-Branded",
    "subcluster": "Kaiser",
    "slug": "kaiser-jobs-phlebotomist",
    "pageTitle": "Kaiser Jobs Phlebotomist | Hiring & How to Apply | [SiteName]",
    "metaDescription": "See current kaiser jobs phlebotomist openings, typical pay, and how to apply. Independent guide, not an official page.",
    "h1": "Kaiser Jobs Phlebotomist",
    "outline": [
      {
        "level": "h2",
        "text": "What It's Like to Work as a Kaiser Phlebotomist"
      },
      {
        "level": "h2",
        "text": "Typical Pay and Benefits"
      },
      {
        "level": "h2",
        "text": "Application Requirements"
      },
      {
        "level": "h3",
        "text": "Certification Needed"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Considering kaiser jobs phlebotomist? Here's what to expect from pay and shift structure to certification requirements before you apply, based on publicly available job postings.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": true,
    "primaryEntityType": "Organization",
    "priorityScore": 0
  },
  {
    "keyword": "travel phlebotomist jobs",
    "volume": 2200,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "travel-phlebotomist-jobs",
    "pageTitle": "Travel Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore travel phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Travel Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What travel phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "travel phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Travel phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Transactional",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 2860
  },
  {
    "keyword": "mobile phlebotomist jobs",
    "volume": 2500,
    "cluster": "Employment Type",
    "subcluster": "Mobile Phlebotomy",
    "slug": "mobile-phlebotomist-jobs",
    "pageTitle": "Mobile Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore mobile phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Mobile Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What mobile phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "mobile phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Mobile phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.08,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 2700
  },
  {
    "keyword": "traveling phlebotomist jobs",
    "volume": 900,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "traveling-phlebotomist-jobs",
    "pageTitle": "Traveling Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore traveling phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Traveling Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What traveling phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "traveling phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Traveling phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Transactional",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 1305
  },
  {
    "keyword": "phlebotomist jobs part time",
    "volume": 400,
    "cluster": "Employment Type",
    "subcluster": "Part-Time",
    "slug": "phlebotomist-jobs-part-time",
    "pageTitle": "Phlebotomist Jobs Part Time | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs part time: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs Part Time",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs part time Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs part time vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs part time offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.08,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 432
  },
  {
    "keyword": "phlebotomist travel jobs",
    "volume": 250,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "phlebotomist-travel-jobs",
    "pageTitle": "Phlebotomist Travel Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist travel jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Travel Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist travel jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist travel jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist travel jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.35,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 337.5
  },
  {
    "keyword": "travel phlebotomist jobs near me",
    "volume": 150,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "travel-phlebotomist-jobs-near-me",
    "pageTitle": "Travel Phlebotomist Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore travel phlebotomist jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Travel Phlebotomist Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What travel phlebotomist jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "travel phlebotomist jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Travel phlebotomist jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 1.1,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 315
  },
  {
    "keyword": "phlebotomist training jobs",
    "volume": 150,
    "cluster": "Employment Type",
    "subcluster": "Entry-Level / Training",
    "slug": "phlebotomist-training-jobs",
    "pageTitle": "Phlebotomist Training Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist training jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Training Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist training jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist training jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist training jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 1,
    "cpc": 1.1,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 311.8
  },
  {
    "keyword": "travel phlebotomist jobs with housing",
    "volume": 80,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "travel-phlebotomist-jobs-with-housing",
    "pageTitle": "Travel Phlebotomist Jobs with Housing | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore travel phlebotomist jobs with housing: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Travel Phlebotomist Jobs with Housing",
    "outline": [
      {
        "level": "h2",
        "text": "What travel phlebotomist jobs with housing Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "travel phlebotomist jobs with housing vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Travel phlebotomist jobs with housing offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 2.5,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 280
  },
  {
    "keyword": "phlebotomist jobs no experience",
    "volume": 250,
    "cluster": "Employment Type",
    "subcluster": "Entry-Level / Training",
    "slug": "phlebotomist-jobs-no-experience",
    "pageTitle": "Phlebotomist Jobs no Experience | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs no experience: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs no Experience",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs no experience Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs no experience vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs no experience offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.1,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 275
  },
  {
    "keyword": "phlebotomist jobs salary",
    "volume": 150,
    "cluster": "Employment Type",
    "subcluster": "Career / Salary Info",
    "slug": "phlebotomist-jobs-salary",
    "pageTitle": "Phlebotomist Jobs Salary | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs salary: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs Salary",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs salary Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs salary vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs salary offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 1,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 222.8
  },
  {
    "keyword": "part time phlebotomist jobs",
    "volume": 200,
    "cluster": "Employment Type",
    "subcluster": "Part-Time",
    "slug": "part-time-phlebotomist-jobs",
    "pageTitle": "Part Time Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore part time phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Part Time Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What part time phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "part time phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Part time phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.1,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 220
  },
  {
    "keyword": "phlebotomist part time jobs",
    "volume": 150,
    "cluster": "Employment Type",
    "subcluster": "Part-Time",
    "slug": "phlebotomist-part-time-jobs",
    "pageTitle": "Phlebotomist Part Time Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist part time jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Part Time Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist part time jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist part time jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist part time jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 217.5
  },
  {
    "keyword": "prn phlebotomist jobs",
    "volume": 100,
    "cluster": "Employment Type",
    "subcluster": "PRN / Per Diem",
    "slug": "prn-phlebotomist-jobs",
    "pageTitle": "PRN Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore PRN phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "PRN Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What PRN phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "PRN phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Prn phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 1,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 200
  },
  {
    "keyword": "contract travel phlebotomist jobs",
    "volume": 80,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "contract-travel-phlebotomist-jobs",
    "pageTitle": "Contract Travel Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore contract travel phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Contract Travel Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What contract travel phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "contract travel phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Contract travel phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 1.5,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 200
  },
  {
    "keyword": "phlebotomist entry level jobs",
    "volume": 100,
    "cluster": "Employment Type",
    "subcluster": "Entry-Level / Training",
    "slug": "phlebotomist-entry-level-jobs",
    "pageTitle": "Phlebotomist Entry Level Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist entry level jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Entry Level Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist entry level jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist entry level jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist entry level jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.7,
    "primaryIntent": "Transactional",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 170
  },
  {
    "keyword": "mobile phlebotomist jobs near me",
    "volume": 150,
    "cluster": "Employment Type",
    "subcluster": "Mobile Phlebotomy",
    "slug": "mobile-phlebotomist-jobs-near-me",
    "pageTitle": "Mobile Phlebotomist Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore mobile phlebotomist jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Mobile Phlebotomist Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What mobile phlebotomist jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "mobile phlebotomist jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Mobile phlebotomist jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.1,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 165
  },
  {
    "keyword": "phlebotomist hospital jobs",
    "volume": 100,
    "cluster": "Employment Type",
    "subcluster": "Hospital / Clinic Setting",
    "slug": "phlebotomist-hospital-jobs",
    "pageTitle": "Phlebotomist Hospital Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist hospital jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Hospital Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist hospital jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist hospital jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist hospital jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 160
  },
  {
    "keyword": "phlebotomist agency jobs",
    "volume": 70,
    "cluster": "Employment Type",
    "subcluster": "Contract / Agency",
    "slug": "phlebotomist-agency-jobs",
    "pageTitle": "Phlebotomist Agency Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist agency jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Agency Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist agency jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist agency jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist agency jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 1.2,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 154
  },
  {
    "keyword": "part time phlebotomist jobs near me",
    "volume": 80,
    "cluster": "Employment Type",
    "subcluster": "Part-Time",
    "slug": "part-time-phlebotomist-jobs-near-me",
    "pageTitle": "Part Time Phlebotomist Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore part time phlebotomist jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Part Time Phlebotomist Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What part time phlebotomist jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "part time phlebotomist jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Part time phlebotomist jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 116
  },
  {
    "keyword": "entry level phlebotomist jobs",
    "volume": 100,
    "cluster": "Employment Type",
    "subcluster": "Entry-Level / Training",
    "slug": "entry-level-phlebotomist-jobs",
    "pageTitle": "Entry Level Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore entry level phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Entry Level Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What entry level phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "entry level phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Entry level phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 115
  },
  {
    "keyword": "phlebotomist contract jobs",
    "volume": 70,
    "cluster": "Employment Type",
    "subcluster": "Contract / Agency",
    "slug": "phlebotomist-contract-jobs",
    "pageTitle": "Phlebotomist Contract Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist contract jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Contract Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist contract jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist contract jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist contract jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 112
  },
  {
    "keyword": "phlebotomist jobs near me part time",
    "volume": 100,
    "cluster": "Employment Type",
    "subcluster": "Part-Time",
    "slug": "phlebotomist-jobs-near-me-part-time",
    "pageTitle": "Phlebotomist Jobs near me Part Time | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs near me part time: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs near me Part Time",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs near me part time Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs near me part time vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs near me part time offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.1,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 110
  },
  {
    "keyword": "phlebotomist jobs with training",
    "volume": 60,
    "cluster": "Employment Type",
    "subcluster": "Entry-Level / Training",
    "slug": "phlebotomist-jobs-with-training",
    "pageTitle": "Phlebotomist Jobs with Training | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs with training: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs with Training",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs with training Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs with training vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs with training offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.8,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 108
  },
  {
    "keyword": "traveling phlebotomist jobs near me",
    "volume": 50,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "traveling-phlebotomist-jobs-near-me",
    "pageTitle": "Traveling Phlebotomist Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore traveling phlebotomist jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Traveling Phlebotomist Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What traveling phlebotomist jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "traveling phlebotomist jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Traveling phlebotomist jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 1.1,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 105
  },
  {
    "keyword": "phlebotomist part time jobs near me",
    "volume": 70,
    "cluster": "Employment Type",
    "subcluster": "Part-Time",
    "slug": "phlebotomist-part-time-jobs-near-me",
    "pageTitle": "Phlebotomist Part Time Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist part time jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Part Time Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist part time jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist part time jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist part time jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 101.5
  },
  {
    "keyword": "phlebotomist jobs mobile al",
    "volume": 60,
    "cluster": "Employment Type",
    "subcluster": "Mobile Phlebotomy",
    "slug": "phlebotomist-jobs-mobile-al",
    "pageTitle": "Phlebotomist Jobs Mobile AL | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs mobile AL: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs Mobile AL",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs mobile AL Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs mobile AL vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs mobile al offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 90
  },
  {
    "keyword": "entry level phlebotomist jobs near me",
    "volume": 50,
    "cluster": "Employment Type",
    "subcluster": "Entry-Level / Training",
    "slug": "entry-level-phlebotomist-jobs-near-me",
    "pageTitle": "Entry Level Phlebotomist Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore entry level phlebotomist jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Entry Level Phlebotomist Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What entry level phlebotomist jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "entry level phlebotomist jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Entry level phlebotomist jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 80
  },
  {
    "keyword": "certified phlebotomist jobs",
    "volume": 50,
    "cluster": "Employment Type",
    "subcluster": "Certification Status",
    "slug": "certified-phlebotomist-jobs",
    "pageTitle": "Certified Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore certified phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Certified Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What certified phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "certified phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Certified phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 80
  },
  {
    "keyword": "phlebotomist jobs hospital",
    "volume": 50,
    "cluster": "Employment Type",
    "subcluster": "Hospital / Clinic Setting",
    "slug": "phlebotomist-jobs-hospital",
    "pageTitle": "Phlebotomist Jobs Hospital | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs hospital: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs Hospital",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs hospital Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs hospital vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs hospital offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 80
  },
  {
    "keyword": "phlebotomist prn jobs",
    "volume": 50,
    "cluster": "Employment Type",
    "subcluster": "PRN / Per Diem",
    "slug": "phlebotomist-prn-jobs",
    "pageTitle": "Phlebotomist PRN Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist PRN jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist PRN Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist PRN jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist PRN jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist prn jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 75
  },
  {
    "keyword": "phlebotomist jobs entry level",
    "volume": 70,
    "cluster": "Employment Type",
    "subcluster": "Entry-Level / Training",
    "slug": "phlebotomist-jobs-entry-level",
    "pageTitle": "Phlebotomist Jobs Entry Level | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs entry level: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs Entry Level",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs entry level Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs entry level vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs entry level offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 70
  },
  {
    "keyword": "contract phlebotomist jobs",
    "volume": 40,
    "cluster": "Employment Type",
    "subcluster": "Contract / Agency",
    "slug": "contract-phlebotomist-jobs",
    "pageTitle": "Contract Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore contract phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Contract Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What contract phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "contract phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Contract phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.7,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 68
  },
  {
    "keyword": "prn phlebotomist jobs near me",
    "volume": 40,
    "cluster": "Employment Type",
    "subcluster": "PRN / Per Diem",
    "slug": "prn-phlebotomist-jobs-near-me",
    "pageTitle": "PRN Phlebotomist Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore PRN phlebotomist jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "PRN Phlebotomist Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What PRN phlebotomist jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "PRN phlebotomist jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Prn phlebotomist jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.7,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 68
  },
  {
    "keyword": "phlebotomist jobs part time near me",
    "volume": 50,
    "cluster": "Employment Type",
    "subcluster": "Part-Time",
    "slug": "phlebotomist-jobs-part-time-near-me",
    "pageTitle": "Phlebotomist Jobs Part Time near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs part time near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs Part Time near me",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs part time near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs part time near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs part time near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 62.5
  },
  {
    "keyword": "phlebotomist weekend jobs",
    "volume": 40,
    "cluster": "Employment Type",
    "subcluster": "Overnight / Weekend",
    "slug": "phlebotomist-weekend-jobs",
    "pageTitle": "Phlebotomist Weekend Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist weekend jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Weekend Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist weekend jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist weekend jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist weekend jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 60
  },
  {
    "keyword": "phlebotomist hospital jobs near me",
    "volume": 30,
    "cluster": "Employment Type",
    "subcluster": "Hospital / Clinic Setting",
    "slug": "phlebotomist-hospital-jobs-near-me",
    "pageTitle": "Phlebotomist Hospital Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist hospital jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Hospital Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist hospital jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist hospital jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist hospital jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 48
  },
  {
    "keyword": "phlebotomist per diem jobs",
    "volume": 30,
    "cluster": "Employment Type",
    "subcluster": "PRN / Per Diem",
    "slug": "phlebotomist-per-diem-jobs",
    "pageTitle": "Phlebotomist Per Diem Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist per diem jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Per Diem Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist per diem jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist per diem jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist per diem jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 48
  },
  {
    "keyword": "phlebotomist training jobs near me",
    "volume": 30,
    "cluster": "Employment Type",
    "subcluster": "Entry-Level / Training",
    "slug": "phlebotomist-training-jobs-near-me",
    "pageTitle": "Phlebotomist Training Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist training jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Training Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist training jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist training jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist training jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 48
  },
  {
    "keyword": "hospital phlebotomist jobs",
    "volume": 30,
    "cluster": "Employment Type",
    "subcluster": "Hospital / Clinic Setting",
    "slug": "hospital-phlebotomist-jobs",
    "pageTitle": "Hospital Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore hospital phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Hospital Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What hospital phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "hospital phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Hospital phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 45
  },
  {
    "keyword": "weekend phlebotomist jobs",
    "volume": 30,
    "cluster": "Employment Type",
    "subcluster": "Overnight / Weekend",
    "slug": "weekend-phlebotomist-jobs",
    "pageTitle": "Weekend Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore weekend phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Weekend Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What weekend phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "weekend phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Weekend phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 45
  },
  {
    "keyword": "jobs like phlebotomist",
    "volume": 20,
    "cluster": "Employment Type",
    "subcluster": "Career / Salary Info",
    "slug": "jobs-like-phlebotomist",
    "pageTitle": "Jobs Like Phlebotomist | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore jobs like phlebotomist: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Jobs Like Phlebotomist",
    "outline": [
      {
        "level": "h2",
        "text": "What jobs like phlebotomist Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "jobs like phlebotomist vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Jobs like phlebotomist offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 32
  },
  {
    "keyword": "non certified phlebotomist jobs near me",
    "volume": 20,
    "cluster": "Employment Type",
    "subcluster": "Certification Status",
    "slug": "non-certified-phlebotomist-jobs-near-me",
    "pageTitle": "Non Certified Phlebotomist Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore non certified phlebotomist jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Non Certified Phlebotomist Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What non certified phlebotomist jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "non certified phlebotomist jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Non certified phlebotomist jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 32
  },
  {
    "keyword": "agency phlebotomist jobs",
    "volume": 30,
    "cluster": "Employment Type",
    "subcluster": "Contract / Agency",
    "slug": "agency-phlebotomist-jobs",
    "pageTitle": "Agency Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore agency phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Agency Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What agency phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "agency phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Agency phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 30
  },
  {
    "keyword": "per diem phlebotomist jobs",
    "volume": 30,
    "cluster": "Employment Type",
    "subcluster": "PRN / Per Diem",
    "slug": "per-diem-phlebotomist-jobs",
    "pageTitle": "Per Diem Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore per diem phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Per Diem Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What per diem phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "per diem phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Per diem phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 30
  },
  {
    "keyword": "overnight phlebotomist jobs",
    "volume": 20,
    "cluster": "Employment Type",
    "subcluster": "Overnight / Weekend",
    "slug": "overnight-phlebotomist-jobs",
    "pageTitle": "Overnight Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore overnight phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Overnight Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What overnight phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "overnight phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Overnight phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Transactional",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 30
  },
  {
    "keyword": "phlebotomist jobs in hospital",
    "volume": 20,
    "cluster": "Employment Type",
    "subcluster": "Hospital / Clinic Setting",
    "slug": "phlebotomist-jobs-in-hospital",
    "pageTitle": "Phlebotomist Jobs in Hospital | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs in hospital: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs in Hospital",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs in hospital Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs in hospital vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs in hospital offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 30
  },
  {
    "keyword": "certified phlebotomist jobs near me",
    "volume": 20,
    "cluster": "Employment Type",
    "subcluster": "Certification Status",
    "slug": "certified-phlebotomist-jobs-near-me",
    "pageTitle": "Certified Phlebotomist Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore certified phlebotomist jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Certified Phlebotomist Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What certified phlebotomist jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "certified phlebotomist jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Certified phlebotomist jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 30
  },
  {
    "keyword": "medical assistant phlebotomist jobs",
    "volume": 20,
    "cluster": "Employment Type",
    "subcluster": "Career / Salary Info",
    "slug": "medical-assistant-phlebotomist-jobs",
    "pageTitle": "Medical Assistant Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore medical assistant phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Medical Assistant Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What medical assistant phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "medical assistant phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Medical assistant phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 30
  },
  {
    "keyword": "obgyn phlebotomist jobs",
    "volume": 10,
    "cluster": "Employment Type",
    "subcluster": "Hospital / Clinic Setting",
    "slug": "obgyn-phlebotomist-jobs",
    "pageTitle": "OB-GYN Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore OB-GYN phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "OB-GYN Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What OB-GYN phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "OB-GYN phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Ob-gyn phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 2,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 30
  },
  {
    "keyword": "new phlebotomist jobs",
    "volume": 20,
    "cluster": "Employment Type",
    "subcluster": "Entry-Level / Training",
    "slug": "new-phlebotomist-jobs",
    "pageTitle": "New Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore new phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "New Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What new phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "new phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "New phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 26
  },
  {
    "keyword": "phlebotomist jobs near me no experience",
    "volume": 20,
    "cluster": "Employment Type",
    "subcluster": "Entry-Level / Training",
    "slug": "phlebotomist-jobs-near-me-no-experience",
    "pageTitle": "Phlebotomist Jobs near me no Experience | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs near me no experience: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs near me no Experience",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs near me no experience Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs near me no experience vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs near me no experience offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.1,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 22
  },
  {
    "keyword": "traveling phlebotomist jobs no experience",
    "volume": 10,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "traveling-phlebotomist-jobs-no-experience",
    "pageTitle": "Traveling Phlebotomist Jobs no Experience | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore traveling phlebotomist jobs no experience: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Traveling Phlebotomist Jobs no Experience",
    "outline": [
      {
        "level": "h2",
        "text": "What traveling phlebotomist jobs no experience Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "traveling phlebotomist jobs no experience vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Traveling phlebotomist jobs no experience offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 1.2,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 22
  },
  {
    "keyword": "phlebotomist jobs per diem",
    "volume": 20,
    "cluster": "Employment Type",
    "subcluster": "PRN / Per Diem",
    "slug": "phlebotomist-jobs-per-diem",
    "pageTitle": "Phlebotomist Jobs Per Diem | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs per diem: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs Per Diem",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs per diem Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs per diem vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs per diem offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 20
  },
  {
    "keyword": "doctor office phlebotomist jobs near me",
    "volume": 10,
    "cluster": "Employment Type",
    "subcluster": "Hospital / Clinic Setting",
    "slug": "doctor-office-phlebotomist-jobs-near-me",
    "pageTitle": "Doctor Office Phlebotomist Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore doctor office phlebotomist jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Doctor Office Phlebotomist Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What doctor office phlebotomist jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "doctor office phlebotomist jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Doctor office phlebotomist jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 16
  },
  {
    "keyword": "phlebotomist agency jobs near me",
    "volume": 10,
    "cluster": "Employment Type",
    "subcluster": "Contract / Agency",
    "slug": "phlebotomist-agency-jobs-near-me",
    "pageTitle": "Phlebotomist Agency Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist agency jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Agency Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist agency jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist agency jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist agency jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 15
  },
  {
    "keyword": "phlebotomist clinic jobs near me",
    "volume": 10,
    "cluster": "Employment Type",
    "subcluster": "Hospital / Clinic Setting",
    "slug": "phlebotomist-clinic-jobs-near-me",
    "pageTitle": "Phlebotomist Clinic Jobs near me | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist clinic jobs near me: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Clinic Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist clinic jobs near me Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist clinic jobs near me vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist clinic jobs near me offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 11.5
  },
  {
    "keyword": "phlebotomist jobs with no experience",
    "volume": 10,
    "cluster": "Employment Type",
    "subcluster": "Entry-Level / Training",
    "slug": "phlebotomist-jobs-with-no-experience",
    "pageTitle": "Phlebotomist Jobs with no Experience | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist jobs with no experience: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Jobs with no Experience",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist jobs with no experience Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist jobs with no experience vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist jobs with no experience offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 11.5
  },
  {
    "keyword": "phlebotomist traveling jobs",
    "volume": 10,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "phlebotomist-traveling-jobs",
    "pageTitle": "Phlebotomist Traveling Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore phlebotomist traveling jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Phlebotomist Traveling Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What phlebotomist traveling jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "phlebotomist traveling jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Phlebotomist traveling jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 10
  },
  {
    "keyword": "laboratory phlebotomist jobs",
    "volume": 10,
    "cluster": "Employment Type",
    "subcluster": "Hospital / Clinic Setting",
    "slug": "laboratory-phlebotomist-jobs",
    "pageTitle": "Laboratory Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore laboratory phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Laboratory Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What laboratory phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "laboratory phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Laboratory phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Transactional",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 10
  },
  {
    "keyword": "urgent care phlebotomist jobs",
    "volume": 10,
    "cluster": "Employment Type",
    "subcluster": "Hospital / Clinic Setting",
    "slug": "urgent-care-phlebotomist-jobs",
    "pageTitle": "Urgent Care Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore urgent care phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Urgent Care Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What urgent care phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "urgent care phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Urgent care phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Transactional",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 10
  },
  {
    "keyword": "what other jobs can a phlebotomist do",
    "volume": 10,
    "cluster": "Employment Type",
    "subcluster": "Career / Salary Info",
    "slug": "what-other-jobs-can-a-phlebotomist-do",
    "pageTitle": "What Other Jobs Can a Phlebotomist Do | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore what other jobs can a phlebotomist do: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "What Other Jobs Can a Phlebotomist Do",
    "outline": [
      {
        "level": "h2",
        "text": "What what other jobs can a phlebotomist do Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "what other jobs can a phlebotomist do vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "What other jobs can a phlebotomist do offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 1,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 9.9
  },
  {
    "keyword": "traveling phlebotomist jobs in georgia",
    "volume": 0,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "traveling-phlebotomist-jobs-in-georgia",
    "pageTitle": "Traveling Phlebotomist Jobs in Georgia | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore traveling phlebotomist jobs in georgia: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Traveling Phlebotomist Jobs in Georgia",
    "outline": [
      {
        "level": "h2",
        "text": "What traveling phlebotomist jobs in georgia Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "traveling phlebotomist jobs in georgia vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Traveling phlebotomist jobs in georgia offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 1.8,
    "primaryIntent": "Transactional",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 0
  },
  {
    "keyword": "trainee phlebotomist jobs",
    "volume": 0,
    "cluster": "Employment Type",
    "subcluster": "Entry-Level / Training",
    "slug": "trainee-phlebotomist-jobs",
    "pageTitle": "Trainee Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore trainee phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Trainee Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What trainee phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "trainee phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Trainee phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.9,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 0
  },
  {
    "keyword": "traveling phlebotomist jobs in louisiana",
    "volume": 0,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "traveling-phlebotomist-jobs-in-louisiana",
    "pageTitle": "Traveling Phlebotomist Jobs in Louisiana | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore traveling phlebotomist jobs in louisiana: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Traveling Phlebotomist Jobs in Louisiana",
    "outline": [
      {
        "level": "h2",
        "text": "What traveling phlebotomist jobs in louisiana Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "traveling phlebotomist jobs in louisiana vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Traveling phlebotomist jobs in louisiana offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 1.1,
    "primaryIntent": "Transactional",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 0
  },
  {
    "keyword": "baltimore travel phlebotomist jobs",
    "volume": 0,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "baltimore-travel-phlebotomist-jobs",
    "pageTitle": "Baltimore Travel Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore baltimore travel phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Baltimore Travel Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What baltimore travel phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "baltimore travel phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Baltimore travel phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 0
  },
  {
    "keyword": "best traveling phlebotomist jobs",
    "volume": 0,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "best-traveling-phlebotomist-jobs",
    "pageTitle": "Best Traveling Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore best traveling phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Best Traveling Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What best traveling phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "best traveling phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Best traveling phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 1,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 0
  },
  {
    "keyword": "traveling phlebotomist jobs in florida",
    "volume": 0,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "traveling-phlebotomist-jobs-in-florida",
    "pageTitle": "Traveling Phlebotomist Jobs in Florida | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore traveling phlebotomist jobs in florida: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Traveling Phlebotomist Jobs in Florida",
    "outline": [
      {
        "level": "h2",
        "text": "What traveling phlebotomist jobs in florida Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "traveling phlebotomist jobs in florida vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Traveling phlebotomist jobs in florida offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0.7,
    "primaryIntent": "Transactional",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 0
  },
  {
    "keyword": "baltimore traveling phlebotomist jobs",
    "volume": 0,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "baltimore-traveling-phlebotomist-jobs",
    "pageTitle": "Baltimore Traveling Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore baltimore traveling phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Baltimore Traveling Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What baltimore traveling phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "baltimore traveling phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Baltimore traveling phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 0
  },
  {
    "keyword": "medical assistant and phlebotomist jobs",
    "volume": 0,
    "cluster": "Employment Type",
    "subcluster": "Career / Salary Info",
    "slug": "medical-assistant-and-phlebotomist-jobs",
    "pageTitle": "Medical Assistant And Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore medical assistant and phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Medical Assistant And Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What medical assistant and phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "medical assistant and phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Medical assistant and phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 0
  },
  {
    "keyword": "travelling phlebotomist jobs",
    "volume": 0,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "travelling-phlebotomist-jobs",
    "pageTitle": "Travelling Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore travelling phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Travelling Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What travelling phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "travelling phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Travelling phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": false,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 0
  },
  {
    "keyword": "washington travel phlebotomist jobs",
    "volume": 0,
    "cluster": "Employment Type",
    "subcluster": "Travel/Traveling",
    "slug": "washington-travel-phlebotomist-jobs",
    "pageTitle": "Washington Travel Phlebotomist Jobs | Pay & Requirements | [SiteName]",
    "metaDescription": "Explore washington travel phlebotomist jobs: typical pay, schedules, and requirements versus full-time phlebotomy roles.",
    "h1": "Washington Travel Phlebotomist Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "What washington travel phlebotomist jobs Involve"
      },
      {
        "level": "h2",
        "text": "Pay and Schedule Expectations"
      },
      {
        "level": "h3",
        "text": "Requirements and Certification"
      },
      {
        "level": "h2",
        "text": "washington travel phlebotomist jobs vs Full-Time Positions"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Washington travel phlebotomist jobs offer a different pace and pay structure than standard hospital roles. Here's what the work involves, what it pays, and who tends to qualify.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "OccupationalCategory / EmploymentType",
    "priorityScore": 0
  },
  {
    "keyword": "phlebotomist jobs nyc",
    "volume": 450,
    "cluster": "Geo: City-Level",
    "subcluster": "NYC",
    "slug": "phlebotomist-jobs-nyc",
    "pageTitle": "Phlebotomist Jobs NYC | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs NYC hiring now. Pay ranges, shift types, and requirements for NYC, updated regularly.",
    "h1": "Phlebotomist Jobs NYC",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in NYC"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs NYC"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs NYC? This page lists current openings, typical pay, and what employers in NYC expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 2,
    "cpc": 0.09,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 480.7
  },
  {
    "keyword": "phlebotomist jobs houston",
    "volume": 350,
    "cluster": "Geo: City-Level",
    "subcluster": "Houston",
    "slug": "phlebotomist-jobs-houston",
    "pageTitle": "Phlebotomist Jobs Houston | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs houston hiring now. Pay ranges, shift types, and requirements for Houston, updated regularly.",
    "h1": "Phlebotomist Jobs Houston",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Houston"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs houston"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs houston? This page lists current openings, typical pay, and what employers in Houston expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 437.5
  },
  {
    "keyword": "phlebotomist jobs atlanta",
    "volume": 200,
    "cluster": "Geo: City-Level",
    "subcluster": "Atlanta",
    "slug": "phlebotomist-jobs-atlanta",
    "pageTitle": "Phlebotomist Jobs Atlanta | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs atlanta hiring now. Pay ranges, shift types, and requirements for Atlanta, updated regularly.",
    "h1": "Phlebotomist Jobs Atlanta",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Atlanta"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs atlanta"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs atlanta? This page lists current openings, typical pay, and what employers in Atlanta expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.9,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 380
  },
  {
    "keyword": "phlebotomist jobs chicago",
    "volume": 300,
    "cluster": "Geo: City-Level",
    "subcluster": "Chicago",
    "slug": "phlebotomist-jobs-chicago",
    "pageTitle": "Phlebotomist Jobs Chicago | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs chicago hiring now. Pay ranges, shift types, and requirements for Chicago, updated regularly.",
    "h1": "Phlebotomist Jobs Chicago",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Chicago"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs chicago"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs chicago? This page lists current openings, typical pay, and what employers in Chicago expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.08,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 324
  },
  {
    "keyword": "phlebotomist jobs san diego",
    "volume": 250,
    "cluster": "Geo: City-Level",
    "subcluster": "San Diego",
    "slug": "phlebotomist-jobs-san-diego",
    "pageTitle": "Phlebotomist Jobs San Diego | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs san diego hiring now. Pay ranges, shift types, and requirements for San Diego, updated regularly.",
    "h1": "Phlebotomist Jobs San Diego",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in San Diego"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs san diego"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs san diego? This page lists current openings, typical pay, and what employers in San Diego expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.09,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 272.5
  },
  {
    "keyword": "phlebotomist jobs el paso",
    "volume": 250,
    "cluster": "Geo: City-Level",
    "subcluster": "El Paso",
    "slug": "phlebotomist-jobs-el-paso",
    "pageTitle": "Phlebotomist Jobs El Paso | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs el paso hiring now. Pay ranges, shift types, and requirements for El Paso, updated regularly.",
    "h1": "Phlebotomist Jobs El Paso",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in El Paso"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs el paso"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs el paso? This page lists current openings, typical pay, and what employers in El Paso expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.06,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 265
  },
  {
    "keyword": "phlebotomist jobs las vegas",
    "volume": 200,
    "cluster": "Geo: City-Level",
    "subcluster": "Las Vegas",
    "slug": "phlebotomist-jobs-las-vegas",
    "pageTitle": "Phlebotomist Jobs Las Vegas | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs las vegas hiring now. Pay ranges, shift types, and requirements for Las Vegas, updated regularly.",
    "h1": "Phlebotomist Jobs Las Vegas",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Las Vegas"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs las vegas"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs las vegas? This page lists current openings, typical pay, and what employers in Las Vegas expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.1,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 220
  },
  {
    "keyword": "phlebotomist jobs san antonio",
    "volume": 200,
    "cluster": "Geo: City-Level",
    "subcluster": "San Antonio",
    "slug": "phlebotomist-jobs-san-antonio",
    "pageTitle": "Phlebotomist Jobs San Antonio | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs san antonio hiring now. Pay ranges, shift types, and requirements for San Antonio, updated regularly.",
    "h1": "Phlebotomist Jobs San Antonio",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in San Antonio"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs san antonio"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs san antonio? This page lists current openings, typical pay, and what employers in San Antonio expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.1,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 220
  },
  {
    "keyword": "phlebotomist jobs dallas",
    "volume": 150,
    "cluster": "Geo: City-Level",
    "subcluster": "Dallas",
    "slug": "phlebotomist-jobs-dallas",
    "pageTitle": "Phlebotomist Jobs Dallas | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs dallas hiring now. Pay ranges, shift types, and requirements for Dallas, updated regularly.",
    "h1": "Phlebotomist Jobs Dallas",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Dallas"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs dallas"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs dallas? This page lists current openings, typical pay, and what employers in Dallas expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 172.5
  },
  {
    "keyword": "phlebotomist jobs charlotte nc",
    "volume": 100,
    "cluster": "Geo: City-Level",
    "subcluster": "Charlotte NC",
    "slug": "phlebotomist-jobs-charlotte-nc",
    "pageTitle": "Phlebotomist Jobs Charlotte NC | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs charlotte NC hiring now. Pay ranges, shift types, and requirements for Charlotte NC, updated regularly.",
    "h1": "Phlebotomist Jobs Charlotte NC",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Charlotte NC"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs charlotte NC"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs charlotte NC? This page lists current openings, typical pay, and what employers in Charlotte NC expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 145
  },
  {
    "keyword": "phlebotomist jobs tyler tx",
    "volume": 100,
    "cluster": "Geo: City-Level",
    "subcluster": "Tyler TX",
    "slug": "phlebotomist-jobs-tyler-tx",
    "pageTitle": "Phlebotomist Jobs Tyler TX | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs tyler TX hiring now. Pay ranges, shift types, and requirements for Tyler TX, updated regularly.",
    "h1": "Phlebotomist Jobs Tyler TX",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Tyler TX"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs tyler TX"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs tyler TX? This page lists current openings, typical pay, and what employers in Tyler TX expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 145
  },
  {
    "keyword": "phlebotomist jobs orlando",
    "volume": 100,
    "cluster": "Geo: City-Level",
    "subcluster": "Orlando",
    "slug": "phlebotomist-jobs-orlando",
    "pageTitle": "Phlebotomist Jobs Orlando | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs orlando hiring now. Pay ranges, shift types, and requirements for Orlando, updated regularly.",
    "h1": "Phlebotomist Jobs Orlando",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Orlando"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs orlando"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs orlando? This page lists current openings, typical pay, and what employers in Orlando expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 125
  },
  {
    "keyword": "phlebotomist jobs memphis tn",
    "volume": 100,
    "cluster": "Geo: City-Level",
    "subcluster": "Memphis TN",
    "slug": "phlebotomist-jobs-memphis-tn",
    "pageTitle": "Phlebotomist Jobs Memphis TN | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs memphis TN hiring now. Pay ranges, shift types, and requirements for Memphis TN, updated regularly.",
    "h1": "Phlebotomist Jobs Memphis TN",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Memphis TN"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs memphis TN"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs memphis TN? This page lists current openings, typical pay, and what employers in Memphis TN expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 125
  },
  {
    "keyword": "phlebotomist jobs columbia sc",
    "volume": 100,
    "cluster": "Geo: City-Level",
    "subcluster": "Columbia SC",
    "slug": "phlebotomist-jobs-columbia-sc",
    "pageTitle": "Phlebotomist Jobs Columbia SC | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs columbia SC hiring now. Pay ranges, shift types, and requirements for Columbia SC, updated regularly.",
    "h1": "Phlebotomist Jobs Columbia SC",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Columbia SC"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs columbia SC"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs columbia SC? This page lists current openings, typical pay, and what employers in Columbia SC expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 125
  },
  {
    "keyword": "phlebotomist jobs fresno",
    "volume": 100,
    "cluster": "Geo: City-Level",
    "subcluster": "Fresno",
    "slug": "phlebotomist-jobs-fresno",
    "pageTitle": "Phlebotomist Jobs Fresno | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs fresno hiring now. Pay ranges, shift types, and requirements for Fresno, updated regularly.",
    "h1": "Phlebotomist Jobs Fresno",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Fresno"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs fresno"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs fresno? This page lists current openings, typical pay, and what employers in Fresno expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 125
  },
  {
    "keyword": "phlebotomist jobs fort worth",
    "volume": 90,
    "cluster": "Geo: City-Level",
    "subcluster": "Fort Worth",
    "slug": "phlebotomist-jobs-fort-worth",
    "pageTitle": "Phlebotomist Jobs Fort Worth | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs fort worth hiring now. Pay ranges, shift types, and requirements for Fort Worth, updated regularly.",
    "h1": "Phlebotomist Jobs Fort Worth",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Fort Worth"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs fort worth"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs fort worth? This page lists current openings, typical pay, and what employers in Fort Worth expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.35,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 121.5
  },
  {
    "keyword": "phlebotomist jobs philadelphia",
    "volume": 80,
    "cluster": "Geo: City-Level",
    "subcluster": "Philadelphia",
    "slug": "phlebotomist-jobs-philadelphia",
    "pageTitle": "Phlebotomist Jobs Philadelphia | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs philadelphia hiring now. Pay ranges, shift types, and requirements for Philadelphia, updated regularly.",
    "h1": "Phlebotomist Jobs Philadelphia",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Philadelphia"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs philadelphia"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs philadelphia? This page lists current openings, typical pay, and what employers in Philadelphia expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 116
  },
  {
    "keyword": "phlebotomist jobs corpus christi",
    "volume": 90,
    "cluster": "Geo: City-Level",
    "subcluster": "Corpus Christi",
    "slug": "phlebotomist-jobs-corpus-christi",
    "pageTitle": "Phlebotomist Jobs Corpus Christi | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs corpus christi hiring now. Pay ranges, shift types, and requirements for Corpus Christi, updated regularly.",
    "h1": "Phlebotomist Jobs Corpus Christi",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Corpus Christi"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs corpus christi"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs corpus christi? This page lists current openings, typical pay, and what employers in Corpus Christi expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 112.5
  },
  {
    "keyword": "phlebotomist jobs okc",
    "volume": 90,
    "cluster": "Geo: City-Level",
    "subcluster": "OKC",
    "slug": "phlebotomist-jobs-okc",
    "pageTitle": "Phlebotomist Jobs OKC | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs OKC hiring now. Pay ranges, shift types, and requirements for OKC, updated regularly.",
    "h1": "Phlebotomist Jobs OKC",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in OKC"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs OKC"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs OKC? This page lists current openings, typical pay, and what employers in OKC expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 112.5
  },
  {
    "keyword": "phlebotomist jobs indianapolis",
    "volume": 70,
    "cluster": "Geo: City-Level",
    "subcluster": "Indianapolis",
    "slug": "phlebotomist-jobs-indianapolis",
    "pageTitle": "Phlebotomist Jobs Indianapolis | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs indianapolis hiring now. Pay ranges, shift types, and requirements for Indianapolis, updated regularly.",
    "h1": "Phlebotomist Jobs Indianapolis",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Indianapolis"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs indianapolis"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs indianapolis? This page lists current openings, typical pay, and what employers in Indianapolis expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 112
  },
  {
    "keyword": "phlebotomist jobs los angeles",
    "volume": 100,
    "cluster": "Geo: City-Level",
    "subcluster": "Los Angeles",
    "slug": "phlebotomist-jobs-los-angeles",
    "pageTitle": "Phlebotomist Jobs Los Angeles | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs los angeles hiring now. Pay ranges, shift types, and requirements for Los Angeles, updated regularly.",
    "h1": "Phlebotomist Jobs Los Angeles",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Los Angeles"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs los angeles"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs los angeles? This page lists current openings, typical pay, and what employers in Los Angeles expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.1,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 110
  },
  {
    "keyword": "phlebotomist jobs st louis",
    "volume": 90,
    "cluster": "Geo: City-Level",
    "subcluster": "St Louis",
    "slug": "phlebotomist-jobs-st-louis",
    "pageTitle": "Phlebotomist Jobs St Louis | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs st louis hiring now. Pay ranges, shift types, and requirements for St Louis, updated regularly.",
    "h1": "Phlebotomist Jobs St Louis",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in St Louis"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs st louis"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs st louis? This page lists current openings, typical pay, and what employers in St Louis expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 103.5
  },
  {
    "keyword": "phlebotomist jobs colorado springs",
    "volume": 70,
    "cluster": "Geo: City-Level",
    "subcluster": "Colorado Springs",
    "slug": "phlebotomist-jobs-colorado-springs",
    "pageTitle": "Phlebotomist Jobs Colorado Springs | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs colorado springs hiring now. Pay ranges, shift types, and requirements for Colorado Springs, updated regularly.",
    "h1": "Phlebotomist Jobs Colorado Springs",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Colorado Springs"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs colorado springs"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs colorado springs? This page lists current openings, typical pay, and what employers in Colorado Springs expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 101.5
  },
  {
    "keyword": "phlebotomist jobs jackson ms",
    "volume": 70,
    "cluster": "Geo: City-Level",
    "subcluster": "Jackson MS",
    "slug": "phlebotomist-jobs-jackson-ms",
    "pageTitle": "Phlebotomist Jobs Jackson MS | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs jackson MS hiring now. Pay ranges, shift types, and requirements for Jackson MS, updated regularly.",
    "h1": "Phlebotomist Jobs Jackson MS",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Jackson MS"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs jackson MS"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs jackson MS? This page lists current openings, typical pay, and what employers in Jackson MS expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 101.5
  },
  {
    "keyword": "phlebotomist jobs sacramento",
    "volume": 70,
    "cluster": "Geo: City-Level",
    "subcluster": "Sacramento",
    "slug": "phlebotomist-jobs-sacramento",
    "pageTitle": "Phlebotomist Jobs Sacramento | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs sacramento hiring now. Pay ranges, shift types, and requirements for Sacramento, updated regularly.",
    "h1": "Phlebotomist Jobs Sacramento",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Sacramento"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs sacramento"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs sacramento? This page lists current openings, typical pay, and what employers in Sacramento expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 101.5
  },
  {
    "keyword": "phlebotomist jobs longview tx",
    "volume": 80,
    "cluster": "Geo: City-Level",
    "subcluster": "Longview TX",
    "slug": "phlebotomist-jobs-longview-tx",
    "pageTitle": "Phlebotomist Jobs Longview TX | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs longview TX hiring now. Pay ranges, shift types, and requirements for Longview TX, updated regularly.",
    "h1": "Phlebotomist Jobs Longview TX",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Longview TX"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs longview TX"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs longview TX? This page lists current openings, typical pay, and what employers in Longview TX expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 100
  },
  {
    "keyword": "phlebotomist jobs baltimore",
    "volume": 70,
    "cluster": "Geo: City-Level",
    "subcluster": "Baltimore",
    "slug": "phlebotomist-jobs-baltimore",
    "pageTitle": "Phlebotomist Jobs Baltimore | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs baltimore hiring now. Pay ranges, shift types, and requirements for Baltimore, updated regularly.",
    "h1": "Phlebotomist Jobs Baltimore",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Baltimore"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs baltimore"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs baltimore? This page lists current openings, typical pay, and what employers in Baltimore expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.4,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 98
  },
  {
    "keyword": "phlebotomist jobs mcallen tx",
    "volume": 70,
    "cluster": "Geo: City-Level",
    "subcluster": "Mcallen TX",
    "slug": "phlebotomist-jobs-mcallen-tx",
    "pageTitle": "Phlebotomist Jobs Mcallen TX | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs mcallen TX hiring now. Pay ranges, shift types, and requirements for Mcallen TX, updated regularly.",
    "h1": "Phlebotomist Jobs Mcallen TX",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Mcallen TX"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs mcallen TX"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs mcallen TX? This page lists current openings, typical pay, and what employers in Mcallen TX expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 91
  },
  {
    "keyword": "phlebotomist jobs dallas tx",
    "volume": 60,
    "cluster": "Geo: City-Level",
    "subcluster": "Dallas TX",
    "slug": "phlebotomist-jobs-dallas-tx",
    "pageTitle": "Phlebotomist Jobs Dallas TX | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs dallas TX hiring now. Pay ranges, shift types, and requirements for Dallas TX, updated regularly.",
    "h1": "Phlebotomist Jobs Dallas TX",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Dallas TX"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs dallas TX"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs dallas TX? This page lists current openings, typical pay, and what employers in Dallas TX expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 90
  },
  {
    "keyword": "phlebotomist jobs baton rouge",
    "volume": 70,
    "cluster": "Geo: City-Level",
    "subcluster": "Baton Rouge",
    "slug": "phlebotomist-jobs-baton-rouge",
    "pageTitle": "Phlebotomist Jobs Baton Rouge | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs baton rouge hiring now. Pay ranges, shift types, and requirements for Baton Rouge, updated regularly.",
    "h1": "Phlebotomist Jobs Baton Rouge",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Baton Rouge"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs baton rouge"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs baton rouge? This page lists current openings, typical pay, and what employers in Baton Rouge expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 87.5
  },
  {
    "keyword": "phlebotomist jobs wichita ks",
    "volume": 70,
    "cluster": "Geo: City-Level",
    "subcluster": "Wichita KS",
    "slug": "phlebotomist-jobs-wichita-ks",
    "pageTitle": "Phlebotomist Jobs Wichita KS | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs wichita KS hiring now. Pay ranges, shift types, and requirements for Wichita KS, updated regularly.",
    "h1": "Phlebotomist Jobs Wichita KS",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Wichita KS"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs wichita KS"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs wichita KS? This page lists current openings, typical pay, and what employers in Wichita KS expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 87.5
  },
  {
    "keyword": "phlebotomist jobs jacksonville fl",
    "volume": 60,
    "cluster": "Geo: City-Level",
    "subcluster": "Jacksonville Fl",
    "slug": "phlebotomist-jobs-jacksonville-fl",
    "pageTitle": "Phlebotomist Jobs Jacksonville Fl | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs jacksonville fl hiring now. Pay ranges, shift types, and requirements for Jacksonville Fl, updated regularly.",
    "h1": "Phlebotomist Jobs Jacksonville Fl",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Jacksonville Fl"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs jacksonville fl"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs jacksonville fl? This page lists current openings, typical pay, and what employers in Jacksonville Fl expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 87
  },
  {
    "keyword": "phlebotomist jobs new orleans",
    "volume": 70,
    "cluster": "Geo: City-Level",
    "subcluster": "New Orleans",
    "slug": "phlebotomist-jobs-new-orleans",
    "pageTitle": "Phlebotomist Jobs New Orleans | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs new orleans hiring now. Pay ranges, shift types, and requirements for New Orleans, updated regularly.",
    "h1": "Phlebotomist Jobs New Orleans",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in New Orleans"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs new orleans"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs new orleans? This page lists current openings, typical pay, and what employers in New Orleans expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.2,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 84
  },
  {
    "keyword": "phlebotomist jobs tulsa",
    "volume": 70,
    "cluster": "Geo: City-Level",
    "subcluster": "Tulsa",
    "slug": "phlebotomist-jobs-tulsa",
    "pageTitle": "Phlebotomist Jobs Tulsa | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs tulsa hiring now. Pay ranges, shift types, and requirements for Tulsa, updated regularly.",
    "h1": "Phlebotomist Jobs Tulsa",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Tulsa"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs tulsa"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs tulsa? This page lists current openings, typical pay, and what employers in Tulsa expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.2,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 84
  },
  {
    "keyword": "phlebotomist jobs houston tx",
    "volume": 70,
    "cluster": "Geo: City-Level",
    "subcluster": "Houston TX",
    "slug": "phlebotomist-jobs-houston-tx",
    "pageTitle": "Phlebotomist Jobs Houston TX | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs houston TX hiring now. Pay ranges, shift types, and requirements for Houston TX, updated regularly.",
    "h1": "Phlebotomist Jobs Houston TX",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Houston TX"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs houston TX"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs houston TX? This page lists current openings, typical pay, and what employers in Houston TX expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 80.5
  },
  {
    "keyword": "phlebotomist jobs montgomery al",
    "volume": 60,
    "cluster": "Geo: City-Level",
    "subcluster": "Montgomery AL",
    "slug": "phlebotomist-jobs-montgomery-al",
    "pageTitle": "Phlebotomist Jobs Montgomery AL | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs montgomery AL hiring now. Pay ranges, shift types, and requirements for Montgomery AL, updated regularly.",
    "h1": "Phlebotomist Jobs Montgomery AL",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Montgomery AL"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs montgomery AL"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs montgomery AL? This page lists current openings, typical pay, and what employers in Montgomery AL expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 78
  },
  {
    "keyword": "phlebotomist jobs bakersfield",
    "volume": 60,
    "cluster": "Geo: City-Level",
    "subcluster": "Bakersfield",
    "slug": "phlebotomist-jobs-bakersfield",
    "pageTitle": "Phlebotomist Jobs Bakersfield | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs bakersfield hiring now. Pay ranges, shift types, and requirements for Bakersfield, updated regularly.",
    "h1": "Phlebotomist Jobs Bakersfield",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Bakersfield"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs bakersfield"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs bakersfield? This page lists current openings, typical pay, and what employers in Bakersfield expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 75
  },
  {
    "keyword": "phlebotomist jobs laredo tx",
    "volume": 60,
    "cluster": "Geo: City-Level",
    "subcluster": "Laredo TX",
    "slug": "phlebotomist-jobs-laredo-tx",
    "pageTitle": "Phlebotomist Jobs Laredo TX | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs laredo TX hiring now. Pay ranges, shift types, and requirements for Laredo TX, updated regularly.",
    "h1": "Phlebotomist Jobs Laredo TX",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Laredo TX"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs laredo TX"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs laredo TX? This page lists current openings, typical pay, and what employers in Laredo TX expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 75
  },
  {
    "keyword": "phlebotomist jobs austin",
    "volume": 50,
    "cluster": "Geo: City-Level",
    "subcluster": "Austin",
    "slug": "phlebotomist-jobs-austin",
    "pageTitle": "Phlebotomist Jobs Austin | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs austin hiring now. Pay ranges, shift types, and requirements for Austin, updated regularly.",
    "h1": "Phlebotomist Jobs Austin",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Austin"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs austin"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs austin? This page lists current openings, typical pay, and what employers in Austin expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 75
  },
  {
    "keyword": "phlebotomist jobs minneapolis",
    "volume": 50,
    "cluster": "Geo: City-Level",
    "subcluster": "Minneapolis",
    "slug": "phlebotomist-jobs-minneapolis",
    "pageTitle": "Phlebotomist Jobs Minneapolis | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs minneapolis hiring now. Pay ranges, shift types, and requirements for Minneapolis, updated regularly.",
    "h1": "Phlebotomist Jobs Minneapolis",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Minneapolis"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs minneapolis"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs minneapolis? This page lists current openings, typical pay, and what employers in Minneapolis expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 72.5
  },
  {
    "keyword": "phlebotomist jobs phoenix",
    "volume": 50,
    "cluster": "Geo: City-Level",
    "subcluster": "Phoenix",
    "slug": "phlebotomist-jobs-phoenix",
    "pageTitle": "Phlebotomist Jobs Phoenix | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs phoenix hiring now. Pay ranges, shift types, and requirements for Phoenix, updated regularly.",
    "h1": "Phlebotomist Jobs Phoenix",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Phoenix"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs phoenix"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs phoenix? This page lists current openings, typical pay, and what employers in Phoenix expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 72.5
  },
  {
    "keyword": "phlebotomist jobs columbus ohio",
    "volume": 50,
    "cluster": "Geo: City-Level",
    "subcluster": "Columbus Ohio",
    "slug": "phlebotomist-jobs-columbus-ohio",
    "pageTitle": "Phlebotomist Jobs Columbus Ohio | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs columbus ohio hiring now. Pay ranges, shift types, and requirements for Columbus Ohio, updated regularly.",
    "h1": "Phlebotomist Jobs Columbus Ohio",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Columbus Ohio"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs columbus ohio"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs columbus ohio? This page lists current openings, typical pay, and what employers in Columbus Ohio expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 72.5
  },
  {
    "keyword": "phlebotomist jobs greensboro nc",
    "volume": 60,
    "cluster": "Geo: City-Level",
    "subcluster": "Greensboro NC",
    "slug": "phlebotomist-jobs-greensboro-nc",
    "pageTitle": "Phlebotomist Jobs Greensboro NC | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs greensboro NC hiring now. Pay ranges, shift types, and requirements for Greensboro NC, updated regularly.",
    "h1": "Phlebotomist Jobs Greensboro NC",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Greensboro NC"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs greensboro NC"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs greensboro NC? This page lists current openings, typical pay, and what employers in Greensboro NC expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 69
  },
  {
    "keyword": "phlebotomist jobs omaha",
    "volume": 50,
    "cluster": "Geo: City-Level",
    "subcluster": "Omaha",
    "slug": "phlebotomist-jobs-omaha",
    "pageTitle": "Phlebotomist Jobs Omaha | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs omaha hiring now. Pay ranges, shift types, and requirements for Omaha, updated regularly.",
    "h1": "Phlebotomist Jobs Omaha",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Omaha"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs omaha"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs omaha? This page lists current openings, typical pay, and what employers in Omaha expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 65
  },
  {
    "keyword": "phlebotomist jobs seattle",
    "volume": 50,
    "cluster": "Geo: City-Level",
    "subcluster": "Seattle",
    "slug": "phlebotomist-jobs-seattle",
    "pageTitle": "Phlebotomist Jobs Seattle | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs seattle hiring now. Pay ranges, shift types, and requirements for Seattle, updated regularly.",
    "h1": "Phlebotomist Jobs Seattle",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Seattle"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs seattle"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs seattle? This page lists current openings, typical pay, and what employers in Seattle expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 65
  },
  {
    "keyword": "phlebotomist jobs queens",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Queens",
    "slug": "phlebotomist-jobs-queens",
    "pageTitle": "Phlebotomist Jobs Queens | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs queens hiring now. Pay ranges, shift types, and requirements for Queens, updated regularly.",
    "h1": "Phlebotomist Jobs Queens",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Queens"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs queens"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs queens? This page lists current openings, typical pay, and what employers in Queens expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 64
  },
  {
    "keyword": "phlebotomist jobs denver",
    "volume": 50,
    "cluster": "Geo: City-Level",
    "subcluster": "Denver",
    "slug": "phlebotomist-jobs-denver",
    "pageTitle": "Phlebotomist Jobs Denver | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs denver hiring now. Pay ranges, shift types, and requirements for Denver, updated regularly.",
    "h1": "Phlebotomist Jobs Denver",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Denver"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs denver"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs denver? This page lists current openings, typical pay, and what employers in Denver expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 62.5
  },
  {
    "keyword": "phlebotomist jobs tampa",
    "volume": 50,
    "cluster": "Geo: City-Level",
    "subcluster": "Tampa",
    "slug": "phlebotomist-jobs-tampa",
    "pageTitle": "Phlebotomist Jobs Tampa | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs tampa hiring now. Pay ranges, shift types, and requirements for Tampa, updated regularly.",
    "h1": "Phlebotomist Jobs Tampa",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Tampa"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs tampa"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs tampa? This page lists current openings, typical pay, and what employers in Tampa expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.2,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 60
  },
  {
    "keyword": "phlebotomist jobs columbus ga",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Columbus GA",
    "slug": "phlebotomist-jobs-columbus-ga",
    "pageTitle": "Phlebotomist Jobs Columbus GA | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs columbus GA hiring now. Pay ranges, shift types, and requirements for Columbus GA, updated regularly.",
    "h1": "Phlebotomist Jobs Columbus GA",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Columbus GA"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs columbus GA"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs columbus GA? This page lists current openings, typical pay, and what employers in Columbus GA expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 60
  },
  {
    "keyword": "phlebotomist jobs rochester ny",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Rochester Ny",
    "slug": "phlebotomist-jobs-rochester-ny",
    "pageTitle": "Phlebotomist Jobs Rochester Ny | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs rochester ny hiring now. Pay ranges, shift types, and requirements for Rochester Ny, updated regularly.",
    "h1": "Phlebotomist Jobs Rochester Ny",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Rochester Ny"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs rochester ny"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs rochester ny? This page lists current openings, typical pay, and what employers in Rochester Ny expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 60
  },
  {
    "keyword": "phlebotomist jobs cincinnati",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Cincinnati",
    "slug": "phlebotomist-jobs-cincinnati",
    "pageTitle": "Phlebotomist Jobs Cincinnati | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs cincinnati hiring now. Pay ranges, shift types, and requirements for Cincinnati, updated regularly.",
    "h1": "Phlebotomist Jobs Cincinnati",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Cincinnati"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs cincinnati"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs cincinnati? This page lists current openings, typical pay, and what employers in Cincinnati expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 60
  },
  {
    "keyword": "phlebotomist jobs augusta ga",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Augusta GA",
    "slug": "phlebotomist-jobs-augusta-ga",
    "pageTitle": "Phlebotomist Jobs Augusta GA | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs augusta GA hiring now. Pay ranges, shift types, and requirements for Augusta GA, updated regularly.",
    "h1": "Phlebotomist Jobs Augusta GA",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Augusta GA"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs augusta GA"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs augusta GA? This page lists current openings, typical pay, and what employers in Augusta GA expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 58
  },
  {
    "keyword": "phlebotomist jobs brooklyn",
    "volume": 50,
    "cluster": "Geo: City-Level",
    "subcluster": "Brooklyn",
    "slug": "phlebotomist-jobs-brooklyn",
    "pageTitle": "Phlebotomist Jobs Brooklyn | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs brooklyn hiring now. Pay ranges, shift types, and requirements for Brooklyn, updated regularly.",
    "h1": "Phlebotomist Jobs Brooklyn",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Brooklyn"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs brooklyn"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs brooklyn? This page lists current openings, typical pay, and what employers in Brooklyn expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 57.5
  },
  {
    "keyword": "phlebotomist jobs louisville ky",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Louisville KY",
    "slug": "phlebotomist-jobs-louisville-ky",
    "pageTitle": "Phlebotomist Jobs Louisville KY | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs louisville KY hiring now. Pay ranges, shift types, and requirements for Louisville KY, updated regularly.",
    "h1": "Phlebotomist Jobs Louisville KY",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Louisville KY"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs louisville KY"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs louisville KY? This page lists current openings, typical pay, and what employers in Louisville KY expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.35,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 54
  },
  {
    "keyword": "phlebotomist jobs kansas city",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Kansas City",
    "slug": "phlebotomist-jobs-kansas-city",
    "pageTitle": "Phlebotomist Jobs Kansas City | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs kansas city hiring now. Pay ranges, shift types, and requirements for Kansas City, updated regularly.",
    "h1": "Phlebotomist Jobs Kansas City",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Kansas City"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs kansas city"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs kansas city? This page lists current openings, typical pay, and what employers in Kansas City expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 52
  },
  {
    "keyword": "phlebotomist jobs nashville",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Nashville",
    "slug": "phlebotomist-jobs-nashville",
    "pageTitle": "Phlebotomist Jobs Nashville | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs nashville hiring now. Pay ranges, shift types, and requirements for Nashville, updated regularly.",
    "h1": "Phlebotomist Jobs Nashville",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Nashville"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs nashville"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs nashville? This page lists current openings, typical pay, and what employers in Nashville expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 52
  },
  {
    "keyword": "phlebotomist jobs portland",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Portland",
    "slug": "phlebotomist-jobs-portland",
    "pageTitle": "Phlebotomist Jobs Portland | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs portland hiring now. Pay ranges, shift types, and requirements for Portland, updated regularly.",
    "h1": "Phlebotomist Jobs Portland",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Portland"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs portland"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs portland? This page lists current openings, typical pay, and what employers in Portland expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 50
  },
  {
    "keyword": "phlebotomist jobs tucson",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Tucson",
    "slug": "phlebotomist-jobs-tucson",
    "pageTitle": "Phlebotomist Jobs Tucson | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs tucson hiring now. Pay ranges, shift types, and requirements for Tucson, updated regularly.",
    "h1": "Phlebotomist Jobs Tucson",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Tucson"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs tucson"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs tucson? This page lists current openings, typical pay, and what employers in Tucson expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 50
  },
  {
    "keyword": "phlebotomist jobs greenville sc",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Greenville SC",
    "slug": "phlebotomist-jobs-greenville-sc",
    "pageTitle": "Phlebotomist Jobs Greenville SC | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs greenville SC hiring now. Pay ranges, shift types, and requirements for Greenville SC, updated regularly.",
    "h1": "Phlebotomist Jobs Greenville SC",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Greenville SC"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs greenville SC"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs greenville SC? This page lists current openings, typical pay, and what employers in Greenville SC expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 50
  },
  {
    "keyword": "phlebotomist jobs raleigh nc",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Raleigh NC",
    "slug": "phlebotomist-jobs-raleigh-nc",
    "pageTitle": "Phlebotomist Jobs Raleigh NC | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs raleigh NC hiring now. Pay ranges, shift types, and requirements for Raleigh NC, updated regularly.",
    "h1": "Phlebotomist Jobs Raleigh NC",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Raleigh NC"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs raleigh NC"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs raleigh NC? This page lists current openings, typical pay, and what employers in Raleigh NC expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 50
  },
  {
    "keyword": "phlebotomist jobs arlington tx",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Arlington TX",
    "slug": "phlebotomist-jobs-arlington-tx",
    "pageTitle": "Phlebotomist Jobs Arlington TX | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs arlington TX hiring now. Pay ranges, shift types, and requirements for Arlington TX, updated regularly.",
    "h1": "Phlebotomist Jobs Arlington TX",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Arlington TX"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs arlington TX"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs arlington TX? This page lists current openings, typical pay, and what employers in Arlington TX expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 46
  },
  {
    "keyword": "phlebotomist jobs clarksville tn",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Clarksville TN",
    "slug": "phlebotomist-jobs-clarksville-tn",
    "pageTitle": "Phlebotomist Jobs Clarksville TN | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs clarksville TN hiring now. Pay ranges, shift types, and requirements for Clarksville TN, updated regularly.",
    "h1": "Phlebotomist Jobs Clarksville TN",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Clarksville TN"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs clarksville TN"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs clarksville TN? This page lists current openings, typical pay, and what employers in Clarksville TN expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 45
  },
  {
    "keyword": "phlebotomist jobs boston",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Boston",
    "slug": "phlebotomist-jobs-boston",
    "pageTitle": "Phlebotomist Jobs Boston | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs boston hiring now. Pay ranges, shift types, and requirements for Boston, updated regularly.",
    "h1": "Phlebotomist Jobs Boston",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Boston"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs boston"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs boston? This page lists current openings, typical pay, and what employers in Boston expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 45
  },
  {
    "keyword": "phlebotomist jobs dayton ohio",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Dayton Ohio",
    "slug": "phlebotomist-jobs-dayton-ohio",
    "pageTitle": "Phlebotomist Jobs Dayton Ohio | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs dayton ohio hiring now. Pay ranges, shift types, and requirements for Dayton Ohio, updated regularly.",
    "h1": "Phlebotomist Jobs Dayton Ohio",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Dayton Ohio"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs dayton ohio"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs dayton ohio? This page lists current openings, typical pay, and what employers in Dayton Ohio expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 45
  },
  {
    "keyword": "phlebotomist jobs pittsburgh",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Pittsburgh",
    "slug": "phlebotomist-jobs-pittsburgh",
    "pageTitle": "Phlebotomist Jobs Pittsburgh | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs pittsburgh hiring now. Pay ranges, shift types, and requirements for Pittsburgh, updated regularly.",
    "h1": "Phlebotomist Jobs Pittsburgh",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Pittsburgh"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs pittsburgh"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs pittsburgh? This page lists current openings, typical pay, and what employers in Pittsburgh expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 43.5
  },
  {
    "keyword": "phlebotomist jobs orange county",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Orange County",
    "slug": "phlebotomist-jobs-orange-county",
    "pageTitle": "Phlebotomist Jobs Orange County | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs orange county hiring now. Pay ranges, shift types, and requirements for Orange County, updated regularly.",
    "h1": "Phlebotomist Jobs Orange County",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Orange County"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs orange county"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs orange county? This page lists current openings, typical pay, and what employers in Orange County expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 43.5
  },
  {
    "keyword": "phlebotomist jobs fayetteville nc",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Fayetteville NC",
    "slug": "phlebotomist-jobs-fayetteville-nc",
    "pageTitle": "Phlebotomist Jobs Fayetteville NC | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs fayetteville NC hiring now. Pay ranges, shift types, and requirements for Fayetteville NC, updated regularly.",
    "h1": "Phlebotomist Jobs Fayetteville NC",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Fayetteville NC"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs fayetteville NC"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs fayetteville NC? This page lists current openings, typical pay, and what employers in Fayetteville NC expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.05,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 42
  },
  {
    "keyword": "phlebotomist jobs albuquerque",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Albuquerque",
    "slug": "phlebotomist-jobs-albuquerque",
    "pageTitle": "Phlebotomist Jobs Albuquerque | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs albuquerque hiring now. Pay ranges, shift types, and requirements for Albuquerque, updated regularly.",
    "h1": "Phlebotomist Jobs Albuquerque",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Albuquerque"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs albuquerque"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs albuquerque? This page lists current openings, typical pay, and what employers in Albuquerque expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.35,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 40.5
  },
  {
    "keyword": "phlebotomist jobs long beach",
    "volume": 40,
    "cluster": "Geo: City-Level",
    "subcluster": "Long Beach",
    "slug": "phlebotomist-jobs-long-beach",
    "pageTitle": "Phlebotomist Jobs Long Beach | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs long beach hiring now. Pay ranges, shift types, and requirements for Long Beach, updated regularly.",
    "h1": "Phlebotomist Jobs Long Beach",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Long Beach"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs long beach"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs long beach? This page lists current openings, typical pay, and what employers in Long Beach expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 40
  },
  {
    "keyword": "phlebotomist jobs san jose",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "San Jose",
    "slug": "phlebotomist-jobs-san-jose",
    "pageTitle": "Phlebotomist Jobs San Jose | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs san jose hiring now. Pay ranges, shift types, and requirements for San Jose, updated regularly.",
    "h1": "Phlebotomist Jobs San Jose",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in San Jose"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs san jose"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs san jose? This page lists current openings, typical pay, and what employers in San Jose expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 39
  },
  {
    "keyword": "phlebotomist jobs milwaukee",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Milwaukee",
    "slug": "phlebotomist-jobs-milwaukee",
    "pageTitle": "Phlebotomist Jobs Milwaukee | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs milwaukee hiring now. Pay ranges, shift types, and requirements for Milwaukee, updated regularly.",
    "h1": "Phlebotomist Jobs Milwaukee",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Milwaukee"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs milwaukee"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs milwaukee? This page lists current openings, typical pay, and what employers in Milwaukee expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 39
  },
  {
    "keyword": "phlebotomist jobs knoxville tn",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Knoxville TN",
    "slug": "phlebotomist-jobs-knoxville-tn",
    "pageTitle": "Phlebotomist Jobs Knoxville TN | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs knoxville TN hiring now. Pay ranges, shift types, and requirements for Knoxville TN, updated regularly.",
    "h1": "Phlebotomist Jobs Knoxville TN",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Knoxville TN"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs knoxville TN"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs knoxville TN? This page lists current openings, typical pay, and what employers in Knoxville TN expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 39
  },
  {
    "keyword": "phlebotomist jobs miami",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Miami",
    "slug": "phlebotomist-jobs-miami",
    "pageTitle": "Phlebotomist Jobs Miami | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs miami hiring now. Pay ranges, shift types, and requirements for Miami, updated regularly.",
    "h1": "Phlebotomist Jobs Miami",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Miami"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs miami"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs miami? This page lists current openings, typical pay, and what employers in Miami expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 37.5
  },
  {
    "keyword": "phlebotomist jobs buffalo ny",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Buffalo Ny",
    "slug": "phlebotomist-jobs-buffalo-ny",
    "pageTitle": "Phlebotomist Jobs Buffalo Ny | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs buffalo ny hiring now. Pay ranges, shift types, and requirements for Buffalo Ny, updated regularly.",
    "h1": "Phlebotomist Jobs Buffalo Ny",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Buffalo Ny"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs buffalo ny"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs buffalo ny? This page lists current openings, typical pay, and what employers in Buffalo Ny expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 37.5
  },
  {
    "keyword": "phlebotomist jobs lubbock",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Lubbock",
    "slug": "phlebotomist-jobs-lubbock",
    "pageTitle": "Phlebotomist Jobs Lubbock | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs lubbock hiring now. Pay ranges, shift types, and requirements for Lubbock, updated regularly.",
    "h1": "Phlebotomist Jobs Lubbock",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Lubbock"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs lubbock"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs lubbock? This page lists current openings, typical pay, and what employers in Lubbock expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 37.5
  },
  {
    "keyword": "phlebotomist jobs lincoln ne",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Lincoln NE",
    "slug": "phlebotomist-jobs-lincoln-ne",
    "pageTitle": "Phlebotomist Jobs Lincoln NE | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs lincoln NE hiring now. Pay ranges, shift types, and requirements for Lincoln NE, updated regularly.",
    "h1": "Phlebotomist Jobs Lincoln NE",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Lincoln NE"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs lincoln NE"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs lincoln NE? This page lists current openings, typical pay, and what employers in Lincoln NE expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 37.5
  },
  {
    "keyword": "phlebotomist jobs gainesville fl",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Gainesville Fl",
    "slug": "phlebotomist-jobs-gainesville-fl",
    "pageTitle": "Phlebotomist Jobs Gainesville Fl | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs gainesville fl hiring now. Pay ranges, shift types, and requirements for Gainesville Fl, updated regularly.",
    "h1": "Phlebotomist Jobs Gainesville Fl",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Gainesville Fl"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs gainesville fl"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs gainesville fl? This page lists current openings, typical pay, and what employers in Gainesville Fl expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 37.5
  },
  {
    "keyword": "phlebotomist jobs richmond va",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Richmond VA",
    "slug": "phlebotomist-jobs-richmond-va",
    "pageTitle": "Phlebotomist Jobs Richmond VA | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs richmond VA hiring now. Pay ranges, shift types, and requirements for Richmond VA, updated regularly.",
    "h1": "Phlebotomist Jobs Richmond VA",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Richmond VA"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs richmond VA"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs richmond VA? This page lists current openings, typical pay, and what employers in Richmond VA expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.1,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 33
  },
  {
    "keyword": "phlebotomist jobs lexington ky",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Lexington KY",
    "slug": "phlebotomist-jobs-lexington-ky",
    "pageTitle": "Phlebotomist Jobs Lexington KY | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs lexington KY hiring now. Pay ranges, shift types, and requirements for Lexington KY, updated regularly.",
    "h1": "Phlebotomist Jobs Lexington KY",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Lexington KY"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs lexington KY"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs lexington KY? This page lists current openings, typical pay, and what employers in Lexington KY expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.1,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 33
  },
  {
    "keyword": "phlebotomist jobs spokane",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Spokane",
    "slug": "phlebotomist-jobs-spokane",
    "pageTitle": "Phlebotomist Jobs Spokane | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs spokane hiring now. Pay ranges, shift types, and requirements for Spokane, updated regularly.",
    "h1": "Phlebotomist Jobs Spokane",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Spokane"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs spokane"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs spokane? This page lists current openings, typical pay, and what employers in Spokane expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.08,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 32.4
  },
  {
    "keyword": "phlebotomist jobs san francisco",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "San Francisco",
    "slug": "phlebotomist-jobs-san-francisco",
    "pageTitle": "Phlebotomist Jobs San Francisco | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs san francisco hiring now. Pay ranges, shift types, and requirements for San Francisco, updated regularly.",
    "h1": "Phlebotomist Jobs San Francisco",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in San Francisco"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs san francisco"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs san francisco? This page lists current openings, typical pay, and what employers in San Francisco expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.07,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 32.1
  },
  {
    "keyword": "phlebotomist jobs in san diego",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "San Diego",
    "slug": "phlebotomist-jobs-in-san-diego",
    "pageTitle": "Phlebotomist Jobs in San Diego | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs in san diego hiring now. Pay ranges, shift types, and requirements for San Diego, updated regularly.",
    "h1": "Phlebotomist Jobs in San Diego",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in San Diego"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs in san diego"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs in san diego? This page lists current openings, typical pay, and what employers in San Diego expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.07,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 32.1
  },
  {
    "keyword": "phlebotomist jobs fresno ca",
    "volume": 30,
    "cluster": "Geo: City-Level",
    "subcluster": "Fresno CA",
    "slug": "phlebotomist-jobs-fresno-ca",
    "pageTitle": "Phlebotomist Jobs Fresno CA | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs fresno CA hiring now. Pay ranges, shift types, and requirements for Fresno CA, updated regularly.",
    "h1": "Phlebotomist Jobs Fresno CA",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Fresno CA"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs fresno CA"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs fresno CA? This page lists current openings, typical pay, and what employers in Fresno CA expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 30
  },
  {
    "keyword": "phlebotomist jobs in houston",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Houston",
    "slug": "phlebotomist-jobs-in-houston",
    "pageTitle": "Phlebotomist Jobs in Houston | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs in houston hiring now. Pay ranges, shift types, and requirements for Houston, updated regularly.",
    "h1": "Phlebotomist Jobs in Houston",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Houston"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs in houston"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs in houston? This page lists current openings, typical pay, and what employers in Houston expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 30
  },
  {
    "keyword": "phlebotomist jobs bronx ny",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Bronx Ny",
    "slug": "phlebotomist-jobs-bronx-ny",
    "pageTitle": "Phlebotomist Jobs Bronx Ny | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs bronx ny hiring now. Pay ranges, shift types, and requirements for Bronx Ny, updated regularly.",
    "h1": "Phlebotomist Jobs Bronx Ny",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Bronx Ny"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs bronx ny"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs bronx ny? This page lists current openings, typical pay, and what employers in Bronx Ny expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 29
  },
  {
    "keyword": "phlebotomist jobs in houston texas",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Houston",
    "slug": "phlebotomist-jobs-in-houston-texas",
    "pageTitle": "Phlebotomist Jobs in Houston Texas | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs in houston texas hiring now. Pay ranges, shift types, and requirements for Houston, updated regularly.",
    "h1": "Phlebotomist Jobs in Houston Texas",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Houston"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs in houston texas"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs in houston texas? This page lists current openings, typical pay, and what employers in Houston expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 26
  },
  {
    "keyword": "phlebotomist jobs boise",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Boise",
    "slug": "phlebotomist-jobs-boise",
    "pageTitle": "Phlebotomist Jobs Boise | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs boise hiring now. Pay ranges, shift types, and requirements for Boise, updated regularly.",
    "h1": "Phlebotomist Jobs Boise",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Boise"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs boise"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs boise? This page lists current openings, typical pay, and what employers in Boise expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 25
  },
  {
    "keyword": "phlebotomist jobs in atlanta ga",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Atlanta",
    "slug": "phlebotomist-jobs-in-atlanta-ga",
    "pageTitle": "Phlebotomist Jobs in Atlanta GA | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs in atlanta GA hiring now. Pay ranges, shift types, and requirements for Atlanta, updated regularly.",
    "h1": "Phlebotomist Jobs in Atlanta GA",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Atlanta"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs in atlanta GA"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs in atlanta GA? This page lists current openings, typical pay, and what employers in Atlanta expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.2,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 24
  },
  {
    "keyword": "phlebotomist jobs riverside",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Riverside",
    "slug": "phlebotomist-jobs-riverside",
    "pageTitle": "Phlebotomist Jobs Riverside | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs riverside hiring now. Pay ranges, shift types, and requirements for Riverside, updated regularly.",
    "h1": "Phlebotomist Jobs Riverside",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Riverside"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs riverside"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs riverside? This page lists current openings, typical pay, and what employers in Riverside expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 23
  },
  {
    "keyword": "phlebotomist jobs in san antonio tx",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "San Antonio TX",
    "slug": "phlebotomist-jobs-in-san-antonio-tx",
    "pageTitle": "Phlebotomist Jobs in San Antonio TX | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs in san antonio TX hiring now. Pay ranges, shift types, and requirements for San Antonio TX, updated regularly.",
    "h1": "Phlebotomist Jobs in San Antonio TX",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in San Antonio TX"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs in san antonio TX"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs in san antonio TX? This page lists current openings, typical pay, and what employers in San Antonio TX expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 23
  },
  {
    "keyword": "phlebotomist jobs in chicago",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Chicago",
    "slug": "phlebotomist-jobs-in-chicago",
    "pageTitle": "Phlebotomist Jobs in Chicago | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs in chicago hiring now. Pay ranges, shift types, and requirements for Chicago, updated regularly.",
    "h1": "Phlebotomist Jobs in Chicago",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Chicago"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs in chicago"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs in chicago? This page lists current openings, typical pay, and what employers in Chicago expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 20
  },
  {
    "keyword": "phlebotomist jobs stockton",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Stockton",
    "slug": "phlebotomist-jobs-stockton",
    "pageTitle": "Phlebotomist Jobs Stockton | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs stockton hiring now. Pay ranges, shift types, and requirements for Stockton, updated regularly.",
    "h1": "Phlebotomist Jobs Stockton",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Stockton"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs stockton"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs stockton? This page lists current openings, typical pay, and what employers in Stockton expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 20
  },
  {
    "keyword": "phlebotomist jobs syracuse ny",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Syracuse Ny",
    "slug": "phlebotomist-jobs-syracuse-ny",
    "pageTitle": "Phlebotomist Jobs Syracuse Ny | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs syracuse ny hiring now. Pay ranges, shift types, and requirements for Syracuse Ny, updated regularly.",
    "h1": "Phlebotomist Jobs Syracuse Ny",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Syracuse Ny"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs syracuse ny"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs syracuse ny? This page lists current openings, typical pay, and what employers in Syracuse Ny expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 20
  },
  {
    "keyword": "phlebotomist jobs murfreesboro tn",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Murfreesboro TN",
    "slug": "phlebotomist-jobs-murfreesboro-tn",
    "pageTitle": "Phlebotomist Jobs Murfreesboro TN | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs murfreesboro TN hiring now. Pay ranges, shift types, and requirements for Murfreesboro TN, updated regularly.",
    "h1": "Phlebotomist Jobs Murfreesboro TN",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Murfreesboro TN"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs murfreesboro TN"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs murfreesboro TN? This page lists current openings, typical pay, and what employers in Murfreesboro TN expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 20
  },
  {
    "keyword": "phlebotomist jobs topeka ks",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Topeka KS",
    "slug": "phlebotomist-jobs-topeka-ks",
    "pageTitle": "Phlebotomist Jobs Topeka KS | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs topeka KS hiring now. Pay ranges, shift types, and requirements for Topeka KS, updated regularly.",
    "h1": "Phlebotomist Jobs Topeka KS",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Topeka KS"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs topeka KS"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs topeka KS? This page lists current openings, typical pay, and what employers in Topeka KS expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 20
  },
  {
    "keyword": "phlebotomist jobs modesto",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Modesto",
    "slug": "phlebotomist-jobs-modesto",
    "pageTitle": "Phlebotomist Jobs Modesto | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs modesto hiring now. Pay ranges, shift types, and requirements for Modesto, updated regularly.",
    "h1": "Phlebotomist Jobs Modesto",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Modesto"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs modesto"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs modesto? This page lists current openings, typical pay, and what employers in Modesto expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 20
  },
  {
    "keyword": "phlebotomist jobs victorville",
    "volume": 20,
    "cluster": "Geo: City-Level",
    "subcluster": "Victorville",
    "slug": "phlebotomist-jobs-victorville",
    "pageTitle": "Phlebotomist Jobs Victorville | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs victorville hiring now. Pay ranges, shift types, and requirements for Victorville, updated regularly.",
    "h1": "Phlebotomist Jobs Victorville",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Victorville"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs victorville"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs victorville? This page lists current openings, typical pay, and what employers in Victorville expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 20
  },
  {
    "keyword": "phlebotomist jobs in nyc",
    "volume": 10,
    "cluster": "Geo: City-Level",
    "subcluster": "NYC",
    "slug": "phlebotomist-jobs-in-nyc",
    "pageTitle": "Phlebotomist Jobs in NYC | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs in NYC hiring now. Pay ranges, shift types, and requirements for NYC, updated regularly.",
    "h1": "Phlebotomist Jobs in NYC",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in NYC"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs in NYC"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs in NYC? This page lists current openings, typical pay, and what employers in NYC expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 10
  },
  {
    "keyword": "phlebotomist jobs in jacksonville fl",
    "volume": 0,
    "cluster": "Geo: City-Level",
    "subcluster": "Jacksonville Fl",
    "slug": "phlebotomist-jobs-in-jacksonville-fl",
    "pageTitle": "Phlebotomist Jobs in Jacksonville Fl | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs in jacksonville fl hiring now. Pay ranges, shift types, and requirements for Jacksonville Fl, updated regularly.",
    "h1": "Phlebotomist Jobs in Jacksonville Fl",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Jacksonville Fl"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs in jacksonville fl"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs in jacksonville fl? This page lists current openings, typical pay, and what employers in Jacksonville Fl expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 0
  },
  {
    "keyword": "phlebotomist jobs in cleveland ohio",
    "volume": 0,
    "cluster": "Geo: City-Level",
    "subcluster": "Cleveland Ohio",
    "slug": "phlebotomist-jobs-in-cleveland-ohio",
    "pageTitle": "Phlebotomist Jobs in Cleveland Ohio | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs in cleveland ohio hiring now. Pay ranges, shift types, and requirements for Cleveland Ohio, updated regularly.",
    "h1": "Phlebotomist Jobs in Cleveland Ohio",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Cleveland Ohio"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs in cleveland ohio"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs in cleveland ohio? This page lists current openings, typical pay, and what employers in Cleveland Ohio expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 0
  },
  {
    "keyword": "phlebotomist jobs in my area",
    "volume": 0,
    "cluster": "Geo: City-Level",
    "subcluster": "My Area",
    "slug": "phlebotomist-jobs-in-my-area",
    "pageTitle": "Phlebotomist Jobs in My Area | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs in my area hiring now. Pay ranges, shift types, and requirements for My Area, updated regularly.",
    "h1": "Phlebotomist Jobs in My Area",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in My Area"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs in my area"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs in my area? This page lists current openings, typical pay, and what employers in My Area expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 0
  },
  {
    "keyword": "phlebotomist jobs in milwaukee wisconsin",
    "volume": 0,
    "cluster": "Geo: City-Level",
    "subcluster": "Milwaukee",
    "slug": "phlebotomist-jobs-in-milwaukee-wisconsin",
    "pageTitle": "Phlebotomist Jobs in Milwaukee Wisconsin | Pay & Requirements | [SiteName]",
    "metaDescription": "Browse phlebotomist jobs in milwaukee wisconsin hiring now. Pay ranges, shift types, and requirements for Milwaukee, updated regularly.",
    "h1": "Phlebotomist Jobs in Milwaukee Wisconsin",
    "outline": [
      {
        "level": "h2",
        "text": "Phlebotomist Pay in Milwaukee"
      },
      {
        "level": "h2",
        "text": "How to Get Hired for phlebotomist jobs in milwaukee wisconsin"
      },
      {
        "level": "h3",
        "text": "Certification Requirements"
      },
      {
        "level": "h3",
        "text": "Typical Shift Schedules"
      },
      {
        "level": "h2",
        "text": "Nearby Cities Hiring Phlebotomists"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Looking for phlebotomist jobs in milwaukee wisconsin? This page lists current openings, typical pay, and what employers in Milwaukee expect from phlebotomy candidates, whether you're certified or just starting out.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 0
  },
  {
    "keyword": "phlebotomist jobs utah",
    "volume": 40,
    "cluster": "Geo: State-Level",
    "subcluster": "Utah",
    "slug": "phlebotomist-jobs-utah",
    "pageTitle": "Phlebotomist Jobs Utah | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs utah across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs Utah",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in Utah"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in Utah"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in Utah"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Utah has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs utah typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.25,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 50
  },
  {
    "keyword": "phlebotomist jobs texas",
    "volume": 30,
    "cluster": "Geo: State-Level",
    "subcluster": "Texas",
    "slug": "phlebotomist-jobs-texas",
    "pageTitle": "Phlebotomist Jobs Texas | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs texas across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs Texas",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in Texas"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in Texas"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in Texas"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Texas has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs texas typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 43.5
  },
  {
    "keyword": "phlebotomist jobs in california",
    "volume": 30,
    "cluster": "Geo: State-Level",
    "subcluster": "California",
    "slug": "phlebotomist-jobs-in-california",
    "pageTitle": "Phlebotomist Jobs in California | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs in california across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs in California",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in California"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in California"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in California"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "California has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs in california typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.1,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 33
  },
  {
    "keyword": "phlebotomist jobs connecticut",
    "volume": 20,
    "cluster": "Geo: State-Level",
    "subcluster": "Connecticut",
    "slug": "phlebotomist-jobs-connecticut",
    "pageTitle": "Phlebotomist Jobs Connecticut | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs connecticut across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs Connecticut",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in Connecticut"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in Connecticut"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in Connecticut"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Connecticut has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs connecticut typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 30
  },
  {
    "keyword": "phlebotomist jobs in ct",
    "volume": 20,
    "cluster": "Geo: State-Level",
    "subcluster": "CT",
    "slug": "phlebotomist-jobs-in-ct",
    "pageTitle": "Phlebotomist Jobs in CT | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs in CT across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs in CT",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in CT"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in CT"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in CT"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "CT has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs in CT typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 30
  },
  {
    "keyword": "phlebotomist jobs in georgia",
    "volume": 20,
    "cluster": "Geo: State-Level",
    "subcluster": "Georgia",
    "slug": "phlebotomist-jobs-in-georgia",
    "pageTitle": "Phlebotomist Jobs in Georgia | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs in georgia across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs in Georgia",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in Georgia"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in Georgia"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in Georgia"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Georgia has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs in georgia typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 30
  },
  {
    "keyword": "phlebotomist jobs in florida",
    "volume": 20,
    "cluster": "Geo: State-Level",
    "subcluster": "Florida",
    "slug": "phlebotomist-jobs-in-florida",
    "pageTitle": "Phlebotomist Jobs in Florida | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs in florida across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs in Florida",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in Florida"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in Florida"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in Florida"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Florida has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs in florida typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 29
  },
  {
    "keyword": "phlebotomist jobs in maryland",
    "volume": 20,
    "cluster": "Geo: State-Level",
    "subcluster": "Maryland",
    "slug": "phlebotomist-jobs-in-maryland",
    "pageTitle": "Phlebotomist Jobs in Maryland | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs in maryland across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs in Maryland",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in Maryland"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in Maryland"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in Maryland"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Maryland has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs in maryland typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 29
  },
  {
    "keyword": "phlebotomist jobs rhode island",
    "volume": 20,
    "cluster": "Geo: State-Level",
    "subcluster": "Rhode Island",
    "slug": "phlebotomist-jobs-rhode-island",
    "pageTitle": "Phlebotomist Jobs Rhode Island | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs rhode island across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs Rhode Island",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in Rhode Island"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in Rhode Island"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in Rhode Island"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Rhode Island has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs rhode island typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 26
  },
  {
    "keyword": "phlebotomist jobs mn",
    "volume": 20,
    "cluster": "Geo: State-Level",
    "subcluster": "MN",
    "slug": "phlebotomist-jobs-mn",
    "pageTitle": "Phlebotomist Jobs MN | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs MN across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs MN",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in MN"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in MN"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in MN"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "MN has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs MN typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.3,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 26
  },
  {
    "keyword": "phlebotomist jobs in texas",
    "volume": 20,
    "cluster": "Geo: State-Level",
    "subcluster": "Texas",
    "slug": "phlebotomist-jobs-in-texas",
    "pageTitle": "Phlebotomist Jobs in Texas | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs in texas across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs in Texas",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in Texas"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in Texas"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in Texas"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Texas has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs in texas typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.08,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 21.6
  },
  {
    "keyword": "phlebotomist jobs in michigan",
    "volume": 10,
    "cluster": "Geo: State-Level",
    "subcluster": "Michigan",
    "slug": "phlebotomist-jobs-in-michigan",
    "pageTitle": "Phlebotomist Jobs in Michigan | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs in michigan across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs in Michigan",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in Michigan"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in Michigan"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in Michigan"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Michigan has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs in michigan typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.6,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 16
  },
  {
    "keyword": "phlebotomist jobs ohio",
    "volume": 10,
    "cluster": "Geo: State-Level",
    "subcluster": "Ohio",
    "slug": "phlebotomist-jobs-ohio",
    "pageTitle": "Phlebotomist Jobs Ohio | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs ohio across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs Ohio",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in Ohio"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in Ohio"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in Ohio"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Ohio has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs ohio typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 14.5
  },
  {
    "keyword": "phlebotomist jobs in washington dc",
    "volume": 10,
    "cluster": "Geo: State-Level",
    "subcluster": "Washington DC",
    "slug": "phlebotomist-jobs-in-washington-dc",
    "pageTitle": "Phlebotomist Jobs in Washington DC | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs in washington DC across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs in Washington DC",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in Washington DC"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in Washington DC"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in Washington DC"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Washington DC has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs in washington DC typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.35,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 13.5
  },
  {
    "keyword": "phlebotomist jobs in ms",
    "volume": 10,
    "cluster": "Geo: State-Level",
    "subcluster": "MS",
    "slug": "phlebotomist-jobs-in-ms",
    "pageTitle": "Phlebotomist Jobs in MS | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs in MS across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs in MS",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in MS"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in MS"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in MS"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "MS has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs in MS typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.05,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 10.5
  },
  {
    "keyword": "phlebotomist jobs in new jersey",
    "volume": 0,
    "cluster": "Geo: State-Level",
    "subcluster": "New Jersey",
    "slug": "phlebotomist-jobs-in-new-jersey",
    "pageTitle": "Phlebotomist Jobs in New Jersey | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs in new jersey across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs in New Jersey",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in New Jersey"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in New Jersey"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in New Jersey"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "New Jersey has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs in new jersey typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 0
  },
  {
    "keyword": "phlebotomist jobs in ri",
    "volume": 0,
    "cluster": "Geo: State-Level",
    "subcluster": "RI",
    "slug": "phlebotomist-jobs-in-ri",
    "pageTitle": "Phlebotomist Jobs in RI | Pay & Requirements | [SiteName]",
    "metaDescription": "Find phlebotomist jobs in RI across major cities. Compare pay, certification requirements, and open shifts by city.",
    "h1": "Phlebotomist Jobs in RI",
    "outline": [
      {
        "level": "h2",
        "text": "Average Phlebotomist Salary in RI"
      },
      {
        "level": "h2",
        "text": "Top Cities Hiring in RI"
      },
      {
        "level": "h2",
        "text": "Certification Requirements in RI"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "RI has phlebotomy openings across hospitals, labs, and clinics statewide. Here's what phlebotomist jobs in RI typically pay and how to qualify, city by city.",
    "difficulty": 0,
    "cpc": 0.06,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place",
    "priorityScore": 0
  },
  {
    "keyword": "phlebotomist jobs near me",
    "volume": 8300,
    "cluster": "Local Intent (Near Me)",
    "subcluster": "Near Me",
    "slug": "phlebotomist-jobs-near-me",
    "pageTitle": "Phlebotomist Jobs near me | Openings Near You | [SiteName]",
    "metaDescription": "Search phlebotomist jobs near me using your location. Filter by shift, pay, and experience to find openings nearby.",
    "h1": "Phlebotomist Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "How to Search Openings Near You"
      },
      {
        "level": "h2",
        "text": "What to Expect: Pay and Shifts"
      },
      {
        "level": "h3",
        "text": "Full-Time vs Part-Time Near Me"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Searching for phlebotomy jobs close to you? Use your location to see openings by distance, shift type, and pay so you can find the best fit nearby.",
    "difficulty": 0,
    "cpc": 0.1,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place (geolocated)",
    "priorityScore": 9130
  },
  {
    "keyword": "phlebotomist jobs hiring near me",
    "volume": 250,
    "cluster": "Local Intent (Near Me)",
    "subcluster": "Near Me",
    "slug": "phlebotomist-jobs-hiring-near-me",
    "pageTitle": "Phlebotomist Jobs Hiring near me | Openings Near You | [SiteName]",
    "metaDescription": "Search phlebotomist jobs hiring near me using your location. Filter by shift, pay, and experience to find openings nearby.",
    "h1": "Phlebotomist Jobs Hiring near me",
    "outline": [
      {
        "level": "h2",
        "text": "How to Search Openings Near You"
      },
      {
        "level": "h2",
        "text": "What to Expect: Pay and Shifts"
      },
      {
        "level": "h3",
        "text": "Full-Time vs Part-Time Near Me"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Searching for phlebotomy jobs close to you? Use your location to see openings by distance, shift type, and pay so you can find the best fit nearby.",
    "difficulty": 0,
    "cpc": 0.15,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place (geolocated)",
    "priorityScore": 287.5
  },
  {
    "keyword": "phlebotomist near me jobs",
    "volume": 50,
    "cluster": "Local Intent (Near Me)",
    "subcluster": "Near Me",
    "slug": "phlebotomist-near-me-jobs",
    "pageTitle": "Phlebotomist near me Jobs | Openings Near You | [SiteName]",
    "metaDescription": "Search phlebotomist near me jobs using your location. Filter by shift, pay, and experience to find openings nearby.",
    "h1": "Phlebotomist near me Jobs",
    "outline": [
      {
        "level": "h2",
        "text": "How to Search Openings Near You"
      },
      {
        "level": "h2",
        "text": "What to Expect: Pay and Shifts"
      },
      {
        "level": "h3",
        "text": "Full-Time vs Part-Time Near Me"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Searching for phlebotomy jobs close to you? Use your location to see openings by distance, shift type, and pay so you can find the best fit nearby.",
    "difficulty": 0,
    "cpc": 0.7,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place (geolocated)",
    "priorityScore": 85
  },
  {
    "keyword": "phlebotomist 1 jobs near me",
    "volume": 70,
    "cluster": "Local Intent (Near Me)",
    "subcluster": "Near Me",
    "slug": "phlebotomist-1-jobs-near-me",
    "pageTitle": "Phlebotomist 1 Jobs near me | Openings Near You | [SiteName]",
    "metaDescription": "Search phlebotomist 1 jobs near me using your location. Filter by shift, pay, and experience to find openings nearby.",
    "h1": "Phlebotomist 1 Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "How to Search Openings Near You"
      },
      {
        "level": "h2",
        "text": "What to Expect: Pay and Shifts"
      },
      {
        "level": "h3",
        "text": "Full-Time vs Part-Time Near Me"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Searching for phlebotomy jobs close to you? Use your location to see openings by distance, shift type, and pay so you can find the best fit nearby.",
    "difficulty": 0,
    "cpc": 0,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place (geolocated)",
    "priorityScore": 70
  },
  {
    "keyword": "phlebotomist technician jobs near me",
    "volume": 40,
    "cluster": "Local Intent (Near Me)",
    "subcluster": "Near Me",
    "slug": "phlebotomist-technician-jobs-near-me",
    "pageTitle": "Phlebotomist Technician Jobs near me | Openings Near You | [SiteName]",
    "metaDescription": "Search phlebotomist technician jobs near me using your location. Filter by shift, pay, and experience to find openings nearby.",
    "h1": "Phlebotomist Technician Jobs near me",
    "outline": [
      {
        "level": "h2",
        "text": "How to Search Openings Near You"
      },
      {
        "level": "h2",
        "text": "What to Expect: Pay and Shifts"
      },
      {
        "level": "h3",
        "text": "Full-Time vs Part-Time Near Me"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Searching for phlebotomy jobs close to you? Use your location to see openings by distance, shift type, and pay so you can find the best fit nearby.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Transactional",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place (geolocated)",
    "priorityScore": 60
  },
  {
    "keyword": "jobs for phlebotomist near me",
    "volume": 30,
    "cluster": "Local Intent (Near Me)",
    "subcluster": "Near Me",
    "slug": "jobs-for-phlebotomist-near-me",
    "pageTitle": "Jobs for Phlebotomist near me | Openings Near You | [SiteName]",
    "metaDescription": "Search jobs for phlebotomist near me using your location. Filter by shift, pay, and experience to find openings nearby.",
    "h1": "Jobs for Phlebotomist near me",
    "outline": [
      {
        "level": "h2",
        "text": "How to Search Openings Near You"
      },
      {
        "level": "h2",
        "text": "What to Expect: Pay and Shifts"
      },
      {
        "level": "h3",
        "text": "Full-Time vs Part-Time Near Me"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Searching for phlebotomy jobs close to you? Use your location to see openings by distance, shift type, and pay so you can find the best fit nearby.",
    "difficulty": 0,
    "cpc": 0.5,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place (geolocated)",
    "priorityScore": 45
  },
  {
    "keyword": "jobs hiring phlebotomist near me",
    "volume": 30,
    "cluster": "Local Intent (Near Me)",
    "subcluster": "Near Me",
    "slug": "jobs-hiring-phlebotomist-near-me",
    "pageTitle": "Jobs Hiring Phlebotomist near me | Openings Near You | [SiteName]",
    "metaDescription": "Search jobs hiring phlebotomist near me using your location. Filter by shift, pay, and experience to find openings nearby.",
    "h1": "Jobs Hiring Phlebotomist near me",
    "outline": [
      {
        "level": "h2",
        "text": "How to Search Openings Near You"
      },
      {
        "level": "h2",
        "text": "What to Expect: Pay and Shifts"
      },
      {
        "level": "h3",
        "text": "Full-Time vs Part-Time Near Me"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Searching for phlebotomy jobs close to you? Use your location to see openings by distance, shift type, and pay so you can find the best fit nearby.",
    "difficulty": 0,
    "cpc": 0.35,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place (geolocated)",
    "priorityScore": 40.5
  },
  {
    "keyword": "jobs near me phlebotomist",
    "volume": 20,
    "cluster": "Local Intent (Near Me)",
    "subcluster": "Near Me",
    "slug": "jobs-near-me-phlebotomist",
    "pageTitle": "Jobs near me Phlebotomist | Openings Near You | [SiteName]",
    "metaDescription": "Search jobs near me phlebotomist using your location. Filter by shift, pay, and experience to find openings nearby.",
    "h1": "Jobs near me Phlebotomist",
    "outline": [
      {
        "level": "h2",
        "text": "How to Search Openings Near You"
      },
      {
        "level": "h2",
        "text": "What to Expect: Pay and Shifts"
      },
      {
        "level": "h3",
        "text": "Full-Time vs Part-Time Near Me"
      },
      {
        "level": "h2",
        "text": "Frequently Asked Questions"
      }
    ],
    "intro": "Searching for phlebotomy jobs close to you? Use your location to see openings by distance, shift type, and pay so you can find the best fit nearby.",
    "difficulty": 0,
    "cpc": 0.45,
    "primaryIntent": "Informational",
    "isLocal": true,
    "isBranded": false,
    "primaryEntityType": "Place (geolocated)",
    "priorityScore": 29
  }
];
export const keywordsTotalVolume = 50570;
