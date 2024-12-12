export const useScoreColor = (scoreOrGrade: number | string): { colorClass: string; caption: string } => {
  const gradeColors: { [key: string]: { colorClass: string; caption: string } } = {
    A: { colorClass: 'text-green-600 bg-green-600', caption: 'Excellent' },
    B: { colorClass: 'text-green-400 bg-green-400', caption: 'Good' },
    C: { colorClass: 'text-yellow-400 bg-yellow-400', caption: 'Fair' },
    D: { colorClass: 'text-orange-400 bg-orange-400', caption: 'Poor' },
    E: { colorClass: 'text-red-400 bg-red-400', caption: 'Very Poor' },
    F: { colorClass: 'text-red-600 bg-red-600', caption: 'Fail' },
  };

  // Check if scoreOrGrade is a string that can be parsed into a number
  const parsedScore = typeof scoreOrGrade === 'string' && !isNaN(Number(scoreOrGrade))
    ? Number(scoreOrGrade)
    : scoreOrGrade;

  // If it's a number, compute the grade
  if (typeof parsedScore === 'number') {
    const grade =
      parsedScore >= 90 ? 'A' :
      parsedScore >= 80 ? 'B' :
      parsedScore >= 70 ? 'C' :
      parsedScore >= 60 ? 'D' :
      parsedScore >= 50 ? 'E' : 'F';
    return gradeColors[grade];
  }

  // Otherwise, assume it's a letter grade (string)
  return gradeColors[parsedScore as string] || { colorClass: 'text-gray-500 bg-gray-500', caption: 'Unknown' }; // Default for invalid grades
};
