import styled, { css } from "styled-components";
import { Direction, Justify, AlignItems, Spacings } from "../types";

const GridWrapper = styled.div<GridProps>`
  display: flex;
  flex-grow: 1;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: wrap;
  margin-left: ${({ theme, spacing }) => `-${theme.spacing[spacing]}`};
  margin-top: ${({ theme, spacing }) => `-${theme.spacing[spacing]}`};
  width: ${({ width, theme, spacing }) =>
    spacing !== "none" ? `calc(${width} + ${theme.spacing[spacing]})` : width};
  > div {
    padding-left: ${({ theme, spacing }) => theme.spacing[spacing]};
    padding-top: ${({ theme, spacing }) => theme.spacing[spacing]};
    // flex: 1;
  }
  ${({ mobileDirection }) =>
    mobileDirection &&
    css`
      @media (max-width: 767px) {
        flex-direction: ${mobileDirection};
      }
    `}
`;

export interface GridProps {
  spacing: Spacings;
  direction?: Direction;
  mobileDirection?: Direction;
  justifyContent?: Justify;
  alignItems?: AlignItems;
  width?: string;
}

const Grid: React.FunctionComponent<
  GridProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  spacing = "small",
  direction = "row",
  justifyContent = "space-between",
  alignItems = "stretch",
  children,
  width = "100%",
  ...rest
}) => {
  return (
    <GridWrapper
      alignItems={alignItems}
      justifyContent={justifyContent}
      direction={direction}
      spacing={spacing}
      width={width}
      {...rest}
    >
      {children}
    </GridWrapper>
  );
};

export default Grid;
