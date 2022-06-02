import {ActionType} from "../Constants/ActionsTypes";
//láy danh sách quản lý vé
export interface QuanLyVe {
    STT: string,
    code?: string,
    SoVe?: string,
    TinhTrang?: string,
    NgaySuDung?: string,
    NgayXuatVe?: string,
    check?: string
}
export interface ALL_QuanLyVe{
    type : typeof ActionType.ALL_QUANLYVE
    payload: QuanLyVe[],
}

export interface QuanLyVeList{
    //quanLyVe: QuanLyVe | null,
    quanLyVeList: Array<QuanLyVe>,
}

export type Action = ALL_QuanLyVe