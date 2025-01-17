import React from "react";
interface Props {
    createCategory: (body: {
        title: string;
    }) => Promise<{
        response: unknown;
        status: number;
    }>;
}
export declare function CreateCategory({ createCategory }: Props): React.JSX.Element;
export {};
