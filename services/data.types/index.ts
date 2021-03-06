export interface CategoryTypes {
    _id: string;
    name: string;
    __v: number;
}
export interface GameItemTypes {
    _id: string;
    status: string;
    name: string;
    thumbnail: string;
    category: CategoryTypes;
}

export interface BanksType {
    _id: string,
    name: string,
    nameBank: string,
    noRekening: string
}

export interface PaymentType {
    _id: string,
    type: string,
    status: string,
    banks: BanksType[]
}

export interface NominalType {
    _id: string,
    coinQuantity: number,
    coinName: string,
    price: number,
}

export interface LoginType {
    email: string,
    password: string
}

export interface UserType {
    id: string,
    username: string,
    email: string,
    name: string,
    avatar: string,
}

export interface JWTPayloadTypes {
    player: UserType,
    iat: number
}

export interface CheckOutType {
    voucher: string,
    nominal: string,
    payment: string,
    bank: string,
    name: string,
    accountUser: string
}

export interface historyVoucherTopup {
    category: string,
    coinName: string,
    coinQuantity: string,
    gameName: string,
    price: number,
    thumbnail: string
}

export interface historyPayment {
    name: string,
    nameBank: string,
    noRekening: number,
    type: string,
}

export interface HistoryTransactionType {
    _id: string,
    historyVoucherTopup: historyVoucherTopup,
    value: number,
    status: string,
    accountUser: string,
    tax: number,
    name: string,
    historyPayment: historyPayment
}
export interface TopupCategoriesType {
    _id: string,
    valeu: number,
    name: string,
}
