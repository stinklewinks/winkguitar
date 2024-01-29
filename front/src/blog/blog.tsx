class BlogPost {
    private title!: string;
    private author!: string;
    private slug!: string;
    private description!: string;
    private content!: string;

    __constructor(){

    }

    getTitle(){
        return this.title;
    }

    getAuthor(){
        return this.author;
    }

    getSlug(){
        return this.slug;
    }

    getDesc(){
        return this.description;
    }

    getContent(){
        return this.content;
    }
    
}
export {BlogPost}