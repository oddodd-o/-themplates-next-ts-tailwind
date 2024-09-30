import { css } from '@emotion/react';
import tw, { theme, globalStyles as baseStyles } from 'twin.macro';

export const globalStyles = css([
    // baseStyles,
    {
        body: {
            ...tw`antialiased`,
            ...tw`font-sans`,
        },
    },
    css`
        .inner {
            ${tw`w-full max-w-screen-xl px-4 mx-auto`}
        }
    `,
]);
