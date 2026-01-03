export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-color mt-12">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Personal Blog</h3>
            <p className="text-text-light text-sm">
              Sharing thoughts, experiences, and knowledge
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-text-light hover:text-primary-color transition-colors">
              Twitter
            </a>
            <a href="#" className="text-text-light hover:text-primary-color transition-colors">
              GitHub
            </a>
            <a href="#" className="text-text-light hover:text-primary-color transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border-color text-center text-text-light text-sm">
          <p>© {new Date().getFullYear()} Personal Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}