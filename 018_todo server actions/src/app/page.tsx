import { TodoForm } from './components/todo-form';
import { TodoList } from './components/todo-list';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            todo server actions
          </h1>
          <p className="text-gray-600">
            A clean and simple todo app built with Next.js and Server Actions
          </p>
        </header>

        <main className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <TodoForm />
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <TodoList />
          </div>
        </main>
      </div>
    </div>
  );
}