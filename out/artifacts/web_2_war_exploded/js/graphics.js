function draw(side, r, mar) {
    const canvas = document.getElementById("graphics")
    const context = canvas.getContext('2d')

    context.fillStyle = (30, 30, 30)
    context.globalAlpha = 0.15
    context.fillRect(0, 0, side, side)

    context.fillStyle = "blue"
    context.globalAlpha = 0.65
    context.fillRect(side / 2, side / 2, r, -r / 2)

    context.beginPath()
    context.arc(side / 2, side / 2, r, 0, Math.PI / 2)
    context.moveTo(side / 2, side / 2)
    context.lineTo(side / 2 + r, side / 2)
    context.lineTo(side / 2, side / 2 + r)
    context.fill()

    context.beginPath()
    context.moveTo(side / 2, side / 2)
    context.lineTo(side / 2 - r / 2, side / 2)
    context.lineTo(side / 2, side / 2 + r)
    context.fill()

    context.fillStyle = "black"
    context.globalAlpha = 1;
    context.beginPath();
    context.moveTo(0, side / 2);
    context.lineTo(side, side / 2);
    context.moveTo(side / 2, 0);
    context.lineTo(side / 2, side);
    context.stroke();

    context.font = '20px monospace'
    context.fillText('-R', side / 2 - r, side / 2 + mar)
    context.fillText('-R/2', side / 2 - r / 2, side / 2 + mar)
    context.fillText('0', side / 2 - mar * 0.75, side / 2 + mar)
    context.fillText('R/2', side / 2 + r / 2, side / 2 + mar)
    context.fillText('R', side / 2 + r, side / 2 + mar)
    context.fillText('R', side / 2 - mar * 0.75, side / 2 - r)
    context.fillText('R/2', side / 2 - mar * 1.5, side / 2 - r / 2)
    context.fillText('-R/2', side / 2 - mar * 2, side / 2 + r / 2)
    context.fillText('-R', side / 2 - mar * 1.25, side / 2 + r)

    console.log("graphics done")
}

function draw_points(side, scale_of_r)
{
    const canvas = document.getElementById("graphics")
    const context = canvas.getContext('2d')
    const points = document.getElementById("result-table").tBodies[0].rows

    context.globalAlpha = 1;
    context.fillStyle = "red"

    for (let i = 0; i < points.length; i++) {
        let x = parseFloat(points[i].cells[0].innerText.replace(',', '.'))
        let y = parseFloat(points[i].cells[1].innerText.replace(',', '.'))
        let r = parseFloat(points[points.length - 1].cells[2].innerText.replace(',', '.'))

        console.log(x, y, r)

        if (i === points.length - 1) {context.fillStyle = "#70E500"}

        context.beginPath()
        context.arc(side / 2 + x / r * scale_of_r, side / 2 - y / r * scale_of_r, side / 120, 0, Math.PI * 2)
        context.fill()
        context.stroke()
    }
    console.log("points done")
}