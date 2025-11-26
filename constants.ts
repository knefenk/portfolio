import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  personal: {
    name: "TAN CHUN PAN",
    title: "R&D Software Engineer",
    email: "kneftcp123@gmail.com",
    phone: "+60163521234",
    location: "43200 Cheras, Malaysia",
    linkedin: "Tan Chun Pan",
    summary: "I am an R&D Software Engineer at Keysight with a strong interest in machine learning, computer vision, and applied AI. A tech enthusiast at heart, I enjoy exploring how intelligent systems can improve real-world workflows and everyday technical processes. I’m goal-driven, collaborative, and continuously expanding my skills across emerging technologies."
  },
  skills: [
    {
      category: "Technical",
      items: ["Python", "PyTorch", "Computer Vision", "ROS2", "RAG", "TensorFlow", "OpenCV", "LLM/VLM"]
    },
    {
      category: "Languages",
      items: ["English", "Mandarin", "Malay"]
    },
    {
      category: "Expertise",
      items: ["Leadership", "Focused", "Direct", "Creativity"]
    }
  ],
  experience: [
    {
      company: "Keysight Technologies",
      role: "R&D Software Engineer",
      period: "September 2025 - Present",
      type: "Full time",
      description: "R&D Software Engineer with hands-on experience in computer vision, machine learning, and document-processing pipelines. Skilled in building object detection, image classification, and OCR-based workflows for industrial hardware inspection. Strong Python background with practical experience using PyTorch, TensorFlow, OpenCV, HuggingFace, and onnxruntime for model development and inference optimization. Familiar with applying LLM/VLM techniques and lightweight RAG pipelines to support codebase search, document parsing, and enterprise automation tasks."
    },
    {
      company: "Signify Malaysia (formerly known as Philips Lighting)",
      role: "System Engineering Intern",
      period: "March 2024 - June 2024",
      type: "Full Time",
      description: "Hands-on experience with lighting system commissioning and troubleshooting, focusing on projects like Interact Hospitality and NatureConnect. Collaborated with engineers and subcontractors to ensure smooth project execution, performing on-site tasks such as testing and configuring systems for client presentations. Assisted in technical demonstrations and system installations at multiple sites, gaining valuable insights into project coordination, technical problem-solving, and workflow management."
    }
  ],
  projects: [
    {
      title: "PalmVision V1",
      role: "Data Collection Lead",
      description: "Lead for an Autonomous Guided Vehicle (AGV) project focused on data collection and load transportation in palm oil plantations. Developed scripts to utilize mapping results for efficient video data acquisition and accurate metadata storage for ripeness analysis. Designed navigation algorithms to optimize tree scanning and data logging. Contributed to advancing automation in precision agriculture while refining expertise in robotic navigation, scripting, and data management."
    },
    {
      title: "Automated Pill Dispenser System",
      role: "Security System Developer",
      description: "Contributed to the security management system, integrating an ESP32-CAM-based surveillance module with remote pan-and-tilt functionality for real-time monitoring. Designed a motion-triggered anti-theft system using an accelerometer to detect unauthorized movement, activating a high-decibel alarm. This dual-layer security approach enhances medication safety while ensuring accessibility for users with diverse mobility needs."
    }
  ],
  education: [
    {
      institution: "Asia Pacific University (APU)",
      degree: "Bachelor's Degree in Mechatronic Engineering",
      details: ["CGPA: 3.4", "Innovation and Technology"]
    },
    {
      institution: "SMJK Yu Hua Kajang",
      degree: "Science Stream + Accounting",
      details: ["SPM 9As"]
    }
  ]
};