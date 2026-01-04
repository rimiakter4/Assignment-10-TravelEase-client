import React from 'react';

const Faq = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Frequently Asked Questions</h2>
      <div className="join join-vertical w-full bg-white shadow-md border border-gray-100 rounded-xl">
        {/* Question 1 */}
        <div className="collapse collapse-arrow join-item border-b border-gray-100">
          <input type="radio" name="my-accordion-4" defaultChecked /> 
          <div className="collapse-title text-xl font-medium text-gray-700">
            What documents do I need to rent a vehicle?
          </div>
          <div className="collapse-content text-gray-600"> 
            <p>You need a valid driving license, a national ID card (NID), and a copy of your passport (for international travelers).</p>
          </div>
        </div>
        {/* Question 2 */}
        <div className="collapse collapse-arrow join-item border-b border-gray-100">
          <input type="radio" name="my-accordion-4" /> 
          <div className="collapse-title text-xl font-medium text-gray-700">
            Is there a limit on mileage?
          </div>
          <div className="collapse-content text-gray-600"> 
            <p>Most of our daily rentals include unlimited mileage. However, long-term rentals may have specific limits mentioned in the agreement.</p>
          </div>
        </div>
        {/* Question 3 */}
        <div className="collapse collapse-arrow join-item">
          <input type="radio" name="my-accordion-4" /> 
          <div className="collapse-title text-xl font-medium text-gray-700">
            Can I cancel my booking later?
          </div>
          <div className="collapse-content text-gray-600"> 
            <p>Yes, you can cancel your booking through the dashboard. Free cancellation is available up to 24 hours before the pickup time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;