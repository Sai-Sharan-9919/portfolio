export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800 sticky top-0 bg-black z-50">
        <h1 className="text-3xl font-bold text-purple-500">
          Sharan Sai
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <li>
  <a href="#home" className="hover:text-purple-400">
    Home
  </a>
</li>

<li>
  <a href="#about" className="hover:text-purple-400">
    About
  </a>
</li>

<li>
  <a href="#projects" className="hover:text-purple-400">
    Projects
  </a>
</li>

<li>
  <a href="#contact" className="hover:text-purple-400">
    Contact
  </a>
</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Hi, I'm
          <span className="text-purple-500"> Cheluri Sharan Sai</span>
        </h1>

        <p className="text-2xl text-gray-400 mt-6">
          Full Stack Developer | AI & ML Enthusiast
        </p>

        <p className="max-w-3xl text-gray-500 mt-6 text-lg">
          Motivated Computer Science Engineering student specializing
          in AI & ML with strong skills in Full Stack Development,
          Python, Machine Learning, and Data Analytics.
        </p>

        <div className="flex gap-6 mt-10 flex-wrap justify-center">

          <a
            href="https://github.com/Sai-Sharan-9919"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl text-lg"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/cheluri-sharan-sai-b2a7b12a6"
            target="_blank"
            className="border border-purple-500 hover:bg-purple-600 px-8 py-4 rounded-2xl text-lg"
          >
            LinkedIn
          </a>

        </div>

      </section>
      <section
  id="home"
  className="h-screen flex flex-col justify-center items-center text-center px-6"
>

        <h2 className="text-5xl font-bold text-center mb-14">
          About Me
        </h2>

        <div className="max-w-5xl mx-auto text-center text-gray-400 text-lg leading-9">

          <p>
            I am currently pursuing B.Tech in Computer Science Engineering
            (AI & ML) at Sri Venkateswara College of Engineering and Technology
          </p>

          <p className="mt-6">
            Recently selected by Thops Tech Career Solutions Pvt. Ltd.
            for a Full Stack Developer role. Passionate about creating
            AI-powered applications and modern web solutions.
          </p>

        </div>

      </section>

      {/* Skills Section */}
      <section
  id="about"
  className="px-10 py-24 bg-gray-950"
>

        <h2 className="text-5xl font-bold text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-purple-400 mb-5">
              Languages
            </h3>

            <p className="text-gray-400">
              Python, Java, C
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-purple-400 mb-5">
              Web Development
            </h3>

            <p className="text-gray-400">
              HTML, CSS, JavaScript, React.js,
              Node.js, Express.js
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-purple-400 mb-5">
              Databases & Tools
            </h3>

            <p className="text-gray-400">
              MongoDB, MySQL, Git, GitHub,
              VS Code, Power BI
            </p>
          </div>

        </div>

      </section>

      {/* Projects Section */}
<section
  id="projects"
  className="px-10 py-24 bg-gray-950"
>

        <h2 className="text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {/* Project 1 */}
          <div className="bg-black border border-gray-800 p-8 rounded-3xl hover:border-purple-500 transition">

            <h3 className="text-2xl font-bold text-purple-400">
              Spam Detection System
            </h3>

            <p className="text-gray-400 mt-5 leading-8">
              Built a spam email detection system using
              TF-IDF vectorization and KNN classifier
              for accurate text classification.
            </p>

          </div>

          {/* Project 2 */}
          <div className="bg-black border border-gray-800 p-8 rounded-3xl hover:border-purple-500 transition">

            <h3 className="text-2xl font-bold text-purple-400">
              SolMate Chatbot
            </h3>

            <p className="text-gray-400 mt-5 leading-8">
              Developed a full-stack mental wellness chatbot
              with AI-powered mood tracking, meditation,
              and journaling features.
            </p>

          </div>

          {/* Project 3 */}
          <div className="bg-black border border-gray-800 p-8 rounded-3xl hover:border-purple-500 transition">

            <h3 className="text-2xl font-bold text-purple-400">
              Asset Development Analysis
            </h3>

            <p className="text-gray-400 mt-5 leading-8">
              Created a data analytics project using Python
              for asset performance analysis and
              visualization.
            </p>

          </div>

        </div>

      </section>

      {/* Internship Section */}
      <section className="px-10 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          Internships
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">

          <div className="bg-gray-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-purple-400">
              Data Analysis Intern — Cognifyz Technologies
            </h3>

            <p className="text-gray-400 mt-4">
              Worked on data analysis and visualization tasks.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-purple-400">
              Data Analytics Intern — Snestron
            </h3>

            <p className="text-gray-400 mt-4">
              Worked with analytics workflows and reporting systems.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-purple-400">
              Full Stack Development Intern — CodTech
            </h3>

            <p className="text-gray-400 mt-4">
              Developed modern web applications using MERN stack technologies.
            </p>
          </div>

        </div>

      </section>

      {/* Contact Section */}
<section
  id="contact"
  className="px-10 py-24 bg-gray-950"
>

        <h2 className="text-5xl font-bold text-center mb-16">
          Contact Me
        </h2>

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-gray-400 text-xl">
            📧 Email: csharan33@gmail.com
          </p>

          <p className="text-gray-400 text-xl mt-4">
            📍 Chittoor, Andhra Pradesh
          </p>

          <p className="text-gray-400 text-xl mt-4">
            📱 Phone: +91 9347143649
          </p>

        </div>

      </section>

    </main>
  );
}
