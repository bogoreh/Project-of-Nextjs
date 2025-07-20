import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Quiz App</h1>
        <p className="mb-8 text-gray-600">
          Test your knowledge with our interactive quiz. Click the button below to get started!
        </p>
        <Link
          href="/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 inline-block"
        >
          Start Quiz
        </Link>
      </div>
    </main>
  );
}