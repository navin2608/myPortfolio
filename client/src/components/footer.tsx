export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Navin Kumar S
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Front-end Developer passionate about creating exceptional digital experiences
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:msnsnavin@gmail.com" 
              className="bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="https://linkedin.com/in/navin-kumar-2608/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="tel:+918344961552" 
              className="bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Navin Kumar S. All rights reserved. | Designed with ❤️ by Navin using modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
