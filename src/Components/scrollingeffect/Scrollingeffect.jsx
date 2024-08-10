import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import HeadingComponent from '../../Components/HeadingComponent/HeadingComponent'
import scrollImg1 from "../../assets/scrollImg1.png";
import scrollImg2 from "../../assets/scrollImg2.png";
import scrollImg3 from "../../assets/scrollImg3.png";
import scrollImg4 from "../../assets/scrollImg4.png";
import scrollImg5 from "../../assets/scrollImg5.png";
import scrollImg6 from "../../assets/scrollImg6.png";
import scrollImg7 from "../../assets/scrollImg7.png";

gsap.registerPlugin(ScrollTrigger);

function Scrollingeffect() {
	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

			const animation = gsap.to(".photo:not(:first-child)", {
				opacity: 1, scale: 1, duration: 1, stagger: 1
			});

			ScrollTrigger.create({
				trigger: ".gallery",
				start: "top top",
				end: "bottom bottom",
				pin: ".rightblock",
				animation: animation,
				scrub: true,
				markers: true,
			});
		});
		return () => ctx.revert();
	}, []);

	return (
		<React.Fragment>
			
			<Box className="gallery" sx={{ display: "flex", marginTop: "100px",        
            }}>
				<Box className="left" sx={{
					width: "50%",
					marginLeft: "auto",
					"& .details": {
						height: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						width: "40vw",
						marginLeft: "auto",
						color: "#000",
						fontSize: "3rem",
						fontWeight: 900,
					}
				}}>
					<Box className="details">Build to Specification</Box>
					<Box className="details">Composite Matrix Design</Box>
					<Box className="details">Out of Autoclave Fabrication</Box>
					<Box className="details">Performance Testing</Box>
					<Box className="details">Structural Testing</Box>
					<Box className="details">Integration</Box>
					<Box className="details">Validation & Certification</Box>
				</Box>
				<Box className="rightblock" sx={{
					width: "50%",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}>
					<Box sx={{
						width: "40vw",
						height: "40vw",
						position: "relative",
						"& .photo": {
							position: "absolute",
							width: "100%",
							height: "100%",
							"& img": {
								height: "100%",
								width: "100%",
							}
						}
					}}>
						<Box className="photo">
							<img src={scrollImg1} alt="img-1" />
						</Box>
						<Box className="photo">
							<img src={scrollImg2} alt="img-2" />
						</Box>
						<Box className="photo">
							<img src={scrollImg3} alt="img-3" />
						</Box>
						<Box className="photo">
							<img src={scrollImg4} alt="img-4" />
						</Box>
						<Box className="photo">
							<img src={scrollImg5} alt="img-5" />
						</Box>
						<Box className="photo">
							<img src={scrollImg6} alt="img-6" />
						</Box>						
						<Box className="photo">
							<img src={scrollImg7} alt="img-7" />
						</Box>
					</Box>
				</Box>
			</Box>
		</React.Fragment >
	);
}

export default Scrollingeffect;
