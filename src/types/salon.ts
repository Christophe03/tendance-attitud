export interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  price: string;
  description?: string;
  bookingUrl: string;
}

export interface ServiceCategory {
  id: 'boucles' | 'lissage' | 'crepus' | 'ondulations';
  name: string;
  image: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface DaySchedule {
  day: string;
  hours: string;
  isClosed: boolean;
  openHour?: number;
  openMin?: number;
  closeHour?: number;
  closeMin?: number;
}

export interface Partner {
  id: string;
  name: string;
  description?: string;
  logo?: string;
}

export interface SalonInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    full: string;
  };
  phone: string;
  phoneRaw: string;
  instagram: {
    handle: string;
    url: string;
  };
  bookingUrl: string;
  openingHours: DaySchedule[];
}
