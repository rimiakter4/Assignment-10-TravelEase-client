// import React, { useContext, useState } from "react";
// import { motion } from "framer-motion";

// import Swal from "sweetalert2"; // সুন্দর অ্যালার্টের জন্য (না থাকলে বাদ দিতে পারেন)
// import { Authcontext } from "../../Context/AuthProvider";

// const MyProfile = () => {
//   // ১. বর্তমানে লগ-ইন থাকা ইউজারকে Context থেকে আনা হচ্ছে
//   const { user, setUser ,updateUserProfile } = useContext(Authcontext);

//   // এডিট মোডের জন্য স্টেট
//   const [isEditing, setIsEditing] = useState(false);
//   const [newName, setNewName] = useState(user?.displayName || "");
//   const [newPhoto, setNewPhoto] = useState(user?.photoURL || "");

//   // প্রোফাইল আপডেট করার ফাংশন
// //   const handleUpdate = async (e) => {
// //     e.preventDefault();
    
// //     try {
// //       // ২. ফায়ারবেস প্রোফাইল আপডেট (যদি ফায়ারবেস ব্যবহার করেন)
// //       await updateUserProfile (user, {
// //         displayName: newName,
// //         photoURL: newPhoto
// //       });

// //       // লোকাল স্টেট আপডেট করা যাতে রিলোড ছাড়াই নাম পরিবর্তন হয়
// //       setUser({ ...user, displayName: newName, photoURL: newPhoto });
      
// //       setIsEditing(false);
// //       Swal.fire("Success!", "Profile Updated Successfully", "success");
// //     } catch (error) {
// //       console.error(error);
// //       Swal.fire("Error", "Something went wrong!", "error");
// //     }
// //   };
// const handleUpdate = async (e) => {
//     e.preventDefault();
    
//     try {
//       // সঠিক পদ্ধতি: শুধু নাম এবং ফটোর লিঙ্ক পাস করুন
//       await updateUserProfile(newName, newPhoto);

//       // লোকাল স্টেট আপডেট করা যাতে সাথে সাথে পরিবর্তন দেখা যায়
//       setUser({ ...user, displayName: newName, photoURL: newPhoto });
      
//       setIsEditing(false);
//       Swal.fire({
//         title: "Success!",
//         text: "Profile Updated Successfully",
//         icon: "success",
//         timer: 2000,
//         showConfirmButton: false
//       });
//     } catch (error) {
//       console.error(error);
//       Swal.fire("Error", "Something went wrong! Check your console.", "error");
//     }
//   };

//   if (!user) {
//     return <div className="text-center py-20">Please login to see your profile.</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
//         {/* উপরের কভার সেকশন */}
//         <div className="h-44 bg-gradient-to-b from-blue-400 to-blue-600 relative">
//           <h2 className="text-white text-center pt-10 text-2xl font-bold">Welcome, {user.displayName || "User"}!</h2>
//         </div>

//         <div className="px-8 pb-10">
//           {/* প্রোফাইল ইমেজ */}
//           <div className="relative -mt-16 flex justify-center">
//             <img
//               src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user-placeholder.png"}
//               alt="Profile"
//               className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover bg-white"
//             />
//           </div>

//           {!isEditing ? (
//             /* --- ভিউ মোড: এখানে ইউজারের মেইন ইনফো দেখাবে --- */
//             <div className="text-center mt-6">
//               <h3 className="text-2xl font-bold text-gray-800">{user?.displayName || "Name Not Set"}</h3>
//               <p className="text-gray-500 mb-6">{user?.email}</p>
              
//               <div className="flex justify-center gap-4 border-t pt-6">
//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-2 rounded-lg font-semibold transition-all"
//                 >
//                   Edit Profile
//                 </button>
//               </div>
//             </div>
//           ) : (
//             /* --- এডিট মোড: ফরম দেখাবে আপডেট করার জন্য --- */
//             <motion.form 
//               initial={{ opacity: 0, y: 10 }} 
//               animate={{ opacity: 1, y: 0 }}
//               onSubmit={handleUpdate} 
//               className="mt-8 space-y-4"
//             >
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-1">Your Name</label>
//                 <input
//                   type="text"
//                   className="w-full border p-3 rounded-xl outline-sky-500"
//                   value={newName}
//                   onChange={(e) => setNewName(e.target.value)}
//                   placeholder="Update your name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-1">Photo URL</label>
//                 <input
//                   type="text"
//                   className="w-full border p-3 rounded-xl outline-sky-500"
//                   value={newPhoto}
//                   onChange={(e) => setNewPhoto(e.target.value)}
//                   placeholder="Update photo link"
//                 />
//               </div>
//               <div className="flex gap-2 pt-4">
//                 <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold flex-1">
//                   Save
//                 </button>
//                 <button 
//                   type="button" 
//                   onClick={() => setIsEditing(false)} 
//                   className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-bold flex-1"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </motion.form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Authcontext } from "../../Context/AuthProvider";
import { updateEmail } from "firebase/auth"; // ইমেল আপডেটের জন্য

const MyProfile = () => {
  const { user, setUser, updateUserProfile } = useContext(Authcontext);

  const [isEditing, setIsEditing] = useState(false);
  
  // ইনপুট ফিল্ডে আগের ডেটা দেখানোর জন্য স্টেট
  const [newName, setNewName] = useState("");
  const [newPhoto, setNewPhoto] = useState("");
  const [newEmail, setNewEmail] = useState("");

  // যখনই ইউজার এডিট বাটনে ক্লিক করবে, স্টেটে বর্তমান ডাটা সেট হবে
  useEffect(() => {
    if (user) {
      setNewName(user.displayName || "");
      setNewPhoto(user.photoURL || "");
      setNewEmail(user.email || "");
    }
  }, [user, isEditing]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    try {
      // ১. নাম এবং ফটো আপডেট (আপনার AuthProvider থেকে)
      await updateUserProfile(newName, newPhoto);

      // ২. ইমেল আপডেট (যদি ইমেল পরিবর্তন করা হয়)
      if (newEmail !== user.email) {
        await updateEmail(user, newEmail);
      }

      // ৩. লোকাল স্টেট আপডেট
      setUser({ ...user, displayName: newName, photoURL: newPhoto, email: newEmail });
      
      setIsEditing(false);
      Swal.fire("Success!", "Profile information updated!", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Could not update profile. You might need to re-login to change email.", "error");
    }
  };

  if (!user) return <div className="text-center py-20">Please login.</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* ব্যানার */}
        <div className="h-44 bg-gradient-to-b from-blue-400 to-blue-600 relative overflow-hidden">
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
           <h2 className="text-white text-center pt-10 text-2xl font-bold relative z-10">
              Welcome, {user.displayName || "User"}!
           </h2>
        </div>

        <div className="px-8 pb-10">
          <div className="relative -mt-16 flex justify-center">
            <img
              src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user-placeholder.png"}
              className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover bg-white"
              alt="Profile"
            />
          </div>

          {!isEditing ? (
            /* --- View Mode --- */
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-gray-800">{user.displayName || "No Name"}</h3>
              <p className="text-gray-500 mb-6 font-semibold">{user.email}</p>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-2 rounded-lg font-semibold transition-all"
              >
                Edit Profile
              </button>
            </div>
          ) : (
            /* --- Edit Mode (এখানে আগের তথ্য ইনপুটে দেখা যাবে) --- */
            <motion.form 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleUpdate} 
              className="mt-8 space-y-4"
            >
              <div>
                <label className="block text-sm font-bold text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full border p-3 rounded-xl outline-sky-500 bg-gray-50"
                  value={newName} // আগের নাম দেখা যাবে
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full border p-3 rounded-xl outline-sky-500 bg-gray-50"
                  value={newEmail} // আগের ইমেল দেখা যাবে
                  onChange={(e) => setNewEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700">Photo URL</label>
                <input
                  type="text"
                  className="w-full border p-3 rounded-xl outline-sky-500 bg-gray-50"
                  value={newPhoto} // আগের ফটো লিংক দেখা যাবে
                  onChange={(e) => setNewPhoto(e.target.value)}
                />
              </div>

              <div className="flex gap-2 pt-4">
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold flex-1">Save</button>
                <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-bold flex-1">Cancel</button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;