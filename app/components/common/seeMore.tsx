import React from "react";

interface SeeMoreProps {
  text: string;
  contentWordsCount: number;
  isExpanded: boolean;
}

const SeeMore: React.FC<SeeMoreProps> = ({
  text,
  contentWordsCount,
  isExpanded,
}) => {
  const truncateText = (text: string, wordCount: number) => {
    const words = text.split(" ");

    if (words.length <= wordCount) {
      return text;
    }

    return `${words.slice(0, wordCount).join(" ")}...`;
  };

  const displayedText = isExpanded
    ? text
    : truncateText(text, contentWordsCount);

  return (
    <div>
      <p>{displayedText}</p>
    </div>
  );
};

export default SeeMore;
