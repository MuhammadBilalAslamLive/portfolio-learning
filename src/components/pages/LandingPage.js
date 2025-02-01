import { useAuth } from "../contexts/AuthContext"

function LandingPage() {
  const { currentUser } = useAuth()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-center mb-4">
              <img
                className="w-32 h-32 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
            </div>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">{currentUser.name || "John Doe"}</h1>
            <p className="text-center text-gray-600 mb-4">Web Developer</p>
            <div className="border-t border-gray-200 pt-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">About Me</h2>
              <p className="text-gray-600">
                I'm a passionate web developer with experience in React, Node.js, and modern web technologies. I love
                creating beautiful and functional web applications that solve real-world problems.
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "HTML", "CSS", "Node.js", "Express", "MongoDB"].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

