import React, { useState } from 'react';
import yourImage from '../Assets/39245 av.JPG';
import athulImage from '../Assets/atul.png';
import sreehariImage from '../Assets/sreehari.png';
import pranavImage from '../Assets/WhatsApp Image 2025-03-24 at 16.14.57_2dad9595.jpg';
import annaImage from '../Assets/anna.jpg';
import drImage from '../Assets/dr.png';
import mituImage from '../Assets/mitu.jpg';

const KlusterHealthAI = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    const { name, email, message } = contactForm;

    // Validation for Name
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    // Validation for Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validation for Message
    if (!message.trim()) {
      alert("Please enter your message.");
      return;
    }

    if (message.length < 10) {
      alert("Message should be at least 10 characters long.");
      return;
    }

    const emailBody = `Dear Dr. Ajo Babu George,

  I want to contact you regarding your work at KlusterHealthAI.

  Details:
  Name: ${name}
  Email: ${email}
  Message: ${message}

  Best regards,
  ${name}`;

    openMailClient({
      to: 'drajo_george@klusterhealth.co.in',
      subject: `Contact Request from ${name}`,
      body: emailBody
    });
  };

  const openMailClient = ({ to, subject, body }) => {
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleScheduleDemo = () => {
    openMailClient({
      to: 'drajo_george@klusterhealth.co.in',
      subject: 'Request to Schedule a Demo with KlusterHealthAI',
      body: `Dear Dr. Ajo Babu George,

  I am interested in scheduling a demo for KlusterHealthAI's solutions. Please let me know a convenient time.

  Thank you,
  [Your Name]`
    });
  };

  const handleLearnMore = () => {
    scrollToSection('about');
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection('hero')}>
            KlusterHealthAI
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-300">About</button>
            <button onClick={() => scrollToSection('drajo')} className="hover:text-blue-300">Dr. Ajo</button>
            <button onClick={() => scrollToSection('publications')} className="hover:text-blue-300">Publications</button>
            <button onClick={() => scrollToSection('research-group')} className="hover:text-blue-300">Research Group</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-300">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-20 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">KlusterHealthAI</h1>
          <p className="text-xl leading-relaxed mb-8">
            Revolutionizing Healthcare with AI-Powered Medical Imaging Solutions.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button onClick={handleScheduleDemo} className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Schedule a Demo
            </button>
            <button onClick={handleLearnMore} className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">About KlusterHealthAI</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            KlusterHealthAI is at the forefront of AI-driven healthcare transformation. We specialize in advanced medical imaging solutions that empower healthcare professionals with actionable insights. Our cutting-edge technology supports multi-disease analysis, bridging the gap between diagnosis and patient care.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            With KlusterHealth-1, our flagship product, we focus on tackling complex medical cases through AI-enhanced imaging and reporting. Our mission is to assist doctors in delivering accurate, timely, and effective diagnoses while ensuring seamless integration into their workflow.
          </p>
        </div>
      </section>

      {/* Dr. Ajo Babu George */}
      <section id="drajo" className="py-20 px-5 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Dr. Ajo Babu George</h2>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            {/* Image Placeholder */}
            <div className="w-72 h-72 flex items-center justify-center text-gray-500 border-2 border-gray-400 rounded-full">
      <img
        src={yourImage}
        alt="Image Description"
        className="w-72 h-72 object-cover rounded-full"
      />
    </div>
            <div className="text-left max-w-xl">
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Dr. Ajo Babu George is a distinguished specialist in Oral Medicine and Radiology with years of clinical and academic experience. He leads KlusterHealthAI with a vision to bridge technology and healthcare. His research focuses on AI in medical imaging, promoting precision diagnostics and improved patient outcomes.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                ORCID ID: <a href="https://orcid.org/0009-0005-3026-0959" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">0009-0005-3026-0959</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-20 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Publications</h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore our latest research contributions in AI and healthcare technologies.
          </p>
          <ul className="space-y-4 text-left max-w-3xl mx-auto">
            <li className="bg-white p-4 shadow rounded hover:bg-blue-50 transition">
              <h3 className="font-semibold">AI-Powered Detection of Oral Lesions Using Advanced Imaging - 2024</h3>
              <p className="text-sm text-gray-600">Journal of Oral Medicine and Radiology</p>
            </li>
            <li className="bg-white p-4 shadow rounded hover:bg-blue-50 transition">
              <h3 className="font-semibold">Multi-Disease Analysis in Medical Imaging: Challenges & Solutions - 2023</h3>
              <p className="text-sm text-gray-600">International Journal of AI in Healthcare</p>
            </li>
            {/* Add more publications as needed */}
          </ul>
        </div>
      </section>

      {/* Research Group */}
      {/* Research Group */}
<section id="research-group" className="py-20 px-5 bg-white">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-semibold mb-8">Our Research Group</h2>
    <div className="flex flex-col md:flex-row justify-center gap-10">
      {/* Team Members */}
      {[
        { name: 'Dr. Kunal Agarwal', role: 'Maxillofacial Radiologist',image:drImage, linkedin: 'https://www.linkedin.com/in/dr-kunal-agarwal-a50812211' },
        { name: 'Dr. Mitu Singhal', role: 'Clinical Advisor',image:mituImage, linkedin: '#' },
        { name: 'Atul', role: 'Data Scientist', image: athulImage, linkedin: 'https://www.linkedin.com/in/athul-anoop-a85068281/' },
        { name: 'Sreehari', role: 'Imaging Specialist', image: sreehariImage, linkedin: 'http://www.linkedin.com/in/sreehari-j-r-1b9b991ba' },
        { name: 'Pranav', role: 'Computer Vision', image: pranavImage, linkedin: 'http://www.linkedin.com/in/s-pranav-s' },
        { name: 'Anna Mariam John', role: 'AI/ML Engineer', image: annaImage, linkedin: 'https://www.linkedin.com/in/anna-mariam-john' }

      ].map((member) => (
        <div key={member.name} className="bg-gray-50 rounded-lg shadow-md p-6 w-64 mx-auto">
          <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500">
                  <img src={member.image} className="w-full h-full object-cover rounded-full" />
                </div>
          <h3 className="text-xl font-semibold">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {member.name}
            </a>
          </h3>
          <p className="text-gray-600">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="py-20 px-5 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            Have questions or want to collaborate? Reach out to our team!
          </p>
          <form onSubmit={handleSendMessage} className="grid gap-6 max-w-3xl mx-auto">
  <input
    type="text"
    name="name"
    value={contactForm.name}
    onChange={handleContactChange}
    placeholder="Name"
    required
    className="border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
  />
  <input
    type="email"
    name="email"
    value={contactForm.email}
    onChange={handleContactChange}
    placeholder="Email"
    required
    className="border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
  />
  <textarea
    rows="5"
    name="message"
    value={contactForm.message}
    onChange={handleContactChange}
    placeholder="Your Message"
    required
    className="border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
  />
  <button type="submit" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
    Send Message
  </button>
</form>


        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>© 2025 KlusterHealthAI. All rights reserved.</p>
        <p className="mt-2">
          ORCID ID: <a href="https://orcid.org/0009-0005-3026-0959" target="_blank" rel="noopener noreferrer" className="underline">0009-0005-3026-0959</a>
        </p>
      </footer>
    </div>
  );
};

export default KlusterHealthAI;
