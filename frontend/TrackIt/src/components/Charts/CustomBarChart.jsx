import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const CustomBarChart = ({ data = [] }) => {

  const getBarColor = (entry) => {
    switch (entry?.priority) {
      case 'Low':
        return '#22C55E';   // green
      case 'Medium':
        return '#F59E0B';   // amber
      case 'High':
        return '#EF4444';   // red
      default:
        return '#6366F1';   // indigo fallback
    }
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="
          bg-bg-card
          border border-border
          rounded-xl
          px-3 py-2
          shadow-lg
        ">
          <p className="text-xs font-semibold text-primary mb-1">
            {payload[0].payload.priority}
          </p>

          <p className="text-xs text-textMuted">
            Count:
            <span className="ml-1 text-sm font-medium text-textPrimary">
              {payload[0].payload.count}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        barCategoryGap={30}
      >
        <CartesianGrid
          stroke="rgba(255,255,255,0.05)"
          vertical={false}
        />
        <XAxis
          dataKey="priority"
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: 'transparent' }}
        />

        <Bar
          dataKey="count"
          radius={[10, 10, 0, 0]}
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={getBarColor(entry)}
              className="cursor-pointer"
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
