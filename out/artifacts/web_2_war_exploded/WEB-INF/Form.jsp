<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:useBean id="table" class="beans.TableBean" scope="session" />
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>web-lab-2</title>
    <script
            src="https://code.jquery.com/jquery-3.6.3.min.js"
            integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
            crossorigin="anonymous">
    </script>
</head>
<body>
    <div class="headd">
        <h1 class="info">Labyntsev Gregory, group p32301, var. 321344</h1>
    </div>
    <div id="canvas" class="one_line">
        <canvas id="graphics" height="600px" width="600px"></canvas>
        <script>
            $('#graphics').click(function (e) {
                click_validate(e.pageX, e.pageY, 600, 240)
            })
        </script>
    </div>
    <div id="input_column" class="one_line">
        <form class="js-form">
            <div id="x" class="input">
                <p>Choose the value of x</p>
                <input id="x=-4" name="x" type="radio" value="-4">
                <label for="x=-4">-4</label><br>
                <input id="x=-3" name="x" type="radio" value="-3">
                <label for="x=-3">-3</label><br>
                <input id="x=-2" name="x" type="radio" value="-2">
                <label for="x=-2">-2</label><br>
                <input id="x=-1" name="x" type="radio" value="-1">
                <label for="x=-1">-1</label><br>
                <input id="x=0" name="x" type="radio" value="0">
                <label for="x=0">0</label><br>
                <input id="x=1" name="x" type="radio" value="1">
                <label for="x=1">1</label><br>
                <input id="x=2" name="x" type="radio" value="2">
                <label for="x=2">2</label><br>
                <input id="x=3" name="x" type="radio" value="3">
                <label for="x=3">3</label><br>
                <input id="x=4" name="x" type="radio" value="4">
                <label for="x=4">4</label><br>
            </div>
            <div id="y-inp" class="input">
                <p></p>
                <label for="y">Choose the value of y</label>
                <p></p>
                <input id="y" type="text" name="y" maxlength="15" placeholder="type a number between -5 and 3" class="y">
            </div>
            <br>
            <label for="r">Choose the value of r</label>
            <div id="r" class="input">
                <input id="r=1" name="r" type="checkbox" value="1">
                <label for="r=1">1</label><br>
                <input id="r=2" name="r" type="checkbox" value="2">
                <label for="r=2">2</label><br>
                <input id="r=3" name="r" type="checkbox" value="3">
                <label for="r=3">3</label><br>
                <input id="r=4" name="r" type="checkbox" value="4">
                <label for="r=4">4</label><br>
                <input id="r=5" name="r" type="checkbox" value="5">
                <label for="r=5">5</label><br>
            </div>
            <br>
            <div>
                <input id="submit" type="button" onclick="validate()" value="Send">
            </div>
        </form>
    </div>
    <div class="results-holder">
        <button type="button" id="clear-button" class="button">Clear</button>
        <table id="result-table">
            <thead>
            <tr>
                <th>x value</th>
                <th>y value</th>
                <th>r value</th>
                <th>result</th>
                <th>current time</th>
                <th>execution time (ms)</th>
            </tr>
            </thead>
            <tbody id="body">
            <c:forEach var="row" items="${table.results}">
                <tr>
                    <td>${String.format("%.015f", row.x)}</td>
                    <td>${String.format("%.015f", row.y)}</td>
                    <td>${String.format("%.015f", row.r)}</td>
                    <td>${row.result}</td>
                    <td>${row.currentTime}</td>
                    <td>${row.executionTime}</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
    <style><%@include file="/css/style.css"%></style>
    <script><%@include file="/js/graphics.js"%></script>
    <script><%@include file="/js/validator.js"%></script>
    <script><%@include file="/js/clear.js"%></script>
    <script>draw(600, 240, 25)</script>
    <script>draw_points(600, 240)</script>
</body>
</html>
