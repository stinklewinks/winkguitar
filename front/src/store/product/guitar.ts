class Guitar {
// Might need to refine how the class is structured to make more dev sense

    private name!: string;
    private model!: string;
    private body!: string;
    private style!: object;
    private fingerboard!: string;
    private frets!: number;
    private fretType!: string;
    private nutMat!: string;
    private nutWidth!: number;
    private inlays!: string;
    private top!: string;
    private finish!: string;
    private hardware!: string;
    private bridge!: string;
    private tailpiece!: string;
    private tuningMachines!: string;
    private pickguard!: string;
    private pickups!: object;
    private strings!: object;
    
    // Retail Specific Details
    private weight!: number; 
    private dimensions!: object;
    private gallery!: object;
    private sku!: string;
    private slug!: string;
    private tags!: Array<string>;


    __constructor(){

    }

    getName(){
        return this.name;
    }

    getModel(){
        return this.model;
    }

    getBody(){
        return this.body;
    }
}