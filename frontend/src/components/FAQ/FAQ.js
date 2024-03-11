import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "What is your return policy?",
      answer:
        "If you're not satisfied with your purchase, we accept returns within 30 days of delivery. To initiate a return, please email us atsupport@myecommercestore.com with your order number and a brief explanation of why you'are returning the item.",
    },
    {
      id: 2,
      question: "How do I track my order?",
      answer:
        "You can track your order by clicking the tracking link in your shipping confirmation email, or by logging into your account on our website and viewing the order details.",
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer:
        "We accept visa,mastercard,paypal payment method also we have cash on delivery system.",
    },
    {
      id: 4,
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team by emailing us at support@myecommercestore.com, or by calling us at (555) 123-4567 between the hours of 9am and 5pm EST, Monday through Friday.",
    },
    {
      id: 5,
      question: "Can I change or cancel my order?",
      answer:
        " Unfortunately, once an order has been placed, we are not able to make changes or cancellations. If you no longer want the items you've ordered, you can return them for a refund within 30 days of delivery.",
    },
    {
      id: 6,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to all countries in the world.",
    },
  ];

  return (
    <section className="faq my-8 px-10">
      <h2 className="text-3xl font-bold mb-4 text-green-500">FAQ</h2>
      <div className="mx-auto space-y-4">
        {/* single tab */}
        {faqData.map((data) => (
          <SingleFaq
            key={data.id}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </div>
    </section>
  );
};

const SingleFaq = ({ key, question, answer }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };
  return (
    <div className="border-b border-gray-300  pb-4">
      <button
        className="flex items-center justify-between w-full"
        onClick={() => handleTabClick(key)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {activeTab === key ? (
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </button>
      {activeTab === key && (
        <div className="mt-4">
          <p className="text-base text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
