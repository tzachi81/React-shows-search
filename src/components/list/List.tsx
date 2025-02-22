import React from "react";
import { Tile } from "../tile/Tile";
import { CardGroup, Container } from "semantic-ui-react";
import { IShow } from "../../types";
interface Props {
  shows: any;
}

export const List: React.FC<Props> = ({ shows }) => {
  return (
    <Container fluid >
    
      <CardGroup>
        {shows.map((showItem: IShow) => (
          <Tile key={showItem.show.id} show={showItem.show} />
        ))}
      </CardGroup>
      </Container>
  );
};
