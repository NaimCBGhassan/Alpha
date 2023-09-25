import styled from "styled-components";

interface Props {
  isActive: boolean;
}

const MenuCruz = ({ isActive }: Props) => {
  return (
    <>
      <SVG
        fill="#ffffff"
        viewBox="0 0 256 256"
        width="50"
        height="50"
        id="Flat"
        xmlns="http://www.w3.org/2000/SVG"
        className={isActive ? "bi bi-list isActive" : "bi bi-list"}
      >
        <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z" />
      </SVG>
    </>
  );
};

export default MenuCruz;

const SVG = styled.svg`
  position: absolute;

  opacity: 0;
  visibility: collapse;
  pointer-events: none;
  transform: rotate(-45deg);

  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out, transform 0.5s ease-in-out;

  &.isActive {
    opacity: 1;
    visibility: visible;
    pointer-events: visible;
    transform: rotate(0deg);
  }
`;
