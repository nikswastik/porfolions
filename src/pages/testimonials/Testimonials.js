import React from "react";
import { styles } from "./TestimonialsStyle";


// Sample testimonial data
const testimonials = [
  {
    text: "“The 24/7 access and secure facilities have been incredibly convenient for my team’s flexible schedule. We love the coworking space!”",
    author: "Gourish Naik",
    position: "Software Engineer, TechStartup Innovations",
    bgColor: "#C1F3A6", // Light green background
  },
  {
    text: "“The aesthetics of Cowork are inspiring. The attention to detail in the design creates an immersive space that’s enjoyable, as it gives us fresh ideas for elevating our collaborative sessions.”",
    author: "k Pramod",
    position: "Creative Director, DesignCraft Studio",
    bgColor: "#E6E6E6", // Light grey background
  },
  {
    text: "“As a freelance designer, I was getting tired of working from home or coffee shops. The coworking space has provided me with a productive and professional environment to focus on my work!”",
    author: "Rakesh Kharvi",
    position: "Graphic Designer, DesignPro",
    bgColor: "#A5E4F3", // Light blue background
  },
  {
    text: "“The coworking space has been a wonderful resource for my team. The open floor plan and dedicated private offices allow us to collaborate and concentrate as needed.”",
    author: "David Mason",
    position: "Project Manager, SoftwareSolutions LLC",
    bgColor: "#F7B6C2", // Light pink background
  },
  {
    text: "“The flexible membership options and amenities for team members, privacy, and networking needs make this coworking space a perfect fit for my small business.”",
    author: "Manoj Pujari",
    position: "CEO, Startup Ventures",
    bgColor: "#FDD1A1", // Light orange background
  },
];

const Testimonials = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Hear It from Our Clients</h2>
      <div style={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{ ...styles.card, backgroundColor: testimonial.bgColor }}>
            <p style={styles.text}>{testimonial.text}</p>
            <p style={styles.author}>{testimonial.author}</p>
            <p style={styles.position}>{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
