import { SalonInfo, DaySchedule } from '../types/salon';

export const SALON_INFO: SalonInfo = {
  name: 'Salon Tendance Attitud',
  tagline: "Tous les cheveux méritent d'être sublimés",
  address: {
    street: '44 avenue Salvador Allende',
    postalCode: '13190',
    city: 'Allauch',
    full: '44 avenue Salvador Allende, 13190 Allauch',
  },
  phone: '06 59 26 65 33',
  phoneRaw: '+33659266533',
  instagram: {
    handle: '@tendanceattitud',
    url: 'https://www.instagram.com/tendanceattitud/',
  },
  bookingUrl: 'https://www.planity.com/tendance-attitud-13190-allauch',
  openingHours: [
    { day: 'LUNDI', hours: '09H - 18H', isClosed: false, openHour: 9, openMin: 0, closeHour: 18, closeMin: 0 },
    { day: 'MARDI', hours: '09H - 18H', isClosed: false, openHour: 9, openMin: 0, closeHour: 18, closeMin: 0 },
    { day: 'MERCREDI', hours: 'FERMÉ', isClosed: true },
    { day: 'JEUDI', hours: '09H - 20H30', isClosed: false, openHour: 9, openMin: 0, closeHour: 20, closeMin: 30 },
    { day: 'VENDREDI', hours: '09H - 19H', isClosed: false, openHour: 9, openMin: 0, closeHour: 19, closeMin: 0 },
    { day: 'SAMEDI', hours: '08H30 - 19H', isClosed: false, openHour: 8, openMin: 30, closeHour: 19, closeMin: 0 },
    { day: 'DIMANCHE', hours: 'FERMÉ', isClosed: true },
  ],
};

/**
 * Returns Paris local time parts (dayOfWeek, hour, minute) using Intl.DateTimeFormat
 */
export function getParisTime(date: Date = new Date()): { dayOfWeek: number; hour: number; minute: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Paris',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date);

  const dayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  let weekday = 'Mon';
  let hour = 0;
  let minute = 0;

  for (const part of parts) {
    if (part.type === 'weekday') weekday = part.value;
    if (part.type === 'hour') hour = parseInt(part.value, 10);
    if (part.type === 'minute') minute = parseInt(part.value, 10);
  }

  return {
    dayOfWeek: dayMap[weekday] ?? 0,
    hour,
    minute,
  };
}

/**
 * Returns the current day index in the openingHours schedule (0 = LUNDI, ..., 6 = DIMANCHE) in Europe/Paris
 */
export function getParisScheduleIndex(date: Date = new Date()): number {
  const { dayOfWeek } = getParisTime(date);
  return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
}

/**
 * Returns whether the salon is currently open and next status string
 */
export function isSalonOpenNow(
  schedule: DaySchedule[] = SALON_INFO.openingHours,
  date: Date = new Date()
): { isOpen: boolean; nextStatus: string } {
  const { dayOfWeek, hour, minute } = getParisTime(date);
  const scheduleIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const todaySchedule = schedule[scheduleIndex];

  const currentMinutes = hour * 60 + minute;

  const formatTime = (h?: number, m?: number) => {
    if (h === undefined) return '';
    const minStr = (m ?? 0).toString().padStart(2, '0');
    return `${h.toString().padStart(2, '0')}h${minStr !== '00' ? minStr : '00'}`;
  };

  if (!todaySchedule || todaySchedule.isClosed) {
    // Find next open day
    for (let i = 1; i <= 7; i++) {
      const nextIdx = (scheduleIndex + i) % 7;
      const nextDay = schedule[nextIdx];
      if (nextDay && !nextDay.isClosed) {
        return {
          isOpen: false,
          nextStatus: `Fermé - Ouvre ${nextDay.day.toLowerCase()} à ${formatTime(nextDay.openHour, nextDay.openMin)}`,
        };
      }
    }
    return { isOpen: false, nextStatus: 'Actuellement fermé' };
  }

  const openMinutes = (todaySchedule.openHour ?? 0) * 60 + (todaySchedule.openMin ?? 0);
  const closeMinutes = (todaySchedule.closeHour ?? 0) * 60 + (todaySchedule.closeMin ?? 0);

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return {
      isOpen: true,
      nextStatus: `Ouvert - Ferme à ${formatTime(todaySchedule.closeHour, todaySchedule.closeMin)}`,
    };
  } else if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      nextStatus: `Fermé - Ouvre aujourd'hui à ${formatTime(todaySchedule.openHour, todaySchedule.openMin)}`,
    };
  } else {
    // Already closed for today, check subsequent days
    for (let i = 1; i <= 7; i++) {
      const nextIdx = (scheduleIndex + i) % 7;
      const nextDay = schedule[nextIdx];
      if (nextDay && !nextDay.isClosed) {
        const dayLabel = i === 1 ? 'demain' : nextDay.day.toLowerCase();
        return {
          isOpen: false,
          nextStatus: `Fermé - Ouvre ${dayLabel} à ${formatTime(nextDay.openHour, nextDay.openMin)}`,
        };
      }
    }
    return { isOpen: false, nextStatus: 'Actuellement fermé' };
  }
}
