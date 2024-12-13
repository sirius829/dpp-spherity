import { ScoreSection, SpecSection } from "@components/sections";
import { ScoreData, SpecData } from "types/types";
import { ScoreCard, SpecCard } from "@components/ui/cards";
import { GeneralPageTitles } from "@constants/title";

interface GeneralInformationContentProps {
	scoreData: ScoreData[];
	basicData: SpecData[];
	modelData: SpecData[];
}

const GeneralInfoContent = ({ scoreData, basicData, modelData }: GeneralInformationContentProps) => {
	return (
		<div className="mx-auto xs:px-4 sm:px-0 md:max-w-2xl lg:max-w-4xl flex flex-col gap-y-[48px] relative mt-8">
			<ScoreSection title={""} >
				{scoreData.map((data, index) => (
					<ScoreCard key={index} title={data.title} score={data.score} />
				))}
			</ScoreSection>
			<SpecSection title={GeneralPageTitles.BASIC_SECTION}>
				{basicData.map((data, index) => (
					<SpecCard key={index} title={data.title} description={data.specification} />
				))}
			</SpecSection>
			<SpecSection title={GeneralPageTitles.MODEL_SECTION}>
				{modelData.map((data, index) => (
					<SpecCard key={index} title={data.title} description={data.specification} />
				))}
			</SpecSection>
		</div>
	);
};

export default GeneralInfoContent;