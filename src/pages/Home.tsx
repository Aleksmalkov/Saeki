import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white">
    {/* Hero Section */}
    <section className="relative h-screen overflow-hidden text-white">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://saekicdn.azureedge.net/backgroundLoop0.mp4" type="video/mp4" />
        </video>
        {/* Cover image */}
      <img
        src="https://cdn.prod.website-files.com/64528c9313634ef6496dea1f/6457a94d6e54a9f71b31d8c7_hero-cover.png"
        alt="Hero Cover"
        className="absolute bottom-0 left-0 right-0 mx-auto w-full"
      />
      </div>

      {/* Hero content */}
      <div className="container max-w-screen-xl mx-auto flex flex-col items-left justify-center h-full space-y-6">
        <h1 className="text-6xl font-bold leading-tight tracking-wide z-10 text-left">
          Large Parts<br /> Manufactured <br /> by Robots
        </h1>
        <p className="text-xl max-w-lg z-10">
          Saeki is building the future of robotic manufacturing with flexible, lights-out factories of the future, leveraging automation for large parts delivered next day.
        </p>
        
        {/* Buttons */}
        <div className="space-x-4 z-10 flex">
          <Link
            to="/quote"
            className="z-10 flex justify-center font-bold items-center px-6 py-4 border border-white/10 rounded-full relative overflow-hidden hover:border-white/30"
            style={{
              padding: '18px 20px 16px 24px',
              lineHeight: '20px',
              gap: '8px'
            }}
          >
            <div className="button-text">REQUEST A QUOTE</div>
            <img
              src="https://cdn.prod.website-files.com/64528c9313634ef6496dea1f/64556d2de4efcfdebd53b6a9_ArrowLeft.svg"
              alt="Arrow Icon"
              className="ml-2 w-5 h-5"
            />
          </Link>
          <Link
            to="/learn-more"
            className="px-6 py-3 text-lg font-bold border-1 border-saeki-yellow text-saeki-yellow hover:text-black rounded-full z-1"
          >
            Learn More
          </Link>
        </div>
      </div>
      
      
    </section>

    {/* Mid Section with Highlight */}
    <section
      className="mx-auto text-center"
      style={{
        backgroundImage: 'linear-gradient(235deg, #292929, #0a0a0a)',
        borderRadius: '16px',
        paddingTop: '160px',
        paddingBottom: '160px',
        overflow: 'hidden',
      }}
    >
      <p className="text-5xl max-w-screen-md mx-auto text-saeki-yellow">
        All the benefits of owning a machine, without the downsides.
      </p>
      <p className="mt-4 max-w-screen-lg min-h-300 mx-auto text-white">
        Introducing our Robot-as-a-Service (RaaS) offering. Become the virtual
        owner of one of our robots at our factory and benefit from guaranteed
        uptime, and customized robotic manufacturing cell to your requirements.
      </p>
    </section>

    <section
      id="waitlist"
      className="container max-w-screen-xl mx-auto py-48 text-center"
    >
      <div
        className="py-32 px-8 rounded-[140px]"
        style={{ 
          opacity: 1, 
          transform: 'translate3d(0px, 0px, 0px)',
          backgroundImage: 'linear-gradient(115deg,#fffd9a,#faff00 85%)'
        }}
      >
        <p className="text-5xl text-black max-w-screen-sm mx-auto">
          Launching in 2024 with selected partners.
        </p>
        <div className="glowing-wrapper relative mt-8 inline-block">
          <div className="relative z-20 inline-block">
            <a
              href="/#"
              className="glowing-wrapper-button-2 flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-bold text-lg hover:bg-gray-800"
            >
              <div className="button-text">Interested?</div>
              <img
                src="https://cdn.prod.website-files.com/64528c9313634ef6496dea1f/64556d2de4efcfdebd53b6a9_ArrowLeft.svg"
                alt="Arrow Icon"
                className="ml-2 w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section
      className="mx-auto text-center"
      style={{
        backgroundImage: 'linear-gradient(235deg, #292929, #0a0a0a)',
        borderRadius: '16px',
        paddingTop: '160px',
        paddingBottom: '160px',
        overflow: 'hidden',
      }}
    >
       <div className="container mx-auto">
        <p className="text-5xl font-bold max-w-screen-md mx-auto">
          Our mission is supported by
        </p>

        <div className="container max-w-screen-xl mx-auto partners-row flex justify-center gap-12 mt-12">
          {/* Partner 1 */}
          <div className="gradient-border-wrapper rounded-lg">
            <div className="p-8 rounded-lg"
              style={{
                backgroundImage: 'linear-gradient(235deg, #151515, #0a0a0a)'
              }}
            >
              <div className="partner-logo-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/64528c9313634ef6496dea1f/64d3f05a83306ccf7fa3886e_Exor%20(1).svg"
                  alt="Exor"
                  loading="eager"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Partner 2 */}
          <div className="gradient-border-wrapper rounded-lg">
            <div className="p-8 rounded-lg"
              style={{
                backgroundImage: 'linear-gradient(235deg, #151515, #0a0a0a)'
              }}
            >
              <div className="partner-logo-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/64528c9313634ef6496dea1f/661516b30749cc219be6c03c_founderfulfuture.svg"
                  alt="Founderful Future"
                  loading="eager"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Partner 3 */}
          <div className="gradient-border-wrapper rounded-lg">
            <div className="p-8 rounded-lg"
              style={{
                backgroundImage: 'linear-gradient(235deg, #151515, #0a0a0a)'
              }}
            >
              <div className="partner-logo-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/64528c9313634ef6496dea1f/64d3f05a9a6113601eb91aa8_Getty%20(1).svg"
                  alt="Getty"
                  loading="eager"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Form Section */}
    <section id="quote" className="form-section pt-48 pb-8">
      <div className="container max-w-screen-xl mx-auto bg-gray-800 text-white p-[120px] rounded-[120px]"
        style={{ 
          opacity: 1, 
          transform: 'translate3d(0px, 0px, 0px)',
          backgroundImage: 'linear-gradient(115deg,#fffd9a,#faff00 85%)'
        }}
      >
        <div className='max-w-screen-md mx-auto text-black px-40'>
          <p className="text-5xl text-center">
            Get a quote now
          </p>
          <p className="text-center mb-6 mt-4">
            E-mail us at{' '}
            <a href="" className="underline">
              sales@saeki.ch
            </a>{' '}
            or fill out the form below. We will get back to you within 48 hours!
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="text-field w-full py-3 bg-transparent border-b-2 border-black text-black outline-none focus:border-yellow-500"
                name="firstName"
                placeholder="First Name*"
                required
              />
              <input
                className="text-field w-full py-3 bg-transparent border-b-2 border-black text-black outline-none focus:border-yellow-500"
                name="lastName"
                placeholder="Last Name*"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                className="text-field w-full py-3 bg-transparent border-b-2 border-black text-black outline-none focus:border-yellow-500"
                type="email"
                name="email"
                placeholder="E-mail*"
                required
              />
              <input
                className="text-field w-full py-3 bg-transparent border-b-2 border-black text-black outline-none focus:border-yellow-500"
                type="tel"
                name="phone"
                placeholder="Phone*"
                required
              />
            </div>
            <input
              className="text-field w-full py-3 bg-transparent border-b-2 border-black text-black outline-none focus:border-yellow-500"
              name="company"
              placeholder="Company"
            />
            <input
              className="text-field w-full py-3 bg-transparent border-b-2 border-black text-black outline-none focus:border-yellow-500"
              name="message"
              placeholder="Message"
            />

            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="tandc" required />
                <span>
                  * I agree to the{' '}
                  <a href="/terms-of-use" target="_blank" className="underline">
                    terms and conditions
                  </a>
                  .
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="contactme" />
                <span>
                  Keep me up-to-date on SAEKI's latest news! (See our{' '}
                  <a href="/privacy-policy" target="_blank" className="underline">
                    privacy policy
                  </a>
                  )
                </span>
              </label>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="relative z-10 flex w-full justify-center font-bold items-center px-6 py-4 bg-black text-white rounded-full relative overflow-hidden"
                style={{
                  padding: '18px 20px 16px 24px',
                  lineHeight: '20px',
                  gap: '8px',
                }}
              >
                <div className="button-text">Submit</div>
                <img
                  src="https://cdn.prod.website-files.com/64528c9313634ef6496dea1f/64556d2de4efcfdebd53b6a9_ArrowLeft.svg"
                  alt="Arrow Icon"
                  className="ml-2 w-5 h-5"
                />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;
