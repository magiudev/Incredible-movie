import baseClient from '../client/baseClient';

// This class handles all HTTP requests related to movies
class MoviesApiCalls {
  private client: baseClient; // Made according to the dependency inversion principle
  private moviesBaseEndpoint: string;
  constructor(client: baseClient, moviesBaseEndpoint: string) {
    this.client = client;
    this.moviesBaseEndpoint = moviesBaseEndpoint;
  }

  async getTop8() {
    const endpoint = `${this.moviesBaseEndpoint}/get-top`;
    const res = await this.client.get({
      endpoint,
    });
    return res;
  }
}

export default MoviesApiCalls;
