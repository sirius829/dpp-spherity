import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface DonutChartProps {
  data: { name: string; value: number }[];
  width?: number;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  colors?: string[];
  label?: boolean;
  title?: string;
}

const DonutChart = ({
  data,
  width = 400,
  height = 400,
  innerRadius = 80,
  outerRadius = 120,
  colors = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28'],
  label = true,
  title,
}: DonutChartProps) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
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
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
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
