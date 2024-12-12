import { SpecData } from "types/types";
import SpecCard from "components/ui/cards/SpecCard";
import SpecSection from "@components/sections/SpecSection";

interface PerformanceContentProps {
	title: string,
	performanceData: SpecData[];
}

const PerformanceContent = ({ title, performanceData }: PerformanceContentProps) => {
	return (
		<div className="mx-auto xs:px-4 sm:px-0 md:max-w-2xl lg:max-w-4xl flex flex-col gap-y-[48px]">
			{/* <SpecSection title="Performance and durability"> */}
			<SpecSection title={title}>
				{performanceData.map((data, index) => (
					<SpecCard key={index} title={data.title} description={data.specification} />
				))}
			</SpecSection>
		</div>
	);
};

export default PerformanceContent;