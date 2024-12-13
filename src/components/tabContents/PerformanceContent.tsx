import { SpecData } from "types/types";
import { SpecCard } from "@components/ui/cards";
import { SpecSection } from "@components/sections";
import { PerformancePageTitles } from "@constants/title";

interface PerformanceContentProps {
	performanceData: SpecData[];
}

const PerformanceContent = ({ performanceData }: PerformanceContentProps) => {
	return (
		<div className="mx-auto xs:px-4 sm:px-0 md:max-w-2xl lg:max-w-4xl flex flex-col gap-y-[48px] relative mt-8">
			<SpecSection title={PerformancePageTitles.PERFORMANCE_AND_DURABILITY_SECTION}>
				{performanceData.map((data, index) => (
					<SpecCard key={index} title={data.title} description={data.specification} />
				))}
			</SpecSection>
		</div>
	);
};

export default PerformanceContent;