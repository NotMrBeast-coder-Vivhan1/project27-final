class Chain{
    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            stiffness:0.1,
            length:200

        }
        this.pointB = b;
        this.chain = Constraint.create(options);
        World.add(world,this.chain)
    }
    
    display(){
        
        var posA = this.chain.bodyA.position;
        var poiB = this.pointB;

        strokeWeight(3);
        line(posA.x,posA.y,poiB.x,poiB.y);}
    }

