import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import TodoList from '../../commonComponents/TodoList';

const TodoAddList = () => {
    return (
        <div
        className="container-fluid p-2"
        // style={{ backgroundColor: "#2F598C"}}
      >
         <Row className="row-sm" style={{marginTop:"50px"}}> 
          <Col lg={12} md={12} sm={12} xl={12} data-aos="fade-up">
            <Card className=" overflow-hidden">
              <Card.Header className="border-bottom">
                <Card.Title
                  className=" mb-0"
                  style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                >
                  To-do List
                </Card.Title>
              </Card.Header>
              <Card.Body className="p-3">
                <TodoList type="safety" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
}

export default TodoAddList;
