import React from 'react';
import { FaCarSide } from 'react-icons/fa';
import { FaClockRotateLeft, FaHandHoldingDollar } from 'react-icons/fa6';
// import { FaCarSide, FaShieldCheck, FaHandHoldingDollar, FaClockRotateLeft } from "react-icons/fa6";

const Aboutus = () => {
  // Main Color Theme Variables
  const colors = {
    primary: '#2563eb', // Professional Blue
    secondary: '#1e293b', // Deep Slate
    lightBg: '#f8fafc',
    white: '#ffffff',
    textGray: '#64748b'
  };

  return (
    <div style={{ backgroundColor: colors.white, color: colors.secondary, fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
      
      {/* 1. Hero Section - Focused on Vehicle Trust */}
      {/* <section style={{ 
        padding: '120px 20px', 
        textAlign: 'center', 
        background: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000") center/cover`,
        color: colors.white
      }}>
        <h1 className='text-white' style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px', letterSpacing: '-1px' }}>
          Drive Your Dreams
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6', opacity: '0.9', fontWeight: '300' }}>
          Providing reliable, high-quality vehicle solutions for individuals and businesses. Experience the road like never before.
        </p>
      </section> */}
      <section style={{ 
        padding: '120px 20px', 
        textAlign: 'center', 
        background: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000") center/cover`,
        color: colors.white
      }}>
        {/* Explicitly set color to white for h1 and p */}
        <h1 style={{ color: '#ffffff', fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px', letterSpacing: '-1px' }}>
          Drive Your Dreams
        </h1>
        <p style={{ color: '#ffffff', fontSize: '1.25rem', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6', opacity: '0.9', fontWeight: '300' }}>
          Providing reliable, high-quality vehicle solutions for individuals and businesses. Experience the road like never before.
        </p>
      </section>

      {/* 2. Brand Story Section */}
      <section style={{ maxWidth: '1200px', margin: '100px auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center' }}>
          
          {/* Visual Side: Large Vehicle Image */}
          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2072" 
              alt="Premium Vehicle" 
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.3)' }}
            />
            {/* Experience Badge */}
            <div style={{ 
              position: 'absolute', top: '-30px', left: '-30px', 
              backgroundColor: colors.primary, color: 'white', padding: '30px', 
              borderRadius: '12px', textAlign: 'center', border: '5px solid white'
            }}>
              <h2 style={{ margin: 0, fontSize: '2.5rem', lineHeight: '1' }}>15+</h2>
              <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Years of Excellence</p>
            </div>
          </div>

          {/* Text Side: Content */}
          <div style={{ flex: '1 1 400px' }}>
            <h4 style={{ color: colors.primary, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Our Mission</h4>
            <h2 style={{ fontSize: '2.8rem', margin: '0 0 25px 0', lineHeight: '1.1', fontWeight: '800' }}>
              We Redefine <span style={{color: colors.primary}}>Vehicle Mobility</span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: colors.textGray, lineHeight: '1.8', marginBottom: '25px' }}>
              Our platform was built to solve a single problem: making vehicle access simple and safe. From corporate fleets to weekend explorers, we provide the right wheels at the right time.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={checkItemStyle}>
                <div style={checkIconStyle}>✓</div> 
                <span style={{fontWeight: '600'}}>Full Comprehensive Insurance on all rentals.</span>
              </div>
              <div style={checkItemStyle}>
                <div style={checkIconStyle}>✓</div> 
                <span style={{fontWeight: '600'}}>Global Standard Safety Protocol.</span>
              </div>
              <div style={checkItemStyle}>
                <div style={checkIconStyle}>✓</div> 
                <span style={{fontWeight: '600'}}>Transparent Digital Management System.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Value Cards Section */}
      <section style={{ backgroundColor: colors.lightBg, padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Why We Stand Out</h2>
            <div style={{width: '80px', height: '5px', backgroundColor: colors.primary, margin: '15px auto'}}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {/* Card 1 */}
            <div style={featureCard}>
              <div style={iconWrapper}><FaCarSide size={32} color={colors.primary} /></div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '15px'}}>Modern Fleet</h3>
              <p style={{color: colors.textGray, lineHeight: '1.6'}}>Access our wide collection of the latest models, maintained to perfection for your comfort.</p>
            </div>

            {/* Card 2 */}
            {/* <div style={featureCard}>
              <div style={iconWrapper}><F size={32} color={colors.primary} /></div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '15px'}}>Top-Tier Safety</h3>
              <p style={{color: colors.textGray, lineHeight: '1.6'}}>Your safety is our priority. Every vehicle undergoes a 100-point mechanical checkup.</p>
            </div> */}

            {/* Card 3 */}
            <div style={featureCard}>
              <div style={iconWrapper}><FaHandHoldingDollar size={32} color={colors.primary} /></div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '15px'}}>Smart Pricing</h3>
              <p style={{color: colors.textGray, lineHeight: '1.6'}}>Get the best value for your money with our flexible pricing plans and loyalty rewards.</p>
            </div>

            {/* Card 4 */}
            <div style={featureCard}>
              <div style={iconWrapper}><FaClockRotateLeft size={32} color={colors.primary} /></div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '15px'}}>Instant Support</h3>
              <p style={{color: colors.textGray, lineHeight: '1.6'}}>Our 24/7 roadside assistance ensures that you are never alone during your journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Styles ---

const checkItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  color: '#1e293b'
};

const checkIconStyle = {
  backgroundColor: '#dbeafe',
  color: '#2563eb',
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: 'bold'
};

const featureCard = {
  backgroundColor: '#ffffff',
  padding: '50px 40px',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  borderBottom: '4px solid transparent',
  ':hover': {
    borderBottomColor: '#2563eb' // Note: Inline hover works better with CSS files, but this represents the logic
  }
};

const iconWrapper = {
  width: '80px',
  height: '80px',
  backgroundColor: '#eff6ff',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 25px auto'
};

export default Aboutus;