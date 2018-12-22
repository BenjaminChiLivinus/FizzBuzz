'use strict';

class Note{
    constructor(){
        this.content = '';
        this.dateCreated = new Date.now();
    }
    
    get dateCreated(){
        return this.dateCreated;
    }

    get content() {
        return this.content;
    }
    set content(value) {
        this.content = value;
    }
}
