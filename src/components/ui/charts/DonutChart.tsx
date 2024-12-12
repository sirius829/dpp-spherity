import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface DonutChartProps {
  data: { name: string; value: number }[];
  width?: number;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  label?: boolean;
  title?: string;
}

const DonutChart = ({
  data,
  width = 400,
  height = 400,
  innerRadius = 80,
  outerRadius = 120,
  label = true,
}: DonutChartProps) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="flex justify-center items-center">
        <PieChart width={width} height={height}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            fill="#8884d8"
            label={label}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={`rgba(1, 1, 1, ${1 - index * (0.8 / data.length)})`} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default DonutChart;
