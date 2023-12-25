class User {
    private name!: string;
    private username!: string;
    private level!: number;

    private instruments = Array<string>;


    __constructor(){

    }

    getName(){
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }

    getUsername(){
        return this.username;
    }

    setUsername(name: string){
        this.username = name;
    }

    getLevel(){
        return this.level;
    }

    setLevel(level: number){
        this.level = level;
    }

}

class Student extends User {
    private exp!: number;

}

class Instructor extends User {
    private courses!: object;
    
}