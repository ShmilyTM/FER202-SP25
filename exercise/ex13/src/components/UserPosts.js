import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const UserPosts = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, [userId]);

  return (
    <Row>
      {posts.map((post) => (
        <Col key={post.id} sm={12} md={6} lg={4} style={{ marginBottom: '15px' }}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserPosts;
