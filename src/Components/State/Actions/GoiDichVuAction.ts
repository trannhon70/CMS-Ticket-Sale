import { ActionType } from "../Constants/ActionsTypes"


export interface GoiDichVu{
    STT: string,
      MaGoi?: string,
      TenGoiVe?: string,
      NgayApDung?:string,
      NgayHetHan?:string,
      GiaVe?: string,
      GiaVeCB?:string,
      TinhTrang?: string
}

export interface ALL_GoiDichVu{
    type : typeof ActionType.ALL_GOIDICHVU
    payload: GoiDichVu[]
}

export interface GoiDichVuList{
    goiDichVuList: Array<GoiDichVu>
}

export type Action = ALL_GoiDichVu