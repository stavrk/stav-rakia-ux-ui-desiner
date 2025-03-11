
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import { ExternalLink, Download, Music, Palette, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-medium mb-6">About Me</h1>
              <p className="text-muted-foreground text-lg mb-6">
                I'm Stav Rakia, a UX/UI Designer and graduate of Instructional Technologies 
                at HIT (Holon Institute of Technology), where I was a Dean's 
                List honoree with a GPA of 97. My educational background combines programming, 
                graphic design, and instructional development, giving me a unique perspective 
                on creating user-centered digital experiences.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Growing up in "Gallery Rakia," my family's art gallery, I was immersed in creativity 
                from an early age. Beginning my journey with jewelry making at 12 years old taught me 
                patience and attention to detail – qualities that now drive my passion for UX/UI design. 
                I thrive at the intersection of art and functionality, using design thinking to solve 
                complex problems with elegant solutions.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                My professional experience at ORCAM Technologies allowed me to contribute to the 'Orcam Hear' 
                application, where I participated in its conceptualization, UI design, and user testing. 
                I'm passionate about creating digital experiences that are not only visually appealing but 
                also genuinely enhance users' lives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/CV_StavRakia.pdf" 
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
                <a 
                  href="https://www.linkedin.com/in/stav-rakia/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all hover:translate-y-[-2px]"
                >
                  <span className="mr-2">LinkedIn</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="relative w-full max-w-sm mx-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="aspect-square w-3/4 mx-auto rounded-xl overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                  alt="Stav Rakia" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional journey in design and technology.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
              {[
                {
                  role: "Deputy Team Leader | Orcam Hear App Involvement",
                  company: "OrCam Technologies",
                  period: "2021 - 2024",
                  description: "Contributing to the development of the OrCam Hear application in a dual role. I participated in the conceptualization, interface design, and user testing phases, helping craft accessible experiences for users with hearing impairments. As Deputy Team Leader for the Data Collection & Entry Team, I manage teams both in Israel and abroad, coordinate with R&D departments, and support strategic work planning. This unique role allowed me to bridge UX design thinking with operational leadership, working on assistive technology that profoundly impacts users' lives."
                },
                {
                  role: "Military Service (Reserve Duty)",
                  company: "Israeli Air Force (IAF)",
                  period: "October 8, 2023 – February 2024",
                  description: "At the Air Force Headquarters."
                },
                {
                  role: "Volunteer Designer",
                  company: "Atid Plus Association",
                  period: "2022 - Present",
                  description: "Developing educational presentations that align with brand guidelines and creating engaging visual content for social programs."
                }
              ].map((experience, index) => (
                <motion.div 
                  key={index}
                  className="mb-8 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="absolute -left-10 top-1.5 h-4 w-4 rounded-full bg-primary" />
                  <div className="p-6 rounded-xl bg-background border border-border/40">
                    <h3 className="text-xl font-medium mb-1">{experience.role}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-muted-foreground">{experience.company}</p>
                      <p className="text-sm text-muted-foreground">{experience.period}</p>
                    </div>
                    <p>{experience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Skills />
      
      {/* Education Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Education</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic background and continuing education.
            </p>
          </motion.div>
          
          {/* Square Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="p-6 rounded-xl bg-background border border-border/40 aspect-square flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 p-4 rounded-lg bg-primary/10 inline-block">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-lg font-bold">HIT</span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">B.Sc in Instructional Technologies</h3>
              <div className="flex justify-between items-center mb-3">
                <p className="text-muted-foreground">Holon Institute of Technology</p>
                <p className="text-sm text-muted-foreground">2020 - 2024</p>
              </div>
              <p className="flex-grow overflow-y-auto text-sm">
                Dean's List Honoree – GPA: 97. A cutting-edge program preparing professionals to lead in digital learning, instructional technology, and UX/UI design.
              </p>
              <div className="mt-4 pt-4 border-t border-border/40">
                <p className="text-sm font-medium">Relevant Coursework:</p>
                <p className="text-xs text-muted-foreground">UX/UI Design & Analysis, Knowledge Organization & Representation, Interactive Learning Environments, Visual Communication & Graphic Design, Mobile Interface Design & Interactive Media</p>
              </div>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-xl bg-background border border-border/40 aspect-square flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="mb-4 p-4 rounded-lg bg-purple-500/10 inline-block">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-purple-500 text-white">
                  <span className="text-lg font-bold">WIT</span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">Product Management Certification</h3>
              <div className="flex justify-between items-center mb-3">
                <p className="text-muted-foreground">Women in Tech Program – HIT</p>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
              <p className="flex-grow overflow-y-auto text-sm">
                A six-month intensive program designed for women entering product management, managed by HIT's FUTURE Innovation Center, in collaboration with the Israel Innovation Authority.
              </p>
              <div className="mt-4 pt-4 border-t border-border/40">
                <p className="text-sm font-medium">Key Modules:</p>
                <p className="text-xs text-muted-foreground">Market Needs & Product Strategy, UX/UI in Product Development, Agile & Scrum, Data-Driven Decision-Making, Go-to-Market Strategy & Product Launch</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Personal Interests Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Beyond Design</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The things that inspire me outside of work.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="p-6 rounded-xl bg-background border border-border/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop" 
                  alt="Music" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-pink-100 mr-4">
                  <Music className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-medium">🎵 Artists I Love</h3>
              </div>
              
              <ul className="grid grid-cols-2 gap-3">
                {[
                  "Jorja Smith",
                  "Adele",
                  "Alicia Keys", 
                  "Ninet Tayeb",
                  "Red Band",
                  "Olivia Dean"
                ].map((artist, index) => (
                  <motion.li 
                    key={index}
                    className="p-3 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    {artist}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-xl bg-background border border-border/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Hobbies" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-blue-100 mr-4">
                  <Palette className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-medium">🎨 Hobbies</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <motion.div
                  className="p-4 rounded-lg bg-secondary flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05, duration: 0.3 }}
                >
                  <div className="mr-3 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-500 text-lg">💎</span>
                  </div>
                  <span className="font-medium">Jewelry making</span>
                </motion.div>
                
                <motion.div
                  className="p-4 rounded-lg bg-secondary flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <div className="mr-3 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-500 text-lg">🧘‍♀️</span>
                  </div>
                  <span className="font-medium">Pilates reformer</span>
                </motion.div>
                
                <motion.div
                  className="p-4 rounded-lg bg-secondary flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                >
                  <div className="mr-3 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-500 text-lg">🐕</span>
                  </div>
                  <span className="font-medium">Dog lover</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Contact />
    </Layout>
  );
};

export default About;
