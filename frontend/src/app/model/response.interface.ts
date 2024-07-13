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
export interface Jobs {
    id:number;
    dateOfPost: Date;
    employmentType: number;
    expertiseLevel: number;
    isRemote: boolean;
    isSalaryDisclosed: boolean;
    jobDescription: string;
    jobName: string;
    salaryInfo: string;
    salaryMax: number;
    salaryMin: number;
    timeInfo: string;

}
export interface UserList {






    
}
