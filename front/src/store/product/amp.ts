class Amp {
    private tone!: number;
    private eq!: object;
    private presence!: number;
    private gain!: number;
    private master!: number;

    // amp specific
    private powerOn!: boolean;
    private standbyOn!: boolean;
    private pluggedIn!: boolean; 

    getTone(){
        return this.tone;
    }

    getEq(){
        return this.eq;
    }

    setEq(low: number, mid: number, high: number){
        this.eq = {
            low: low,
            mid: mid, 
            high: high
        }
    }

    getPres(){
        return this.presence;
    }

    setPres(val: number){
        this.presence = val;
    }

    getGain(){
        return this.gain;
    }

    getMaster(){
        return this.master;
    }

    isPowerOn(){
        return this.powerOn;
    }

    isStandbyOn(){
        return this.standbyOn;
    }

    isPluggedIn(){
        return this.pluggedIn;
    }
}