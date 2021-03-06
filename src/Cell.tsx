import styled from "styled-components";
import "./Cell.scss";

const Label = styled.span`
  font-weight: 500;
  font-variant-caps: all-small-caps;
`;

export const Cell = (props: any) => {
  return (
    <td className={"Cell" + (props.modifier && " Cell--" + props.modifier)}>
      {props.label && props.children && <Label>{props.label}: </Label>}
      {props.children}
    </td>
  );
};

export default Cell;
