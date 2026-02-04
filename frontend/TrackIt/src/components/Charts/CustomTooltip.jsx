import React from 'react';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="
        bg-bg-card
        border border-border
        rounded-xl
        px-3 py-2
        shadow-lg
        backdrop-blur-sm
      ">
        <p className="text-xs font-semibold text-primary mb-1">
          {payload[0].name}
        </p>

        <p className="text-xs text-textMuted">
          Count:
          <span className="ml-1 text-sm font-medium text-textPrimary">
            {payload[0].value}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;