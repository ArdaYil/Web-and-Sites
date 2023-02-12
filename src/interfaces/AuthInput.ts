

export default interface AuthInput {
    username: string;
    email: string;
    password: string;
    newsletter: boolean;
    termsOfUse: boolean;
    onChange(input: string, value: string | boolean): void;
    [key: string]: any;
}