import React from 'react';

interface Service {
  icon: string;
  headline: string;
  description: string;
}

const ServiceElement: React.FC<Service> = ({ icon, headline, description }) => {
  return (
    <div className="text-center mx-auto my-4 w-1/3">
      {/* Service Icon */}
      <div className="text-4xl mb-2">{icon}</div>
      {/* Headline */}
      <h2 className="mb-2 font-roboto text-xl text-gray-600">{headline}</h2>
      {/* Paragraph */}
      <p className=" mx-4 text-gray-500 font-sans">{description}</p>
    </div>
  );
};

const ServicesComponent: React.FC = () => {
  const services: Service[] = [
    {
      icon: "🚀",
      headline: "The Best Service 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.  1.",
    },
    {
      icon: "💡",
      headline: "The Best Service 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.  2.",
    },
    {
      icon: "🌟",
      headline: "The Best Service 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.  3.",
    },
    {
      icon: "💡",
      headline: "The Best Service 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.  1.",
    },
    {
      icon: "🌟",
      headline: "The Best Service 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.  2.",
    },
    {
      icon: "🚀",
      headline: "The Best Service 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.  3.",
    },
    {
      icon: "🌟",
      headline: "The Best Service 7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.  1.",
    },
    {
      icon: "🚀",
      headline: "The Best Service 8",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.  2.",
    },
    {
      icon: "🌟",
      headline: "The Best Service 9",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.  3.",
    },
  ];

  return (
    <>
      <div className="article-container">
        <article className="text-center">
          <h1 className="text-4xl font-palatino font-serif font-bold">Who we are...</h1>
          <p className="ml-20 mr-20 mt-10 text-2xl text-gray-500 font-serif italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
          </p>
        </article>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="flex justify-center flex-wrap">
        {services.map((service, index) => (
          <ServiceElement
            key={index}
            icon={service.icon}
            headline={service.headline}
            description={service.description}
          />
        ))}
      </div>
    </>

  );
};

export default ServicesComponent;
