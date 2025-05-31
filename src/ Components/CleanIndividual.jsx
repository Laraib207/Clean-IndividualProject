// // Components/CleanIndividual.jsx
// import React from 'react';
// import '../styles/CleanIndividual.css'; // Adjust the path as necessary

// // Individual Card Component for each section
// const CleanCard = ({ title, emoji, items, description }) => {
//   return (
//     <div className="clean-card">
//       <div className="card-header">
//         <span className="card-emoji">{emoji}</span>
//         <h3 className="card-title">{title}</h3>
//       </div>
//       {description && (
//         <p className="card-description">{description}</p>
//       )}
//       <ul className="card-items">
//         {items.map((item, index) => (
//           <li key={index} className="card-item">
//             <span className="item-bullet">•</span>
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const CleanIndividual = () => {
//   const cleaningSections = [
//     {
//       title: "Morning Routine",
//       emoji: "🌅",
//       description: "Start your day with these eco-friendly essentials",
//       items: [
//         "Bamboo Toothbrush",
//         "Natural Toothpaste",
//         "Coconut Oil Soap",
//         "Wooden Comb",
//         "Cotton Handkerchief",
//         "Reusable Cloth Bag"
//       ]
//     },
//     {
//       title: "Hygiene Essentials",
//       emoji: "🧼",
//       description: "Daily hygiene products for sustainable living",
//       items: [
//         "Bamboo Toothbrush",
//         "Fluoride-Free Toothpaste",
//         "Organic Soap (Bar/Liquid)",
//         "Glass Toothpaste Container",
//         "Organic Cotton Towels",
//         "Wooden Hair Comb"
//       ]
//     },
//     {
//       title: "Grooming Tools",
//       emoji: "🛠️",
//       description: "Essential tools for personal care and maintenance",
//       items: [
//         "Stainless Steel Scissors",
//         "Eco-Friendly Nail Clippers",
//         "Electric Trimmer",
//         "Bamboo Cotton Buds",
//         "Sewing Kit (Thread, Needles, Buttons)",
//         "Natural Pumice Stone"
//       ]
//     },
//     {
//       title: "Specialized Care",
//       emoji: "❤️",
//       description: "Sustainable solutions for personal wellness",
//       items: [
//         "Menstrual Cups (Silicone)",
//         "Biodegradable Condoms",
//         "Organic Cotton Pads",
//         "Natural Intimate Wash",
//         "Eco-Friendly Wet Wipes"
//       ]
//     },
//     {
//       title: "Skincare & Beauty",
//       emoji: "✨",
//       description: "Natural products for healthy skin and beauty",
//       items: [
//         "Natural Face Cleanser",
//         "Organic Moisturizer",
//         "Sunscreen (Reef-Safe)",
//         "Essential Oils",
//         "Clay Face Masks",
//         "Jade Roller for Face Massage"
//       ]
//     },
//     {
//       title: "Laundry & Cleaning",
//       emoji: "🧽",
//       description: "Eco-friendly solutions for clothes and home cleaning",
//       items: [
//         "Natural Laundry Detergent",
//         "Bamboo Fiber Cloths",
//         "Soap Nuts for Washing",
//         "White Vinegar (Multi-purpose)",
//         "Baking Soda for Scrubbing",
//         "Essential Oil Air Fresheners"
//       ]
//     }
//   ];

//   return (
//     <section className="clean-individual-wrapper">
//       <div className="hero-section">
//         <h1 className="main-title">The Clean Individual</h1>
//         <p className="main-subtitle">
//           Your guide to sustainable, eco-friendly living with natural products that care for you and the planet.
//         </p>
//       </div>
      
//       <div className="cards-grid">
//         {cleaningSections.map((section, index) => (
//           <CleanCard
//             key={index}
//             title={section.title}
//             emoji={section.emoji}
//             description={section.description}
//             items={section.items}
//           />
//         ))}
//       </div>

//       <div className="call-to-action">
//         <h2>Ready to Start Your Clean Journey?</h2>
//         <p>Join thousands of individuals who have transformed their daily routines with sustainable alternatives.</p>
//         <button className="cta-button">Get Started Today</button>
//       </div>
//     </section>
//   );
// };

// export default CleanIndividual;

import React from 'react';
import '../styles/CleanIndividual.css'; // Adjust the path as necessary

// Individual Card Component for each section
const CleanCard = ({ title, emoji, items, description }) => {
  return (
    <div className="clean-card">
      <div className="card-header">
        <span className="card-emoji">{emoji}</span>
        <h3 className="card-title">{title}</h3>
      </div>
      {description && (
        <p className="card-description">{description}</p>
      )}
      <ul className="card-items">
        {items.map((item, index) => (
          <li key={index} className="card-item">
            <span className="item-bullet">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CleanIndividual = () => {
  const cleaningSections = [
    {
      title: "Morning Routine",
      emoji: "🌅",
      description: "Start your day with these eco-friendly essentials",
      items: [
        "Bamboo Toothbrush",
        "Natural Toothpaste",
        "Coconut Oil Soap",
        "Wooden Comb",
        "Cotton Handkerchief",
        "Reusable Cloth Bag"
      ]
    },
    {
      title: "Hygiene Essentials",
      emoji: "🧼",
      description: "Daily hygiene products for sustainable living",
      items: [
        "Bamboo Toothbrush",
        "Fluoride-Free Toothpaste",
        "Organic Soap (Bar/Liquid)",
        "Glass Toothpaste Container",
        "Organic Cotton Towels",
        "Wooden Hair Comb"
      ]
    },
    {
      title: "Grooming Tools",
      emoji: "🛠️",
      description: "Essential tools for personal care and maintenance",
      items: [
        "Stainless Steel Scissors",
        "Eco-Friendly Nail Clippers",
        "Electric Trimmer",
        "Bamboo Cotton Buds",
        "Sewing Kit (Thread, Needles, Buttons)",
        "Natural Pumice Stone"
      ]
    },
    {
      title: "Specialized Care",
      emoji: "❤️",
      description: "Sustainable solutions for personal wellness",
      items: [
        "Menstrual Cups (Silicone)",
        "Biodegradable Condoms",
        "Organic Cotton Pads",
        "Natural Intimate Wash",
        "Eco-Friendly Wet Wipes"
      ]
    },
    {
      title: "Skincare & Beauty",
      emoji: "✨",
      description: "Natural products for healthy skin and beauty",
      items: [
        "Natural Face Cleanser",
        "Organic Moisturizer",
        "Sunscreen (Reef-Safe)",
        "Essential Oils",
        "Clay Face Masks",
        "Jade Roller for Face Massage"
      ]
    },
    {
      title: "Laundry & Cleaning",
      emoji: "🧽",
      description: "Eco-friendly solutions for clothes and home cleaning",
      items: [
        "Natural Laundry Detergent",
        "Bamboo Fiber Cloths",
        "Soap Nuts for Washing",
        "White Vinegar (Multi-purpose)",
        "Baking Soda for Scrubbing",
        "Essential Oil Air Fresheners"
      ]
    }
  ];

  return (
    <section className="clean-individual-wrapper">
      <div className="hero-section">
        <h1 className="main-title">The Clean Individual</h1>
        <p className="main-subtitle">
          Your guide to sustainable, eco-friendly living with natural products that care for you and the planet.
        </p>
      </div>
      
      <div className="cards-grid">
        {cleaningSections.map((section, index) => (
          <CleanCard
            key={index}
            title={section.title}
            emoji={section.emoji}
            description={section.description}
            items={section.items}
          />
        ))}
      </div>

      <div className="call-to-action">
        <h2>Ready to Start Your Clean Journey?</h2>
        <p>Join thousands of individuals who have transformed their daily routines with sustainable alternatives.</p>
        <button className="cta-button">Get Started Today</button>
      </div>
    </section>
  );
};

export default CleanIndividual;
