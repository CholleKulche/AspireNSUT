import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Marquee from "react-fast-marquee";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 mt-0 z-[2]">
      <h1 className="text-white w-full z-[2] font-bold tracking-wider items-center uppercase text-center text-6xl md:text-8xl pb-12">
        Word to our Sponsors
      </h1>
      <p
        style={{ fontFamily: '"Gill Sans", sans-serif' }}
        className="text-center max-w-4xl mx-auto mb-12 px-4 text-gray-300 text-xs md:text-md sm:text-lg"
      >
        We would like to thank our sponsors for supporting Aspire 2026, the
        Annual Social Entrepreneurship Convention by Enactus NSUT. Their
        generous contributions and partnership have played a crucial role in
        making this event possible.
      </p>
      <p
        style={{ fontFamily: '"Gill Sans", sans-serif' }}
        className="text-center max-w-4xl mx-auto mb-12 px-4 text-gray-300 text-xs md:text-md sm:text-lg"
      >
        We would especially like to acknowledge and extend our sincere gratitude
        to EaseMyTrip for their valuable support as a sponsor of Aspire 2026.
        Their association with Aspire reflects a shared commitment to empowering
        young innovators, fostering impactful ideas, and driving meaningful
        change.
      </p>
      <Marquee
        autoFill
        gradient={false}
        speed={40}
        className="w-full bg-white py-4 mb-8"
      >
        {[
          "/Images/Sponsors/abani.jpeg",
          "/Images/Sponsors/Emt.png",
          "/Images/Sponsors/EZDine.jpeg",
          "/Images/Sponsors/Nine.jpeg",
          "/Images/Sponsors/TruScholar.jpeg",
        ].map((src, i) => (
          <div
            key={i}
            className="shrink-0 mx-4 flex items-center justify-center w-[100px] h-[70px] sm:w-[150px] sm:h-[85px] md:w-[180px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
          >
            <img
              src={src}
              alt={`sponsor-${i + 1}`}
              className="block max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </Marquee>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Link to="https://enactus.in" target="_blank">
            <img
              src="/Images/EnactusLogo.png"
              className="w-[20vh] object-cover"
              alt="Enactus NSUT"
            />
          </Link>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary text-lg mb-4">Quick Links</h4>
            <ul
              className="space-y-2"
              style={{ fontFamily: '"Gill Sans", sans-serif' }}
            >
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Events
                </Link>
              </li>
              <li>
                <HashLink
                  to="/#timeline"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Schedule
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div id="contact">
            <h4 className="text-primary  text-lg mb-4">Contact</h4>
            <p
              className="text-gray-300 mb-2"
              style={{ fontFamily: '"Gill Sans", sans-serif' }}
            >
              enactus@nsut.ac.in
            </p>
            <p
              className="text-gray-300"
              style={{ fontFamily: '"Gill Sans", sans-serif' }}
            >
              Phone: 9540994584, 7011994120
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Enactus NSUT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
