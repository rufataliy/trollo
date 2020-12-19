import Head from "next/head";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Register from "../components/Register";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trollo | Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="mt-3 p-3 p-md-5 ">
        <Row className="mb-5">
          <Col>
            <h1 className="text-light text-center">Trello clone </h1>
            <h2 className="text-light text-center">
              Drag and drop cards, boards, calendar
            </h2>
          </Col>
        </Row>
        <Row>
          <div className="d-flex flex-column flex-sm-row w-100">
            <div className="w-100 mr-0 mr-sm-3 d-md-flex align-items-center mr-md-5 d-none">
              <img className="w-100" src="/hero.svg" alt="" />
            </div>
            <div className="w-100">
              <Register />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
