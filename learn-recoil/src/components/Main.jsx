import React from "react";
import { useTranslation } from "react-i18next";

export default function Main() {
  const { t, i18n } = useTranslation();

  const handleChangeLang = () => {
    if (i18n.language === "ko") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ko");
    }
  };

  return (
    <div>
      <h2>Language : {i18n.language}</h2>
      <h3>{t("welcome")}</h3>
      <p>{t("hello world")}</p>

      <p>
        {t("main/title")}
        <input type="text"></input>
      </p>
      <button onClick={handleChangeLang}>언어 변경</button>
    </div>
  );
}
