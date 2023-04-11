export interface State {
  fromLanguage: string;
  toLanguage: string;
  fromText: string;
  result: string;
  loading: boolean;
}
export type Action{
 | {type : "INTERCHANGE_LANGUAGES", payload:string}
 | {type : "SET_FROM_LANGUAGE"}
 | {type : "SET_TO_LANGUAGE", payload:string}
 | {type : "SET_RESULT", payload:string}
}
