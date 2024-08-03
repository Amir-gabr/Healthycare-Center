//
//
//
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

//
import doc1 from "../assets/image/doc1.jpeg";
import doc2 from "../assets/image/doc2.jpeg";
import doc3 from "../assets/image/doc3.jpeg";
import doc4 from "../assets/image/doc4.jpeg";
import doc5 from "../assets/image/doc5.jpeg";
import doc6 from "../assets/image/doc6.jpeg";
//
import diagnostics from "../assets/image/1 (1).png";
import treatment from "../assets/image/1 (2).png";
import care from "../assets/image/1 (3).png";
import syringe from "../assets/image/1 (4).png";
import hospital from "../assets/image/1 (5).png";
import ambulance from "../assets/image/1 (6).png";
// import clinic from "../assets/image/1 (7).png";
//
import pic1 from "../assets/image/pic1.jpg";
import pic2 from "../assets/image/pic2.jpg";
import pic3 from "../assets/image/pic3.jpg";
import pic4 from "../assets/image/pic4.jpg";
import pic5 from "../assets/image/pic5.jpg";
import pic6 from "../assets/image/pic6.jpg";

//

export const LatestNewsData = [
  {
    id: 1,
    mainImage:pic1,
    docName: "Dr. John",
    docImage:doc1,
    dec: "In this hospital there are special surgeon for you ",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 21 July 2024
      </p>
    ),
  },
  {
    id: 2,
    mainImage: pic2,
    docName: "Dr. Michel",
    docImage: doc2,
    dec: "Can you get a diluvian or prescription online?",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 22 July 2024
      </p>
    ),
  },
  {
    id: 3,
    mainImage: pic3,
    docName: "Dr. Peter",
    docImage: doc3,
    dec: "Why should you take care of your health and your family?",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 23 July 2024
      </p>
    ),
  },
  {
    id: 4,
    mainImage: pic4,
    docName: "Dr. Kalian",
    docImage: doc4,
    dec: "Health will be a thing of the pest and here’s why",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 24 July 2024
      </p>
    ),
  },
  {
    id: 5,
    mainImage: pic5,
    docName: "Dr. Sonar ",
    docImage: doc5,
    dec: "Dental care for women is very important to us",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 25 July 2024
      </p>
    ),
  },
  {
    id: 6,
    mainImage: pic6,
    docName: "Dr. Mollika",
    docImage: doc6,
    dec: "Why is skin surgeon considered underrated?",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 26 July 2024
      </p>
    ),
  },
];
export const BlogsData = [
  {
    id: 1,
    mainImage: pic1,
    docName: "Dr. John",
    docImage: doc1,
    dec: "In this hospital there are special surgeon for you ",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 21 July 2024
      </p>
    ),
  },
  {
    id: 2,
    mainImage: pic2,
    docName: "Dr. Michel",
    docImage: doc2,
    dec: "Can you get a diluvian or prescription online?",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 22 July 2024
      </p>
    ),
  },
  {
    id: 3,
    mainImage: pic3,
    docName: "Dr. Peter",
    docImage: doc3,
    dec: "Why should you take care of your health and your family?",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 23 July 2024
      </p>
    ),
  },
  {
    id: 4,
    mainImage: pic4,
    docName: "Dr. Kalian",
    docImage: doc4,
    dec: "Health will be a thing of the pest and here’s why",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 24 July 2024
      </p>
    ),
  },

  {
    id: 5,
    mainImage: pic5,
    docName: "Dr. Sonar ",
    docImage: doc5,
    dec: "Dental care for women is very important to us",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 25 July 2024
      </p>
    ),
  },
  {
    id: 6,
    mainImage: pic6,
    docName: "Dr. Mollika",
    docImage: doc6,
    dec: "Why is skin surgeon considered underrated?",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 26 July 2024
      </p>
    ),
  },
  {
    id: 7,
    mainImage: pic2,
    docName: "Dr. Michel",
    docImage: doc2,
    dec: "Can you get a diluvian or prescription online?",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 22 July 2024
      </p>
    ),
  },
  {
    id: 8,
    mainImage: pic3,
    docName: "Dr. Michel",
    docImage: doc2,
    dec: "Can you get a diluvian or prescription online?",
    time: (
      <p className="flex items-center gap-2">
        <FaCalendarAlt /> 22 July 2024
      </p>
    ),
  },
];
export const TestimonialData = [
  {
    id: 1,
    title: "Patient",
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsa placeat. Corporis, debitis et, odit maiores sint harum dicta, iusto est nostrum dolorum recusandae deserunt? Porro, recusandae!",
    icon: <BsChatSquareQuoteFill className="text-6xl" />,
  },
  {
    id: 2,
    title: "Patient",
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsa placeat. Corporis, debitis et, odit maiores sint harum dicta, iusto est nostrum dolorum recusandae deserunt? Porro, recusandae!",
    icon: <BsChatSquareQuoteFill className="text-6xl" />,
  },
  {
    id: 3,
    title: "Patient",
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsa placeat. Corporis, debitis et, odit maiores sint harum dicta, iusto est nostrum dolorum recusandae deserunt? Porro, recusandae!",
    icon: <BsChatSquareQuoteFill className="text-6xl" />,
  },
  {
    id: 4,
    title: "Patient",
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsa placeat. Corporis, debitis et, odit maiores sint harum dicta, iusto est nostrum dolorum recusandae deserunt? Porro, recusandae!",
    icon: <BsChatSquareQuoteFill className="text-6xl" />,
  },

  {
    id: 5,
    title: "Patient",
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsa placeat. Corporis, debitis et, odit maiores sint harum dicta, iusto est nostrum dolorum recusandae deserunt? Porro, recusandae!",
    icon: <BsChatSquareQuoteFill className="text-6xl" />,
  },
  {
    id: 6,
    title: "Patient",
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsa placeat. Corporis, debitis et, odit maiores sint harum dicta, iusto est nostrum dolorum recusandae deserunt? Porro, recusandae!",
    icon: <BsChatSquareQuoteFill className="text-6xl shadow-lg" />,
  },
];
export const ServicesData = [
  {
    id: 1,
    title: "Surgery",
    image: syringe ,
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Diagnostics",
    image: diagnostics ,
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Treatment",
    image: treatment ,
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    title: "Vaccine",
    image: care ,
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },

  {
    id: 5,
    title: "Diagnostics",
    image:  hospital ,
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    title: "Emergency",
    image: ambulance ,
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  // {
  //   id: 7,
  //   title: "Diagnostics",
  //   image: clinic ,
  //   comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  // },
];
export const ServiceDetailsData = [
  {
    id: 1,
    title: "About",
    dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, asperiores nam! Qui, dignissimos. Culpa, saepe nihil modi placeat unde ipsam quos excepturi. Ex nulla provident cumque dolor asperiores delectus minus?",
  },
  {
    id: 2,
    title: "About",
    dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, asperiores nam! Qui, dignissimos. Culpa, saepe nihil modi placeat unde ipsam quos excepturi. Ex nulla provident cumque dolor asperiores delectus minus?",
  },
  {
    id: 3,
    title: "About",
    dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, asperiores nam! Qui, dignissimos. Culpa, saepe nihil modi placeat unde ipsam quos excepturi. Ex nulla provident cumque dolor asperiores delectus minus?",
  },
  {
    id: 4,
    title: "About",
    dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, asperiores nam! Qui, dignissimos. Culpa, saepe nihil modi placeat unde ipsam quos excepturi. Ex nulla provident cumque dolor asperiores delectus minus?",
  },
  {
    id: 5,
    title: "About",
    dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, asperiores nam! Qui, dignissimos. Culpa, saepe nihil modi placeat unde ipsam quos excepturi. Ex nulla provident cumque dolor asperiores delectus minus?",
  },
  {
    id: 6,
    title: "About",
    dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, asperiores nam! Qui, dignissimos. Culpa, saepe nihil modi placeat unde ipsam quos excepturi. Ex nulla provident cumque dolor asperiores delectus minus?",
  },
];
export const AboutData = [
  {
    id: 1,
    docName: "Dr. Addition Smith",
    job: "Dentist",
    docImage: doc1,
    social: (
      <div className="social flex items-center gap-3">
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaFacebookF className="text-xl  text-light" />
          </div>
        </div>
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaTwitter className="text-xl text-light" />
          </div>
        </div>
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaInstagram className="text-xl text-light" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    docName: "Dr. Mahfuz Riad",
    job: "Cardiologist",
    docImage: doc2,
    dec: "Can you get a diluvian or prescription online?",
    social: (
      <div className="social flex items-center gap-3">
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaFacebookF className="text-xl  text-light" />
          </div>
        </div>
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaTwitter className="text-xl text-light" />
          </div>
        </div>
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaInstagram className="text-xl text-light" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    docName: "Dr. David Benjamin",
    job: "Chiropractor",
    docImage: doc3,
    dec: "Why should you take care of your health?",
    social: (
      <div className="social flex items-center gap-3">
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaFacebookF className="text-xl  text-light" />
          </div>
        </div>
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaTwitter className="text-xl text-light" />
          </div>
        </div>
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaInstagram className="text-xl text-light" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    docName: "Dr. Addition Smith",
    job: "Cardiologist",
    docImage: doc4,
    dec: "Health will be a thing of the pest and here’s why",
    social: (
      <div className="social flex items-center gap-3">
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaFacebookF className="text-xl  text-light" />
          </div>
        </div>
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaTwitter className="text-xl text-light" />
          </div>
        </div>
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaInstagram className="text-xl text-light" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    docName: "Dr. Mahfuz Riad",
    job: "Chiropractor",
    docImage: doc5,
    dec: "Dental care for women is very important to us",
    social: (
      <div className="social flex items-center gap-3">
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaFacebookF className="text-xl  text-light" />
          </div>
        </div>
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaTwitter className="text-xl text-light" />
          </div>
        </div>
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaInstagram className="text-xl text-light" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    docName: "Dr. Mollika Packer",
    job: "Dentist",
    docImage: doc6,
    dec: "Why is skin surgeon considered underrated?",
    social: (
      <div className="social flex items-center gap-3">
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaFacebookF className="text-xl  text-light" />
          </div>
        </div>
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaTwitter className="text-xl text-light" />
          </div>
        </div>
        <div className="bg-primary rounded-lg border overflow-hidden">
          <div className="p-2 duration-300 hover:bg-orange-600  ">
            <FaInstagram className="text-xl text-light" />
          </div>
        </div>
      </div>
    ),
  },
];
export const StatisticsData = [
  {
    id: 1,
    state: 120,
    title: "Years With You",
    desc: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
  },
  {
    id: 2,
    state: 400,
    title: "Awards",
    desc: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
  },
  {
    id: 3,
    state: 240,
    title: "Doctors",
    desc: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
  },
  {
    id: 4,
    state: 800,
    title: "Satisfied Client",
    desc: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
  },
];
export const FAQsData = [
  {
    id: 1,
    head: "headingOne",
    question: "How doctor can ease your pain ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et non assumenda quaerat laborum mollitia doloribus voluptatem maiores vel porro cupiditate optio rerum alias quas quia molestias, aperiam in reiciendis.",
  },
  {
    id: 2,
    head: "headingTwo",
    question: "How do i Withdraw from a subject ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et non assumenda quaerat laborum mollitia doloribus voluptatem maiores vel porro cupiditate optio rerum alias quas quia molestias, aperiam in reiciendis.",
  },
  {
    id: 3,
    head: "headingThree",
    question: "UnderStand doctor before you regert ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et non assumenda quaerat laborum mollitia doloribus voluptatem maiores vel porro cupiditate optio rerum alias quas quia molestias, aperiam in reiciendis.",
  },
  {
    id: 4,
    head: "headingFour",
    question: "What types of systems do you use ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et non assumenda quaerat laborum mollitia doloribus voluptatem maiores vel porro cupiditate optio rerum alias quas quia molestias, aperiam in reiciendis.",
  },
  {
    id: 5,
    head: "headingFive",
    question: "We teach you how to feel better ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et non assumenda quaerat laborum mollitia doloribus voluptatem maiores vel porro cupiditate optio rerum alias quas quia molestias, aperiam in reiciendis.",
  },
  {
    id: 6,
    head: "headingSix",
    question: "How can i contact you ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et non assumenda quaerat laborum mollitia doloribus voluptatem maiores vel porro cupiditate optio rerum alias quas quia molestias, aperiam in reiciendis.",
  },
  {
    id: 7,
    head: "headingSeven",
    question: "What is the payment  statement ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et non assumenda quaerat laborum mollitia doloribus voluptatem maiores vel porro cupiditate optio rerum alias quas quia molestias, aperiam in reiciendis.",
  },
  {
    id: 8,
    head: "headingEight",
    question: "UnderStand doctor before you regert ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et non assumenda quaerat laborum mollitia doloribus voluptatem maiores vel porro cupiditate optio rerum alias quas quia molestias, aperiam in reiciendis.",
  },
  {
    id: 9,
    head: "headingNine",
    question: "What types of systems do you use ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et non assumenda quaerat laborum mollitia doloribus voluptatem maiores vel porro cupiditate optio rerum alias quas quia molestias, aperiam in reiciendis.",
  },
  {
    id: 10,
    head: "headingTen",
    question: "We teach you how to feel better ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et non assumenda quaerat laborum mollitia doloribus voluptatem maiores vel porro cupiditate optio rerum alias quas quia molestias, aperiam in reiciendis.",
  },
  {
    id: 11,
    head: "headingEleven",
    question: "How can i contact you ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et non assumenda quaerat laborum mollitia doloribus voluptatem maiores vel porro cupiditate optio rerum alias quas quia molestias, aperiam in reiciendis.",
  },
  {
    id: 12,
    head: "headingTwelve",
    question: "What is the payment  statement ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et non assumenda quaerat laborum mollitia doloribus voluptatem maiores vel porro cupiditate optio rerum alias quas quia molestias, aperiam in reiciendis.",
  },
];
