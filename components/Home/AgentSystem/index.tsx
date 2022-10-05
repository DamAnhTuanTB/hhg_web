import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image'

import styles from './styles.module.scss';
import ImageMachine from '~/assets/image/bg-tri-nam-3.png';

const AgentSystem = () => {
  return (
    <Container>
      <Row className={styles.agentSystem}>
        <h2 className={styles.titleAgentSystem}>HỆ THỐNG ĐẠI LÝ</h2>

        <Col xs={12} md={6} className={styles.imageMachine} >
          <div className={styles.image} />
        </Col>
        <Col xs={12} md={6} className={styles.content}>
          <Row>
            <Col xs={3} className={styles.imageContent}>
              <div className={styles.image} />
            </Col>

            <Col xs={9} className={styles.productDescription}>
              <h4 className={styles.title}>MÁY LASER TRỊ NÁM</h4>
              <p className={styles.description}>
                Các dòng máu điều trị nám tại HPMED được nhiều chuuên gia đồu ngành da liễu và khách hàng đónh gió cao về chốt lượng.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default AgentSystem;
