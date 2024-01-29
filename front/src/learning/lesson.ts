class Lesson {
    private id!: number;
    private name!: string;
    private author!: string;
    private description!: string;
    private content!: string;
    private video_url!: string;
    private rating!: number;
    
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getAuthor(){
        return this.author;
    }

    getDesc(){
        return this.description;
    }

    getContent(){
        return this.content;
    }

    getUrl(){
        return this.video_url;
    }

    getRating(){
        return this.rating;
    }

    // Create some code that adds content to the lesson
    addContent(content: string){
        this.content = content;
    }
}

export {Lesson}