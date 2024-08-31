import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from 'date-fns';

export const getExperienceTime = (): string => {
  const startDate = new Date('2023-09-04');
  const currentDate = new Date();
  const years = differenceInYears(currentDate, startDate);
  const months = differenceInMonths(currentDate, startDate) % 12;
  const days = differenceInDays(currentDate, startDate) % 30;
  return `${years} years, ${months} months, and ${days} days`;
};

export const getExperienceYear = (): string => {
  const startDate = new Date('2023-09-04');
  const currentDate = new Date();
  const years = differenceInYears(currentDate, startDate);
  return `${years}`;
};
