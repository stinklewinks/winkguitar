class BackstagePass {
        private rep!: number;
        private level!: number;

        addRep(val: number){
            this.rep += val;
        }

        getRep(){
            return this.rep;
        }

        addLevel(val: number){
            this.level += val;
        }

        getLevel(){
            return this.level;
        }
}

export {BackstagePass}