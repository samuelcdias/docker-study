import { Document } from "mongoose";
export declare type RouteDocument = Route & Document;
export declare class Route {
    title: string;
    startPosition: {
        lat: number;
        lng: number;
    };
    endPosition: {
        lat: number;
        lng: number;
    };
}
export declare const RouteSchema: import("mongoose").Schema<Document<Route, any>, import("mongoose").Model<any, any, any>, undefined>;
