class Stone{
var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }

    attach(body){
        this.stone.bodyA = body;
    }
    
    fly(){
        this.stone.bodyA = null;
    }
}