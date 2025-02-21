import React from "react";
import { Tile } from "../tile/Tile";
import { Grid } from "semantic-ui-react";
import { IShow } from "../../types";
interface Props {
  shows: any;
}

export const List: React.FC<Props> = ({ shows }) => {
  return (
    <Grid doubling columns={6} className="list">
      {shows.map((showItem: IShow) => (
        <Tile key={showItem.show.id} show={showItem.show} />
      ))}
    </Grid>
  );
};
