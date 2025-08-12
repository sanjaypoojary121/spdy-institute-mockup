/* eslint-disable */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'spdy-institute-backend', time: new Date().toISOString() });
});

// Courses - static dataset matching frontend
const courses = [
  {
    id: 1,
    title: 'Computer Science & Engineering',
    description:
      'Master the fundamentals of programming, algorithms, data structures, and software engineering. Prepare for careers in tech with hands-on projects and industry partnerships.',
    duration: '4 Years',
    students: '2,500+',
    rating: 4.9,
    level: 'Undergraduate',
    category: 'Technology',
    highlights: ['AI/ML Specialization', 'Industry Projects', 'Research Opportunities']
  },
  {
    id: 2,
    title: 'Business Administration',
    description:
      'Develop leadership skills and business acumen through comprehensive study of management, finance, marketing, and strategy. Build your entrepreneurial mindset.',
    duration: '4 Years',
    students: '1,800+',
    rating: 4.8,
    level: 'Undergraduate',
    category: 'Business',
    highlights: ['Startup Incubator', 'Global Internships', 'Leadership Training']
  },
  {
    id: 3,
    title: 'Data Science & Analytics',
    description:
      'Learn to extract insights from big data using statistical methods, machine learning, and visualization tools. High-demand field with excellent career prospects.',
    duration: '2 Years',
    students: '950+',
    rating: 4.9,
    level: 'Graduate',
    category: 'Technology',
    highlights: ['Industry Mentorship', 'Real-world Projects', 'Job Guarantee']
  },
  {
    id: 4,
    title: 'Mechanical Engineering',
    description:
      'Design, analyze, and manufacture mechanical systems. Focus on sustainable engineering practices and cutting-edge technologies like robotics and automation.',
    duration: '4 Years',
    students: '1,200+',
    rating: 4.7,
    level: 'Undergraduate',
    category: 'Engineering',
    highlights: ['Advanced Labs', 'Industry Collaboration', 'Patent Opportunities']
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description:
      'Master modern marketing strategies including social media, SEO, content marketing, and analytics. Perfect for the digital-first business landscape.',
    duration: '18 Months',
    students: '650+',
    rating: 4.8,
    level: 'Certificate',
    category: 'Business',
    highlights: ['Live Campaigns', 'Google Certification', 'Portfolio Building']
  },
  {
    id: 6,
    title: 'Cybersecurity',
    description:
      'Protect digital assets and infrastructure from cyber threats. Learn ethical hacking, network security, and compliance in this rapidly growing field.',
    duration: '2 Years',
    students: '750+',
    rating: 4.9,
    level: 'Graduate',
    category: 'Technology',
    highlights: ['Ethical Hacking', 'Security Clearance', 'Industry Certifications']
  }
];

// Faculty - static dataset matching frontend
const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Michael Anderson',
    title: 'Professor of Computer Science',
    department: 'Computer Science & Engineering',
    image: '/images/faculty-1.jpg',
    qualifications: ['Ph.D. Computer Science - MIT', 'M.S. Artificial Intelligence - Stanford'],
    specialization: 'Artificial Intelligence, Machine Learning, Data Science',
    experience: '15+ years',
    publications: '120+ publications',
    awards: ['Excellence in Teaching Award 2023', 'Research Innovation Award 2022'],
    email: 'm.anderson@spdyinstitute.edu'
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    title: 'Dean of Business School',
    department: 'Business Administration',
    image: '/images/faculty-2.jpg',
    qualifications: ['Ph.D. Business Administration - Harvard', 'MBA Strategy - Wharton'],
    specialization: 'Strategic Management, Entrepreneurship, Leadership',
    experience: '20+ years',
    publications: '85+ publications',
    awards: ['Dean of the Year 2023', 'Outstanding Faculty Award 2021'],
    email: 's.johnson@spdyinstitute.edu'
  },
  {
    id: 3,
    name: 'Dr. Robert Chen',
    title: 'Professor of Mechanical Engineering',
    department: 'Mechanical Engineering',
    image: '/images/faculty-3.jpg',
    qualifications: ['Ph.D. Mechanical Engineering - Caltech', 'M.S. Robotics - CMU'],
    specialization: 'Robotics, Automation, Sustainable Engineering',
    experience: '18+ years',
    publications: '95+ publications',
    awards: ['Innovation in Engineering Award 2023', 'Faculty Research Award 2020'],
    email: 'r.chen@spdyinstitute.edu'
  },
  {
    id: 4,
    name: 'Dr. Emily Rodriguez',
    title: 'Associate Professor of Data Science',
    department: 'Data Science & Analytics',
    image: '/images/faculty-4.jpg',
    qualifications: ['Ph.D. Statistics - UC Berkeley', 'M.S. Data Science - NYU'],
    specialization: 'Big Data Analytics, Statistical Modeling, Predictive Analytics',
    experience: '12+ years',
    publications: '70+ publications',
    awards: ['Young Faculty Excellence Award 2022', 'Best Paper Award 2021'],
    email: 'e.rodriguez@spdyinstitute.edu'
  },
  {
    id: 5,
    name: 'Dr. David Wilson',
    title: 'Professor of Cybersecurity',
    department: 'Computer Science & Engineering',
    image: '/images/faculty-5.jpg',
    qualifications: ['Ph.D. Computer Security - Georgia Tech', 'M.S. Cryptography - MIT'],
    specialization: 'Network Security, Ethical Hacking, Cryptography',
    experience: '16+ years',
    publications: '110+ publications',
    awards: ['Cybersecurity Excellence Award 2023', 'Industry Collaboration Award 2022'],
    email: 'd.wilson@spdyinstitute.edu'
  },
  {
    id: 6,
    name: 'Dr. Lisa Thompson',
    title: 'Professor of Digital Marketing',
    department: 'Business Administration',
    image: '/images/faculty-6.jpg',
    qualifications: ['Ph.D. Marketing - Northwestern', 'MBA Digital Strategy - INSEAD'],
    specialization: 'Digital Marketing, Social Media Strategy, Consumer Behavior',
    experience: '14+ years',
    publications: '60+ publications',
    awards: ['Marketing Educator of the Year 2023', 'Digital Innovation Award 2021'],
    email: 'l.thompson@spdyinstitute.edu'
  }
];

// GET /api/courses
app.get('/api/courses', (req, res) => {
  res.json({ courses });
});

// GET /api/faculty
app.get('/api/faculty', (req, res) => {
  res.json({ faculty: facultyMembers });
});

// POST /api/contact
// Expected body: { firstName, lastName, email, phone, subject, message }
// Response: { success: boolean, message: string }
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body || {};

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // Here you could send an email or persist to a database
  // For now we simply echo a success response
  return res.json({
    success: true,
    message: "Thank you for contacting us. We'll get back to you soon.",
    data: { firstName, lastName, email, phone, subject }
  });
});

// POST /api/chat
// Expected body: { message: string }
// Response: { reply: string }
app.post('/api/chat', (req, res) => {
  const { message } = req.body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid message' });
  }
  // Placeholder deterministic reply. Replace with actual model/backend later.
  const reply = `Thanks for your message: "${message}". Our team will get back to you soon.`;
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log(`CORS enabled for ${CLIENT_ORIGIN}`);
});