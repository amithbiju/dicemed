import React, { useState } from 'react';
import yourImage from '../Assets/ajo.jpg';
import athulImage from '../Assets/atul.png';
import sreehariImage from '../Assets/sreehari.png';
import pranavImage from '../Assets/WhatsApp Image 2025-03-24 at 16.14.57_2dad9595.jpg';
import annaImage from '../Assets/anna.jpg';
import drImage from '../Assets/dr.png';
import mituImage from '../Assets/mitu.jpg';
import backgroundImage from '../Assets/cover image.jpeg';
import deepanshuImage from '../Assets/my pic of google.jpeg';
import manuImage from '../Assets/manu.png';
import sadhvikImage from '../Assets/sadvik.jpg';
import abiyaImage from '../Assets/george.jpg';
import rejiImage from '../Assets/reji.jpg';

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
            KlusterHealth
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
      <section id="hero" className="relative pt-20 pb-10 px-5 xl:h-[60vh] h-[48vh] text-center">
  {/* Image as Background */}
  <img
    src={backgroundImage}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />

  {/* Centered Content */}
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <div className="text-center max-w-4xl xl:px-4 px-8 mt-48 xl:mt-36 bg-gray-800 xl:bg-transparent bg-opacity-50 rounded-2xl py-2">
      <h1 className="xl:text-5xl text-3xl font-bold  text-white">
        KlusterHealth
      </h1>
      <hr className='xl:mb-3 mb-2 mt-1'></hr>
      <p className="text-base xl:text-xl leading-relaxed xl:mb-5 mb-3 text-white">
        Revolutionizing Healthcare with AI-Powered<br/> Medical Imaging Solutions.
      </p>
      <div className="flex flex-col sm:flex-col justify-center items-center">
        <button
          onClick={handleScheduleDemo}
          className="bg-white text-blue-700 px-6 py-2 w-full text-lg rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition xl:mb-3 mb-2"
        >
          Schedule a Demo
        </button>
        <button
          onClick={handleLearnMore}
          className="border border-white text-white px-6 py-2 w-full rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition mb-1 xl:mb-0"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>










      {/* About Section */}
      <section id="about" className="py-20 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">About KlusterHealth</h2>
          <hr className='xl:mb-3 mb-2 mt-1 xl:w-3/6 mx-auto'></hr>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            KlusterHealth is at the forefront of AI-driven healthcare transformation. We specialize in advanced medical imaging solutions that empower healthcare professionals with actionable insights. Our cutting-edge technology supports multi-disease analysis, bridging the gap between diagnosis and patient care.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-10">
            With KlusterHealth, our flagship product, we focus on tackling complex medical cases through AI-enhanced imaging and reporting. Our mission is to assist doctors in delivering accurate, timely, and effective diagnoses while ensuring seamless integration into their workflow.
          </p>
        </div>
      </section>

      {/* Dr. Ajo Babu George */}
      <section id="drajo" className="py-20 px-5 bg-white">
  <div className="max-w-5xl mx-auto text-center">

    <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
      {/* Image Placeholder */}
      <div className="w- h-96 flex items-center justify-center text-gray-500 border-gray-400 xl:mb-0 mb-40">
        <img
          src={yourImage}
          alt="Ajo Babu George"
          className="w-full object-cover rounded-full"
        />
        <div className='w-[30vw]'>&nbsp;</div>
      </div>
      <div className="text-left max-w-xl">
      <h2 className="text-4xl font-semibold">Dr. Ajo Babu George</h2>
      <hr className='xl:mb-3 mb-2 mt-2 xl:w-3/6'></hr>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Dr. Ajo Babu George is a distinguished specialist in Oral Medicine and Dentomaxillofacial Radiology with years of clinical and academic experience. He leads KlusterHealthAI with a vision to bridge technology and healthcare. His research focuses on AI in medical imaging, promoting precision diagnostics and improved patient outcomes.
        </p>
        {/* <p className="text-lg leading-relaxed text-gray-700 mb-4">
          ORCID ID: <a href="https://orcid.org/0009-0005-3026-0959" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">0009-0005-3026-0959</a>
        </p> */}
         <div className="flex items-center xl:ml-8 ml-6 gap-6 xl:mt-8 mt-4 text-2xl">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/dr-ajo-babu-george"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 transition"
  >
    <i className="fab fa-linkedin"></i>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/Ajogeorge29"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-800 hover:text-black transition"
  >
    <i className="fab fa-github"></i>
  </a>

  {/* Email */}
  <a
    href="mailto:drajo_george@klusterhealth.co.in"
    className="text-red-600 hover:text-red-800 transition"
  >
    <i className="fas fa-envelope"></i>
  </a>
</div>

      </div>
    </div>
  </div>
</section>

<section id="about-dr-ajo" className="py-20 px-5 bg-gray-50 text-gray-700 mt-1">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-semibold text-center">About Dr. Ajo Babu George</h2>
    <hr className='xl:mb-5 mb-8 mt-2 xl:w-3/6 mx-auto'></hr>
    <div className="space-y-12">
      {/* Education */}
      <div>
        <h3 className="text-2xl font-semibold">Education</h3>
        <hr className='xl:mb-3 mb-2 mt-1 xl:w-1/6 w-2/6 mx-auto'></hr>
        <p className="text-lg leading-relaxed">
          Dr. Ajo Babu George's educational background includes a Bachelor of Dental Surgery (BDS) degree, followed by a Master of Dental Surgery (MDS) with a specialization in Dentomaxillofacial Radiology. Additionally, he pursued a Minor in Artificial Intelligence from the Indian Institute of Technology (IIT) Ropar, reflecting his commitment to interdisciplinary growth and continuous learning. Dr. George also holds an MBA in Healthcare and Hospital Management from IGNOU, equipping him with essential management skills specific to healthcare institutions.
        </p>
      </div>

      {/* Professional Experience */}
      <div>
        <h3 className="text-2xl font-semibold">Professional Experience</h3>
        <hr className='xl:mb-3 mb-2 mt-1 xl:w-1/6 w-3/6 mx-auto'></hr>
        <p className="text-lg leading-relaxed">
          Dr. George’s professional journey spans clinical practice and innovation. He served as a Senior Resident at SCB Medical College Hospital, where he gained valuable clinical experience in a high-pressure environment. His innovative spirit led him to participate in the CLiMB (Clinical Innovation in Medicine and Biodesign) fellowship at ICMR-IIT Kharagpur. This prestigious program focuses on medical device innovation and provides a platform for healthcare professionals to collaborate with engineers and designers to create novel solutions for healthcare challenges.
        </p>
      </div>

      {/* Skills and Interests */}
      <div>
        <h3 className="text-2xl font-semibold">Skills and Interests</h3>
        <hr className='xl:mb-3 mb-2 mt-1 xl:w-1/6 w-3/6 mx-auto'></hr>
        <p className="text-lg leading-relaxed">
          Dr. George’s unique blend of medical expertise and technological acumen is evident in his diverse skill set. He is proficient in various programming languages and machine learning frameworks, which he showcases on his GitHub profile. This technical expertise, combined with his deep medical knowledge, places him at the forefront of healthcare innovation. Dr. Ajo Babu George’s journey exemplifies the convergence of medicine, technology, and management, positioning him as a valuable asset in the evolving landscape of healthcare, where technological advancements are increasingly shaping patient care and medical practices.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Publications */}
      <section id="publications" className="py-20 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">Publications</h2>
          <hr className='xl:mb-5 mb-4 mt-1 xl:w-3/6 mx-auto'></hr>
          <p className="text-lg text-gray-700 mb-8">
            Explore our latest research contributions in AI and healthcare technologies.
          </p>
          <ul className="space-y-4 text-left max-w-3xl mx-auto">
            <li className="bg-white p-4 shadow rounded hover:bg-blue-50 transition">
              <h3 className="font-semibold">nnU-Net-Based Automated Nasopalatine Nerve Segmentation for Maxillofacial Surgery -2025
              </h3>
              <p className="text-sm text-gray-600">Ongoing Research</p>
            </li>
            <li className="bg-white p-4 shadow rounded hover:bg-blue-50 transition">
              <h3 className="font-semibold">FedDPI-SH: A Quality- and Similarity-Aware Federated Learning Framework for Medical Image Analysis -2025
              </h3>
              <p className="text-sm text-gray-600">Ongoing Research</p>
            </li>
            <li className="bg-white p-4 shadow rounded hover:bg-blue-50 transition">
              <h3 className="font-semibold">Multi-Source Clinical Case Data for Enhanced Rare Disease Analytics: A Framework for Predictive Modeling and Policy-Oriented Insights -2025
              </h3>
              <p className="text-sm text-gray-600">Ongoing Research</p>
            </li>
            {/* Add more publications as needed */}
          </ul>
        </div>
      </section>

      {/* Research Group */}
      <section id="research-group" className="py-20 px-5 bg-white">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-semibold">Our Group</h2>
    <hr className='xl:mb-10 mb-8 mt-1 xl:w-1/6 w-4/6 mx-auto'></hr>
    {/* Clinical Team */}
    {/* <h3 className="text-3xl font-semibold">Clinical Team</h3>
    <hr className='xl:mb-3 mb-4 mt-1 xl:w-1/6 w-2/6 mx-auto'></hr>
    <div className="flex flex-col md:flex-row justify-center gap-10 mb-16">
      {[

{ name: 'Dr. Kunal Agarwal', role: 'Maxillofacial Radiologist', image: drImage, linkedin: 'https://www.linkedin.com/in/dr-kunal-agarwal-a50812211' },
{ name: 'Dr. Mitu Singhal', role: 'Clinical Advisor', image: mituImage, linkedin: '#' }


      ].map((member) => (
        <div key={member.name} className="bg-gray-50 rounded-lg shadow-md p-6 w-64 mx-auto">
          <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500">
            <img src={member.image} alt='' className="w-full h-full object-cover rounded-full" />
          </div>
          <h3 className="text-xl font-semibold">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {member.name}
            </a>
          </h3>
          <p className="text-gray-600">{member.role}</p>
        </div>
      ))}
    </div> */}

    {/* Core Team */}
    <h3 className="text-3xl font-semibold">Core Team</h3>
    <hr className='xl:mb-3 mb-4 mt-1 xl:w-1/6 w-2/6 mx-auto'></hr>
    <div className="flex flex-col gap-10 mb-16 w-full">
  {/* Desktop / Tablet layout */}
  <div className="hidden md:grid md:grid-cols-1 gap-10">
    {/* First row with 2 members */}
    <div className="flex justify-center gap-10">
      {[
        { name: 'Dr. Kunal Agarwal', role: 'Maxillofacial Radiologist', image: drImage, linkedin: 'https://www.linkedin.com/in/dr-kunal-agarwal-a50812211' },
        { name: 'Dr. Mitu Singhal', role: 'Clinical Advisor', image: mituImage, linkedin: '#' }
      ].map((member) => (
        <div key={member.name} className="bg-gray-50 rounded-lg shadow-md p-6 w-64">
          <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500">
            <img src={member.image} alt='' className="w-full h-full object-cover rounded-full" />
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

    {/* Second row with 3 members */}
    <div className="flex justify-center gap-10">
      {[
        { name: 'Deepanshu Arya', role: 'Software Developer', image: deepanshuImage, linkedin: 'https://www.linkedin.com/in/deepanshuarya2024' },
        { name: 'Manu Govind', role: 'Robotics Expert Advisor', image: manuImage, linkedin: 'https://www.linkedin.com/in/manu-govind-v' },
        { name: 'Sadhvik Bathini', role: 'Neural Network Expert Advisor', image: sadhvikImage, linkedin: 'https://www.linkedin.com/in/sadhvikbathini' }
      ].map((member) => (
        <div key={member.name} className="bg-gray-50 rounded-lg shadow-md p-6 w-64">
          <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500">
            <img src={member.image} alt='' className="w-full h-full object-cover rounded-full" />
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

  {/* Mobile layout */}
  <div className="flex md:hidden gap-6">
    {/* First column with 2 members */}
    <div className="flex flex-col gap-10 flex-1">
      {[
        { name: 'Dr. Kunal Agarwal', role: 'Maxillofacial Radiologist', image: drImage, linkedin: 'https://www.linkedin.com/in/dr-kunal-agarwal-a50812211' },
        { name: 'Dr. Mitu Singhal', role: 'Clinical Advisor', image: mituImage, linkedin: '#' }
      ].map((member) => (
        <div key={member.name} className="bg-gray-50 rounded-lg shadow-md p-6 w-full mx-auto">
          <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500">
            <img src={member.image} alt='' className="w-full h-full object-cover rounded-full" />
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

    {/* Second column with 3 members */}
    <div className="flex flex-col gap-10 flex-1">
      {[
        { name: 'Deepanshu Arya', role: 'Software Developer', image: deepanshuImage, linkedin: 'https://www.linkedin.com/in/deepanshuarya2024' },
        { name: 'Manu Govind', role: 'Robotics Expert Advisor', image: manuImage, linkedin: 'https://www.linkedin.com/in/manu-govind-v' },
        { name: 'Sadhvik Bathini', role: 'Neural Network Expert Advisor', image: sadhvikImage, linkedin: 'https://www.linkedin.com/in/sadhvikbathini' }
      ].map((member) => (
        <div key={member.name} className="bg-gray-50 rounded-lg shadow-md p-6 w-full mx-auto">
          <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500">
            <img src={member.image} alt='' className="w-full h-full object-cover rounded-full" />
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
</div>



    {/* Research Team */}
    <h3 className="text-3xl font-semibold">Research Team</h3>
    <hr className='xl:mb-3 mb-4 mt-1 xl:w-1/6 w-2/6 mx-auto'></hr>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
  {[
    { name: 'Dr. Abiya Mariam George', role: 'Clinical Advisor', image: abiyaImage, linkedin: ' ' },
    { name: 'Dr. Roshan Reji', role: 'Clinical Advisor', image: rejiImage, linkedin: '' },
    { name: 'Anna Mariam John', role: 'Jr. AI/ML Engineer', image: annaImage, linkedin: 'https://www.linkedin.com/in/anna-mariam-john' },
    { name: 'Atul', role: 'ML Intern', image: athulImage, linkedin: 'https://www.linkedin.com/in/athul-anoop-a85068281/' },
    { name: 'Sreehari', role: 'ML Intern', image: sreehariImage, linkedin: 'http://www.linkedin.com/in/sreehari-j-r-1b9b991ba' },
    { name: 'Pranav', role: 'ML Intern', image: pranavImage, linkedin: 'http://www.linkedin.com/in/s-pranav-s' }


  ].map((member) => (
    <div key={member.name} className="bg-gray-50 rounded-lg shadow-md p-6 w-full mx-auto">
      <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500">
        <img src={member.image} alt='' className="w-full h-full object-cover rounded-full" />
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
          <h2 className="text-4xl font-semibold">Contact Us</h2>
          <hr className='xl:mb-3 mb-4 mt-1 xl:w-1/6 w-3/6 mx-auto'></hr>
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
        <p>© 2025 KlusterHealth. All rights reserved.</p>
        {/* <p className="mt-2">
          ORCID ID: <a href="https://orcid.org/0009-0005-3026-0959" target="_blank" rel="noopener noreferrer" className="underline">0009-0005-3026-0959</a>
        </p> */}
      </footer>
    </div>
  );
};

export default KlusterHealthAI;
