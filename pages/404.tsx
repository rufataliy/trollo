import Head from "next/head";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../components";

export default function Not_Found() {
  return (
    <>
      <Head>
        <title>Trollo | 404 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Header />
        <main>
          <Container className="mt-2 p-3 p-md-5 ">
            <Row className="mb-5">
              <Col>
                <div className="w-100 mr-0 mr-sm-3 d-md-flex align-items-center mr-md-5 d-none">
                  <img className="w-100" src="/404.svg" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </>
  );
}
