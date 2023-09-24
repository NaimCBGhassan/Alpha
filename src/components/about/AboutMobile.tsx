import styled from "styled-components";
import CardMobile from "./CardMobile";
import MisionIcon from "../../assets/MisionIcon";
import VisionIcon from "../../assets/VisionIcon";
import ValuesIcon from "../../assets/ValuesIcon";

const AboutMobile = () => {
  return (
    <CardContainer>
      {data.map((el, index) => (
        <CardMobile key={index} icon={el.icon} title={el.title} body={el.body} bgImage={el.bgImage} />
      ))}
    </CardContainer>
  );
};

export default AboutMobile;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const data = [
  {
    icon: <MisionIcon />,
    title: "MISION",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit molestias quia error repudiandae ut expedita cum, eum molestiae illo soluta? Ex accusantium nobis",
    bgImage: "AboutMision.jpg",
  },
  {
    icon: <VisionIcon />,
    title: "VISION",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit molestias quia error repudiandae ut expedita cum, eum molestiae illo soluta? Ex accusantium nobis",
    bgImage: "AboutVision.jpg",
  },
  {
    icon: <ValuesIcon />,
    title: "VALORES",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit molestias quia error repudiandae ut expedita cum, eum molestiae illo soluta? Ex accusantium nobis",
    bgImage: "AboutValues.jpg",
  },
];
