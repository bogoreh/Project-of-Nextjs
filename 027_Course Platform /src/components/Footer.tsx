export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">LearnHub</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Empowering learners with quality education since 2024.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/courses" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Courses</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Email: support@learnhub.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}