import React from "react";
import {
  WidgetsConatiner,
  WidgetsHeader,
  Article,
  ArticleLeft,
  ArticleRight,
} from "./Widgets.styles";

//? Icons
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <Article>
      <ArticleLeft>
        <FiberManualRecordIcon />
      </ArticleLeft>

      <ArticleRight>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </ArticleRight>
    </Article>
  );

  return (
    <WidgetsConatiner>
      <WidgetsHeader>
        <p>LinkedIn News</p>
        <InfoIcon />
      </WidgetsHeader>
      {newsArticle("PAPA React is back", "Top news - 9999 readers")}
      {newsArticle("Corona Virus : Update", "Top news - 845 readers")}
      {newsArticle("Tesla htis new highs", "Top news - 8000 readers")}
      {newsArticle("Bitcoin breaks $22k", "Top news - 2144 readers")}
      {newsArticle("Is Redux to good?", "Top news - 6535 readers")}
      {newsArticle("PAPA react lauches course?!", "Top news - 1234 readers")}
    </WidgetsConatiner>
  );
}

export default Widgets;
