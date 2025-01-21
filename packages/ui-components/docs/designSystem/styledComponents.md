Previously, when styled-components were used, the design system behaved this way. We'll keep this for the record in case we want to use styled-components in the future.

<!-- @app/styles/button.ts -->

```typescript
import { css } from "styled-components";
import { RuleSet } from "styled-components/dist/types";
import { ButtonStyleProps } from "@/app/types";

export const BUTTON_DEFAULT_STYLE = css<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.WHITE};
  cursor: pointer;
  user-select: none;

  background-color: ${(props) => {
    return props.$stylestheme === buttonsTheme.BRIGHT ? COLORS.RED_600 : COLORS.GRAY_500;
  }};

  &:hover {
    background-color: ${(props) => {
      return props.$stylestheme === buttonsTheme.BRIGHT ? COLORS.RED_500 : COLORS.GRAY_400;
    }};
  }

  &:active {
    background-color: ${(props) => {
      return props.$stylestheme === buttonsTheme.BRIGHT ? COLORS.RED_600 : COLORS.GRAY_500;
    }};
  }
`;

export const BUTTON_SIZES: Record<buttonSize, RuleSet> = {
  small: css`
    padding: 0.8rem 0.4rem;
    width: fit-content;
    min-width: 3rem;
    height: 100%;
    min-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
  `,
  medium: css`
    padding: 1rem 0.6rem;
    width: fit-content;
    min-width: 5rem;
    height: 100%;
    min-height: 2.5rem;
    font-size: 1rem;
    font-weight: 700;
  `,
  large: css`
    padding: 1.2rem 0.8rem;
    width: fit-content;
    min-width: 8rem;
    height: 100%;
    min-height: 4rem;
    font-size: 1.2rem;
    font-weight: 700;
  `,
};
``;
```
