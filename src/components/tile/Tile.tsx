import placeHolderTile from "../../assets/tile_placeholder.jpg";
import {
  Image,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta
} from "semantic-ui-react";
import "./tile.css";
import React from "react";
import { IShowDetails } from "../../types";

interface Props {
  show: IShowDetails;
}

export const Tile: React.FC<Props> = ({ show }) => {
  const { name, image, type, language, summary, url, rating } = show;

  const parser = new DOMParser();
  const parsedSummary = summary ? 
  parser.parseFromString(summary, "text/html").children[0].textContent :
  "We don't have a summary for No Return yet. Hang in there, or go ahead and contribute one."

  const onCardClick=() => window.open(url, '_blank');

  return (
        <Card onClick={onCardClick}>
          <Image src={image?.medium || placeHolderTile} wrapped ui={false} />
          <CardContent>
            <CardHeader>{name}</CardHeader>
            <CardMeta>
              <span className="date">
                {rating?.average ? (
                  <span>
                    <i className="star icon"></i> {rating.average}
                  </span>
                ) : (
                  "Not rated"
                )}
              </span>
            </CardMeta>
            <CardDescription>{parsedSummary}</CardDescription>
          </CardContent>
          <CardContent extra>{` ${type} (${language})`}</CardContent>
        </Card>
  );
};
