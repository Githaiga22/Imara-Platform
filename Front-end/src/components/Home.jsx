import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import {
  User,
  ChevronDown,
  PlusCircle,
  Briefcase,
  UserCog,
  Megaphone,
  Wrench,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Globe,
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const trendingProjects = [
  {
    id: 1,
    title: "DeFi Lending Platform",
    description: "Decentralized lending platform with AI-driven risk assessment",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    category: "DeFi",
    progress: 75
  },
  {
    id: 2,
    title: "NFT Marketplace",
    description: "Community-driven NFT marketplace for digital artists",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    category: "NFT",
    progress: 60
  },
  {
    id: 3,
    title: "GameFi Project",
    description: "Play-to-earn gaming platform with unique tokenomics",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    category: "Gaming",
    progress: 85
  }
];

const allProjects = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  description: "An innovative blockchain project revolutionizing the industry",
  category: ["DeFi", "NFT", "Gaming", "DAO"][Math.floor(Math.random() * 4)],
  progress: Math.floor(Math.random() * 100),
  image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60"
}));

const categories = ["All", "DeFi", "NFT", "Gaming", "DAO", "Infrastructure"];
const stages = ["All Stages", "Ideation", "Development", "Launch Ready"];
const sortOptions = ["Newest", "Most Popular", "Highest Funded"];

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showRoleMenu, setShowRoleMenu] = useState(false);

  const userEmail = "user@example.com"; // This would come from your auth context

return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-xl font-bold text-white">IMARA</span>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Role Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowRoleMenu(!showRoleMenu)}
                  className="flex items-center gap-2 bg-blue-500/20 px-3 py-2 rounded-lg hover:bg-blue-500/30 transition-colors"
                >
                  <span className="text-sm text-blue-400">Join As</span>
                  <ChevronDown className="w-4 h-4 text-blue-400" />
                </button>
                
                {showRoleMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg py-1 z-50">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-3">
                      <PlusCircle className="w-4 h-4" />
                      Create an Idea
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-3">
                      <Briefcase className="w-4 h-4" />
                      Join as Investor
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-3">
                      <UserCog className="w-4 h-4" />
                      Join as Project Manager
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-3">
                      <Megaphone className="w-4 h-4" />
                      Join as Marketer
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-3">
                      <Wrench className="w-4 h-4" />
                      Join as Builder
                    </button>
                  </div>
                )}
              </div>

              {/* Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 bg-gray-700/50 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <User className="w-5 h-5 text-gray-300" />
                  <span className="text-sm text-gray-300">{userEmail}</span>
                </button>
                
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-1 z-50">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                      Profile Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                      My Projects
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Trending Projects Carousel */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Trending Projects</h2>
        <Carousel className="rounded-xl overflow-hidden">
          {trendingProjects.map((project) => (
            <Carousel.Item key={project.id}>
              <div className="relative h-[400px]">
                <img
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-gray-700 rounded-full">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-gray-400 text-sm">{project.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg mb-2 ${
                      selectedCategory === category
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Project Stage</h3>
                {stages.map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setSelectedStage(stage)}
                    className={`w-full text-left px-3 py-2 rounded-lg mb-2 ${
                      selectedStage === stage
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Sort By</h3>
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedSort(option)}
                    className={`w-full text-left px-3 py-2 rounded-lg mb-2 ${
                      selectedSort === option
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-700 rounded-full">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-gray-400 text-sm">{project.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg ${
                    currentPage === page
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700'
                  } transition-colors`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;