import React from "react";
import { Chip } from "./Chip";
import Cell from "./Cell";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faJournalWhills,
  faBookOpen
} from "@fortawesome/free-solid-svg-icons";

const PublicationRow = styled.tr`
  box-sizing: border-box;
  position: relative;
  display: block;
  grid-template-columns: min-content 1fr 1fr 1fr min-content;
  grid-auto-rows: min-content;
  margin: 10px 5px;
  padding: 5px;
  background-color: ${(props: { read?: boolean }) =>
    props.read ? "#eeeeee" : "white"};
  border: 2px solid
    ${(props: { read?: boolean }) => (props.read ? "#dddddd" : "#dfdfdf")};
  border-radius: 8px;

  ${(props) =>
    props["aria-selected"] &&
    `
    border-color: rgba(100, 148, 237, 0.25);
    background-color: rgba(100, 148, 237, 0.25);
  `}

  &:hover {
    border-color: cornflowerblue;
  }
`;

const PublicationOverlay = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 100;
  border-radius: 8px;
`;

const Cover = styled.div`
  position: relative;
  width: 75px;
  line-height: 0;
  border-radius: 8px;
  margin-left: 5px;
  overflow: hidden;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const CoverOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props: { selected: boolean }) =>
    props.selected ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  color: white;
`;

const PlaceholderImage = styled.div`
  padding: 10px 5px;
  font-size: 50px;
  text-align: center;
  vertical-align: center;
  background-color: lightgray;
  color: white;
`;

export const Publication = (props: any) => {
  const [selected, setSelected] = React.useState(false);
  const { title, author, type, legendsOrCanon, cover, aby, series } = props;
  return (
    <PublicationRow
      read={props.read}
      onClick={() => setSelected(!selected)}
      aria-selected={selected}
    >
      <Cell modifier="selected">
        <PublicationOverlay />
        {/* <input type="checkbox" checked={selected} style={{ display: "none" }} /> */}
      </Cell>
      <Cell modifier="cover">
        <Cover>
          <CoverOverlay selected={selected}>
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </CoverOverlay>
          {cover ? (
            <img
              className="Publication-image"
              src={cover}
              alt={"Cover of " + title}
            />
          ) : (
            <PlaceholderImage>
              <FontAwesomeIcon icon={faJournalWhills} size="lg" />
            </PlaceholderImage>
          )}
        </Cover>
      </Cell>
      <Cell modifier="title">{title}</Cell>
      <Cell modifier="author">
        by <span className="Publication-author">{author}</span>
      </Cell>
      <Cell modifier="tags">
        <Chip label={legendsOrCanon} /> <Chip label={type} />
        {props.owned && (
          <React.Fragment>
            {" "}
            <Chip
              modifier="owned"
              label={
                <React.Fragment>
                  Owned <FontAwesomeIcon icon={faBookOpen} />
                </React.Fragment>
              }
            />
          </React.Fragment>
        )}
        {props.read && (
          <React.Fragment>
            {" "}
            <Chip
              modifier="read"
              label={
                <React.Fragment>
                  Read <FontAwesomeIcon icon={faCheck} size="sm" />
                </React.Fragment>
              }
            />
          </React.Fragment>
        )}
      </Cell>
      <Cell modifier="timeline" label="Timeline">
        {aby === undefined ? "?" : Math.abs(aby)} {aby >= 0 ? "ABY" : "BBY"}
      </Cell>
      <Cell modifier="series" label="Series">
        {series}
      </Cell>
    </PublicationRow>
  );
};

export default Publication;
