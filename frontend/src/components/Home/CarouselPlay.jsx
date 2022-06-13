import Carousel from 'react-bootstrap/Carousel';
import Typography from '@mui/material/Typography';
const CarouselPlay = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Typography variant="h5" component="h5">
                        First slide label</Typography>
                    <Typography variant="h6" component="h6">
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Typography>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <Typography variant="h5" component="h5">
                        Second slide label</Typography>
                    <Typography variant="h6" component="h6">
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Typography>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <Typography variant="h5" component="h5">
                        Third slide label</Typography>
                    <Typography variant="h6" component="h6">
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </Typography>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselPlay;