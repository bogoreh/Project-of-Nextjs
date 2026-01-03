export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h1>
      
      <div className="bg-white dark:bg-bg-secondary rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary-color to-secondary-color flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-bg-secondary"></div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">John Doe</h2>
            <p className="text-text-light mb-4">
              Passionate developer, writer, and lifelong learner. I love creating things that make a difference.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-color hover:text-secondary-color">Twitter</a>
              <a href="#" className="text-primary-color hover:text-secondary-color">GitHub</a>
              <a href="#" className="text-primary-color hover:text-secondary-color">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h3>My Journey</h3>
          <p>
            I started my coding journey several years ago and fell in love with web development. 
            Since then, I've worked on various projects, from small websites to large-scale applications.
          </p>
          
          <h3>What I Do</h3>
          <p>
            Currently, I focus on modern web technologies like React, Next.js, and TypeScript. 
            I believe in writing clean, maintainable code and sharing knowledge with others.
          </p>
          
          <h3>Why This Blog</h3>
          <p>
            This blog serves as a space for me to document my learning, share tutorials that helped me, 
            and connect with other developers. I hope you find value in the content here!
          </p>
        </div>
      </div>
    </div>
  )
}