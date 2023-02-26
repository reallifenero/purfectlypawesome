/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function timer() {
  return (
    <div>
      <nav class="nav__dark">
        <figure class="nav__logo">
          <span>
            <img
              src="https://easydrawingguides.com/wp-content/uploads/2021/02/Dog-Paw-Print-Step-10.png"
              alt=""
            />
          </span>
          <Link href="/">
            Purrfectly <br /> Pawesome
          </Link>
        </figure>
        <ul class="nav__links">
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/timer">Timer</a>
          </li>
          <li class="login">
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>

      <div class="c__timer">
        <h1 class="timer__title">Be Productive with your Cat 🙂</h1>
        <div class="c__timer__stats">
          <h2>
            Number of Fish: <span id="fish">0</span>
          </h2>
          {/* <h2>Name: {{data.name}}</h2> */}
          <h2>
            Hours worked: <span id="hours">0</span>
          </h2>
          <h2>
            Cycle Number: <span id="cycle">0</span>
          </h2>
        </div>
        <div class="c__timer__controls">
          <button onclick="startCount()">START</button>
          <button onclick="stopCount()">STOP</button>
          <button onclick="reset()">RESET</button>
        </div>

        <div class="c__timer__time">
          <h1 id="timer">00:00:00</h1>
        </div>
      </div>
    </div>
  );
}

export default timer;
