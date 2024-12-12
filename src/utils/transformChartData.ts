export const transformChartDataWithColors = (
  rawData: any[],
  materialField: string,
  percentageField: string,
  predefinedColors: string[] = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF4C4C', '#A28BFF']
): { data: { name: string; value: number }[]; colors: string[] } => {
  const chartData = rawData.map((item) => ({
    name: item[materialField],
    value: item[percentageField],
  }));

  const totalPercentage = chartData.reduce((acc, item) => acc + item.value, 0);
  const othersPercentage = 100 - totalPercentage;

  if (othersPercentage > 0) {
    chartData.push({ name: "Others", value: othersPercentage });
  }

  const colors = chartData.map((_, index) => predefinedColors[index % predefinedColors.length]);

  return { data: chartData, colors };
};
