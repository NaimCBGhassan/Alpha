import styled from "styled-components";
import { EnabledLanguages } from "../../context/language/LanguageProvider";
import { useState } from "react";

interface Props {
  setLanguage: React.Dispatch<React.SetStateAction<EnabledLanguages>>;
  language: EnabledLanguages;
}

const LanguageSelector = ({ language, setLanguage }: Props) => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const currentLanguage = options.find((option) => option.language === language);

  return (
    <Selector
      onClick={() => {
        setIsInView(!isInView);
      }}
    >
      <img src={currentLanguage?.path} alt={currentLanguage?.language} />

      {isInView && (
        <Dropdown>
          {options.map((option) => (
            <span key={option.language} onClick={() => setLanguage(option.language)}>
              {option.language}
            </span>
          ))}
        </Dropdown>
      )}
      <span>▼</span>
    </Selector>
  );
};

export default LanguageSelector;

const Selector = styled.div`
  cursor: pointer;

  display: flex;
  position: relative;

  color: ${({ theme }) => theme.palette.common.black};
  img {
    width: 28px;
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  text-align: center;

  position: absolute;
  top: 40px;

  span {
    font-size: 18px;
    line-height: 25px;
    width: 45px;
    background-color: white;

    &:hover {
      color: ${({ theme }) => theme.palette.secondary.contrastText};
      background-color: ${({ theme }) => theme.palette.secondary.main};
    }
  }

  :first-child {
    border-radius: 10px 10px 0 0;
  }
  :last-child {
    border-radius: 0 0 10px 10px;
  }
`;

interface Option {
  language: EnabledLanguages;
  path: string;
}
const options: Option[] = [
  {
    language: "es",
    path: "uy.png",
  },
  {
    language: "en",
    path: "eeuu.webp",
  },
];
