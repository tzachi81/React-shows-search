import placeHolderTile from "../../assets/tile_placeholder.jpg";
import {
  Button,
  Card,
  CardGroup,
  GridColumn
} from "semantic-ui-react";
import "./tile.css";
import React from "react";
import { IShowDetails } from "../../types";

interface Props {
  show: IShowDetails
}

export const Tile: React.FC<Props> = ({show}) => {

const {name, image, type, language, summary, url, rating } = show;


  const parser = new DOMParser();
  const parsedSummary = parser.parseFromString(summary, "text/html").children[0]
    .textContent;
  return (
    <GridColumn>
      <CardGroup>
        <Card
          image={image?.medium || placeHolderTile}
          header={name}
          meta={` ${rating?.average ? `Rating ${rating.average}` : 'Not rated'} `}
          description={parsedSummary}
          extra={` ${type} (${language})`}
          href={url}
          link
        />
      </CardGroup>
    </GridColumn>
  );
};
