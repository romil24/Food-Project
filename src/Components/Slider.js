import Carousel from 'react-bootstrap/Carousel';
function Slider() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src={require('./img/0f013262a5c22790214ded3e067e8cad.jpg')} alt="" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./img/8k-7680x4320-ultra-hd-resolution-desktop-yosemite-76ullen8pe3xbu2b.jpg')} alt="" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./img/forest-rays-of-light-re36erea0u4tf75y.jpg')} alt="" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default Slider;