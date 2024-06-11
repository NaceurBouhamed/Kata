export interface NumberState {
    number?: number,
    msg?: string,
    error?: string | null,
    loading: boolean
}

export const initNumberState: NumberState  = {
    loading: false,
    error: null
};