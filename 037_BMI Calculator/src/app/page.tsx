import BMICalculator from '@/components/BMICalculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-md mx-auto">
        <BMICalculator />
      </div>
    </main>
  );
}