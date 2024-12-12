import MaterialSection from "@components/sections/MaterialSection";
import { MaterialPageTitles } from "@constants/title";
import { Material } from "types/batteryData";
import DonutChart from "@components/ui/charts/DonutChart";
import { transformChartDataWithColors } from "@utils/transformChartData";

interface MaterialsContentProps {
	electrolyteData: Material[];
	anodeData: Material[];
};

const MaterialsContent = ({ electrolyteData, anodeData }: MaterialsContentProps) => {
	const { data: electroylyteChartData } = transformChartDataWithColors(
    electrolyteData,
    "materialName",
    "materialPercentageMassFraction"
  );

  const { data: anodeChartData } = transformChartDataWithColors(
    anodeData,
    "materialName",
    "materialPercentageMassFraction"
  );

	return (
		<div className="mx-auto xs:px-4 sm:px-0 md:max-w-2xl lg:max-w-4xl flex flex-col gap-y-[48px] relative mt-8">
			<MaterialSection title={MaterialPageTitles.ELECTROLYTE_SECTION}>
				<DonutChart
					data={electroylyteChartData}
					width={500}
					height={500}
					innerRadius={100}
					outerRadius={150}
				/>
			</MaterialSection>
			<MaterialSection title={MaterialPageTitles.ELECTROLYTE_SECTION}>
				<DonutChart
					data={anodeChartData}
					width={500}
					height={500}
					innerRadius={100}
					outerRadius={150}
				/>
			</MaterialSection>
		</div>
	);
};

export default MaterialsContent;