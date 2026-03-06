export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 font-medium">Searching for delicious recipes...</p>
    </div>
  );
}