// // import React from 'react';

// // const DateFns = () => {
// //     return (
// //         <div>
            
// //         </div>
// //     );
// // };

// // export default DateFns;
// import React from 'react';
// import { format, addDays } from 'date-fns';
// import { motion } from "framer-motion"

// const DateFns = () => {
//   const today = new Date();
//   const nextWeek = addDays(today, 7);

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       marginTop: 50,
//       padding: '0 20px'
//     }}>
      
//       {/* Animated Image */}
//       <motion.img
//         src="https://i.ibb.co.com/MHxyzdg/photo-1494976388531-d1058494cdd8-1.jpg"
//         alt="Ocean"
//         style={{
//           width: 300,
//           height: 200,
//           borderRadius: 20,
//           objectFit: 'cover',
//           marginBottom: 30,
//           boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
//         }}
//         animate={{ y: [0, -15, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         whileHover={{ scale: 1.05 }}
//       />

//       {/* Date Info Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         style={{
//           textAlign: 'center',
//           backgroundColor: '#f3f4f6',
//           padding: 25,
//           borderRadius: 20,
//           boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
//           width: 300
//         }}
//       >
//         <p style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 16 }}>
//           Today: {format(today, 'dd/MM/yyyy')}
//         </p>
//         <p style={{ fontWeight: 'bold', fontSize: 16 }}>
//           Next Week: {format(nextWeek, 'dd/MM/yyyy')}
//         </p>
//       </motion.div>
//     </div>
//     // <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 }}>
//     //   <motion.div
//     //     animate={{ y: [0, -20, 0] }}
//     //     transition={{ duration: 1.5, repeat: Infinity }}
//     //     style={{
//     //       width: 150,
//     //       height: 150,
//     //       backgroundColor: '#ff6b6b',
//     //       display: 'flex',
//     //       alignItems: 'center',
//     //       justifyContent: 'center',
//     //       borderRadius: 20,
//     //       color: '#fff',
//     //       fontWeight: 'bold',
//     //       fontSize: 16,
//     //       marginBottom: 20,
//     //     }}
//     //   >
//     //     {/* Animated Box */}
        
//     //   </motion.div>

//     //   <div style={{ textAlign: 'center' }}>
//     //     <p>Today: {format(today, 'dd/MM/yyyy')}</p>
//     //     <p>Next Week: {format(nextWeek, 'dd/MM/yyyy')}</p>
//     //   </div>
//     // </div>
//   );
// };

// export default DateFns;
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
      
      {/* Animated Box with full image cover */}
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
