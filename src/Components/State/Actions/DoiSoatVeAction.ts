import {ActionType} from '../Constants/ActionsTypes'
export interface DoiSoatVe{
    STT: string,
    SoVe?: string,
    NgaySuDung?: string,
    TenLoaiVe?: string,
    check?: string,
    ChuaDoiSoat?: string
}

export interface ALL_DoiSoatVe {
    type: typeof ActionType.ALL_DOISOATVE,
    payload: DoiSoatVe[]
}

export interface DoiSoatVeList{
    doiSoatVeList: Array<DoiSoatVe>
}

export type Action = ALL_DoiSoatVe