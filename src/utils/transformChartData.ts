import { MaterialData } from "types/types";

interface ChartData {
  name: string;
  value: number;
}

export const transformChartDataWithColors = (
  rawData: MaterialData[],
  materialField: keyof MaterialData,
  percentageField: keyof MaterialData,
  predefinedColors: string[] = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF4C4C', '#A28BFF']
): { data: ChartData[]; colors: string[] } => {
  const chartData: ChartData[] = rawData
    .map((item) => {
      const name = item[materialField] as string;
      const value = item[percentageField] as number;
      return name && typeof value === 'number'
        ? { name, value }
        : null;
      }
    )
    .filter((entry): entry is ChartData => entry !== null);

  const totalPercentage = chartData.reduce((acc, item) => acc + item.value, 0);
  const othersPercentage = 100 - totalPercentage;

  if (othersPercentage > 0) {
    chartData.push({ name: "Others", value: othersPercentage });
  }

  const colors = chartData.map((_, index) => predefinedColors[index % predefinedColors.length]);

  return { data: chartData, colors };
};
