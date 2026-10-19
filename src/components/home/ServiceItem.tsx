import React from 'react';
import { ServiceItem as ServiceItemType } from '../../types/salon';

interface ServiceItemProps {
  service: ServiceItemType;
}

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:bg-gray-50/50 rounded-xl px-2 sm:px-3">
      {/* Service Info */}
      <div className="flex-1 pr-0 sm:pr-4">
        <h4 className="text-sm sm:text-base font-semibold text-gray-900 tracking-tight leading-snug">
          {service.name}
        </h4>
        {service.description && (
          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
            {service.description}
          </p>
        )}
      </div>

      {/* Duration, Price & Action */}
      <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 shrink-0">
        <div className="text-left sm:text-right">
          <span className="block text-xs text-gray-500 font-medium">
            {service.duration}
          </span>
          <span className="block text-sm sm:text-base font-bold text-gray-900">
            {service.price}
          </span>
        </div>

        <a
          href={service.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#182315] hover:bg-[#253621] text-white rounded-full px-5 py-1.5 text-xs font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#182315]/50 cursor-pointer"
        >
          Choisir
        </a>
      </div>
    </div>
  );
}
