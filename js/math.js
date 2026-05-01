export function square(r){
    const points = [];
    for (let i = 0 ; i<360 ; i+=10){
        const rad = i*Math.PI/180;
        const x = r * Math.cos(rad);
        const y = r * Math.sin(rad);
        points.push([x,y]);
    }
    return points;
}
export function cube(symbol){
    const c =[];
    for(let i = 0 ; i<4 ; i++){
        let r = []
        for(let j = 0 ; j<4 ; j++){
            r.push(symbol);
        }
        c.push(r);
    }
    return c ;
}
export const  E = 2.718 ;
