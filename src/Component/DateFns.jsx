
import React from 'react';
import { format, addDays } from 'date-fns';
import { motion } from "framer-motion";

const DateFns = () => {
  const today = new Date();
  const nextWeek = addDays(today, 7);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 50,
      padding: '0 20px'
    }}>
      
 
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.05 }}
        style={{
          width: 300,
          height: 200,
          borderRadius: 20,
          overflow: 'hidden',
          marginBottom: 30,
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          position: 'relative'
        }}
      >
        <img
          src="https://i.ibb.co/MHxyzdg/photo-1494976388531-d1058494cdd8-1.jpg"
          alt="Ocean"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        {/* Optional overlay text */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          background: 'rgba(0,0,0,0.4)',
          color: '#fff',
          textAlign: 'center',
          padding: '10px 0',
          fontWeight: 'bold',
          fontSize: 16
        }}>
          Beautiful Ocean
        </div>
      </motion.div>

      {/* Date Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: 'center',
          backgroundColor: '#f3f4f6',
          padding: 25,
          borderRadius: 20,
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          width: 300
        }}
      >
        <p style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 16 }}>
          Today: {format(today, 'dd/MM/yyyy')}
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 16 }}>
          Next Week: {format(nextWeek, 'dd/MM/yyyy')}
        </p>
      </motion.div>
    </div>
  );
};

export default DateFns;
