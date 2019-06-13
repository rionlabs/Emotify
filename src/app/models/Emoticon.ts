import {MiniEmoticon} from "./MiniEmoticon";

export interface Emoticon extends MiniEmoticon {
    hash: string;
    rank: number;
    useCounter: number;
}
