export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Resume Download Button */}
        <a 
  href="/resume.pdf" 
  download
  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
>
  Download CV
</a>

        {/* Menu */}
        <div className="flex gap-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>

      </div>
    </nav>
  );
}