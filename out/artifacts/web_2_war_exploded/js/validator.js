function validate() {
    let form = document.querySelector('.js-form');
    let x = document.querySelector('input[name="x"]:checked');
    let y = document.querySelector('input[name="y"]').value;
    let r = document.querySelector('input[name="r"]:checked');

    const errors = form.querySelectorAll('.text-error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }

    if (x == null){
        let err = document.createElement('div');
        err.className = 'text-error';
        err.innerHTML = 'you didn\'t choose a value for x';
        document.getElementById('x').after(err);
        return;
    }

    if (y == null || y === "" || y.replaceAll(" ", "") === "") {
        let err = document.createElement('div');
        err.className = 'text-error';
        err.innerHTML = 'please enter value of y';
        document.getElementById('y').after(err);
        return;
    }

    if (isNaN(y.replace(',', '.'))) {
        let err = document.createElement('div');
        err.className = 'text-error';
        err.innerHTML = 'y should be a number';
        document.getElementById('y').after(err);
        return;
    }

    if (y < -5 || y > 3) {
        let err = document.createElement('div');
        err.className = 'text-error';
        err.innerHTML = 'y should be in range [-5, 3]';
        document.getElementById('y').after(err);
        return;
    }

    if (document.querySelectorAll('input[name="r"]:checked').length > 1){
        let err = document.createElement('div');
        err.className = 'text-error';
        err.innerHTML = 'you have chosen too many options for r';
        document.getElementById('r').after(err);
        return;
    }

    if (document.querySelectorAll('input[name="r"]:checked').length < 1){
        let err = document.createElement('div');
        err.className = 'text-error';
        err.innerHTML = 'you didn\'t choose a value for r';
        document.getElementById('r').after(err);
        return;
    }

    $.ajax({
        url: "control",
        method: "GET",
        dataType: "html",
        data: {
            x: x.value,
            y: y,
            r: r.value,
            currentTime: new Date().toLocaleTimeString()
        },
        success: function (data) {
            document.querySelector("#body").innerHTML = data
            console.log("validation done")
            location.reload()
        },
        error: function (error) {
            console.log(error)
        },
    });
}

function click_validate(x, y, side, scale_of_r) {
    let form = document.querySelector('.js-form');
    let r = document.querySelector('input[name="r"]:checked');

    const errors = form.querySelectorAll('.text-error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }

    if (document.querySelectorAll('input[name="r"]:checked').length > 1){
        let err = document.createElement('div');
        err.className = 'text-error';
        err.innerHTML = 'you have chosen too many options for r';
        document.getElementById('r').after(err);
        return;
    }

    if (document.querySelectorAll('input[name="r"]:checked').length < 1){
        let err = document.createElement('div');
        err.className = 'text-error';
        err.innerHTML = 'you didn\'t choose a value for r';
        document.getElementById('r').after(err);
        return;
    }

    r = r.value
    x = ((x - 20) - side / 2) / scale_of_r * r
    y = (side / 2 - (y - 100)) / scale_of_r * r

    $.ajax({
        url: "control",
        method: "GET",
        dataType: "html",
        data: {
            x: x,
            y: y,
            r: r,
            currentTime: new Date().toLocaleTimeString()
        },
        success: function (data) {
            document.querySelector("#body").innerHTML = data
            console.log("validation done")
            location.reload()
        },
        error: function (error) {
            console.log(error)
        },
    });
}