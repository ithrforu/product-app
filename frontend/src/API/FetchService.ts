import axios, { AxiosResponse } from "axios";

export default class FetchService{
  static controller: AbortController = new AbortController();
  private static url: string = 'http://localhost:3333/products';

  static async getAll(limit: number, sort: string, order: string, page: number): Promise<AxiosResponse> {
    const response = await axios.get(FetchService.url, {
      params: {
        signal: FetchService.controller.signal,
        _limit: limit,
        _sort: sort,
        _order: order,
        _page: page
      }
    });
    return response;
  }

  static async sendProduct(product: FormData): Promise<AxiosResponse> {
    const response = await axios.post(
      FetchService.url,
      product,
      {
      params: {
        signal: FetchService.controller.signal,
      }
    }
    );
    return response;
  }

  static async editProduct(product: FormData): Promise<AxiosResponse> {
    const response = await axios.patch(
      FetchService.url + '/' + product.get('id'),
      product,
      {
      params: {
        signal: FetchService.controller.signal,
      }
    }
    );

    return response;
  }

  static async deleteProduct(id: number): Promise<AxiosResponse> {
    const response = await axios.delete(
      FetchService.url + '/' + id,
      {
      params: {
        signal: FetchService.controller.signal,
      }
    }
    );

    return response;
  }

  static abort(): void {
    this.controller.abort();
  }
}