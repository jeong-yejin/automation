interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles: Record<string, string> = {
    'Idea': 'bg-gray-100 text-gray-600 border-gray-200',
    'On hold': 'bg-blue-100 text-blue-700 border-blue-200',
    'Approved for publishing': 'bg-purple-100 text-purple-700 border-purple-200',
    'Published': 'bg-green-100 text-green-700 border-green-200',
    'Failed': 'bg-red-100 text-red-700 border-red-200',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${styles[status] ?? 'bg-gray-100 text-gray-700 border-gray-200'}`}>
      {status}
    </span>
  );
}
