export interface IUriListing {
  fullUri: string,
  shortUri: string,
  origin: string,
  pathname: string,
  search: string,
  hash: string,
  createdAt: string,
  updatedAt: string
}

export interface IUriListingApi {
  count: number,
  data: IUriListing[],
  pagination?: any,
  success: boolean,
  total: number
}