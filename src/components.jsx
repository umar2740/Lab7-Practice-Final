import {hello, feetTOacre, mowTime, airQuality, yee_ha, slope} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already (Thanks Rich!)
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that converts fahrenheit to celsius.
    <h2>Results</h2>
    <p>feetTOacre("84563") == "{feetTOacre(84563)}"</p>
    <p>feetTOacre("94000") == "{feetTOacre(94000)}"</p>
    <p>feetTOacre("367000") == "{feetTOacre(367000)}"</p>
    </section>
}

function Question3(){
    return <section>
3. Given the width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes.
    <h2>Results</h2>
    <p>mowTime("7, 13, 9") == "{mowTime(7, 13, 9)}"</p>
    <p>mowTime("20, 5, 4") == "{mowTime(20, 5, 4)}"</p>
    <p>mowTime("9, 3, 6") == "{mowTime(9, 3, 6)}"</p>
    </section>
}

function Question4(){
    return <section>
4. Compute the air quality given an air quality index.
    <h2>Results</h2>
    <p>airQuality("25") == "(airQuality(25)}"</p>
    <p>airQuality("85") == "(airQuality(85)}"</p>
    <p>airQuality("145") == "(airQuality(145)}"</p>
    <p>airQuality("185") == "(airQuality(185)}"</p>
    <p>airQuality("250") == "(airQuality(250)}"</p>
    <p>airQuality("350") == "(airQuality(350)}"</p>
    </section>
}

function Question5(){
    return <section>
5. yee_ha takes an integer parameter and returns one of the following strings:

- "Yee" if number is evenly divisible by 3
- "Ha" if number is evenly divisible by 7
- "Yee Ha" if number is evenly divisible by both 3 and 7
- "Nada" is number is none of the above
    <h2>Results</h2>
    <p>yee_ha("6") == "{yee_ha(6)}</p>
    <p>yee_ha("4") == "{yee_ha(4)}</p>
    <p>yee_ha("22") == "{yee_ha(22)}</p>
    <p>yee_ha("12") == "{yee_ha(12)}</p>
    </section>
}

function Question6(){
    return<section>
6. Calculate the slope of a line.

- Slope is calculated as rise / run, where rise is distance between y coordinates, and run is distance between x coordinates.
    <h2>results</h2>
    <p>slope("0, 0, 8, 4") == "{slope(0, 0, 8, 4)}"</p>
    <p>slope("6, 3, 4, 4") == "{slope(6, 3, 4, 4)}"</p>
    <p>slope("10, 10, 4, 9") == "{slope(10, 10, 4, 9)}"</p>
    </section>
}

export {Question1, Question2, Question3, Question4, Question5, Question6}