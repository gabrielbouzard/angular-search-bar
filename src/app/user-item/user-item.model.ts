export class UserItem {

    name: string;
    email: string;

    consructor(n: string, e: string) {
	this.name = n;
	this.email = e;
    }

    lookup(query: string): string {
	if (query == this.name) {
	    return this.email;
	} else {
	    return this.name;
	}
    }

    getName(): string {
	return this.name;
    }

    getEmail(): string {
	return this.email;
    }

}
