export class LoginBean {
    token: string = '';
    id: string = '';
    name: string = '';
    imageUrl: string = '';
    email: string = '';

    constructor(token: string, id: string, name: string, imageUrl: string, email: string) {
        this.token = token;
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.email = email;
    }

}