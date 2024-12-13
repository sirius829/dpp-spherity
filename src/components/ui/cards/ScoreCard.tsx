import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { useScoreColor } from "@utils/useScoreColor";
import classNames from "classnames";

interface ScoreCardProps {
  title: string;
  score?: string;
}

const ScoreCard = ({ title, score }: ScoreCardProps) => {
  const { colorClass, caption } = useScoreColor(score);

  return (
    <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
      <h3 className="flex items-center text-lg font-semibold text-gray-500">
        {title}
        <ExclamationCircleIcon className="h-4 w-4 text-gray-500" />
      </h3>
      <div className="pt-2">
        <div className="flex flex-row items-center mt-3">
          <h2 className="whitespace-nowrap font-inter text-xs font-semibold text-gray-500">Score</h2>
        </div>
        <div className="flex items-center">
          <p
            className={classNames(
              "font-inter font-semibold text-[54px] xs:text-[44px] bg-clip-text text-transparent",
              colorClass
            )}
          >
            {score}
          </p>
          <div
            className={classNames(
              "ml-2 mr-1 h-4 w-4 rounded-full",
              colorClass
            )}
          />
          <p className="text-xs font-inter">{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
