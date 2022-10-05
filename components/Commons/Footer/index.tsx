import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";
import logo from "~/assets/image/logo.png";
import footer from "~/assets/image/footer.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col className={styles.footerLogo}>
            <Image src={logo} width={250} height={250} alt="logo hhg" />
          </Col>
          <Col>
            <b className={styles.footerInfo}>
              <p>THÔNG TIN LIÊN HỆ NỘI THẤT ART:</p>
              <p>Công ty TNHH Tư Vấn Thiết Kế và Xây Dựng NTA</p>
              <p>
                Địa chỉ: 232 Đường số 8, P. Bình Hưng Hòa A, Quận Bình Tân, TP.
                HCM
              </p>
              <p>Hotline: 0908802348 (Mr. Trung)</p>
              <div className={styles.footerInfoContent}>
                Email: info.noithatart@gmail.com
              </div>
            </b>
          </Col>
          <Col className={styles.footerContact}>
            <div>
              {
                /*   <Facebook className={styles.footerContactIcon}></Facebook>
                <Mail className={styles.footerContactIcon}></Mail>
                <MapPin className={styles.footerContactIcon}></MapPin>
                */
              }
            </div>
            <div className={styles.footerContactIcon}>
              <Image src={footer} alt="footer" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
