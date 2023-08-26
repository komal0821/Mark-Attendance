import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './dashboard.css';
import Logo from '../images/logo1.png'

function MarkAttendance() {
  const [formData, setFormData] = useState({
    department: 'Select your dept',
    specialisation: 'Select your specialisation',
    rollNo: '',
    classSection: '',
    facultyName: '',
    subject: '',
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDepartmentChange = (event) => {
    setFormData((prevData) => ({ ...prevData, department: event.target.value }));
  };

  const handleSpecialisationChange = (event) => {
    setFormData((prevData) => ({ ...prevData, specialisation: event.target.value }));
  };

  const handleMarkAttendance = (event) => {
    event.preventDefault();
    // Perform any validation you need here before marking attendance

    // Show toast notification after attendance is marked
    toast.success('Attendance marked successfully', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="container mark-attendance-container">
      <div className='brand'>
                        <img src={Logo} alt="Logo" />
                        <h1>SRMIST</h1>
                    </div>
      <h3 className="heading">Mark Attendance</h3>

      <Form className="attendance-form">
      <Form.Group controlId="department">
        <Form.Label className="roll-no">Your Department</Form.Label>
        <select
          className="dropdown department-dropdown"
          name="department"
          value={formData.department}
          onChange={handleDepartmentChange}
          >
          <option value="Select your dept">Select your dept</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="Mech">Mech</option>
          <option value="Civil">Civil</option>
          <option value="EEE">EEE</option>
        </select>
      </Form.Group>

      
        <Form.Group controlId="rollNo">
          <Form.Label className="roll-no">Reg. Number</Form.Label>
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleFormChange}
            className="form-control"
          />
        </Form.Group>

        <Form.Group controlId="specialisation">
          <Form.Label className="roll-no">Your Specialisation</Form.Label>
          <select
            className="dropdown-1 specialisation-dropdown"
            name="specialisation"
            value={formData.specialisation}
            onChange={handleSpecialisationChange}
          >
            <option value="select">Select your Spec</option>
            <option value="CSE">CSE-IOT</option>
            <option value="IT">CSE-BDA</option>
            <option value="ECE">CSE-AIML</option>
            <option value="Mech">CDE-CS</option>
            <option value="Other">Other</option>
          </select>
        </Form.Group>

          <Form.Group controlId="classSection">
          <Form.Label className='roll-no'>Class/Section</Form.Label>
          <Form.Control
            type="text"
            name="classSection"
            value={formData.classSection}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Group controlId="facultyName">
          <Form.Label className='roll-no'>Faculty Name</Form.Label>
          <Form.Control
            type="text"
            name="facultyName"
            value={formData.facultyName}
            onChange={handleFormChange}
          />
        </Form.Group>

          <Form.Group controlId="subject">
          <Form.Label className='roll-no'>Subject Name</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleFormChange}
          />
        </Form.Group>

        <button className="mark-button" onClick={handleMarkAttendance}>Mark Attendance</button>
      </Form>
    </div>
  );
}

export default MarkAttendance;
