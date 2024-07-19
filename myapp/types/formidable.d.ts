// types/formidable.d.ts
declare module 'formidable' {
    import { IncomingHttpHeaders, IncomingMessage } from 'http';
    import { Stream } from 'stream';
  
    export interface File {
      size: number;
      path: string;
      name: string;
      type: string;
      lastModifiedDate: Date;
      hash?: string;
      toJSON(): object;
    }
  
    export interface Fields {
      [key: string]: string | Array<string>;
    }
  
    export interface Files {
      [key: string]: File | Array<File>;
    }
  
    export interface Options {
      encoding?: string;
      uploadDir?: string;
      keepExtensions?: boolean;
      maxFileSize?: number;
      maxFieldsSize?: number;
      maxFields?: number;
      hash?: string | boolean;
      multiples?: boolean;
    }
  
    export class IncomingForm {
      constructor(options?: Options);
      uploadDir: string;
      keepExtensions: boolean;
      maxFileSize: number;
      maxFieldsSize: number;
      maxFields: number;
      hash: string | boolean;
      multiples: boolean;
      encoding: string;
      headers: IncomingHttpHeaders;
      type: 'multipart' | 'urlencoded';
      bytesReceived: number;
      bytesExpected: number;
      onPart: (part: any) => void;
  
      parse(
        req: IncomingMessage,
        callback?: (
          err: any,
          fields: Fields,
          files: Files
        ) => void
      ): void;
  
      on(event: 'fileBegin', listener: (name: string, file: File) => void): this;
      on(event: 'progress', listener: (bytesReceived: number, bytesExpected: number) => void): this;
      on(event: 'field', listener: (name: string, value: string) => void): this;
      on(event: 'file', listener: (name: string, file: File) => void): this;
      on(event: 'end', listener: () => void): this;
      on(event: 'error', listener: (err: any) => void): this;
    }
  }
  