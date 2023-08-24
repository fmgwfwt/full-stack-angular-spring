export interface PageDto<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    pageSize: number;
}
export interface Company {
    // Define your company properties here
    id: number;
    companyName: string;
    companyLocation: string;
    companyLogoPath: string;
    companySize: number;
}
