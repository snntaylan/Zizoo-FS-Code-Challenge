import { environment } from "./environment";

export const apolloClient = {
    uri: environment.apolloClient.uri,
    headers: environment.apolloClient.headers
};