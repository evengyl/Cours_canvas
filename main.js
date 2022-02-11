var canvas1  = document.getElementById("demo1")

if(canvas1.getContext)
{
    var ctx = canvas1.getContext("2d")
    ctx.fillStyle = "red"
    ctx.fillRect(20, 30, 100, 50) //x, y, width, height
    
    ctx.fillStyle = "blue"
    ctx.fillRect(30, 30, 55, 50)
}


var exos1  = document.getElementById("exos1")

if(exos1.getContext)
{
    var ctx = exos1.getContext("2d")
    ctx.fillStyle = "black"
    ctx.fillRect(50, 50, 200, 200) //x, y, width, height
    
    ctx.clearRect(75, 75, 150, 150) //rect vide de 150 par 150 a 75px du bord car 50px de départ + 50/2 de chaque coté

    ctx.strokeStyle = "black"
    ctx.strokeRect(90, 90, 120, 120)
}


var exos2  = document.getElementById("exos2")

if(exos2.getContext)
{
    var ctx = exos2.getContext("2d")

    ctx.strokeStyle = "grey"
    ctx.strokeRect(50, 50, 400, 250)

    ctx.fillStyle = "red"
    ctx.fillRect(70, 70, 360, 210)

    ctx.clearRect(175, 155, 150, 40) // _> 400 - 150 = 250 / 2 = 125 + 50 = 175 ///// 250 - 40 = 210 / 2 = 105 + 55 = 155
    ctx.clearRect(230, 100, 40, 150) // _> 400 - 40 = 360 / 2 = 180 + 50 = 230 ///// 250 - 150 = 100 / 2 = 50 + 50

}


var demo2  = document.getElementById("demo2")

if(demo2.getContext)
{
    var ctx = demo2.getContext("2d")

    ctx.beginPath()
    ctx.moveTo(50, 50)
    ctx.lineTo(200,50)
    ctx.lineTo(50,200)
    ctx.lineTo(50,50)
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(250, 100)
    ctx.lineTo(250, 250)
    ctx.lineTo(100, 250)
    ctx.lineTo(250, 100)
    ctx.closePath()

    ctx.stroke()

}



var demo3  = document.getElementById("demo3")

if(demo3.getContext)
{
    var ctx = demo3.getContext("2d")

    ctx.beginPath()
    ctx.moveTo(50,50) // -> ne sère à rien pour rect
    ctx.rect(50, 50, 200, 200)
    ctx.closePath()
    ctx.stroke()

}



var demo4  = document.getElementById("demo4")

if(demo4.getContext)
{
    var ctx = demo4.getContext("2d")

    ctx.beginPath()
    ctx.arc(250, 250, 100, 0, Math.PI*2) // x center, y center
    ctx.moveTo(230, 220)
    ctx.arc(220, 220, 10, 0, Math.PI*2)
    ctx.moveTo(290, 220)
    ctx.arc(280, 220, 10, 0, Math.PI*2)
    ctx.moveTo(330, 250)
    ctx.arc(250, 250, 80, 0, Math.PI)


    ctx.stroke()

}


var demo5  = document.getElementById("demo5")

if(demo5.getContext)
{
    var ctx = demo5.getContext("2d")

    
    ctx.beginPath()
    ctx.lineWidth = "10"
    ctx.moveTo(50, 50)
    ctx.arcTo(380, 50, 380, 380, 150) //premier point en x départ, pareil en y, vers x  et vers y, avec un effet radius de *

    ctx.stroke()

}




var exos3  = document.getElementById("exos3")

if(exos3.getContext)
{
    var ctx = exos3.getContext("2d")

    
    ctx.beginPath()
    ctx.strokeStyle = "grey"
    ctx.moveTo(50, 50)
    ctx.lineTo(200, 200)
    ctx.lineTo(350, 50)
    ctx.stroke()

    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.moveTo(50, 50)
    ctx.arc(50, 50, 5, 0, Math.PI*2)
    ctx.moveTo(200, 200)
    ctx.arc(200, 200, 5, 0, Math.PI*2)
    ctx.moveTo(350,50)
    ctx.arc(350, 50, 5, 0, Math.PI*2)
    ctx.fill()


    ctx.beginPath()
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 5
    ctx.lineJoin = "round"
    ctx.lineCap = "round"
    ctx.moveTo(50,50)
    ctx.arcTo(200, 200, 350, 50, 210)
    ctx.stroke()

}


var exos3_5 = document.getElementById("exos3_5")
if(exos3_5.getContext)
{
    var ctx = exos3_5.getContext("2d")
    ctx.beginPath()
    ctx.fillStyle = "blue"
    ctx.fillRect(50, 50, 400,150)

    ctx.strokeStyle = "pink"
    ctx.lineCap = "round"

    ctx.lineWidth = 10
    ctx.moveTo(200, 100)
    ctx.arc(150, 100, 50, 0, Math.PI)
    ctx.stroke()
    ctx.closePath()
}



var demo6  = document.getElementById("demo6")

if(demo6.getContext)
{
    var ctx = demo6.getContext("2d")

    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.moveTo(50, 50)
    ctx.arc(50, 50, 5, 0, Math.PI*2)

    ctx.moveTo(125, 100)
    ctx.arc(125, 100, 5, 0, Math.PI*2)

    ctx.moveTo(200,50)
    ctx.arc(200, 50, 5, 0, Math.PI*2)

    ctx.fill()


    
    ctx.beginPath()
    ctx.moveTo(50, 50)
    ctx.bezierCurveTo(50, 100, 200, 100, 200, 50)
    ctx.stroke()

}



/*
var demo7  = document.getElementById("demo7")

if(demo7.getContext)
{
    var ctx = demo7.getContext("2d")
    
    var img = new Image(250, 250)
    img.src = './js_logo.jpg'
    img.onload = () => {
        ctx.drawImage(img, 20, 20)
        ctx.drawImage(img, 300, 300, 50, 50)
    }

    
    demo7.onclick = () => {
        window.location = demo7.toDataURL('image/png')
    }


}
*/

var exos4  = document.getElementById("exos4")

if(exos4.getContext)
{
    var ctx = exos4.getContext("2d")
    
    var r = 255
    var g = 255
    var b = 0
    var initX = 20
    var initY = 20
    var cube = 50

    var init_color = `rgb(${r}, ${g}, ${b})`

    ctx.fillStyle = init_color

    for(i = 0; i < 6; i++)
    {
        
        for(j = 0; j < 6; j++)
        {
            initX = initX + cube
            g = g - (255/6)
            init_color = `rgb(${r}, ${g}, ${b})`
            ctx.fillStyle = init_color
            ctx.fillRect(initX, initY, cube, cube)
            ctx.fill()
        }

        initY = initY + cube
        initX = 20
        g = 255
        r = r - (255/6)
        console.log(r)
    }
}



var demo8  = document.getElementById("demo8")

if(demo8.getContext)
{
    var ctx = demo8.getContext("2d")

    var degradeLinear = ctx.createLinearGradient(0, 0, 500, 0)
    degradeLinear.addColorStop(0, 'limegreen')
    degradeLinear.addColorStop(0.5, 'gold')
    degradeLinear.addColorStop(1, 'orange')
    ctx.fillStyle = degradeLinear
    ctx.fillRect(0, 0, 600, 100)

    var degradeRadial = ctx.createRadialGradient(250, 250, 0, 250, 250, 360)
    degradeRadial.addColorStop(0, 'limegreen')
    degradeRadial.addColorStop(0.5, 'gold')
    degradeRadial.addColorStop(1, 'orange')
    ctx.fillStyle = degradeRadial
    ctx.fillRect(0, 200, 600, 100)
}


var demo9  = document.getElementById("demo9")

if(demo9.getContext)
{
    var ctx = demo9.getContext("2d")

    ctx.shadowOffsetX = 2
    ctx.shadowOffsetY = 2
    ctx.shadowBlur = 2
    ctx.shadowColor = "black"

    ctx.font = "40px Times New Roman"
    ctx.fillStyle = "black"
    ctx.fillText("Sample string", 5, 30)
}




var exos5  = document.getElementById("exos5")

if(exos5.getContext)
{
    var ctx = exos5.getContext("2d")

    ctx.fillStyle = "blue"
    ctx.fillRect(100, 100, 200, 200)

    ctx.fillStyle = "red"
    ctx.globalAlpha = 0.5
    ctx.arc(300, 300, 100, 0, Math.PI *2)
    ctx.fill()
}





var demo10  = document.getElementById("demo10")

if(demo10.getContext)
{
    var ctx = demo10.getContext("2d")

    ctx.font = "30px Comic Sans MS"
    ctx.textAlign = "start"
    ctx.textBaseline = "top"

    ctx.strokeText("Ton thé t'a-t-il", 50, 50)

    ctx.font = "50px Comic Sans MS"
    ctx.lineWidth = 3
    ctx.strokeText("ôté ta toux", 50, 75)

    ctx.font = "20px Georgia"
    ctx.textAlign = "right"
    ctx.fillText("...disait la tortue au tatou", 330, 130)
}





var exos6  = document.getElementById("exos6")

if(exos6.getContext)
{
    var ctx = exos6.getContext("2d")

    ctx.font = "30px Comic Sans MS"
    ctx.textAlign = "start"
    ctx.textBaseline = "top"

    ctx.strokeText("Exemple de texte", 10, 10)

    ctx.fillText("Autre exemple", 10, 50)
}




var demo11  = document.getElementById("demo11")

if(demo11.getContext)
{
    var ctx = demo11.getContext("2d")
    
    //ctx.translate(50,50)
    //ctx.scale(1,0.5)
    //ctx.rotate(0.5)

    ctx.strokeStyle = "grey"
    ctx.strokeRect(50, 50, 400, 250)

    ctx.fillStyle = "red"
    ctx.fillRect(70, 70, 360, 210)

    ctx.clearRect(175, 155, 150, 40) // _> 400 - 150 = 250 / 2 = 125 + 50 = 175 ///// 250 - 40 = 210 / 2 = 105 + 55 = 155
    ctx.clearRect(230, 100, 40, 150) // _> 400 - 40 = 360 / 2 = 180 + 50 = 230 ///// 250 - 150 = 100 / 2 = 50 + 50

}


var demo12  = document.getElementById("demo12")

if(demo12.getContext)
{
    var ctx = demo12.getContext("2d")
    
    ctx.fillRect(50, 50, 300, 300)
    ctx.save()

    ctx.fillStyle = "#09F"
    ctx.fillRect(75,75, 250, 250)
    ctx.save()

    ctx.fillStyle = "#FFF"
    ctx.globalAlpha = 0.5
    ctx.fillRect(100, 100, 200, 200)

    ctx.restore()
    ctx.fillRect(125,125,150,150)

    ctx.restore()
    ctx.fillRect(150,150,100,100)
}



var exos7  = document.getElementById("exos7")

if(exos7.getContext)
{
    var ctx = exos7.getContext("2d")
    
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, 100, 50)
    ctx.save()

    ctx.fillStyle = "blue"
    ctx.translate(200,0)
    ctx.rotate(60 * Math.PI / 180)
    ctx.fillRect(0,-100, 350, 150)
    ctx.save()

    ctx.fillStyle = "red"
    ctx.fillRect(100, -65, 150, 75)

    ctx.restore()
    ctx.restore()
    ctx.fillStyle = "yellow"
    ctx.fillRect(245, 80, 150, 75)
}


var demo13  = document.getElementById("demo13")

if(demo13.getContext)
{
    var ctx = demo13.getContext("2d")
    
    ctx.fillStyle = "DodgerBlue"
    ctx.fillRect(50, 50, 150, 150)


    //ctx.globalCompositeOperation = "source-over"
    //ctx.globalCompositeOperation = "source-in"
    //ctx.globalCompositeOperation = "source-out"
    //ctx.globalCompositeOperation = "source-atop"
    //ctx.globalCompositeOperation = "destination-over"
    //ctx.globalCompositeOperation = "destination-in"
    //ctx.globalCompositeOperation = "destination-out"
    //ctx.globalCompositeOperation = "destination-atop"
    //ctx.globalCompositeOperation = "lighter"
    //ctx.globalCompositeOperation = "darken"
    //ctx.globalCompositeOperation = "copy"
    ctx.globalCompositeOperation = "xor"


    ctx.fillStyle = "MediumSeaGreen"
    ctx.arc(200, 200, 75, 0, Math.PI *2)
    ctx.fill()
}


/*
var demo14  = document.getElementById("demo14")

if(demo14.getContext)
{
    var ctx = demo14.getContext("2d")
    
    var img = new Image(250, 250)
    img.src = './js_logo.jpg'

    ctx.beginPath()
    ctx.arc(180, 180, 150, 0, Math.PI*2)
    ctx.closePath()

    ctx.clip()

    img.onload = () => {
        ctx.drawImage(img, 20, 20)
    }
    
}
*/





var demo15  = document.getElementById("demo15")

if(demo15.getContext)
{
    var ctxAnim = demo15.getContext("2d")
    anim()
}



var xTete = 100
var xLeye = 70
var xReye = 130
var xBouche = 100
var vitesse = 3
var canvasW = 500
var canvasH = 500

function anim()
{
    requestAnimationFrame(anim)
    ctxAnim.clearRect(0, 0, 500, 500)

    ctxAnim.beginPath()
    ctxAnim.fillStyle = "yellow"
    ctxAnim.arc(xTete, 100, 100, 0, Math.PI*2) // x center, y center
    ctxAnim.stroke()
    ctxAnim.fill()
    ctxAnim.closePath()

    ctxAnim.beginPath()
    ctxAnim.fillStyle = "white"
    ctxAnim.arc(xLeye, 70, 10, 0, Math.PI*2)
    ctxAnim.stroke()
    ctxAnim.fill()
    ctxAnim.closePath()

    ctxAnim.beginPath()
    ctxAnim.fillStyle = "white"
    ctxAnim.arc(xReye, 70, 10, 0, Math.PI*2)
    ctxAnim.stroke()
    ctxAnim.fill()
    ctxAnim.closePath()

    ctxAnim.beginPath()
    ctxAnim.arc(xBouche, 100, 80, 0, Math.PI)
    ctxAnim.stroke()
    ctxAnim.closePath()

    if(xTete + 100 > canvasW || xTete - 100 < 0)
    {
        vitesse = -vitesse
    }


    xTete = xTete + vitesse
    xLeye = xLeye + vitesse
    xReye = xReye + vitesse
    xBouche = xBouche + vitesse
}
