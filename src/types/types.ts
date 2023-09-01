export interface IFloorsState {
  data: IData | null,
  status: string,
  error: string | null
}

export interface IData {
  sections: ISection[]
  elements: {
    [key: string]: IElement
  }
}

export interface IElement {
  id: string
  title: string
  price: string
  currency: string
  src: string
  photo: {
    id: number
    src: string
  }[]
}

export interface ISection {
  id: number
  title: string
  items: string[]
}

