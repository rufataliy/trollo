import Head from "next/head";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Register from "../components/Register";
import Router from "next/router";
import { Header } from "../components";
import { register } from "../utils";

const notEmptyString = (str: string) => Boolean(str.trim());

export default function Home() {
  const handleSubmit = (values: DefaultRegisterValues) => {
    if (
      window &&
      notEmptyString(values.trollo_company) &&
      notEmptyString(values.trollo_name)
    ) {
      register(values) && Router.push("/boards");
    }
  };

  return (
    <>
      <Head>
        <title>Trollo | Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Header />
        <main>
          <Container className="mt-2 p-3 p-md-5 ">
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
                  <Register handleSubmit={handleSubmit} />
                </div>
              </div>
            </Row>
          </Container>
        </main>
      </div>
    </>
  );
}
