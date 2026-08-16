import { adToBs, bsToAd } from "@sbmdkl/nepali-date-converter";

export const BS_MONTHS = [
  "Baishakh",
  "Jestha",
  "Ashadh",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra",
] as const;

export type BSDateParts = {
  year: number;
  month: number;
  day: number;
};

export type BSObservance = {
  name: string;
  note: string;
};

const DAY_MS = 86_400_000;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function parseDateString(value: string): BSDateParts | null {
  const [year, month, day] = value.split("-").map(Number);
  if ([year, month, day].some(Number.isNaN)) return null;
  return { year, month, day };
}

export function formatAD(date: Date) {
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}

export function formatBS(parts: BSDateParts) {
  return `${parts.year} ${BS_MONTHS[parts.month - 1]} ${parts.day}`;
}

export function getBSObservances(bs: BSDateParts, ad: Date): BSObservance[] {
  const fixedBS: Record<string, BSObservance> = {
    "1-1": { name: "Nepali New Year", note: "First day of Bikram Sambat year" },
    "2-15": { name: "Republic Day", note: "Nepal became a federal democratic republic in 2008" },
    "6-3": { name: "Constitution Day", note: "Constitution of Nepal was promulgated in 2015" },
    "8-27": { name: "Prithvi Jayanti", note: "Birth anniversary of Prithvi Narayan Shah" },
    "11-7": { name: "Democracy Day", note: "Marks the end of the Rana regime in 1951" },
  };
  const observances = fixedBS[`${bs.month}-${bs.day}`] ? [fixedBS[`${bs.month}-${bs.day}`]] : [];
  const fixedAD: Record<string, BSObservance> = {
    "1-1": { name: "English New Year", note: "First day of Gregorian calendar year" },
    "5-1": { name: "International Workers' Day", note: "Also known as Labour Day" },
    "12-25": { name: "Christmas Day", note: "Christian festival observed on 25 December" },
  };
  const gregorian = fixedAD[`${ad.getUTCMonth() + 1}-${ad.getUTCDate()}`];
  if (gregorian) observances.push(gregorian);
  return observances;
}

export function adToBSParts(date: Date): BSDateParts | null {
  if (Number.isNaN(date.getTime())) return null;
  try {
    return parseDateString(adToBs(formatAD(date)));
  } catch {
    return null;
  }
}

export function bsToADDate(parts: BSDateParts): Date | null {
  if (parts.month < 1 || parts.month > 12 || parts.day < 1 || parts.day > 32) return null;
  try {
    const ad = bsToAd(`${parts.year}-${pad(parts.month)}-${pad(parts.day)}`);
    const parsed = parseDateString(ad);
    if (!parsed) return null;
    return new Date(Date.UTC(parsed.year, parsed.month - 1, parsed.day, 12));
  } catch {
    return null;
  }
}

export function dateDiffDays(a: Date, b: Date) {
  const start = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
  const end = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate());
  return Math.round(Math.abs(end - start) / DAY_MS);
}

export function calculateAge(dob: Date, now = new Date()) {
  const birth = new Date(Date.UTC(dob.getUTCFullYear(), dob.getUTCMonth(), dob.getUTCDate()));
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  if (birth > today) return null;

  let years = today.getUTCFullYear() - birth.getUTCFullYear();
  let months = today.getUTCMonth() - birth.getUTCMonth();
  let days = today.getUTCDate() - birth.getUTCDate();

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 0));
    days += previousMonth.getUTCDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

export function buildBSMonth(year: number, month: number) {
  const cells: Array<{ bs: BSDateParts; ad: Date }> = [];

  for (let day = 1; day <= 32; day += 1) {
    const bs = { year, month, day };
    const ad = bsToADDate(bs);
    if (!ad) break;
    cells.push({ bs, ad });
  }

  if (!cells.length) return null;

  return {
    monthName: BS_MONTHS[month - 1],
    startWeekday: cells[0].ad.getUTCDay(),
    cells: cells.map((cell) => ({ ...cell, observances: getBSObservances(cell.bs, cell.ad) })),
  };
}
