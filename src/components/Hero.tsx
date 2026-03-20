import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Rithish Kumar Nakirikanti
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-6">
            DevOps & Cloud Engineer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
        </div>

        <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center leading-relaxed mb-12">
          Results-oriented technology professional with hands-on experience supporting cloud-based
          platforms and modern application environments. Demonstrates strong capability in designing reliable
          systems, improving deployment processes, and maintaining stable infrastructure for business
          applications. Known for approaching technical challenges with a structured mindset, delivering
          solutions that enhance operational efficiency, system reliability, and service continuity.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a
            href="mailto:rithishnakirikanti720@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>rithishnakirikanti720@gmail.com</span>
          </a>
          <a
            href="tel:+919100842982"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+91 9100842982</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Hyderabad, Telangana, India</span>
          </div>
          <a
            href="https://www.linkedin.com/in/rithish-nakirikanti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href="https://github.com/rithish-nakirikanti1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}
