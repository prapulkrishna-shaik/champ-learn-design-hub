import sreeImage from './sree.jpg';
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
    image:sreeImage ,
    description: "Experienced mathematics educator with 8+ years of teaching excellence."
  },
  {
    name: "David Chen",
    role: "Science Specialist",
    image: "https://drive.google.com/uc?export=view&id=1eUGcOMQp6hUl_LkzSaUGl5WP_JWeAdw8",
    description: "Expert in Physics and Chemistry with innovative teaching approaches."
  },
  {
    name: "Priya Patel",
    role: "Academic Coordinator",
    image: "https://drive.google.com/uc?export=view&id=15WeN6kcbc3ugmX7jz2sT_TqyiYp5VBQ3",
    description: "Coordinates curriculum development and student progress tracking."
  },
  {
    name: "Michael Ross",
    role: "Technology Integration Specialist",
    image: "https://drive.google.com/uc?export=view&id=1iBtgBltTMhNhvxPoiKEzOI-AmSQf9Raz",
    description: "Ensures seamless integration of technology in online learning."
  }
];
