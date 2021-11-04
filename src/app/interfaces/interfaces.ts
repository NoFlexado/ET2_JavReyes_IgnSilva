export interface RespuestaToHeadLines {
    error: boolean,
    statusCode: number,
    message: string,
    data: Datos

}

export interface Datos{
    recovered: string,
    deaths: number,
    confirmed: number,
    lastChecked: string,
    lastReported: string,
    location: string
}