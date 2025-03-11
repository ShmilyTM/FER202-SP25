import React from "react";
import PropTypes from "prop-types";
import { Card, Alert } from "react-bootstrap";

const UserProfile = ({ name, age }) => {
  return (
    <Card className="m-3 shadow-sm">
      <Card.Body>
        <Card.Title className="fw-bold">Thông Tin Người Dùng</Card.Title>

        {/* Kiểm tra lỗi */}
        {!name || typeof name !== "string" ? (
          <Alert variant="danger">Tên không hợp lệ hoặc không được cung cấp!</Alert>
        ) : !age || isNaN(age) ? (
          <>
            <p><strong>Tên:</strong> {name}</p>
            <Alert variant="danger">Tuổi phải là một số hợp lệ!</Alert>
          </>
        ) : (
          <>
            <p><strong>Tên:</strong> {name}</p>
            <p><strong>Tuổi:</strong> {age}</p>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default UserProfile;
