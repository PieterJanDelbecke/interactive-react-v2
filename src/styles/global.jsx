/* eslint-disable react-refresh/only-export-components */
import { css, Global } from "@emotion/react";
import reset from "./reset";

export default () => {
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap");
      ${reset}
      body {
        font-family: "Overpass", sans-serif;
      }
    `}
  />;
};
