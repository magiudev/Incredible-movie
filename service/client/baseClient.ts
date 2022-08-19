export interface baseClientInput {
  endpoint: string;
  body?: Record<string, any>;
  headers?: Record<string, any>;
  queryParams?: Record<string, string>;
}

export type typeOfGetInput = Omit<baseClientInput, 'body'>;

interface baseClient {
  get(input: typeOfGetInput): Promise<Record<string, any>>;

  /* 
    TODO: 
    
    Add POST, PATCH and DELETE methods 
  
  */
}

export default baseClient;
