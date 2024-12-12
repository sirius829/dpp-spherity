import React from 'react';

interface FileTableCellProps {
  children: React.ReactNode;
  className?: string;
}

const FileTableCell = ({ children, className = '' }: FileTableCellProps) => {
  return (
    <td className={`px-3 py-4 text-sm font-medium ${className}`}>
      {children}
    </td>
  );
};

export default FileTableCell;
