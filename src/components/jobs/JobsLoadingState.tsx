
const JobsLoadingState = () => {
  return (
    <div className="text-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
      <p className="mt-4 text-gray-600">Loading jobs...</p>
    </div>
  );
};

export default JobsLoadingState;
