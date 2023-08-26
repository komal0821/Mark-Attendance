// import React from 'react'
// import { BrowserRouter, Routes, Route, Router,Link } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import StudentProfile from './components/StudentProfile';
// import MarkAttendance from './components/MarkAttendance';

// export default function App() {
//   return <BrowserRouter>
//      <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Student Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/student-profile">Student Profile</Link>
//           </li>
//           <li>
//             <Link to="/mark-attendance">Mark Attendance</Link>
//           </li>
//         </ul>
//       </nav>
//     <Routes>
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/student-profile" element={<StudentProfile />} />
//       <Route path="/mark-attendance" element={<MarkAttendance />} />
//       </Routes>
//       </Router>
//   </BrowserRouter>;
// }

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
       
    </BrowserRouter>
  );
}
