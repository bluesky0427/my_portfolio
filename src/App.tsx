import React from 'react';
import { Github, Linkedin, Mail, MapPin, Code, Users, Smartphone, Brain, Database, Cloud, GitBranch, Shield, ExternalLink, Calendar, TrendingUp, Zap } from 'lucide-react';
import ContactForm from './components/ContactForm';
import InteractiveBackground from './components/InteractiveBackground';
import FloatingOrbs from './components/FloatingOrbs';

function App() {
  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    // You can add additional logic here if needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Interactive Background Effects */}
      <InteractiveBackground />
      <FloatingOrbs />
      
      {/* Main Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-white font-bold text-xl">Hiro Tanaka</div>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
                <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </div>
              {/* Social Links in Navigation */}
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com/bluesky0427" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:danieltanaka0420@gmail.com"
                  className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hiro Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              {/* Professional Photo with Enhanced Styling */}
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 rounded-full p-1 animate-pulse">
                  <div className="w-full h-full bg-slate-900 rounded-full p-1">
                    <img 
                      src="/2023-03-01.png" 
                      alt="Hiro Tanaka - Senior Software Engineer"
                      className="w-full h-full object-cover rounded-full border-2 border-white/20 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-spin" style={{ animationDuration: '8s' }}></div>
                {/* Status Indicator */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-900 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hiro Tanaka
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-200 mb-4">
              Senior Software Engineer & Technical Leader
            </p>
            
            <div className="flex items-center justify-center text-white/70 mb-8">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Japan • Remote Work</span>
            </div>
            
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Senior software engineer with 8+ years of experience architecting scalable solutions across web, mobile, and AI domains. 
              I lead cross-functional teams to deliver high-impact products while fostering collaborative engineering cultures.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a href="#contact" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105">
                Get In Touch
              </a>
              <a 
                href="https://calendly.com/danieltanaka0420/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Meeting
              </a>
              <a href="#projects" className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                View Projects
              </a>
            </div>

            {/* Social Links in Hiro */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/bluesky0427" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white/70 hover:text-white transition-colors group bg-white/5 px-4 py-2 rounded-full hover:bg-white/10"
              >
                <Github className="w-5 h-5 mr-2 group-hover:text-purple-400 transition-colors" />
                <span>GitHub</span>
              </a>
              <a 
                href="mailto:danieltanaka0420@gmail.com"
                className="flex items-center text-white/70 hover:text-white transition-colors group bg-white/5 px-4 py-2 rounded-full hover:bg-white/10"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:text-purple-400 transition-colors" />
                <span>Email</span>
              </a>
              <a 
                href="https://calendly.com/danieltanaka0420/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white/70 hover:text-white transition-colors group bg-white/5 px-4 py-2 rounded-full hover:bg-white/10"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:text-purple-400 transition-colors" />
                <span>Schedule Call</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Technical Leadership & Innovation</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  As a senior software engineer based in Japan, I architect and deliver enterprise-scale solutions that serve millions of users. 
                  My expertise spans full-stack development, mobile platforms, and cutting-edge AI integration, with a proven track record of leading teams to success.
                </p>
                <p className="text-white/80 mb-6 leading-relaxed">
                  I specialize in building robust, scalable systems using modern technologies while mentoring junior developers and establishing 
                  engineering best practices. My collaborative approach ensures that complex technical challenges are solved efficiently through teamwork.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Working remotely across global teams has honed my ability to communicate complex technical concepts clearly and lead 
                  distributed engineering initiatives that deliver measurable business impact.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Full-Stack Architecture</h4>
                  <p className="text-white/70 text-sm">Scalable web applications with modern frameworks</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Mobile Engineering</h4>
                  <p className="text-white/70 text-sm">Cross-platform apps with native performance</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Brain className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">AI & Machine Learning</h4>
                  <p className="text-white/70 text-sm">Intelligent systems and automation</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Technical Leadership</h4>
                  <p className="text-white/70 text-sm">Team mentoring and engineering excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Technical Expertise</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Frontend Development */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <Code className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Frontend Development</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Frameworks & Libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Next.js</span>
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Vue.js</span>
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Angular</span>
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Styling & UI</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Styled Components</span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Material-UI</span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Framer Motion</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Development */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <Database className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Backend Development</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Languages & Runtimes</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Python</span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Java</span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Go</span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Rust</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Frameworks & Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">Express.js</span>
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">FastAPI</span>
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">Redis</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Development */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <Smartphone className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Mobile Development</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Cross-Platform</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">React Native</span>
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Flutter</span>
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Expo</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Native Development</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">Swift</span>
                      <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">Kotlin</span>
                      <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">SwiftUI</span>
                      <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">Jetpack Compose</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI & Cloud Technologies */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <Brain className="w-8 h-8 text-orange-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">AI & Machine Learning</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Frameworks & APIs</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                      <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">PyTorch</span>
                      <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">OpenAI API</span>
                      <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Hugging Face</span>
                      <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">LangChain</span>
                      <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Scikit-learn</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">NLP</span>
                      <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">Computer Vision</span>
                      <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">RAG Systems</span>
                      <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">MLOps</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <Cloud className="w-8 h-8 text-indigo-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Cloud & DevOps</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Cloud Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">AWS</span>
                      <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Google Cloud</span>
                      <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Azure</span>
                      <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Vercel</span>
                      <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Netlify</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">DevOps & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm">Docker</span>
                      <span className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                      <span className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm">CI/CD</span>
                      <span className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm">Terraform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Practices */}
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <GitBranch className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Engineering Excellence</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-white font-medium mb-3">Development Practices</h4>
                  <ul className="text-white/70 space-y-2">
                    <li>• Test-Driven Development (TDD)</li>
                    <li>• Clean Architecture & SOLID Principles</li>
                    <li>• Microservices Architecture</li>
                    <li>• API Design & Documentation</li>
                    <li>• Performance Optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-3">Team Leadership</h4>
                  <ul className="text-white/70 space-y-2">
                    <li>• Technical Mentoring</li>
                    <li>• Code Review & Quality Assurance</li>
                    <li>• Agile/Scrum Methodologies</li>
                    <li>• Cross-functional Collaboration</li>
                    <li>• Technical Documentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-3">Security & Monitoring</h4>
                  <ul className="text-white/70 space-y-2">
                    <li>• Security Best Practices</li>
                    <li>• Application Monitoring</li>
                    <li>• Error Tracking & Logging</li>
                    <li>• Performance Analytics</li>
                    <li>• Disaster Recovery Planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Project 1: Enterprise Analytics Platform */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Real-time Analytics Dashboard with Data Visualization"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">DataFlow Analytics</h3>
                      <p className="text-white/60 text-sm">Enterprise Data Platform</p>
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href="https://github.com/bluesky0427" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-white/60 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Led development of a real-time analytics platform processing 50M+ daily events. Architected microservices infrastructure 
                    with React frontend, Node.js APIs, and ML-powered insights engine. Reduced query response time by 85% and enabled 
                    data-driven decision making for 500+ enterprise clients.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Achievements</h4>
                    <ul className="text-white/70 space-y-1 text-sm">
                      <li>• Designed scalable architecture handling 50M+ daily events</li>
                      <li>• Implemented real-time data streaming with Apache Kafka</li>
                      <li>• Built ML models for predictive analytics and anomaly detection</li>
                      <li>• Led team of 6 engineers across frontend, backend, and DevOps</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Apache Kafka</span>
                    <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                    <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">AWS</span>
                  </div>
                </div>
              </div>

              {/* Project 2: Mobile Health App */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-green-500/30 transition-all duration-300 group">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Mobile Health App with Fitness Tracking and Wearable Integration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-green-300 transition-colors">HealthSync Mobile</h3>
                      <p className="text-white/60 text-sm">Cross-Platform Health App</p>
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href="https://github.com/bluesky0427" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-white/60 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Architected and delivered a comprehensive health tracking mobile application using React Native. Integrated with 
                    wearable devices, implemented secure health data sync, and built AI-powered health insights. Achieved 4.8★ rating 
                    with 100K+ downloads and 92% user retention rate.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Achievements</h4>
                    <ul className="text-white/70 space-y-1 text-sm">
                      <li>• Built cross-platform app with native performance</li>
                      <li>• Integrated with 15+ wearable device APIs</li>
                      <li>• Implemented end-to-end encryption for health data</li>
                      <li>• Developed AI recommendations engine with 89% accuracy</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">React Native</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Firebase</span>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                    <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Google Cloud</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project 3: AI Content Management */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-all duration-300 group">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="AI Content Management System with Natural Language Processing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors">ContentAI Studio</h3>
                      <p className="text-white/60 text-sm">AI-Powered CMS Platform</p>
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href="https://github.com/bluesky0427" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-white/60 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Developed an intelligent content management system with automated content generation, SEO optimization, and 
                    multi-language support. Integrated GPT-4 and custom NLP models to help content creators increase productivity 
                    by 300% while maintaining quality standards.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Achievements</h4>
                    <ul className="text-white/70 space-y-1 text-sm">
                      <li>• Built RAG system for context-aware content generation</li>
                      <li>• Implemented automated SEO analysis and optimization</li>
                      <li>• Created custom NLP pipeline for content quality scoring</li>
                      <li>• Designed scalable vector database for semantic search</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Next.js</span>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">OpenAI API</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">LangChain</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Pinecone</span>
                    <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">FastAPI</span>
                    <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Docker</span>
                  </div>
                </div>
              </div>

              {/* Project 4: Real-time Collaboration Platform */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 group">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Team Collaboration Platform with Real-time Communication"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">TeamFlow Workspace</h3>
                      <p className="text-white/60 text-sm">Real-time Collaboration Suite</p>
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href="https://github.com/bluesky0427" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-white/60 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Engineered a real-time collaborative workspace supporting simultaneous editing, video conferencing, and project 
                    management. Built with WebRTC for peer-to-peer communication and operational transformation for conflict-free 
                    collaborative editing. Serves 10K+ active teams globally.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Achievements</h4>
                    <ul className="text-white/70 space-y-1 text-sm">
                      <li>• Implemented operational transformation for real-time editing</li>
                      <li>• Built WebRTC infrastructure for HD video conferencing</li>
                      <li>• Designed conflict resolution algorithms for concurrent edits</li>
                      <li>• Achieved 99.9% uptime with global CDN deployment</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Vue.js</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Socket.io</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">WebRTC</span>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Redis</span>
                    <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">Go</span>
                    <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Projects Summary */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">More Projects & Contributions</h3>
                <p className="text-white/80 mb-6 max-w-3xl mx-auto">
                  Beyond these featured projects, I've contributed to numerous open-source initiatives, led technical migrations 
                  for legacy systems, and mentored teams in adopting modern development practices. My work spans fintech, 
                  healthcare, e-commerce, and enterprise software domains.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
                    <div className="text-white/70">Production Applications</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">50M+</div>
                    <div className="text-white/70">Users Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400 mb-2">15+</div>
                    <div className="text-white/70">Team Members Mentored</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">Let's Build Something Amazing</h2>
              <p className="text-white/80 text-lg mb-12">
                I'm passionate about leading engineering teams and architecting solutions that make a real impact. 
                Let's discuss how we can work together to bring your vision to life.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Quick Meeting Booking */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Schedule a Meeting</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Ready to discuss your project? Book a 30-minute consultation call to explore how we can work together. 
                    I'll learn about your goals and share insights on the best technical approach.
                  </p>
                  <a 
                    href="https://calendly.com/danieltanaka0420/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book 30-Min Call
                  </a>
                  <p className="text-white/60 text-sm mt-4">
                    Free consultation • No commitment required
                  </p>
                </div>
              </div>

              {/* Send Message */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Send a Message</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Prefer to start with a message? Share details about your project, ask questions, or just say hello. 
                    I'll get back to you within 24 hours.
                  </p>
                  <a 
                    href="#contact-form" 
                    className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </a>
                  <p className="text-white/60 text-sm mt-4">
                    Detailed project discussions welcome
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Get In Touch</h3>
                <p className="text-white/70">
                  Fill out the form below and I'll respond as soon as possible
                </p>
              </div>
              <ContactForm onSubmit={handleFormSubmit} />
            </div>

            {/* Alternative Contact Methods */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-8">Connect With Me</h3>
              <div className="flex justify-center space-x-8">
                <a 
                  href="mailto:danieltanaka0420@gmail.com" 
                  className="flex items-center text-white/80 hover:text-white transition-colors group"
                >
                  <Mail className="w-6 h-6 mr-3 group-hover:text-purple-400 transition-colors" />
                  <span>Email</span>
                </a>
                <a 
                  href="https://github.com/bluesky0427" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white/80 hover:text-white transition-colors group"
                >
                  <Github className="w-6 h-6 mr-3 group-hover:text-purple-400 transition-colors" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-white/80 hover:text-white transition-colors group"
                >
                  <Linkedin className="w-6 h-6 mr-3 group-hover:text-purple-400 transition-colors" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-white/60">© 2025 Hiro Tanaka. Crafting exceptional software solutions with passion and precision.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;