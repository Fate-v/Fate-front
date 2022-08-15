import {atom} from "recoil";

const nameState = atom<string>({
    key: 'nameState',
    default : '',
})

const roomNumber = atom<number>({
    key: 'nameState',
    default : 1,
})

export {nameState , roomNumber};