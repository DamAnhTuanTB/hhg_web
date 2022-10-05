import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import styles from "./styles.module.scss";
import New from "~/assets/image/may-xoa-xam-laser-3-1.jpg";

import newsData from './data.json';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

const NewsHomePage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container>
      <Row className={styles.newsHome}>
        <h2 className="title-header">TIN TỨC MỚI</h2>

        <p className={styles.description}>
          Chuyên mục cung cấp các thông tin về các sản phẩm làm đẹp máy móc
          trang thiết bị phục vụ cho lĩnh vực spa làm đẹp, thông tin về thị
          trường cập nhật liên tục mỗi ngày.
        </p>

        <Slider className={styles.slider} {...settings}>
          {
            newsData.news.map((item) => (
              <div className={styles.cardItem} key={item.title}>
                <div className={styles.image}>
                  <Image src={item.image} width="100%" height="100%" alt="image" />
                </div>

                <div className={styles.content}>
                  <h5 className={styles.title}>
                    {item.title}
                  </h5>

                  <p className={styles.detail}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          }
        </Slider>
      </Row>
    </Container>
  );
};
export default NewsHomePage;
