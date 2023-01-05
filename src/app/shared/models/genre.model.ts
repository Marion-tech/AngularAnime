export interface IKitsuGenre{
    data : IGenre[];
}

export interface IGenre{
    id : number;
    type : string;
    attributes : {
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug:string;
        description: string;
    }
}