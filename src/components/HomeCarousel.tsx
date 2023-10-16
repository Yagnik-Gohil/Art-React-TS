import React from 'react'
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
const HomeCarousel = () => {
  return (
    <div>
       <div className="d-flex justify-content-center mt-4">
        <Carousel className="home-carousel">
          <Carousel.Item>
            <div className="carousel-image">
              <Image src="https://arts.mojarto.com/siteImages/homePageBanners/843292/original/843292.jpg" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image">
              <Image src="https://arts.mojarto.com/siteImages/homePageBanners/6563193/original/6563193.jpg" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image">
              <Image src="https://arts.mojarto.com/siteImages/homePageBanners/833511/original/833511.jpg" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default HomeCarousel
