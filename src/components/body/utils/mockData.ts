export const COUNTRIES: Array<CountryID> = [
  840, 124, 76, 826, 276, 250, 710, 643, 356, 156, 392, 36, 554, 484, 32, 682,
  792, 152, 376,
];

export const COUNTRY_TIME_ZONES = {
  840: "America/New_York", // United States
  124: "America/Toronto", // Canada
  76: "America/Sao_Paulo", // Brazil
  826: "Europe/London", // United Kingdom
  276: "Europe/Berlin", // Germany
  250: "Europe/Paris", // France
  710: "Africa/Johannesburg", // South Africa
  643: "Europe/Moscow", // Russia
  356: "Asia/Kolkata", // India
  156: "Asia/Shanghai", // China
  392: "Asia/Tokyo", // Japan
  36: "Australia/Sydney", // Australia
  554: "Pacific/Auckland", // New Zealand
  484: "America/Mexico_City", // Mexico
  32: "America/Argentina/Buenos_Aires", // Argentina
  682: "Asia/Riyadh", // Saudi Arabia
  792: "Europe/Istanbul", // Turkey
  152: "America/Santiago", // Chile
  376: "Asia/Jerusalem", // Israel
};

export type CountryID = keyof typeof COUNTRY_TIME_ZONES;

export const COUNTRIES_FLAGS = {
  840: "https://flagcdn.com/us.svg", // United States
  124: "https://flagcdn.com/ca.svg", // Canada
  76: "https://flagcdn.com/br.svg", // Brazil
  826: "https://flagcdn.com/gb.svg", // United Kingdom
  276: "https://flagcdn.com/de.svg", // Germany
  250: "https://flagcdn.com/fr.svg", // France
  710: "https://flagcdn.com/za.svg", // South Africa
  643: "https://flagcdn.com/ru.svg", // Russia
  356: "https://flagcdn.com/in.svg", // India
  156: "https://flagcdn.com/cn.svg", // China
  392: "https://flagcdn.com/jp.svg", // Japan
  36: "https://flagcdn.com/au.svg", // Australia
  554: "https://flagcdn.com/nz.svg", // New Zealand
  484: "https://flagcdn.com/mx.svg", // Mexico
  32: "https://flagcdn.com/ar.svg", // Argentina
  682: "https://flagcdn.com/sa.svg", // Saudi Arabia
  792: "https://flagcdn.com/tr.svg", // Turkey
  152: "https://flagcdn.com/cl.svg", // Chile
  376: "https://flagcdn.com/il.svg", // Israel
  380: "https://flagcdn.com/it.svg", // Italy
};
