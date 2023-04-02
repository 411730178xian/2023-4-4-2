let ctx;
let points = [[14,5], [13,2], [12,0],[13,-3],[10,-1], [4,-2], [3,-4], [1,-3],[-4,-3], [-6,-2], [-6,-7], [-8,-5], [-9,-2], [-13,-1], [-11,0], [-14,1], [-12,2], [-9,3], [-4,3], [-2,7], [0,3], [3,2], [9,1], [14,5]]; //利用串列設定三個點，(100,100)(150,50)(200,100)
var colors = "bee9e8-62b6cb-1b4965-cae9ff-5fa8d3".split("-").map(a=>"#"+a)
function setup() {  //基礎設定
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 10;
      background(100);
      ctx = canvas.getContext('2d');
      ctx.lineWidth = 10;
      ctx.lineCap = 'round'
      // //------
      // gradientLine(ctx, 280, 100, 260, 40, 'black', 'blue')
      // gradientLine(ctx, 240, 0, 240, -60, 'brown', 'orange')
      // gradientLine(ctx, 200, -20, 80, -40, '#00B4D8', 'lime')

      // gradientLine(ctx, 280, 100, 260, 40, 'black', 'blue')
      // gradientLine(ctx, 12, 0, 12, -3, 'brown', 'orange')
      // gradientLine(ctx, 10, -1, 4, -2, '#00B4D8', 'lime')

      // gradientLine(ctx, 60, 60, 300, 380, 'black', 'blue')
      // gradientLine(ctx, 720, 120, 80, 300, 'brown', 'orange')
      // gradientLine(ctx, 520, 70, 500, 440, '#00b4d8', 'lime')

      // for (let x = 0; x < points.length-1; x++) {
      //   gradientLine(ctx, points[x][0], points[x][1], points[x+1][0], points[x+1][1],'#00b4d8', 'lime')
      // }
      // line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
    }
  }
}


// function draw() {
// background(255);
// translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
// scale(1, -1); //上下翻轉

// for (let h = 0; h < points.length-1; h++)
//  {
//    gradientLine(ctx, points[h][0], points[h][1], points[h+1][0], points[h+1][1], "#00b4d8", "#caf0f8")
//  }
//  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); 把最後一點與第一點的連線
// }

function draw() {
  background(255);
  textWidth(4)
  textSize(50*(mouseX/1000))  //文字大小
  fill(230, 150, 120);  //設定顏色
  text("教科系",mouseX-65,mouseY+10)  //顯示文字
  translate(mouseX,mouseY); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(1, -1); //上下翻轉
  for(k=1;k<6;k++) {
    for (let h = 0; h < points.length - 1; h++) {
      // 從顏色陣列中依序取用顏色
      const c1 = colors[h % colors.length];
      const c2 = colors[(h + 1) % colors.length];
        
      gradientLine(ctx, (points[h][0]*(mouseX/1000))*k, (points[h][1]*(mouseX/1000))*k, (points[h+1][0]*(mouseX/1000))*k, (points[h+1][1]*(mouseX/1000))*k, c1, c2);
    }
    //把最後一點與第一點的連線
    //line(points[points.length - 1][0], points[points.length - 1][1], points[0][0], points[0][1]);
    gradientLine(ctx, (points[points.length-1][0]*(mouseX/1000))*k, (points[points.length-1][1]*(mouseX/1000))*k, (points[0][0]*(mouseX/1000))*k, (points[0][1]*(mouseX/1000))*k, 'lightblue', 'lime')
  }
}



//以下函數主要畫從(x1,y1)~(x2,y2)間，顏色為c1到c2的變化
function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
gradient.addColorStop(0, c1);
gradient.addColorStop(1, c2);
ctx.strokeStyle = gradient;

ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
}