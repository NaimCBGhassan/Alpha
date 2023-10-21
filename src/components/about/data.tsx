import MisionIcon from "../../assets/about/MisionIcon";
import VisionIcon from "../../assets/about/VisionIcon";
import ValuesIcon from "../../assets/about/ValuesIcon";
import { Language } from "../../context/language/languageData";

const data = ({ mission, vision, values }: Language["about"]) => [
  {
    icon: <MisionIcon />,
    title: mission.title,
    body: mission.text,
    bgImage: "aboutmision.webp",
  },
  {
    icon: <VisionIcon />,
    title: vision.title,
    body: vision.text,
    bgImage: "aboutvision.webp",
  },
  {
    icon: <ValuesIcon />,
    title: values.title,
    body: values.text,
    bgImage: "aboutvalues.webp",
  },
];

export default data;
