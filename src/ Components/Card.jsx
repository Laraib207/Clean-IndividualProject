import React from 'react';
import '../styles/Card.css';

const cardsData = [
  {
    title: "Sustainable Nature Conservation",
    description: "Preserve the pristine beauty of our natural world through innovative green initiatives and mindful environmental stewardship. Our tree planting programs and forest restoration projects create lasting impacts that span generations, fostering biodiversity and carbon sequestration while building resilient ecosystems.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    imageDescription: "Ancient forest canopy with filtered sunlight creating natural cathedral-like atmosphere, showcasing the majesty of untouched wilderness and the intricate ecosystem relationships that thrive in old-growth forests."
  },
  {
    title: "Urban Green Transformation",
    description: "Revolutionizing metropolitan landscapes through cutting-edge vertical gardens, living walls, and sustainable architecture. We transform concrete environments into breathing urban oases that purify air, reduce heat islands, and create sanctuaries of tranquility amidst the bustling city life.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    imageDescription: "Modern urban building facade covered in lush vertical gardens and green living walls, demonstrating how architecture and nature can harmoniously coexist in densely populated metropolitan areas."
  },
  {
    title: "Marine Ecosystem Restoration",
    description: "Leading comprehensive ocean cleanup initiatives that remove plastic debris while protecting marine biodiversity. Our advanced cleanup technologies and community partnerships ensure that marine life thrives in restored habitats, creating a sustainable future for our blue planet.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    imageDescription: "Crystal clear ocean waters with vibrant coral reef ecosystem, showcasing healthy marine life and the pristine underwater environment we strive to protect and restore through our conservation efforts."
  },
  {
    title: "Sustainable Community Development",
    description: "Empowering communities through renewable energy solutions, organic food systems, and circular economy practices. We create self-sustaining neighborhoods that demonstrate how conscious living can be both luxurious and environmentally responsible, setting new standards for modern lifestyle.",
    image: "https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    imageDescription: "Modern eco-friendly community with solar panels and sustainable architecture, illustrating how renewable energy and green building practices create comfortable, environmentally conscious living spaces."
  },
];

// Hero/About Section Component
const HeroAbout = () => {
  return (
    <div className="hero-about">
      <div className="hero-background-pattern"></div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to the Neat and Clean Worldd
          </h1>
          
          <p className="hero-subtitle">
            We want to  to live in a neat and clean world.
          </p>
          
          <div className="hero-description">
            <p>
              Caring for nature is not just a responsibility; it's a way of life. Together, we can cultivate a sustainable future where our actions reflect our commitment to the environment. Join us in our mission to protect and preserve the beauty of our planet.
            </p>
            <p>
              Let's work hand in hand to create a legacy of environmental stewardship that future generations will cherish. Together, we can make a difference!
            </p>
            <p>
              Join us for our mission to nurture and clean nature. Together, we can create a world where luxury meets sustainability in perfect harmony.
            </p>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="nature-circle">
            <div className="floating-element leaf-1">🌿</div>
            <div className="floating-element leaf-2">🍃</div>
            <div className="floating-element flower-1">🌸</div>
            <div className="floating-element flower-2">🌺</div>
            <div className="center-icon">🌍</div>
          </div>
        </div>
      </div>
      
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

const Card = ({ title, description, image, imageDescription, reverse }) => {
  return (
    <div className={`card ${reverse ? 'reverse' : ''}`}>
      <div className="card-image-container">
        <img 
          src={image} 
          alt={imageDescription}
          className="card-image"
        />
        <div className="card-image-overlay"></div>
      </div>
      
      <div className="card-content">
        <div className="card-content-divider"></div>
        
        <h2 className="card-title">{title}</h2>
        
        <p className="card-description">{description}</p>
        
        <div className="image-story">
          <p className="image-story-text">
            <strong>Visual Story:</strong> {imageDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="card-list-container">
      <HeroAbout />
      
      <div className="cards-section">
        <div className="section-header">
          <h2 className="section-title">Our Curated Initiatives</h2>
          <p className="section-subtitle">
            Discover our carefully crafted environmental programs that blend luxury with responsibility
          </p>
        </div>
        
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            imageDescription={card.imageDescription}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
