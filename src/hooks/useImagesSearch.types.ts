export interface ImageObj {
    id: string;
    urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        small_s3: string;
        thumb: string;
    };
    alt_description: string;
    likes: number;
    user: {
        name: string;
    } 
}

export interface ResponseObj {
    total_pages: number;
    results: ImageObj [];
}
