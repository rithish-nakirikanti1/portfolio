import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Open to opportunities in DevOps, Cloud Engineering, and Site Reliability Engineering roles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a
                href="mailto:rithishnakirikanti720@gmail.com"
                className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-gray-300 text-sm">rithishnakirikanti720@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919100842982"
                className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-gray-300 text-sm">+91 9100842982</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-gray-300 text-sm">Hyderabad, Telangana - 500081, India</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/rithish-nakirikanti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex-shrink-0">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">LinkedIn</p>
                  <p className="text-gray-300 text-sm">linkedin.com/in/rithish-nakirikanti</p>
                </div>
              </a>

              <a
                href="https://github.com/rithish-nakirikanti1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex-shrink-0">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">GitHub</p>
                  <p className="text-gray-300 text-sm">github.com/rithish-nakirikanti1</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Rithish Kumar Nakirikanti. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
