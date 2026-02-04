import React from 'react';

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="card flex items-center gap-4">
      <div
        className={`w-1 h-10 rounded-full ${color}`}
      />
      <div className="flex flex-col">
        <span className="text-xs text-textMuted tracking-wide uppercase">
          {label}
        </span>

        <span className="text-xl font-semibold text-textPrimary">
          {value}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
