/** MouseEvent */
import { ColorsByGroup, ColorGroup } from '@/app/types';
interface DragHorizonProps {
    event: MouseEvent | React.MouseEvent<HTMLButtonElement, MouseEvent>;
    leftCallback: () => void;
    rightCallback: () => void;
}
export declare function dragHorizon({ event, leftCallback, rightCallback }: DragHorizonProps): void;
/** Time */
export declare function changeToLocaleTime(time: Date, change?: (data: Date) => string): string;
export declare function changeToDate(time: Date): string;
export declare function changeToTime(time: Date): string;
/** Colors */
export declare function getColorsByGroup<T extends ColorGroup>(color: T): ColorsByGroup<T>;
export {};
