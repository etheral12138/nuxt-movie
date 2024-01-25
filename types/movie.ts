// export type Movie={
//     id:string,
//     year:string,
//     data:Meta[],
//     originalName:string,
//     doubanRating:string,
//     dateReleased:string
// }
// export type Meta={
//     poster:string,
//     name:string,
//     lang:string,
//     country:string,
//     language:string
//     description:string,
//     genre:string,
// }
export type Movie={
    id:number;
    title:string;
    genres:{
        id:number,
        name:string
    }[];
    release_date:string;
    runtime:number|null;
    overview:string;
    poster_path:string;
}