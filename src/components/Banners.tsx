function Banners(props: any) {
    const { bannerData } = props;
    const banners = bannerData.map((banner: { image: string, altTxt: string }) => {
        console.log(banner.image)
        return (<div className="mySlides fade">
            <img src={banner.image} alt={banner.altTxt} />
        </div>);
    });

    return (<div className="slideshow-container">
        {banners}
        <a className="prev" href='#abc'>&#10094;</a>
        <a className="next" href='#abc'>&#10095;</a>
    </div>);
}

export default Banners;