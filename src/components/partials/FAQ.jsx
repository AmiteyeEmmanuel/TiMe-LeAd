import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

function Faq() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const faqs = [
    {
      question: "Can I change my plan later?",
      answer:
        "High-Dimension Video is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World.",
      show: show1,
      setShow: setShow1,
    },
    {
      question: "Are the courses lifetime?",
      answer:
        "High-Dimension Video is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World.",
      show: show2,
      setShow: setShow2,
    },
    {
      question: "Do I get certified after taking courses?",
      answer:
        "High-Dimension Video is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World.",
      show: show3,
      setShow: setShow3,
    },
    {
      question: "How do I reach out to mentors?",
      answer:
        "High-Dimension Video is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World.",
      show: show4,
      setShow: setShow4,
    },
    {
      question: "Do we get job ready after taking courses?",
      answer:
        "High-Dimension Video is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World.",
      show: show5,
      setShow: setShow5,
    },
  ];

  return (
    <section id="reviews" className="relative mx-auto flex flex-col items-center justify-center py-12 md:py-20 px-4 sm:px-6">
      {/* Section background */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center pb-2 md:pb-20">
          <h1 className="text-4xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-sm text-black font-medium lg:w-10/12 mx-auto md:w-8/12">
            High-Dimension Video is Video Of Higher Resolution And Quality Than Standard. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image.
          </p>
        </div>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="my-4">
              <div className="flex justify-between items-center p-4 bg-white rounded shadow-xl cursor-pointer" onClick={() => faq.setShow(!faq.show)}>
                <p className="text-black font-bold">{faq.question}</p>
                {faq.show ? <MinusIcon width="24px" className="text-cool-gray-900" /> : <PlusIcon width="24px" className="text-cool-gray-900" />}
              </div>
              {faq.show && <div className="p-4 bg-white rounded shadow-xl mt-2"><p className="text-sm">{faq.answer}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
