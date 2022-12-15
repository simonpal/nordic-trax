import styled from "styled-components";
import { AlignItems, ColumnSize, Direction, Justify } from "../types";

const StyledColumn = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-basis: ${({ theme, xs }) => `${(Number(xs) / theme.columns) * 100}%`};
  width: ${({ theme, xs }) => `${(Number(xs) / theme.columns) * 100}%`};
  max-width: ${({ theme, xs }) => `${(Number(xs) / theme.columns) * 100}%`};
  margin-left: ${({ theme, xsOffset }) =>
    xsOffset ? `${(Number(xsOffset) / theme.columns) * 100}%` : "0"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  > div {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
  }
  @media (${({ theme }) => theme.breakpoints.sm}) {
    flex-basis: ${({ theme, sm }) => `${(Number(sm) / theme.columns) * 100}%`};
    width: ${({ theme, sm }) => `${(Number(sm) / theme.columns) * 100}%`};
    max-width: ${({ theme, sm }) => `${(Number(sm) / theme.columns) * 100}%`};
    margin-left: 0;
    margin-left: ${({ theme, smOffset }) =>
      smOffset ? `${(Number(smOffset) / theme.columns) * 100}%` : "0"};
  }
  @media (${({ theme }) => theme.breakpoints.md}) {
    flex-basis: ${({ theme, md }) => `${(Number(md) / theme.columns) * 100}%`};
    width: ${({ theme, md }) => `${(Number(md) / theme.columns) * 100}%`};
    max-width: ${({ theme, md }) => `${(Number(md) / theme.columns) * 100}%`};
    margin-left: 0;
    margin-left: ${({ theme, mdOffset }) =>
      mdOffset ? `${(Number(mdOffset) / theme.columns) * 100}%` : "0"};
  }
  @media (${({ theme }) => theme.breakpoints.lg}) {
    flex-basis: ${({ theme, lg }) => `${(Number(lg) / theme.columns) * 100}%`};
    width: ${({ theme, lg }) => `${(Number(lg) / theme.columns) * 100}%`};
    max-width: ${({ theme, lg }) => `${(Number(lg) / theme.columns) * 100}%`};
    margin-left: ${({ theme, lgOffset }) =>
      lgOffset ? `${(Number(lgOffset) / theme.columns) * 100}%` : "0"};
  }
`;

const ColumnContent = styled.div<ColumnProps>`
  border-style: solid;
  border-color: ${({ theme, borderColor }) =>
    borderColor || theme.colors.borderColor};
  border-width: ${({ borderLeft, borderRight, borderBottom, borderTop }) =>
    `${borderTop ? "1px" : "0"} 
       ${borderRight ? "1px" : "0"} 
       ${borderBottom ? "1px" : "0"} 
       ${borderLeft ? "1px" : "0"}`};
  max-width: 100%;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
`;

export interface ColumnProps {
  xs?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xsOffset?: ColumnSize;
  smOffset?: ColumnSize;
  mdOffset?: ColumnSize;
  lgOffset?: ColumnSize;
  alignItems?: AlignItems;
  justifyContent?: Justify;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderTop?: boolean;
  borderColor?: string;
  flexGrow?: "1" | "0";
  flexDirection?: Direction;
}

const Column: React.FunctionComponent<
  ColumnProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  xs = "12",
  sm = "12",
  md = "12",
  lg = "12",
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  children,
  justifyContent = "flex-start",
  alignItems = "stretch",
  borderRight = false,
  borderTop = false,
  borderLeft = false,
  borderBottom = false,
  borderColor,
  flexGrow,
  flexDirection,
  ...rest
}) => {
  return (
    <StyledColumn
      xsOffset={xsOffset}
      smOffset={smOffset}
      mdOffset={mdOffset}
      lgOffset={lgOffset}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexGrow={flexGrow || "1"}
    >
      <ColumnContent
        borderRight={borderRight}
        borderTop={borderTop}
        borderLeft={borderLeft}
        borderBottom={borderBottom}
        borderColor={borderColor}
        flexDirection={flexDirection}
        {...rest}
      >
        {children}
      </ColumnContent>
    </StyledColumn>
  );
};

export default Column;
