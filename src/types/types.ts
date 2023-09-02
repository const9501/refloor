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

export interface ITableProps {
  variant: 'section' | 'element'
  heading: string | undefined
  sections?: ISection[]
  elements?: IElement[]
}

export interface ISectionCardProps {
  title?: string
  variant: 'section' | 'element'
  element?: IElement
}