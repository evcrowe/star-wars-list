import _ from "lodash";
import styled from "styled-components";

const ChipSpan = styled.span`
  display: inline-block;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 0.7rem;
  text-transform: uppercase;
  padding: 0 5px;
  border-radius: 5px;
  color: slategray;
  border: 2px solid slategray;
  white-space: nowrap;

  ${(props: any) => {
    switch (props.type) {
      case "legends":
        return `
          color: darkgoldenrod;
          border-color: goldenrod;
        `;
      case "canon":
        return `
          color: #444444;
          border-color: #444444;
        `;
      case "read":
        return `
          color: seagreen;
          border-color: seagreen;
        `;
      case "owned":
        return `
          color: saddlebrown;
          border-color: saddlebrown;
        `;
      default:
        return ``;
    }
  }}
`;

export const Chip = ({ label, modifier = _.camelCase(label) }) => (
  <ChipSpan type={modifier}>{label}</ChipSpan>
);

export default Chip;
