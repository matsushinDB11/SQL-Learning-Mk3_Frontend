export class ApiError extends Error {
    message: string;
    name: string;
    constructor(operation: string) {
        super();
        this.message = operation;
        this.name = 'API Error';
    }
}
