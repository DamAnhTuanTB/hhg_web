import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import styles from "./styles.module.scss";
import New from "~/assets/image/may-xoa-xam-laser-3-1.jpg";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "green" }}
      onClick={onClick}
    />
  );
}

const NewsHomePage = () => {
  const settings = {
    dots: true,
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
          <div className={styles.cardItem}>
            <div className={styles.image}>
              <Image src={New} width="100%" height="100%" alt="image" />
            </div>

            <div className={styles.content}>
              <h5 className={styles.title}>
                Các loại máy xoá xăm lông mày hiệu quả nhất hiện nay
              </h5>

              <p>
                Nhu cầu làm đẹp vẫn tăng cao nhờ vào sự phát triển và hiện đại
                của cuộc sống. Xoá xăm lông mày{" "}
              </p>
            </div>
          </div>

          <div className={styles.cardItem}>
            <div className={styles.image}>
              <Image src={New} width="100%" height="100%" alt="image" />
            </div>

            <div className={styles.content}>
              <h5 className={styles.title}>
                Các loại máy xoá xăm lông mày hiệu quả nhất hiện nay
              </h5>

              <p className={styles.detail}>
                Nhu cầu làm đẹp vẫn tăng cao nhờ vào sự phát triển và hiện đại
                của cuộc sống. Xoá xăm lông mày{" "}
              </p>
            </div>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.image}>
              <Image src={New} width="100%" height="100%" alt="image" />
            </div>

            <div className={styles.content}>
              <h5 className={styles.title}>
                Các loại máy xoá xăm lông mày hiệu quả nhất hiện nay
              </h5>

              <p>
                Nhu cầu làm đẹp vẫn tăng cao nhờ vào sự phát triển và hiện đại
                của cuộc sống. Xoá xăm lông mày{" "}
              </p>
            </div>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.image}>
              <Image src={New} width="100%" height="100%" alt="image" />
            </div>

            <div className={styles.content}>
              <h5 className={styles.title}>
                Các loại máy xoá xăm lông mày hiệu quả nhất hiện nay
              </h5>

              <p>
                Nhu cầu làm đẹp vẫn tăng cao nhờ vào sự phát triển và hiện đại
                của cuộc sống. Xoá xăm lông mày{" "}
              </p>
            </div>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.image}>
              <Image src={New} width="100%" height="100%" alt="image" />
            </div>

            <div className={styles.content}>
              <h5 className={styles.title}>
                Các loại máy xoá xăm lông mày hiệu quả nhất hiện nay
              </h5>

              <p>
                Nhu cầu làm đẹp vẫn tăng cao nhờ vào sự phát triển và hiện đại
                của cuộc sống. Xoá xăm lông mày{" "}
              </p>
            </div>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.image}>
              <Image src={New} width="100%" height="100%" alt="image" />
            </div>

            <div className={styles.content}>
              <h5 className={styles.title}>
                Các loại máy xoá xăm lông mày hiệu quả nhất hiện nay
              </h5>

              <p>
                Nhu cầu làm đẹp vẫn tăng cao nhờ vào sự phát triển và hiện đại
                của cuộc sống. Xoá xăm lông mày{" "}
              </p>
            </div>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.image}>
              <Image src={New} width="100%" height="100%" alt="image" />
            </div>

            <div className={styles.content}>
              <h5 className={styles.title}>
                Các loại máy xoá xăm lông mày hiệu quả nhất hiện nay
              </h5>

              <p>
                Nhu cầu làm đẹp vẫn tăng cao nhờ vào sự phát triển và hiện đại
                của cuộc sống. Xoá xăm lông mày{" "}
              </p>
            </div>
          </div>
        </Slider>
      </Row>
    </Container>
  );
};
export default NewsHomePage;
