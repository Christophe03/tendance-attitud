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
 * Returns whether the salon is currently open and next status string
 */
export function isSalonOpenNow(
  schedule: DaySchedule[] = SALON_INFO.openingHours,
  date: Date = new Date()
): { isOpen: boolean; nextStatus: string } {
  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ...
  const scheduleIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const todaySchedule = schedule[scheduleIndex];

  const currentMinutes = date.getHours() * 60 + date.getMinutes();

  const formatTime = (hour?: number, min?: number) => {
    if (hour === undefined) return '';
    const m = (min ?? 0).toString().padStart(2, '0');
    return `${hour.toString().padStart(2, '0')}h${m !== '00' ? m : '00'}`;
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
