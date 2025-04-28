
interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Lead Mathematics Tutor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description: "Experienced mathematics educator with 8+ years of teaching excellence."
  },
  {
    name: "David Chen",
    role: "Science Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    description: "Expert in Physics and Chemistry with innovative teaching approaches."
  },
  {
    name: "Priya Patel",
    role: "Academic Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    description: "Coordinates curriculum development and student progress tracking."
  },
  {
    name: "Michael Ross",
    role: "Technology Integration Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    description: "Ensures seamless integration of technology in online learning."
  }
];
