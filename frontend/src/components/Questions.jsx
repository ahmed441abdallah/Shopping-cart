import React from "react";

const QuestionItem = ({ question, answer }) => (
  <div className="mb-6 md:mb-8 lg:mb-12 ms-2">
    <p className="mb-4 font-bold text-2xl">{question}</p>
    <p className="text-gray-800">{answer}</p>
  </div>
);

const Questions = () => {
  const faqData = [
    {
      question: "Can I customize or personalize my bag?",
      answer:
        "Some brands offer customization options, allowing you to add initials, patches, or choose specific colors. Check with the manufacturer or retailer for customization possibilities.",
    },
    {
      question: "Are there eco-friendly bag options available?",
      answer:
        "Yes, many brands offer eco-friendly bags made from sustainable materials such as recycled fabrics, organic cotton, or biodegradable materials. Look for bags with eco-friendly certifications.",
    },
    {
      question: "Can I wash my backpack in the washing machine?",
      answer:
        "Most backpacks can be washed in a machine, but it's essential to check the care instructions provided by the manufacturer. Remove any detachable parts and use a gentle cycle with cold water.",
    },
    {
      question: "What's the best way to organize the contents of my bag?",
      answer:
        "Organizing your bag depends on personal preferences and the type of bag you have. Consider using pouches or organizers for smaller items, and prioritize frequently used items for easy access.",
    },
    {
      question: "How do I clean and maintain my leather bag?",
      answer:
        "Cleaning methods for leather bags vary, but typically involve using a mild soap or leather cleaner. Avoid excessive water, direct sunlight, and harsh chemicals. Regularly moisturize the leather to prevent drying and cracking.",
    },
    {
      question: "What materials are commonly used in bag manufacturing?",
      answer:
        "Bags can be made from a variety of materials, including leather, canvas, polyester, nylon, and more. The choice of material depends on the type of bag and its intended use.",
    },
  ];

  return (
    <div className="container my-8 mx-auto md:px-6">
      <section className="mb-32">
        <h1 className="text-center text-5xl mb-8">
          Frequently Asked Questions
        </h1>
        <div className="grid gap-6 lg:grid-cols-3">
          {faqData.map((item, index) => (
            <QuestionItem key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Questions;
