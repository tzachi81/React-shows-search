import React from "react";
import {
  Header,
  HeaderContent,
  HeaderSubheader,
  Icon,
} from "semantic-ui-react";
interface Props {}

export const AppHeader: React.FC<Props> = () => {
  return (
    <Header as="h2">
      <Icon name="tv" />
      <HeaderContent>
        Find TV Shows
        <HeaderSubheader>
          <span>
            Powered by:&nbsp;
            <a href="http://api.tvmaze.com">https://api.tvmaze.com</a>
          </span>
        </HeaderSubheader>
      </HeaderContent>
    </Header>
  );
};
