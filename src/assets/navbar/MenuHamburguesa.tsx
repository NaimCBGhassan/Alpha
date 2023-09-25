import styled from "styled-components";

interface Props {
  isActive: boolean;
}

const MenuHamburgesa = ({ isActive }: Props) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="currentColor"
      className={isActive ? "bi bi-list isActive" : "bi bi-list"}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </SVG>
  );
};

export default MenuHamburgesa;

const SVG = styled.svg`
  position: absolute;

  transform: rotate(0deg);
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out, transform 0.5s ease-in-out;

  &.isActive {
    opacity: 0;
    visibility: collapse;
    pointer-events: none;
    transform: rotate(-45deg);
  }
`;
