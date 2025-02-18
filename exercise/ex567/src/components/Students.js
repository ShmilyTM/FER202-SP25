import React from "react";
import "./Student.css"; // Đảm bảo file này đã tồn tại trong components

const students = [
  { id: 1, name: "Nguyễn Văn A", class: "SE18C01", mssv: "DE18C01", image: "./images/student1.jpg" },
  { id: 2, name: "Trần Thị B", class: "SE18C02", mssv: "DE18C02", image: "./images/student2.jpg" },
  { id: 3, name: "Lê Văn C", class: "SE18C03", mssv: "DE18C03", image: "./images/student3.jpg" },
];

const Students = () => {
  return (
    <div className="students-container">
      <h2>Danh sách sinh viên</h2>
      <div className="students-grid">
        {students.map((student) => (
          <div key={student.id} className="student-item">
            <img src={student.image} alt={student.name} className="student-image" />
            <h3>{student.name}</h3>
            <p>Lớp: {student.class}</p>
            <p>MSSV: {student.mssv}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
